import type { SSLCommerzInitResponse, SSLCommerzIPNPayload } from "@/types";

interface OrderData {
  orderId: string;
  amount: number;
  name: string;
  email: string;
  phone: string;
}

// TODO: SSLCommerz - Replace with actual API call to SSLCOMMERZ_INIT_URL
export async function initPayment(orderData: OrderData): Promise<SSLCommerzInitResponse> {
  // TODO: SSLCommerz - Real implementation:
  // const response = await fetch(process.env.SSLCOMMERZ_INIT_URL!, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //   body: new URLSearchParams({
  //     store_id: process.env.SSLCOMMERZ_STORE_ID!,
  //     store_passwd: process.env.SSLCOMMERZ_STORE_PASSWORD!,
  //     total_amount: orderData.amount.toString(),
  //     currency: "BDT",
  //     tran_id: orderData.orderId,
  //     success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/success`,
  //     fail_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/fail`,
  //     cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/cancel`,
  //     cus_name: orderData.name,
  //     cus_email: orderData.email,
  //     cus_phone: orderData.phone,
  //     cus_add1: "Bangladesh",
  //     cus_city: "Dhaka",
  //     cus_country: "Bangladesh",
  //     shipping_method: "NO",
  //     product_name: "Speak To Win Masterclass",
  //     product_category: "Education",
  //     product_profile: "non-physical-goods",
  //   }),
  // });
  // const data = await response.json();
  // return data;

  // TODO: SSLCommerz - MOCK response for development
  return {
    status: "SUCCESS",
    GatewayPageURL: `/success?orderId=${orderData.orderId}`,
    sessionkey: "mock-session-" + Date.now(),
  };
}

// TODO: SSLCommerz - Replace with actual hash validation
export async function validatePayment(
  ipnData: Partial<SSLCommerzIPNPayload>
): Promise<{ isValid: boolean }> {
  // TODO: SSLCommerz - Real implementation:
  // 1. Build the verification string from IPN data fields
  // 2. Hash it with MD5 using store password
  // 3. Compare with ipnData.verify_sign
  // 4. Also call SSLCOMMERZ_VALIDATION_URL with val_id to double-verify

  void ipnData; // TODO: SSLCommerz - Use this in real implementation
  return { isValid: true };
}
