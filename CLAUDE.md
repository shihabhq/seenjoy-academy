# CLAUDE.md — Seenjoy Academy Project

## Project Overview

**Seenjoy Academy** is a dark-themed, Bengali-language course selling platform built for YouTube content creator **Seenjoy Saha**. The MVP is a landing page + checkout flow for his first live masterclass: **"Speak To Win"** — a 2-day Zoom-based public speaking course.

This is NOT a generic LMS. It is a single-product sales page with integrated checkout, payment processing (SSLCommerz), order persistence, and email confirmation.

---

## Tech Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Framework | **Next.js 15 (App Router)** | Full-stack, RSC + Server Actions |
| Language | **TypeScript** | Strict mode enabled |
| Styling | **Tailwind CSS 4** | Dark theme, custom color tokens |
| Animation | **Framer Motion** | Subtle scroll-triggered & micro-animations only |
| Icons | **Lucide React** | Consistent line-icon set |
| ORM | **Prisma** | With Prisma Postgres |
| Database | **Prisma Postgres** | Managed PostgreSQL via Prisma |
| Payment | **SSLCommerz** | NOT YET INTEGRATED — build placeholder/hooks |
| Email | **Nodemailer** or **Resend** | For order confirmation emails |
| Fonts | **Hind Siliguri** (Bengali) + **Inter** (English) | Via next/font/google |

---

## Project Structure

```
seenjoy-academy/
├── CLAUDE.md                          # This file
├── prisma/
│   └── schema.prisma                  # Database schema
├── public/
│   ├── images/                        # Static images, placeholders
│   └── fonts/                         # If self-hosting any fonts
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout: fonts, metadata, theme
│   │   ├── page.tsx                   # Landing page (sales page)
│   │   ├── checkout/
│   │   │   └── page.tsx               # Checkout page (form + summary)
│   │   ├── success/
│   │   │   └── page.tsx               # Order success page
│   │   ├── api/
│   │   │   ├── orders/
│   │   │   │   └── route.ts           # POST: create order, store in DB
│   │   │   ├── payment/
│   │   │   │   ├── init/
│   │   │   │   │   └── route.ts       # POST: initialize SSLCommerz session
│   │   │   │   ├── success/
│   │   │   │   │   └── route.ts       # POST: SSLCommerz IPN success callback
│   │   │   │   ├── fail/
│   │   │   │   │   └── route.ts       # POST: SSLCommerz IPN fail callback
│   │   │   │   └── cancel/
│   │   │   │       └── route.ts       # POST: SSLCommerz IPN cancel callback
│   │   │   └── email/
│   │   │       └── route.ts           # POST: send confirmation email
│   │   └── globals.css                # Tailwind directives + custom CSS vars
│   ├── components/
│   │   ├── landing/
│   │   │   ├── Navbar.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── WhatYouLearn.tsx
│   │   │   ├── MasterclassStructure.tsx
│   │   │   ├── MentorSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   ├── FinalCTA.tsx
│   │   │   └── Footer.tsx
│   │   ├── checkout/
│   │   │   ├── CheckoutForm.tsx
│   │   │   └── OrderSummary.tsx
│   │   ├── success/
│   │   │   └── SuccessCard.tsx
│   │   └── ui/
│   │       ├── Button.tsx             # Reusable CTA button component
│   │       ├── Badge.tsx              # Info pills / badges
│   │       ├── Card.tsx               # Generic dark card wrapper
│   │       ├── Input.tsx              # Styled form input
│   │       ├── Accordion.tsx          # FAQ accordion component
│   │       └── SectionHeading.tsx     # Consistent section title component
│   ├── lib/
│   │   ├── prisma.ts                  # Prisma client singleton
│   │   ├── sslcommerz.ts             # SSLCommerz helper (PLACEHOLDER)
│   │   ├── email.ts                   # Email sending utility
│   │   ├── constants.ts               # Course data, pricing, dates
│   │   └── utils.ts                   # Generic helpers (cn(), formatPrice(), etc.)
│   └── types/
│       └── index.ts                   # Shared TypeScript types
├── .env.local                         # Environment variables (never commit)
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── next.config.ts
```

---

## Design System & Theme

### Color Tokens (define in tailwind.config.ts AND globals.css)

```
--bg-primary: #0A0A0F          (main background, deepest dark)
--bg-secondary: #111118        (cards, elevated surfaces)
--bg-tertiary: #1A1A24         (hover states, subtle lifts)
--border-default: #2A2A35      (subtle borders on cards/inputs)
--border-focus: #F5A623        (input focus state)

--accent-gold: #F5A623         (CTAs, price, highlights)
--accent-gold-hover: #E09500   (CTA hover)
--accent-gold-glow: rgba(245, 166, 35, 0.25)  (button glow shadow)
--accent-teal: #22D3EE         (links, secondary highlights)

--text-primary: #F0F0F5        (headings, primary body)
--text-secondary: #9CA3AF      (muted/supporting text)
--text-on-accent: #0A0A0F      (text on gold buttons)

--success: #22C55E
--error: #EF4444
--warning: #F59E0B
```

