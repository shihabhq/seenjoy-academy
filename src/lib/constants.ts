import type { CourseInfo, LearningOutcome, CurriculumClass, FAQItem } from "@/types";

export const COURSE_INFO: CourseInfo = {
  name: "Speak To Win",
  shortName: "STW",
  mentor: "Seenjoy Saha",
  dates: "১৫ ও ১৬ মে, ২০২৬",
  time: "রাত ৮:০০ টা",
  price: 999,
  originalPrice: 1999,
  currency: "BDT",
  platform: "Zoom",
  language: "বাংলা",
  durationPerClass: "২.৫ ঘন্টা",
  totalClasses: 2,
  zoomLink: "https://zoom.us/j/placeholder",
};

export const LEARNING_OUTCOMES: LearningOutcome[] = [
  {
    icon: "Mic",
    title: "আত্মবিশ্বাসী বক্তৃতা",
    description: "কিভাবে নিজের ভয়েজকে সঠিকভাবে ব্যবহার করা হয়।",
  },
  {
    icon: "User",
    title: "শ্রোতাকে মুগ্ধ করা",
    description: "কীভাবে নিজের শারীরিক ভাষাকে আকর্ষণীয় করে তোলা যায়।",
  },
  {
    icon: "BookOpen",
    title: "বক্তৃতার কাঠামো",
    description: "সুন্দরভাবে গল্প বলা ও বক্তব্য গঠন করার নিয়ম জানবেন।",
  },
  {
    icon: "Shield",
    title: "স্টেজ ফ্রাইট জয়",
    description: "কিভাবে মানুষের সামনে দাঁড়িয়ে কথা বলার ভয়কে জয় করতে হয়।",
  },
  {
    icon: "Magnet",
    title: "প্রভাব ও নেতৃত্ব",
    description: "আরও থাকছে কোন জিনিসগুলো করলে মানুষ আপনার কথা শুনবেই",
  },
];

export const CURRICULUM: CurriculumClass[] = [
  {
    classNumber: "ক্লাস ০১",
    title: "Build The Foundation",
    subtitle: "মাইন্ডসেট, মৌখিক ভিত্তি ও আত্মবিশ্বাস",
    topics: [
      { text: "মাইন্ডসেট পরিবর্তন — চিন্তাভাবনার খোরাক" },
      { text: "মৌখিক ভিত্তি ও টোনালিটি (কথা বলার স্বর ও ছন্দ)" },
      { text: "নন-ভার্বাল কমিউনিকেশন ও বডি ল্যাঙ্গুয়েজ" },
      { text: "মঞ্চ ও দৈনন্দিন কথোপকথনে আত্মবিশ্বাস গড়ে তোলা" },
    ],
  },
  {
    classNumber: "ক্লাস ০২",
    title: "Command Any Stage",
    subtitle: "গল্প, কাঠামো, প্রভাব ও স্মরণীয় উপস্থিতি",
    topics: [
      { text: "মাস্টার স্টোরিটেলিং" },
      { text: "সঠিক বক্তৃতার কাঠামো (Speech Structures)" },
      { text: "কথার মাধ্যমে বিশ্বাস ও প্রভাব ফেলা" },
      { text: "ভালো হিউমর ডেভেলপ করা।" },
      { text: "শ্রোতার মনে স্মরণীয় থেকে যাওয়া" },
    ],
  },
];

