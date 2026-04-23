export type OrderStatus = "PENDING" | "PAID" | "FAILED" | "CANCELLED";
export type CouponType = "PERCENTAGE" | "AMOUNT";

export interface OrderFormData {
  name: string;
  email: string;
  phone: string;
  couponCode?: string;
}

export interface Order {
  id: string;
  name: string;
  email: string;
  phone: string;
  courseName: string;
  amount: number;
  currency: string;
  status: OrderStatus;
  transactionId: string | null;
  sslSessionKey: string | null;
  paymentMethod: string | null;
  emailSent: boolean;
  couponCode: string | null;
  discountAmount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Coupon {
  id: string;
  code: string;
  type: CouponType;
  value: number;
  maxUses: number | null;
  usedCount: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface AppliedCoupon {
  code: string;
  type: CouponType;
  value: number;
  discountAmount: number;
  finalPrice: number;
}

export interface SSLCommerzInitResponse {
  status: "SUCCESS" | "FAILED";
  GatewayPageURL?: string;
  sessionkey?: string;
  failedreason?: string;
  storeid?: string;
  amount?: number;
  currency?: string;
}

export interface SSLCommerzIPNPayload {
  status: string;
  tran_id: string;
  val_id: string;
  amount: string;
  currency: string;
  bank_tran_id: string;
  store_id: string;
  store_passwd: string;
  verify_sign: string;
  verify_sign_sha2: string;
  [key: string]: string;
}

export interface CourseInfo {
  name: string;
  shortName: string;
  mentor: string;
  dates: string;
  time: string;
  price: number;
  originalPrice: number;
  currency: string;
  platform: string;
  language: string;
  durationPerClass: string;
  totalClasses: number;
  zoomLink: string;
}

export interface LearningOutcome {
  icon: string;
  title: string;
  description: string;
}

export interface CurriculumTopic {
  text: string;
}

export interface CurriculumClass {
  classNumber: string;
  title: string;
  subtitle: string;
  topics: CurriculumTopic[];
}

export interface FAQItem {
  question: string;
  answer: string;
}
