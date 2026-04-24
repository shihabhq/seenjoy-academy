"use client";

import { useState, useEffect } from "react";
import { CAMPAIGN_DEADLINE, CAMPAIGN_PRICE, REGULAR_PRICE } from "@/lib/campaign";

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function compute(): TimeLeft | null {
  const diff = CAMPAIGN_DEADLINE.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
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

  // Pre-mount: assume campaign active (campaign is live at implementation time)
  const isActive = mounted ? timeLeft !== null : true;

  return {
    timeLeft,
    isActive,
    price: isActive ? CAMPAIGN_PRICE : REGULAR_PRICE,
    mounted,
  };
}
