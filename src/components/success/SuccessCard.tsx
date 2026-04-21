"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Calendar,
  Clock,
  Monitor,
  Hash,
  Home,
  Mail,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { COURSE_INFO } from "@/lib/constants";
import type { Order } from "@/types";

interface SuccessCardProps {
  order: Order;
}

export default function SuccessCard({ order }: SuccessCardProps) {
  return (
    <div className="text-center max-w-lg mx-auto px-4">
      {/* Animated checkmark */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
        className="flex justify-center mb-6"
      >
        <div className="w-20 h-20 rounded-full bg-success/15 border-2 border-success/50 flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-success" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h1 className="text-3xl font-bold text-text-primary mb-2">
          ভর্তি নিশ্চিত হয়েছে!
        </h1>
        <p className="text-text-primary/75 mb-8">
          অভিনন্দন, {order.name}! আপনার পেমেন্ট সফলভাবে সম্পন্ন হয়েছে।
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="text-left mb-6">
          <h2 className="text-text-primary font-semibold mb-4 text-lg">
            কোর্সের বিবরণ
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Calendar className="w-4 h-4 text-accent-gold shrink-0" />
              <span className="text-text-secondary">তারিখ:</span>
              <span className="text-text-primary">{COURSE_INFO.dates}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Clock className="w-4 h-4 text-accent-gold shrink-0" />
              <span className="text-text-secondary">সময়:</span>
              <span className="text-text-primary">{COURSE_INFO.time}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Monitor className="w-4 h-4 text-accent-gold shrink-0" />
              <span className="text-text-secondary">প্ল্যাটফর্ম:</span>
              <span className="text-text-primary">{COURSE_INFO.platform}</span>
            </div>
            <div className="border-t border-border-default pt-3">
              <div className="flex items-start gap-3 text-sm">
                <Hash className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                <span className="text-text-secondary">ট্রানজেকশন ID:</span>
                <span className="text-accent-gold font-mono break-all">
                  {order.transactionId ?? "N/A"}
                </span>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-accent-gold/5 border border-accent-gold/20 rounded-xl p-4 mb-6 text-sm text-text-primary/75 flex items-start gap-3"
      >
        <Mail className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
        <span>
          আপনার ইমেইলে ({order.email}) একটি নিশ্চিতকরণ পাঠানো হয়েছে। ক্লাসের
          আগের দিন Zoom লিংক পাঠানো হবে।
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link href="/">
          <Button variant="secondary" className="gap-2">
            <Home className="w-4 h-4" />
            হোমপেজে ফিরে যান
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
