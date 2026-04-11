"use client";

import { motion } from "framer-motion";
import { Mic, User, BookOpen, Shield, Magnet } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { LEARNING_OUTCOMES, SECTIONS } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Mic,
  User,
  BookOpen,
  Shield,
  Magnet,
};

export default function WhatYouLearn() {
  return (
    <section id="what-you-learn" className="py-16 md:py-24 max-w-6xl mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading
          title={SECTIONS.whatYouLearn.title}
          subtitle={SECTIONS.whatYouLearn.subtitle}
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LEARNING_OUTCOMES.map((outcome, index) => {
          const Icon = iconMap[outcome.icon] ?? Mic;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:border-accent-gold/40 hover:shadow-[0_0_20px_rgba(245,166,35,0.08)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent-gold/10 mx-auto flex items-center justify-center mb-4 group-hover:bg-accent-gold/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent-gold" />
                </div>
                <h3 className="text-text-primary text-center font-semibold text-lg mb-2">
                  {outcome.title}
                </h3>
                <p className="text-text-primary/75 text-center leading-relaxed">
                  {outcome.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center mt-10"
      >
        <a
          href="#curriculum"
          className="text-accent-teal hover:text-accent-teal/80 transition-colors font-medium"
        >
          {SECTIONS.whatYouLearn.cta}
        </a>
      </motion.div>
    </section>
  );
}
