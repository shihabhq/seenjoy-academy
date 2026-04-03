"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { validateEmail, validateBDPhone } from "@/lib/utils";
import { COURSE_INFO } from "@/lib/constants";
import type { OrderFormData } from "@/types";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  submit?: string;
}

export default function CheckoutForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<OrderFormData>({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  function validateField(name: keyof OrderFormData, value: string): string | undefined {
    if (!value.trim()) {
      const labels: Record<keyof OrderFormData, string> = {
        name: "নাম",
        email: "ইমেইল",
        phone: "ফোন নম্বর",
      };
      return `${labels[name]} দেওয়া আবশ্যিক`;
    }
    if (name === "email" && !validateEmail(value)) {
      return "সঠিক ইমেইল ঠিকানা দিন";
    }
    if (name === "phone" && !validateBDPhone(value)) {
      return "সঠিক বাংলাদেশী নম্বর দিন (01XXXXXXXXX)";
    }
    return undefined;
  }

  function handleBlur(name: keyof OrderFormData) {
    const error = validateField(name, formData[name]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  }

  function handleChange(name: keyof OrderFormData, value: string) {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function validateAll(): boolean {
    const newErrors: FormErrors = {};
    (Object.keys(formData) as (keyof OrderFormData)[]).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateAll()) return;

    setLoading(true);
    setErrors((prev) => ({ ...prev, submit: undefined }));

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "অনুরোধ ব্যর্থ হয়েছে");
      }

      router.push(data.paymentUrl);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।";
      setErrors((prev) => ({ ...prev, submit: message }));
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <h2 className="text-text-primary font-bold text-2xl mb-1">
          আপনার তথ্য দিন
        </h2>
        <p className="text-text-secondary text-sm">
          নিচের ফর্মটি পূরণ করুন এবং পেমেন্টে এগিয়ে যান
        </p>
      </div>

      <Input
        label="পূর্ণ নাম"
        placeholder="আপনার নাম লিখুন"
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
        onBlur={() => handleBlur("name")}
        error={errors.name}
        autoComplete="name"
      />

      <Input
        label="ইমেইল ঠিকানা"
        type="email"
        placeholder="example@gmail.com"
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
        onBlur={() => handleBlur("email")}
        error={errors.email}
        autoComplete="email"
      />

      <Input
        label="মোবাইল নম্বর"
        type="tel"
        placeholder="01XXXXXXXXX"
        hint="বাংলাদেশী নম্বর (01 দিয়ে শুরু, ১১ সংখ্যা)"
        value={formData.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
        onBlur={() => handleBlur("phone")}
        error={errors.phone}
        autoComplete="tel"
      />

      {errors.submit && (
        <div className="bg-error/10 border border-error/30 rounded-xl px-4 py-3">
          <p className="text-error text-sm">{errors.submit}</p>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        loading={loading}
        className="w-full mt-2"
      >
        পেমেন্ট করুন — ৳{COURSE_INFO.price}
      </Button>

      <div className="flex items-center justify-center gap-2 text-text-secondary text-xs">
        <Lock className="w-3.5 h-3.5" />
        <span>SSLCommerz দ্বারা সুরক্ষিত পেমেন্ট — আপনার তথ্য সম্পূর্ণ নিরাপদ</span>
      </div>
    </form>
  );
}
