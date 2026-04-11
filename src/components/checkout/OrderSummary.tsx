import { Calendar, Clock, Globe, User, Mic } from "lucide-react";
import Card from "@/components/ui/Card";
import { COURSE_INFO } from "@/lib/constants";

export default function OrderSummary() {
  return (
    <Card glass className="sticky top-8">
      {/* Course thumbnail placeholder */}
      <div className="aspect-video rounded-xl bg-bg-tertiary border border-border-default flex items-center justify-center mb-5">
        <div className="text-center">
          <Mic className="w-10 h-10 text-accent-gold mx-auto mb-2" />
          <span className="text-text-secondary text-sm">Speak To Win</span>
        </div>
      </div>

      <h2 className="text-text-primary font-bold text-xl mb-1">
        {COURSE_INFO.name}
      </h2>
      <p className="text-text-secondary text-sm mb-5">পাবলিক স্পিকিং মাস্টারক্লাস</p>

      <div className="space-y-3 mb-5">
        <div className="flex items-center gap-3 text-sm text-text-secondary">
          <User className="w-4 h-4 text-accent-gold flex-shrink-0" />
          <span>{COURSE_INFO.mentor}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-text-secondary">
          <Calendar className="w-4 h-4 text-accent-gold flex-shrink-0" />
          <span>{COURSE_INFO.dates}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-text-secondary">
          <Clock className="w-4 h-4 text-accent-gold flex-shrink-0" />
          <span>{COURSE_INFO.time} ({COURSE_INFO.durationPerClass})</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-text-secondary">
          <Globe className="w-4 h-4 text-accent-gold flex-shrink-0" />
          <span>{COURSE_INFO.platform} — লাইভ অনলাইন</span>
        </div>
      </div>

      <div className="border-t border-border-default pt-4 mb-4">
        <div className="flex justify-between items-center text-sm text-text-secondary mb-2">
          <span>নিয়মিত মূল্য</span>
          <span className="line-through">৳{COURSE_INFO.originalPrice}</span>
        </div>
        <div className="flex justify-between items-center text-sm text-text-secondary mb-2">
          <span>আর্লি বার্ড ছাড়</span>
          <span className="text-success">৳{COURSE_INFO.originalPrice - COURSE_INFO.price}</span>
        </div>
      </div>

      <div className="border-t border-border-default pt-4">
        <div className="flex justify-between items-center">
          <span className="text-text-primary font-semibold">মোট পরিমাণ</span>
          <span className="text-3xl font-bold text-white">৳{COURSE_INFO.price}</span>
        </div>
      </div>
    </Card>
  );
}
