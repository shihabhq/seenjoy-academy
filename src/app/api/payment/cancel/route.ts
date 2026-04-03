import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// TODO: SSLCommerz - This route receives IPN cancel callback from SSLCommerz
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const ipnData = Object.fromEntries(formData.entries()) as Record<string, string>;
    const transactionId = ipnData.tran_id;

    if (transactionId) {
      await prisma.order.update({
        where: { transactionId },
        data: { status: "CANCELLED" },
      });
    }
  } catch (error) {
    console.error("POST /api/payment/cancel error:", error);
  }

  return NextResponse.redirect(
    new URL("/checkout?error=payment_cancelled", request.url),
    302
  );
}
