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
  <title>ভর্তি নিশ্চিত — Speak To Win</title>
</head>
<body style="margin:0;padding:0;background:#031211;font-family:'Hind Siliguri',Arial,sans-serif;color:#F0F0F5;">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
    <div style="text-align:center;margin-bottom:32px;">
      <h1 style="color:#20b2aa;font-size:24px;margin:0;">SEENJOY ACADEMY</h1>
    </div>

    <div style="background:#062422;border:1px solid #0d4744;border-radius:16px;padding:32px;">
      <div style="text-align:center;margin-bottom:24px;">
        <h2 style="color:#F0F0F5;font-size:22px;margin:0 0 8px;">ভর্তি নিশ্চিত হয়েছে!</h2>
        <p style="color:#9CA3AF;margin:0;">আপনার যাত্রা শুরু হচ্ছে, ${order.name}</p>
      </div>

      <div style="background:#0a3533;border-radius:12px;padding:20px;margin:24px 0;">
        <h3 style="color:#20b2aa;margin:0 0 16px;font-size:16px;">কোর্সের বিবরণ</h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="color:#9CA3AF;padding:6px 0;font-size:14px;">কোর্স</td>
            <td style="color:#F0F0F5;padding:6px 0;font-size:14px;text-align:right;">Speak To Win মাস্টারক্লাস</td>
          </tr>
          <tr>
            <td style="color:#9CA3AF;padding:6px 0;font-size:14px;">তারিখ</td>
            <td style="color:#F0F0F5;padding:6px 0;font-size:14px;text-align:right;">${COURSE_INFO.dates}</td>
          </tr>
          <tr>
            <td style="color:#9CA3AF;padding:6px 0;font-size:14px;">সময়</td>
            <td style="color:#F0F0F5;padding:6px 0;font-size:14px;text-align:right;">${COURSE_INFO.time}</td>
          </tr>
          <tr>
            <td style="color:#9CA3AF;padding:6px 0;font-size:14px;">প্ল্যাটফর্ম</td>
            <td style="color:#F0F0F5;padding:6px 0;font-size:14px;text-align:right;">${COURSE_INFO.platform}</td>
          </tr>
          <tr>
            <td style="color:#9CA3AF;padding:6px 0;font-size:14px;">ট্রানজেকশন ID</td>
            <td style="color:#20b2aa;padding:6px 0;font-size:14px;text-align:right;font-family:monospace;">${order.transactionId ?? "N/A"}</td>
          </tr>
          <tr>
            <td style="color:#9CA3AF;padding:6px 0;font-size:14px;">পরিশোধিত</td>
            <td style="color:#22C55E;padding:6px 0;font-size:14px;text-align:right;font-weight:600;">৳${order.amount}</td>
          </tr>
        </table>
      </div>

      <div style="background:#0a3533;border:1px solid #20b2aa;border-radius:12px;padding:20px;margin:24px 0;">
        <p style="color:#9CA3AF;margin:0 0 8px;font-size:13px;">Zoom লিংক</p>
        <p style="color:#1a8e88;margin:0;font-size:14px;">ক্লাসের আগের দিন আপনার ইমেইলে Zoom লিংক পাঠানো হবে।</p>
      </div>

      <p style="color:#9CA3AF;font-size:13px;text-align:center;margin:24px 0 0;">
        যেকোনো সমস্যায় সাপোর্টে যোগাযোগ করুন।<br>
        ধন্যবাদ, Seenjoy Academy টিম
      </p>
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
      subject: "Speak To Win — ভর্তি নিশ্চিত হয়েছে",
      html: buildEmailHTML(order),
    });

    return true;
  } catch (error) {
    console.error("Email send failed:", error);
    return false;
  }
}