export const MENTOR_INFO = {
  name: "Seenjoy Saha",
  tagline: "পাবলিক স্পিকার, কন্টেন্ট ক্রিয়েটর ও মোটিভেশনাল স্পিকার",
  credentials: [
    "YouTube-এ ৫ লক্ষ+ সাবস্ক্রাইবার সহ শীর্ষস্থানীয় বাংলাদেশী কন্টেন্ট ক্রিয়েটর",
    "জাতীয় ও আন্তর্জাতিক মঞ্চে শত শত বক্তৃতার অভিজ্ঞতা",
    "হাজারো তরুণকে আত্মবিশ্বাসী বক্তা হিসেবে গড়ে তুলেছেন",
  ],
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "এই কোর্সটি কাদের জন্য?",
    answer:
      "যারা সরকারি/বেসরকারি চাকরির ইন্টারভিউ, প্রেজেন্টেশন, বা যেকোনো সামাজিক পরিস্থিতিতে আত্মবিশ্বাসের সাথে কথা বলতে চান তাদের জন্য। শিক্ষার্থী, চাকরিজীবী, উদ্যোক্তা — সবার জন্যই উপযুক্ত।",
  },
  {
    question: "ক্লাসগুলো কি রেকর্ড করা থাকবে?",
    answer:
      "হ্যাঁ, লাইভ ক্লাসের রেকর্ডিং পরবর্তী ৭ দিন পাওয়া যাবে। তবে লাইভ ক্লাসে অংশগ্রহণ করলে সরাসরি প্র্যাকটিস ও ফিডব্যাক পাওয়ার সুযোগ থাকবে।",
  },
  {
    question: "পেমেন্ট করার পর কী হবে?",
    answer:
      "পেমেন্ট সফল হলে আপনার ইমেইলে একটি নিশ্চিতকরণ বার্তা পাঠানো হবে। ক্লাসের আগের দিন Zoom লিংক পাঠানো হবে।",
  },
  {
    question: "কোর্সের ফি কি রিফান্ডযোগ্য?",
    answer:
      "ক্লাস শুরুর ৪৮ ঘন্টা আগ পর্যন্ত রিফান্ডের আবেদন করা যাবে। বিস্তারিত জানতে সাপোর্টে যোগাযোগ করুন।",
  },
  {
    question: "আমার ইন্টারনেট স্লো হলে কি সমস্যা হবে?",
    answer:
      "Zoom-এর জন্য ন্যূনতম ২ Mbps ইন্টারনেট সংযোগ প্রয়োজন। মোবাইল ডেটা দিয়েও অংশগ্রহণ করা যাবে। রেকর্ডিং সবসময় ব্যাকআপ হিসেবে থাকবে।",
  },
];

// UI Text strings
export const NAV = {
  logo: "SEENJOY ACADEMY",
  ctaText: "এখনই যোগ দিন",
};

export const HERO = {
  badge: "🔴 লাইভ মাস্টারক্লাস",
  headline: "কথায় জিতুন,\nজীবনে এগিয়ে যান",
  subHeadline:
    "আপনে অনেক কিছু জানেন, কিন্তু ঠিকঠাক বলতে না পারার কারণে পিছিয়ে পড়ছেন? মানুষের সামনে দাঁড়িয়ে কথা বলতে গেলেই গলা শুকিয়ে যাচ্ছে? ",
  description:
    "JOIN Speak To Win. মাত্র ২দিনের Live Zoom Class এর মাধ্যমে আপনে শিখবেন Public Speaking, Storytelling এবং Powerful Communication Techniques.",
  ctaText: "এখনই ভর্তি হোন",
  urgency: "Limited Seats Available | Live Masterclass হওয়ায় সিট সংখ্যা সিমিত",
  videoLabel: "কোর্স প্রিভিউ ভিডিও",
};

export const SECTIONS = {
  whatYouLearn: {
    title: "কী শিখবেন এই মাস্টারক্লাসে?",
    subtitle:
      "মাত্র ২টি লাইভ ক্লাসে আপনি যে দক্ষতাগুলো অর্জন করবেন তা আপনার জীবন বদলে দেবে",
    cta: "সম্পূর্ণ কারিকুলাম দেখুন ↓",
  },
  curriculum: {
    title: "মাস্টারক্লাসের কাঠামো",
    subtitle: "প্রতিটি ক্লাস সাবধানে সাজানো হয়েছে সর্বোচ্চ শেখার অভিজ্ঞতার জন্য",
    homeworkNote:
      "হোমওয়ার্ক জমা: প্রতিটি ক্লাস শেষে অনুশীলনের কাজ দেওয়া হবে এবং আপনাকে জমা দিতে হবে। মনে রাখবেন, অনুশীলন ছাড়া কেউ দারুণ বক্তা হতে পারে না।",
    platformNote: "Zoom-এ লাইভ: বাংলা ভাষায়, প্রতি ক্লাস ২.৫ ঘন্টা",
    ctaText: "এখনই ভর্তি হোন",
  },
  mentor: {
    title: "আপনার মেন্টর",
    subtitle: "যার কাছ থেকে শিখবেন",
  },
  faq: {
    title: "সাধারণ জিজ্ঞাসা",
    subtitle: "আপনার মনে যে প্রশ্নগুলো আসছে",
  },
  finalCta: {
    title: "আর দেরি না করে আজই শুরু করুন",
    subtitle: "সীমিত আসন — যত দ্রুত নিশ্চিত করবেন, তত ভালো",
    originalPriceLabel: "নিয়মিত মূল্য",
    currentPriceLabel: "আর্লি বার্ড মূল্য",
    ctaText: "এখনই ভর্তি হোন — ৳৯৯৯",
    urgency: "অফার সীমিত সময়ের জন্য",
  },
};
