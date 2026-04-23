import type { SSLCommerzInitResponse, SSLCommerzIPNPayload } from "@/types";

interface OrderData {
  orderId: string;
  amount: number;
  name: string;
  email: string;
  phone: string;
  transactionId: string;
}

const STORE_ID = process.env.SSLCOMMERZ_STORE_ID;
const STORE_PASSWORD = process.env.SSLCOMMERZ_STORE_PASSWORD;
const IS_SANDBOX = process.env.SSLCOMMERZ_IS_SANDBOX === "true";
const INIT_URL = process.env.SSLCOMMERZ_INIT_URL;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const VALIDATION_URL = process.env.SSLCOMMERZ_VALIDATION_URL;

export async function initPayment(
  data: OrderData,
): Promise<SSLCommerzInitResponse> {
  const searchParams = new URLSearchParams({
    store_id: STORE_ID!,
    store_passwd: STORE_PASSWORD!,
    total_amount: data.amount.toString(),
    currency: "BDT",
    tran_id: data.transactionId,
    product_name: "Speak To Win",
    product_category: "Online Course",
    product_profile: "general",
    cus_name: data.name,
    cus_email: data.email,
    cus_phone: data.phone,
    success_url: `${BASE_URL}/api/payment/success`,
    fail_url: `${BASE_URL}/api/payment/fail`,
    cancel_url: `${BASE_URL}/api/payment/cancel`,
    cus_add1: "Bangladesh",
    cus_city: "Dhaka",
    cus_country: "Bangladesh",
    cus_postcode: "1205",
  });
  try {
    const response = await fetch(INIT_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: searchParams,
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("SSLCommerz initPayment error:", error);
    return { status: "FAILED" };
  }
}


export async function validatePayment(
  ipnData: Partial<SSLCommerzIPNPayload>,
): Promise<{ isValid: boolean }> {
  try {
    const val_id = ipnData.val_id;
    if (!val_id) return { isValid: false };

    const url = `${VALIDATION_URL}?val_id=${val_id}&store_id=${STORE_ID}&store_passwd=${STORE_PASSWORD}&v=1&format=json`;

    const response = await fetch(url);

    const result = await response.json();

    const isValid = result.status === "VALID" || result.status === "VALIDATED";

    return { isValid };
  } catch {
    return { isValid: false };
  }
}
