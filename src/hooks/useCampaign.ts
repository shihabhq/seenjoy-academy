"use client";

import { useState, useEffect } from "react";
import { CAMPAIGN_END, CAMPAIGN_START, CAMPAIGN_PRICE, REGULAR_PRICE } from "@/lib/campaign";

export function useCampaign() {
  const [isActive, setIsActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const check = () => {
      const now = Date.now();
      setIsActive(now >= CAMPAIGN_START.getTime() && now < CAMPAIGN_END.getTime());
    };
    setMounted(true);
    check();
    const id = setInterval(check, 60000); // re-check every minute
    return () => clearInterval(id);
  }, []);

  const active = mounted ? isActive : false;

  return {
    isActive: active,
    price: active ? CAMPAIGN_PRICE : REGULAR_PRICE,
    mounted,
  };
}
