"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { SECTIONS, COURSE_INFO } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a1040_0%,_#0A0A0F_70%)]" />

      <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-text-primary mb-4"
        >
          {SECTIONS.finalCta.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-text-secondary text-lg mb-8"
        >
          {SECTIONS.finalCta.subtitle}
        </motion.p>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-4">
            <span className="text-text-secondary line-through text-xl">
              ৳{COURSE_INFO.originalPrice}
            </span>
            <span className="bg-accent-gold text-text-on-accent px-3 py-1 rounded-full text-sm font-bold">
              {Math.round(((COURSE_INFO.originalPrice - COURSE_INFO.price) / COURSE_INFO.originalPrice) * 100)}% ছাড়
            </span>
          </div>
          <div className="text-6xl font-bold text-accent-gold">
            ৳{COURSE_INFO.price}
          </div>
          <p className="text-text-secondary text-sm">{SECTIONS.finalCta.currentPriceLabel}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-4"
        >
          <Link href="/checkout">
            <Button size="lg">{SECTIONS.finalCta.ctaText}</Button>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-warning text-sm font-medium"
        >
          {SECTIONS.finalCta.urgency}
        </motion.p>
      </div>
    </section>
  );
}
