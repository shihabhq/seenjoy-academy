import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { initPayment } from "@/lib/sslcommerz";
import { validateEmail, validateBDPhone, generateTransactionId } from "@/lib/utils";
import { COURSE_INFO } from "@/lib/constants";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    // Server-side validation
    if (!name?.trim() || !email?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { error: "সব তথ্য দেওয়া আবশ্যিক" },
        { status: 400 }
      );
    }
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "সঠিক ইমেইল ঠিকানা দিন" },
        { status: 400 }
      );
    }
    if (!validateBDPhone(phone)) {
      return NextResponse.json(
        { error: "সঠিক বাংলাদেশী নম্বর দিন" },
        { status: 400 }
      );
    }

    const transactionId = generateTransactionId();

    // Create order in DB
    const order = await prisma.order.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        courseName: COURSE_INFO.name,
        amount: COURSE_INFO.price,
        currency: COURSE_INFO.currency,
        transactionId,
        status: "PENDING",
      },
    });

    // TODO: SSLCommerz - Initialize payment session
    const paymentSession = await initPayment({
      orderId: order.id,
      amount: order.amount,
      name: order.name,
      email: order.email,
      phone: order.phone,
    });

    if (paymentSession.status !== "SUCCESS") {
      return NextResponse.json(
        { error: "পেমেন্ট শুরু করা সম্ভব হয়নি। আবার চেষ্টা করুন।" },
        { status: 502 }
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
      { status: 500 }
    );
  }
}
