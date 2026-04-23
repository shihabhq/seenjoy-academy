import nodemailer from "nodemailer";
import type { Order } from "@/types";
import { COURSE_INFO } from "./constants";

// TODO: Configure SMTP credentials in .env.local
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function buildEmailHTML(order: Order): string {
  return `
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Speak To Win Season 01 by Seenjoy Academy</title>
</head>
<body style="margin:0;padding:0;background:#031211;font-family:'Hind Siliguri',Arial,sans-serif;color:#F0F0F5;">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;">

    <div style="text-align:center;margin-bottom:32px;">
      <h1 style="color:#20b2aa;font-size:24px;margin:0;">SEENJOY ACADEMY</h1>
    </div>

    <div style="background:#062422;border:1px solid #0d4744;border-radius:16px;padding:32px;">

      <!-- Greeting -->
      <p style="color:#F0F0F5;font-size:16px;margin:0 0 16px;">প্রিয় <strong>${order.name}</strong>,</p>

      <p style="color:#9CA3AF;font-size:15px;line-height:1.8;margin:0 0 12px;">
        আপনার পেমেন্ট সফলভাবে সম্পন্ন হয়েছে এবং <strong style="color:#F0F0F5;">Seenjoy Academy</strong>-র কমিউনিকেশন এবং পাবলিক স্পিকিং লাইভ মাস্টারক্লাস <strong style="color:#20b2aa;">"Speak To Win"</strong>-এ আপনাকে স্বাগতম জানাতে পেরে আমরা অত্যন্ত আনন্দিত!
      </p>

      <p style="color:#9CA3AF;font-size:15px;line-height:1.8;margin:0 0 24px;">
        আগামী <strong style="color:#F0F0F5;">${COURSE_INFO.dates}</strong>, আমরা দুই দিনব্যাপী একটি দারুণ লার্নিং জার্নি শুরু করতে যাচ্ছি। তবে মূল ক্লাস শুরু করার আগে আমাদের কিছু জরুরি নিয়ম এবং আপনার জন্য একটি বিশেষ টাস্ক রয়েছে।
      </p>

      <!-- Section 1: Community -->
      <div style="margin-bottom:28px;">
        <h2 style="color:#20b2aa;font-size:18px;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #0d4744;">
          ১. জয়েন করুন আমাদের কমিউনিটিতে
        </h2>
        <p style="color:#9CA3AF;font-size:14px;line-height:1.8;margin:0 0 12px;">
          ক্লাসের সব আপডেট এবং আলোচনার জন্য এখনই নিচের গ্রুপে যুক্ত হয়ে যান:
        </p>
        <div style="background:#0a3533;border-radius:10px;padding:16px;">
          <p style="color:#9CA3AF;font-size:14px;margin:0 0 8px;">&#9679; <strong style="color:#F0F0F5;">Private Facebook Group:</strong></p>
          <a href="https://www.facebook.com/share/g/1DmpxZtbAJ/?mibextid=wwXIfr"
             style="color:#20b2aa;font-size:14px;word-break:break-all;">
            https://www.facebook.com/share/g/1DmpxZtbAJ/?mibextid=wwXIfr
          </a>
        </div>
      </div>

      <!-- Section 2: Certificate & Tasks -->
      <div style="margin-bottom:28px;">
        <h2 style="color:#20b2aa;font-size:18px;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #0d4744;">
          ২. ওয়েবিনার সার্টিফিকেট এবং আপনার প্রথম চ্যালেঞ্জ <span style="color:#F5A623;">(গুরুত্বপূর্ণ!)</span>
        </h2>
        <p style="color:#9CA3AF;font-size:14px;line-height:1.8;margin:0 0 12px;">
          আমরা প্রত্যেক অংশগ্রহণকারীকে ওয়েবিনারের সার্টিফিকেট প্রদান করব, তবে সেটি অর্জনের জন্য একটি ছোট শর্ত আছে। আপনাকে program চলাকালীন মোট দুটি ভিডিও সাবমিট করতে হবে।
        </p>

        <!-- First Task -->
        <div style="background:#0a3533;border-radius:10px;padding:16px;margin-bottom:16px;">
          <p style="color:#F0F0F5;font-size:14px;font-weight:600;margin:0 0 10px;">
            প্রথম টাস্ক <span style="color:#9CA3AF;font-weight:400;">(প্রথম ক্লাসের আগে জমা দিতে হবে)</span>:
          </p>
          <p style="color:#9CA3AF;font-size:14px;line-height:1.8;margin:0 0 10px;">
            নিচের যেকোনো একটি বিষয়ের উপর আপনাকে ২ মিনিটের একটি ভিডিও রেকর্ড করতে হবে:
          </p>
          <ul style="color:#9CA3AF;font-size:14px;line-height:1.8;margin:0 0 14px;padding-left:20px;">
            <li>নিজের সম্পর্কে (About yourself) অথবা</li>
            <li>আপনার প্রিয় খেলা (Favorite sports) অথবা</li>
            <li>আপনার প্রিয় ব্যক্তি (Favorite person)</li>
          </ul>

          <p style="color:#F0F0F5;font-size:14px;font-weight:600;margin:0 0 8px;">ভিডিওর নিয়মাবলী:</p>
          <ul style="color:#9CA3AF;font-size:14px;line-height:1.8;margin:0;padding-left:20px;">
            <li>ভিডিওটি হতে হবে একদম র' <strong style="color:#F0F0F5;">(Raw)</strong>। কোনো প্রকার এডিট বা কাট করা যাবে না।</li>
            <li>একটানা ২ মিনিট কথা বলতে হবে।</li>
            <li>ভিডিওতে পর্যাপ্ত আলো (Proper lighting) এবং পরিষ্কার আওয়াজ (Clear sound) থাকতে হবে।</li>
            <li>আপনার সুবিধা অনুযায়ী ভিডিওটি আমাদের <strong style="color:#F0F0F5;">Private Facebook Group</strong>-এ আপলোড করতে পারেন অথবা <strong style="color:#F0F0F5;">Google Drive</strong>-এ আপলোড করে হোয়াটসঅ্যাপে লিঙ্ক শেয়ার করতে পারেন।</li>
            <li>ফেইসবুক গ্রুপে ভিডিও পোস্ট করার সময় ক্যাপশনে অবশ্যই আপনার নাম লিখবেন। আর যদি গুগল ড্রাইভে শেয়ার করেন, তবে ফাইলটি আপনার নিজের নাম দিয়ে রিনেম (Rename) করবেন।</li>
          </ul>
        </div>

        <!-- Second Task -->
        <div style="background:#0a3533;border-radius:10px;padding:16px;margin-bottom:16px;">
          <p style="color:#F0F0F5;font-size:14px;font-weight:600;margin:0 0 8px;">দ্বিতীয় টাস্ক:</p>
          <p style="color:#9CA3AF;font-size:14px;line-height:1.8;margin:0;">
            আমাদের ২ দিনের ক্লাস শেষ হওয়ার পর, ঠিক একইভাবে আরেকটি ভিডিও রেকর্ড করে পরবর্তী ৩ দিনের মধ্যে জমা দিতে হবে। (এই টাস্ক সম্পর্কে বিস্তারিত ক্লাসে জানানো হবে।)
          </p>
        </div>

        <!-- Certificate note -->
        <div style="background:#162a1f;border:1px solid #22C55E;border-radius:10px;padding:14px;">
          <p style="color:#9CA3AF;font-size:13px;line-height:1.8;margin:0;">
            মনে রাখবেন, ভিডিও সাবমিট না করলেও আপনি ক্লাস করতে পারবেন, তবে <strong style="color:#22C55E;">সার্টিফিকেট পেতে হলে দুটি ভিডিও সময়মতো সাবমিট করা বাধ্যতামূলক।</strong>
          </p>
        </div>
      </div>

      <!-- Motivation -->
      <p style="color:#9CA3AF;font-size:14px;line-height:1.8;margin:0 0 24px;">
        আমরা বিশ্বাস করি, ভয় জয় করে কথা বলা শুরু করাই হলো ভালো বক্তা হওয়ার প্রথম ধাপ। আপনার ভিডিওর অপেক্ষায় রইলাম!
      </p>

      <p style="color:#9CA3AF;font-size:14px;line-height:1.8;margin:0 0 16px;">
        যেকোনো প্রয়োজনে আমাদের সাথে যোগাযোগ করতে দ্বিধা করবেন না।
      </p>

      <!-- Contact -->
      <div style="background:#0a3533;border-radius:10px;padding:16px;margin-bottom:24px;">
        <p style="color:#9CA3AF;font-size:14px;margin:0 0 6px;">
          হোয়াটসঅ্যাপ: <strong style="color:#F0F0F5;">+880 1303-133549</strong>
        </p>
        <p style="color:#9CA3AF;font-size:14px;margin:0;">
          ইমেইল: <a href="mailto:contact@seenjoy.academy" style="color:#20b2aa;">contact@seenjoy.academy</a>
        </p>
      </div>

      <!-- Sign-off -->
      <p style="color:#9CA3AF;font-size:14px;line-height:1.8;margin:0;">শুভেচ্ছান্তে,</p>
      <p style="color:#F0F0F5;font-size:15px;font-weight:600;margin:4px 0 2px;">সিনজয় সাহা</p>
      <p style="color:#9CA3AF;font-size:13px;margin:0 0 2px;">ফাউন্ডার এবং সিইও</p>
      <p style="color:#20b2aa;font-size:13px;margin:0;">সিনজয় একাডেমী</p>

    </div>
  </div>
</body>
</html>
  `.trim();
}

export async function sendOrderConfirmation(order: Order): Promise<boolean> {
  try {
    const transporter = createTransporter();

    await transporter.sendMail({
      from: `"Seenjoy Academy" <${process.env.EMAIL_FROM}>`,
      to: order.email,
      subject: "Welcome to Speak To Win Season 01 by Seenjoy Academy",
      html: buildEmailHTML(order),
    });

    return true;
  } catch (error) {
    console.error("Email send failed:", error);
    return false;
  }
}
