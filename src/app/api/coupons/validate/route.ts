import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { COURSE_INFO } from "@/lib/constants";

function calcDiscount(type: string, value: number, basePrice: number): number {
  if (type === "PERCENTAGE") {
    return Math.floor(basePrice * (value / 100));
  }
  return Math.min(value, basePrice);
}

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    if (!code?.trim()) {
      return NextResponse.json({ error: "কুপন কোড দিন" }, { status: 400 });
    }

    const coupon = await prisma.coupon.findUnique({
      where: { code: code.trim().toUpperCase() },
    });

    if (!coupon) {
      return NextResponse.json({ error: "কুপন কোড সঠিক নয়" }, { status: 404 });
    }

    if (!coupon.isActive) {
      return NextResponse.json({ error: "এই কুপন কোডটি আর সক্রিয় নেই" }, { status: 400 });
    }

    if (coupon.maxUses !== null && coupon.usedCount >= coupon.maxUses) {
      return NextResponse.json({ error: "এই কুপনের ব্যবহার সীমা শেষ হয়ে গেছে" }, { status: 400 });
    }

    const basePrice = COURSE_INFO.price;
    const discountAmount = calcDiscount(coupon.type, coupon.value, basePrice);
    const finalPrice = basePrice - discountAmount;

    return NextResponse.json({
      valid: true,
      code: coupon.code,
      type: coupon.type,
      value: coupon.value,
      discountAmount,
      finalPrice,
    });
  } catch (error) {
    console.error("POST /api/coupons/validate error:", error);
    return NextResponse.json({ error: "সার্ভারে সমস্যা হয়েছে" }, { status: 500 });
  }
}
