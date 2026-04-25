import type { Metadata } from "next";
import { Hind_Siliguri, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
  icons: {
    icon: "/assets/main-logo.png",
    apple: "/assets/main-logo.png",
  },
  title: "Speak To Win — Live Public Speaking Masterclass by Seenjoy Saha",
  description:
    "Join Seenjoy Saha's 2-day live Zoom masterclass and master public speaking, storytelling, and powerful communication. Limited seats available.",
  keywords: [
    "public speaking course Bangladesh",
    "communication skills masterclass",
    "Seenjoy Saha",
    "Seenjoy Academy",
    "Speak To Win",
    "online course Bangladesh",
    "public speaking Bangla",
    "storytelling course",
  ],
  authors: [{ name: "Seenjoy Saha" }],
  creator: "Seenjoy Academy",
  metadataBase: new URL("https://seenjoy.academy"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Speak To Win — Live Public Speaking Masterclass by Seenjoy Saha",
    description:
      "Master public speaking, storytelling, and communication in just 2 live Zoom sessions with Seenjoy Saha.",
    url: "https://seenjoy.academy",
    siteName: "Seenjoy Academy",
    images: [
      {
        url: "/assets/main-logo.png",
        width: 1200,
        height: 630,
        alt: "Speak To Win Masterclass — Seenjoy Academy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Speak To Win — Live Public Speaking Masterclass",
    description:
      "Master public speaking, storytelling, and communication in just 2 live Zoom sessions with Seenjoy Saha.",
    images: ["/assets/main-logo.png"],
    creator: "@seenjoysaha",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
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
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L2ZG7M318Q"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L2ZG7M318Q');
          `}
        </Script>
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '4516157161947347');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=4516157161947347&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
