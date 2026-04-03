import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";

interface CheckoutPageProps {
  searchParams: Promise<{ error?: string }>;
}

function ErrorBanner({ error }: { error: string }) {
  const messages: Record<string, string> = {
    payment_failed: "পেমেন্ট ব্যর্থ হয়েছে। আবার চেষ্টা করুন।",
    payment_cancelled: "পেমেন্ট বাতিল করা হয়েছে।",
  };
  const message = messages[error] ?? "কিছু একটা সমস্যা হয়েছে।";
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 mb-6">
      <div className="bg-error/10 border border-error/30 rounded-xl px-5 py-3">
        <p className="text-error text-sm">{message}</p>
      </div>
    </div>
  );
}

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const { error } = await searchParams;

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Simple nav */}
      <nav className="border-b border-border-default bg-bg-secondary/50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-accent-gold font-bold text-lg tracking-wider"
          >
            SEENJOY ACADEMY
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            কোর্স পেজে ফিরুন
          </Link>
        </div>
      </nav>

      <main className="py-12">
        {error && <ErrorBanner error={error} />}

        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <CheckoutForm />
            <OrderSummary />
          </div>
        </div>
      </main>
    </div>
  );
}
