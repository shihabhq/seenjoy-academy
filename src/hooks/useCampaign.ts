"use client";

import { useState, useEffect } from "react";
import { CAMPAIGN_END, CAMPAIGN_START, CAMPAIGN_PRICE, REGULAR_PRICE } from "@/lib/campaign";

export interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

function compute(): TimeLeft | null {
  const now = Date.now();
  if (now < CAMPAIGN_START.getTime() || now >= CAMPAIGN_END.getTime()) return null;
  const diff = CAMPAIGN_END.getTime() - now;
  return {
    hours: Math.floor(diff / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export function useCampaign() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(compute());
    const id = setInterval(() => setTimeLeft(compute()), 1000);
    return () => clearInterval(id);
  }, []);

  // Pre-mount: check if we're in the campaign window using server time approximation
  const isActive = mounted ? timeLeft !== null : false;

  return {
    timeLeft,
    isActive,
    price: isActive ? CAMPAIGN_PRICE : REGULAR_PRICE,
    mounted,
  };
}
