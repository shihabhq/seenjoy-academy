import type { Metadata } from "next";
import { Hind_Siliguri, Inter } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Seenjoy Academy — Speak To Win | পাবলিক স্পিকিং মাস্টারক্লাস",
  description:
    "Seenjoy Saha-র সাথে ২ দিনের লাইভ মাস্টারক্লাসে পাবলিক স্পিকিং শিখুন। আত্মবিশ্বাসী বক্তা হয়ে উঠুন মাত্র ৳৯৯৯-এ।",
  openGraph: {
    title: "Speak To Win — পাবলিক স্পিকিং মাস্টারক্লাস",
    description:
      "Seenjoy Saha-র সাথে ২ দিনের লাইভ মাস্টারক্লাসে পাবলিক স্পিকিং শিখুন।",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${hindSiliguri.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
