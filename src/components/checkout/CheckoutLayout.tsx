"use client";

import { useState } from "react";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";
import type { AppliedCoupon } from "@/types";

export default function CheckoutLayout() {
  const [appliedCoupon, setAppliedCoupon] = useState<AppliedCoupon | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <div className="order-2 md:order-1">
        <CheckoutForm appliedCoupon={appliedCoupon} onCouponChange={setAppliedCoupon} />
      </div>
      <div className="order-1 md:order-2">
        <OrderSummary appliedCoupon={appliedCoupon} />
      </div>
    </div>
  );
}
