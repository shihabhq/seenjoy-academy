"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, Globe, Timer, Users, Star, Mic2 } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { COURSE_INFO, HERO, MENTOR_INFO } from "@/lib/constants";

function HeroImage() {
  return (
    <div className="relative w-full max-w-[340px] md:max-w-[400px]">
      {/* Ambient glow behind image */}
      <div className="absolute inset-4 rounded-3xl bg-accent-gold/20 blur-3xl" />

      {/* Image frame */}
      <div className="relative rounded-3xl overflow-hidden border border-accent-gold/25 shadow-[0_0_60px_rgba(245,166,35,0.12)]">
        {/* Top accent bar */}
        <div className="absolute top-0 inset-x-0 h-0.5 bg-linear-to-r from-transparent via-accent-gold to-transparent z-10" />

        {/* Instructor image — replace /images/instructor.svg with a real photo */}
        <div className="relative aspect-4/5 w-full bg-bg-secondary">
          <Image
            src="/images/instructor.png"
            alt={`${MENTOR_INFO.name} — Speak To Win মাস্টারক্লাস`}
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 768px) 340px, 400px"
          />

          {/* Bottom name plate */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-bg-primary/95 via-bg-primary/60 to-transparent px-5 pt-10 pb-5">
            <p className="text-text-primary font-bold text-lg leading-tight">
              {MENTOR_INFO.name}
            </p>
            <p className="text-accent-gold text-xs mt-0.5 font-medium">
              পাবলিক স্পিকার ও কন্টেন্ট ক্রিয়েটর
            </p>
          </div>
        </div>
      </div>

      {/* ── Floating chips ── */}

      {/* Top-left: Students */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute -top-4 -left-4 flex items-center gap-2 bg-bg-secondary/95 backdrop-blur-sm border border-border-default rounded-2xl px-3 py-2 shadow-xl"
      >
        <div className="w-8 h-8 rounded-xl bg-accent-gold/15 flex items-center justify-center flex-shrink-0">
          <Users className="w-4 h-4 text-accent-gold" />
        </div>
        <div>
          <p className="text-text-primary text-xs font-bold leading-none">৫০০+</p>
          <p className="text-text-secondary text-[10px] leading-none mt-0.5">শিক্ষার্থী</p>
        </div>
      </motion.div>

      {/* Top-right: Rating */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
        className="absolute -top-4 -right-4 flex items-center gap-2 bg-bg-secondary/95 backdrop-blur-sm border border-border-default rounded-2xl px-3 py-2 shadow-xl"
      >
        <div className="w-8 h-8 rounded-xl bg-warning/15 flex items-center justify-center flex-shrink-0">
          <Star className="w-4 h-4 text-warning" fill="currentColor" />
        </div>
        <div>
          <p className="text-text-primary text-xs font-bold leading-none">৪.৯ / ৫</p>
          <p className="text-text-secondary text-[10px] leading-none mt-0.5">রেটিং</p>
        </div>
      </motion.div>

      {/* Bottom-right: Live class */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute -bottom-4 -right-4 flex items-center gap-2 bg-bg-secondary/95 backdrop-blur-sm border border-border-default rounded-2xl px-3 py-2 shadow-xl"
      >
        <div className="w-8 h-8 rounded-xl bg-error/15 flex items-center justify-center flex-shrink-0">
          <Mic2 className="w-4 h-4 text-error" />
        </div>
        <div>
          <p className="text-text-primary text-xs font-bold leading-none">লাইভ ক্লাস</p>
          <p className="text-text-secondary text-[10px] leading-none mt-0.5">Zoom-এ</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,_#1a1040_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_50%,_#0d2040_0%,_transparent_60%)]" />
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #F5A623 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-12 items-center">

          {/* ── Left: Text ── */}
          <div className="order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5"
            >
              <Badge variant="accent" className="text-sm px-4 py-1.5">
                {HERO.badge}
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold text-text-primary leading-[1.15] mb-4"
            >
              কথায় জিতুন,{" "}
              <span className="relative text-accent-gold">
                জীবনে
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-gold to-transparent rounded-full" />
              </span>{" "}
              এগিয়ে যান
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-text-secondary mb-4 leading-relaxed"
            >
              {HERO.subHeadline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-text-secondary leading-relaxed mb-7 text-base"
            >
              {HERO.description}
            </motion.p>

            {/* Info badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              <Badge icon={<Calendar className="w-3.5 h-3.5" />} className="text-xs">
                {COURSE_INFO.dates}
              </Badge>
              <Badge icon={<Clock className="w-3.5 h-3.5" />} className="text-xs">
                {COURSE_INFO.time}
              </Badge>
              <Badge icon={<Globe className="w-3.5 h-3.5" />} className="text-xs">
                {COURSE_INFO.platform} — অনলাইন
              </Badge>
              <Badge icon={<Timer className="w-3.5 h-3.5" />} className="text-xs">
                {COURSE_INFO.durationPerClass} / ক্লাস
              </Badge>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-5"
            >
              <Link href="/checkout">
                <Button size="lg" className="w-full sm:w-auto">
                  {HERO.ctaText}
                </Button>
              </Link>
              <a
                href="#curriculum"
                className="text-accent-teal hover:text-accent-teal/80 transition-colors text-sm font-medium underline-offset-4 hover:underline"
              >
                কোর্স সম্পর্কে জানুন ↓
              </a>
            </motion.div>

            {/* Urgency */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center gap-2 text-warning text-sm font-medium"
            >
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-warning flex-shrink-0"
              />
              {HERO.urgency}
            </motion.p>
          </div>

          {/* ── Right: Instructor image ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end pt-6 pb-6"
          >
            <HeroImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
