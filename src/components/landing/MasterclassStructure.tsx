"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Pencil, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { CURRICULUM, SECTIONS, COURSE_INFO } from "@/lib/constants";

export default function MasterclassStructure() {
  return (
    <section
      id="curriculum"
      className="py-16 md:py-24 bg-bg-secondary/30"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title={SECTIONS.curriculum.title}
            subtitle={SECTIONS.curriculum.subtitle}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {CURRICULUM.map((cls, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card accentBorder="top" className="h-full">
                <div className="text-accent-gold text-sm font-bold uppercase tracking-widest mb-2">
                  {cls.classNumber}
                </div>
                <h3 className="text-text-primary font-bold text-xl mb-1">
                  {cls.title}
                </h3>
                <p className="text-text-primary/70 text-sm mb-5">{cls.subtitle}</p>
                <ul className="space-y-3">
                  {cls.topics.map((topic, topicIndex) => (
                    <li
                      key={topicIndex}
                      className="flex items-start gap-3 text-text-primary/80"
                    >
                      <CheckCircle className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{topic.text}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Homework note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-accent-gold/5 border border-accent-gold/20 rounded-xl p-5 flex items-start gap-4 mb-8"
        >
          <Pencil className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
          <p className="text-text-primary/75 leading-relaxed">
            {SECTIONS.curriculum.homeworkNote}
          </p>
        </motion.div>

        {/* Platform badges + CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-wrap gap-3">
            <Badge>{SECTIONS.curriculum.platformNote}</Badge>
            <Badge variant="accent">{COURSE_INFO.totalClasses} ক্লাস</Badge>
          </div>
          <Link href="/checkout">
            <Button>{SECTIONS.curriculum.ctaText}</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
