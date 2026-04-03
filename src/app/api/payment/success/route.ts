import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { validatePayment } from "@/lib/sslcommerz";
import { sendOrderConfirmation } from "@/lib/email";
import type { Order } from "@/types";

// TODO: SSLCommerz - This route receives IPN (Instant Payment Notification) from SSLCommerz
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const ipnData = Object.fromEntries(formData.entries()) as Record<string, string>;

    // TODO: SSLCommerz - Validate payment hash
    const { isValid } = await validatePayment(ipnData);

    if (!isValid) {
      return NextResponse.redirect(
        new URL("/checkout?error=payment_failed", request.url),
        302
      );
    }

    const transactionId = ipnData.tran_id;
    if (!transactionId) {
      return NextResponse.redirect(
        new URL("/checkout?error=payment_failed", request.url),
        302
      );
    }

    // Find and update order
    const order = await prisma.order.update({
      where: { transactionId },
      data: {
        status: "PAID",
        paymentMethod: ipnData.card_type ?? "UNKNOWN",
      },
    });

    // Send confirmation email
    if (!order.emailSent) {
      const emailSent = await sendOrderConfirmation(order as unknown as Order);
      if (emailSent) {
        await prisma.order.update({
          where: { id: order.id },
          data: { emailSent: true },
        });
      }
    }

    return NextResponse.redirect(
      new URL(`/success?orderId=${order.id}`, request.url),
      302
    );
  } catch (error) {
    console.error("POST /api/payment/success error:", error);
    return NextResponse.redirect(
      new URL("/checkout?error=payment_failed", request.url),
      302
    );
  }
}
