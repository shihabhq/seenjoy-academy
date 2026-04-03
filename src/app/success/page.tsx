import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import SuccessCard from "@/components/success/SuccessCard";
import type { Order } from "@/types";

interface SuccessPageProps {
  searchParams: Promise<{ orderId?: string }>;
}

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const { orderId } = await searchParams;

  if (!orderId) {
    notFound();
  }

  let order: Order | null = null;

  try {
    order = await prisma.order.findUnique({
      where: { id: orderId },
    }) as Order | null;
  } catch {
    notFound();
  }

  if (!order) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center py-20">
      <SuccessCard order={order} />
    </div>
  );
}
