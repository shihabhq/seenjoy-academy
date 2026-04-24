import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { initPayment } from "@/lib/sslcommerz";
import {
  validateEmail,
  generateTransactionId,
} from "@/lib/utils";
import { COURSE_INFO } from "@/lib/constants";
import { getActivePrice } from "@/lib/campaign";

function calcDiscount(type: string, value: number, basePrice: number): number {
  if (type === "PERCENTAGE") {
    return Math.floor(basePrice * (value / 100));
  }
  return Math.min(value, basePrice);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, couponCode } = body;

    // Server-side validation
    if (!name?.trim() || !email?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { error: "সব তথ্য দেওয়া আবশ্যিক" },
        { status: 400 },
      );
    }
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "সঠিক ইমেইল ঠিকানা দিন" },
        { status: 400 },
      );
    }
    if (phone.trim().length < 5) {
      return NextResponse.json(
        { error: "সঠিক ফোন নম্বর দিন" },
        { status: 400 },
      );
    }

    // Determine active price (campaign or regular)
    const activePrice = getActivePrice();

    // Resolve coupon server-side
    let discountAmount = 0;
    let resolvedCouponCode: string | null = null;

    if (couponCode?.trim()) {
      const coupon = await prisma.coupon.findUnique({
        where: { code: couponCode.trim().toUpperCase() },
      });

      if (
        coupon &&
        coupon.isActive &&
        (coupon.maxUses === null || coupon.usedCount < coupon.maxUses)
      ) {
        discountAmount = calcDiscount(
          coupon.type,
          coupon.value,
          activePrice,
        );
        resolvedCouponCode = coupon.code;
      }
    }

    // Duplicate enrollment check
    const existingOrder = await prisma.order.findFirst({
      where: {
        status: "PAID",
        OR: [{ email: email.trim().toLowerCase() }, { phone: phone.trim() }],
      },
    });

    if (existingOrder) {
      return NextResponse.json(
        {
          error: "এই ইমেইল বা হোয়াটসঅ্যাপ নম্বর দিয়ে ইতিমধ্যে ভর্তি হয়েছেন",
        },
        { status: 409 },
      );
    }

    const finalAmount = activePrice - discountAmount;
    const transactionId = generateTransactionId();

    // Create order in DB
    const order = await prisma.order.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        courseName: COURSE_INFO.name,
        amount: finalAmount,
        currency: COURSE_INFO.currency,
        transactionId,
        status: "PENDING",
        couponCode: resolvedCouponCode,
        discountAmount,
      },
    });

    // Increment coupon usage
    if (resolvedCouponCode) {
      await prisma.coupon.update({
        where: { code: resolvedCouponCode },
        data: { usedCount: { increment: 1 } },
      });
    }

    const paymentSession = await initPayment({
      orderId: order.id,
      amount: order.amount,
      name: order.name,
      email: order.email,
      transactionId: transactionId,
      phone: order.phone,
    });

    if (paymentSession.status !== "SUCCESS") {
      await prisma.order.update({
        where: { id: order.id },
        data: { status: "FAILED" },
      });
      return NextResponse.json(
        { error: "পেমেন্ট শুরু করা সম্ভব হয়নি। আবার চেষ্টা করুন।" },
        { status: 502 },
      );
    }

    // Save session key from SSLCommerz
    await prisma.order.update({
      where: { id: order.id },
      data: { sslSessionKey: paymentSession.sessionkey },
    });

    return NextResponse.json({
      orderId: order.id,
      paymentUrl: paymentSession.GatewayPageURL,
    });
  } catch (error) {
    console.error("POST /api/orders error:", error);
    return NextResponse.json(
      { error: "সার্ভারে সমস্যা হয়েছে। আবার চেষ্টা করুন।" },
      { status: 500 },
    );
  }
}
