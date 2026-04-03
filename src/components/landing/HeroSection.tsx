"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, Globe, Timer, Play } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { COURSE_INFO, HERO } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a1040_0%,_#0A0A0F_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#0d2040_0%,_transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-28 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex justify-center"
        >
          <Badge variant="accent" className="text-base px-4 py-2">
            {HERO.badge}
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-4 leading-tight whitespace-pre-line"
        >
          {HERO.headline.split(",")[0]},<br />
          <span className="text-accent-gold">{HERO.headline.split(",")[1]}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-text-secondary mb-4"
        >
          {HERO.subHeadline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed text-base md:text-lg"
        >
          {HERO.description}
        </motion.p>

        {/* Info badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          <Badge icon={<Calendar className="w-4 h-4" />}>{COURSE_INFO.dates}</Badge>
          <Badge icon={<Clock className="w-4 h-4" />}>{COURSE_INFO.time}</Badge>
          <Badge icon={<Globe className="w-4 h-4" />}>{COURSE_INFO.platform} — অনলাইন</Badge>
          <Badge icon={<Timer className="w-4 h-4" />}>{COURSE_INFO.durationPerClass} / ক্লাস</Badge>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-4"
        >
          <Link href="/checkout">
            <Button size="lg" className="text-base">
              {HERO.ctaText}
            </Button>
          </Link>
        </motion.div>

        {/* Urgency */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-warning text-sm font-medium"
        >
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {HERO.urgency}
          </motion.span>
        </motion.p>

        {/* Video placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-14 max-w-2xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl bg-bg-tertiary border border-border-default overflow-hidden flex items-center justify-center group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent" />
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-accent-gold/20 border-2 border-accent-gold/50 flex items-center justify-center group-hover:bg-accent-gold/30 transition-colors">
                <Play className="w-7 h-7 text-accent-gold ml-1" fill="currentColor" />
              </div>
              <span className="text-text-secondary text-sm">{HERO.videoLabel}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