### Typography

- **Bengali headings:** "Hind Siliguri", weight 600-700, tracking slightly loose
- **English headings:** "Inter", weight 600-700
- **Body text (both):** "Hind Siliguri" for Bengali, "Inter" for English, weight 400, line-height 1.7
- **Base font size:** 16px (1rem)
- **H1:** 2.5rem-3rem (responsive)
- **H2 (section headings):** 1.875rem-2.25rem
- **H3:** 1.25rem-1.5rem
- **Body:** 1rem-1.125rem
- **Small/caption:** 0.875rem

### Component Patterns

**Buttons:**
- Primary: bg-accent-gold, text-dark, rounded-xl (12px), px-8 py-3.5, font-semibold, box-shadow glow, hover scale-[1.02] transition
- Secondary/Ghost: border border-accent-gold, text-accent-gold, transparent bg, hover bg-accent-gold/10

**Cards:**
- bg-bg-secondary, border border-border-default, rounded-2xl (16px), p-6 or p-8
- Optional: backdrop-blur-sm bg-opacity-80 for glass effect

**Inputs:**
- bg-bg-secondary, border border-border-default, rounded-xl, px-4 py-3, text-text-primary
- Focus: border-accent-gold ring-2 ring-accent-gold-glow
- Error: border-error ring-2 ring-error/25
- Labels: text-text-secondary text-sm mb-2

**Section Spacing:**
- Each landing page section: py-20 md:py-28
- Max content width: max-w-6xl mx-auto px-4 md:px-6

---

## Database Schema (Prisma)

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Order {
  id              String   @id @default(cuid())
  name            String
  email           String
  phone           String
  courseName      String   @default("Speak To Win")
  amount          Float
  currency        String   @default("BDT")
  status          OrderStatus @default(PENDING)
  transactionId   String?  @unique
  sslSessionKey   String?
  paymentMethod   String?
  emailSent       Boolean  @default(false)
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}

enum OrderStatus {
  PENDING
  PAID
  FAILED
  CANCELLED
}
```

---

## SSLCommerz Integration Plan (PLACEHOLDER)

SSLCommerz is NOT yet integrated. Build the architecture so it plugs in seamlessly:

### Flow:
1. User fills checkout form → POST `/api/orders` → creates Order with status PENDING
2. Server calls SSLCommerz init API → gets `GatewayPageURL` + `sessionkey`
3. User is redirected to SSLCommerz hosted payment page
4. After payment, SSLCommerz sends IPN (Instant Payment Notification) to:
   - `/api/payment/success` — verify hash, update order to PAID, send confirmation email
   - `/api/payment/fail` — update order to FAILED
   - `/api/payment/cancel` — update order to CANCELLED
5. SSLCommerz also redirects user browser to success/fail/cancel URLs

### Placeholder Implementation:
- `lib/sslcommerz.ts` should export:
  - `initPayment(orderData)` — currently returns a mock response with a fake GatewayPageURL
  - `validatePayment(ipnData)` — currently returns `{ isValid: true }` always
- All API routes should be fully coded with proper error handling, just using the mock functions
- Mark all SSLCommerz-specific code with `// TODO: SSLCommerz` comments
- Required env vars (add to .env.example):
  ```
  SSLCOMMERZ_STORE_ID=your_store_id
  SSLCOMMERZ_STORE_PASSWORD=your_store_password
  SSLCOMMERZ_IS_SANDBOX=true
  SSLCOMMERZ_INIT_URL=https://sandbox.sslcommerz.com/gwprocess/v4/api.php
  SSLCOMMERZ_VALIDATION_URL=https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php
  ```

---

## Email Confirmation

After successful payment (or in dev, after mock success):
- Send a Bengali confirmation email to the user's provided email
- Email content:
  - Subject: "🎉 Speak To Win — ভর্তি নিশ্চিত হয়েছে!"
  - Body: Greeting with user name, course details, date/time, Zoom link placeholder, transaction ID
- Use Nodemailer with SMTP or Resend API (configure via env vars)
- Mark `emailSent: true` on the Order record after successful send

---

## Page Specifications

### Landing Page (`/`)
- Server Component for SEO, Client Components only where interactivity is needed (FAQ accordion, animations)
- Sections in order: Navbar → Hero → WhatYouLearn → MasterclassStructure → MentorSection → FAQ → FinalCTA → Footer
- Navbar should be sticky with transparent-to-solid background transition on scroll
- "JOIN NOW" buttons throughout should all link to `/checkout`
- Use Framer Motion for: fade-in-up on scroll for sections, subtle hover effects on cards, accordion animation
- All Bengali text content should be in `lib/constants.ts` for easy editing

### Checkout Page (`/checkout`)
- Client Component (form interactivity required)
- Two columns on desktop (md breakpoint): Form left, Order Summary right
- Simple navbar: Logo + "← কোর্স পেজে ফিরুন" back link
- Form validation: all fields required, email format validation, phone number validation (BD format: 01XXXXXXXXX)
- On submit:
  1. Show loading state on button
  2. POST to `/api/orders` with form data
  3. On success, redirect to SSLCommerz (or mock: redirect to `/success?orderId=xxx`)
  4. On error, show toast/inline error

### Success Page (`/success`)
- Reads `orderId` from URL query params
- Fetches order details from API/server
- Displays success animation, order details, and home button
- Animated green checkmark (Framer Motion)
- Optional: subtle confetti effect (use a lightweight library or CSS-only)

---

## API Routes

### `POST /api/orders`
- Body: `{ name, email, phone }`
- Validates input server-side
- Creates Order in DB with status PENDING, amount from constants
- Calls SSLCommerz init (placeholder)
- Returns: `{ orderId, paymentUrl }` (paymentUrl is GatewayPageURL or mock URL)

### `POST /api/payment/success`
- Receives SSLCommerz IPN data
- Validates payment (placeholder validation)
- Updates Order status to PAID
- Triggers confirmation email
- Redirects user to `/success?orderId=xxx`

### `POST /api/payment/fail`
- Updates Order status to FAILED
- Redirects user to `/checkout?error=payment_failed`

### `POST /api/payment/cancel`
- Updates Order status to CANCELLED
- Redirects user to `/checkout?error=payment_cancelled`

---

## Animation Guidelines (Framer Motion)

Keep animations **subtle and performant**:
- **Scroll reveal:** `initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true }}` — 0.5s duration, ease-out
- **Stagger children:** 0.1s delay between items in grids/lists
- **Button hover:** `whileHover={{ scale: 1.02 }}` `whileTap={{ scale: 0.98 }}`
- **FAQ accordion:** `AnimatePresence` with height auto-animation
- **Success checkmark:** Scale + opacity entrance animation
- **NO** parallax, NO heavy particle effects, NO animations that trigger layout shifts

---

## Critical Implementation Rules

1. **Bengali-first content:** All user-facing text is primarily Bengali. Keep it in `constants.ts` — never hardcode Bengali strings directly in JSX scattered across files.
2. **Responsive:** Mobile-first. Test at 375px, 768px, 1024px, 1440px.
3. **Accessibility:** Proper heading hierarchy (one H1 per page), alt text on images, keyboard-navigable accordion, focus-visible styles on all interactive elements, proper form labels.
4. **Performance:** Use `next/image` for all images. Lazy-load below-fold sections. Keep JS bundle minimal — no heavy animation libraries beyond Framer Motion.
5. **SEO Metadata:** Bengali title and description in root layout. OpenGraph image placeholder.
6. **Error handling:** All API routes return proper HTTP status codes and JSON error bodies. Forms show user-friendly Bengali error messages.
7. **Type safety:** No `any` types. Define all interfaces in `types/index.ts`.
8. **Environment variables:** All secrets in `.env.local`, referenced via `process.env`. Create `.env.example` with all required vars (without values).
9. **Prisma:** Use a singleton pattern for PrismaClient in `lib/prisma.ts` to avoid connection exhaustion in dev.
10. **Dummy images:** Use placeholder divs with bg-bg-tertiary and centered icons (from Lucide) where real images will go later.

---

## Development Workflow

```bash
# Install dependencies
npm install

# Set up Prisma
npx prisma generate
npx prisma db push

# Run development server
npm run dev
```

### Required npm packages:
```
framer-motion
lucide-react
@prisma/client
prisma (devDependency)
nodemailer (or resend)
```

### Environment Variables (.env.local):
```
DATABASE_URL=prisma+postgres://...
SSLCOMMERZ_STORE_ID=
SSLCOMMERZ_STORE_PASSWORD=
SSLCOMMERZ_IS_SANDBOX=true
SSLCOMMERZ_INIT_URL=https://sandbox.sslcommerz.com/gwprocess/v4/api.php
SSLCOMMERZ_VALIDATION_URL=https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php
NEXT_PUBLIC_BASE_URL=http://localhost:3000
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
EMAIL_FROM=noreply@seenjoyacademy.com
```

---

## What NOT to Do

- Do NOT install any UI component library (no shadcn, no MUI, no Chakra). Build all UI components from scratch with Tailwind.
- Do NOT use `pages/` router. Use App Router only.
- Do NOT add authentication or user accounts. This is a simple checkout flow.
- Do NOT over-animate. Subtle is key.
- Do NOT use any color outside the defined token palette.
- Do NOT store sensitive payment data in our database. SSLCommerz handles all payment info.
- Do NOT implement the actual SSLCommerz API call yet — use the placeholder mock.