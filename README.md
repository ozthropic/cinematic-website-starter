# Cinematic Website Starter

[فارسی](#راهنمای-فارسی) | [English](#english-guide)

## English Guide

### What this project is

This is a small, open-source starter for building a cinematic one-page business website. It combines a fixed full-screen video, scroll-controlled playback, clear service sections, and responsive layouts without requiring a backend.

It solves the blank-page problem: instead of designing and configuring a React project from scratch, you can replace the fictional content, logo, colors, and video with your own licensed assets.

> **Screenshot placeholder:** add a real screenshot at `docs/screenshots/homepage.png` before publishing your customized version.

### Scope

This repository contains only the public cinematic homepage. It does **not** contain an admin dashboard, authentication, databases, serverless APIs, chat, AI assistants, voice agents, Telegram integrations, ElevenLabs integrations, Supabase integrations, private prompts, or production credentials.

### Technology

- React 19
- TypeScript
- Vite 8
- Plain responsive CSS
- Native HTML video with scroll-scrubbing

### Requirements

- Node.js 20.19 or newer
- Git
- A modern desktop or mobile browser

### Setup

1. Clone the repository and enter the project:

   ```bash
   git clone https://github.com/Ozhtropic/cinematic-website-starter.git
   cd cinematic-website-starter
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create your local environment file:

   ```bash
   copy .env.example .env.local
   ```

   On macOS or Linux, use:

   ```bash
   cp .env.example .env.local
   ```

4. Put your public booking URL in `VITE_BOOKING_URL`. Values prefixed with `VITE_` are exposed to the browser, so never use them for secrets.

5. Replace the fictional content in `src/content.ts`.

6. Replace `public/assets/nexa-studio-logo.svg` with your own licensed logo, then update the path if the filename changes.

7. Add an optimized H.264 video at `public/media/hero.mp4`.

8. Start the local development server:

   ```bash
   npm run dev
   ```

9. Create and inspect a production build:

   ```bash
   npm run build
   npm run preview
   ```

### Project Structure

```text
src/     UI, fictional content, styling, and scroll-scrubbing logic
public/  Placeholder logo and user-provided public media
```

### Environment Variables

- `VITE_BOOKING_URL`: public booking or calendar link used by the call-to-action buttons.

This project does not need private API keys. If you add a database, payment service, AI model, or other private integration, keep its credentials in a server-side environment and never in frontend code.

### Demo Data

`Nexa Studio`, its logo, all service descriptions, and all links in this repository are fictional placeholders for education and demonstration. They are not connected to a real company.

### License

The source code is available under the [MIT License](LICENSE). The Persian notice at the end of the license clarifies that the included brands and data are fictional educational examples.

---

<div dir="rtl">

## راهنمای فارسی

### این پروژه چیست؟

این پروژه یک قالب کوچک و متن‌باز برای ساخت وب‌سایت تک‌صفحه‌ای سینمایی است. ویدئوی تمام‌صفحه، کنترل زمان ویدئو با اسکرول، بخش خدمات، فراخوان اقدام و چیدمان واکنش‌گرا از قبل آماده شده‌اند و برای اجرای نسخهٔ پایه به بک‌اند نیاز نیست.

این قالب مشکل شروع از صفحهٔ خالی را حل می‌کند. به‌جای ساخت پروژه و طراحی همه‌چیز از ابتدا، متن‌ها، لوگوی ساختگی، رنگ‌ها و ویدئو را با دارایی‌های مجاز برند خودت جایگزین کن.

> **محل اسکرین‌شات:** پیش از انتشار نسخهٔ شخصی‌سازی‌شده، تصویر واقعی پروژه را در مسیر `docs/screenshots/homepage.png` قرار بده.

### محدودهٔ پروژه

این مخزن فقط صفحهٔ اصلی سینمایی عمومی را در بر می‌گیرد. داشبورد مدیریت، ورود کاربران، پایگاه داده، رابط‌های سمت سرور، چت، دستیار هوش مصنوعی، عامل صوتی، اتصال تلگرام، اتصال الون‌لبز، اتصال سوپابیس، پرامپت خصوصی و اطلاعات دسترسی واقعی در این پروژه وجود ندارند.

### فناوری‌ها

- ری‌اکت ۱۹
- تایپ‌اسکریپت
- وایت ۸
- سی‌اس‌اس واکنش‌گرا
- ویدئوی بومی مرورگر با کنترل اسکرول

### پیش‌نیازها

- نود نسخهٔ ۲۰٫۱۹ یا جدیدتر
- گیت
- مرورگر جدید دسکتاپ یا موبایل

### راه‌اندازی

۱. مخزن را دریافت کن و وارد پوشهٔ پروژه شو:

```bash
git clone https://github.com/Ozhtropic/cinematic-website-starter.git
cd cinematic-website-starter
```

۲. وابستگی‌ها را نصب کن:

```bash
npm install
```

۳. فایل محیط محلی را بساز:

```bash
copy .env.example .env.local
```

در مک یا لینوکس:

```bash
cp .env.example .env.local
```

۴. نشانی عمومی رزرو را در متغیر `VITE_BOOKING_URL` قرار بده. هر متغیری که با `VITE_` شروع شود در مرورگر قابل مشاهده است؛ بنابراین هیچ رمز یا کلید خصوصی را در آن قرار نده.

۵. متن‌های ساختگی را در `src/content.ts` با محتوای خودت جایگزین کن.

۶. لوگوی ساختگی `public/assets/nexa-studio-logo.svg` را با لوگوی مجاز خودت عوض کن و در صورت تغییر نام فایل، مسیر آن را نیز به‌روزرسانی کن.

۷. ویدئوی بهینه‌شدهٔ خودت را با نام `hero.mp4` در پوشهٔ `public/media` قرار بده.

۸. پروژه را اجرا کن:

```bash
npm run dev
```

۹. نسخهٔ نهایی را بساز و بررسی کن:

```bash
npm run build
npm run preview
```

### ساختار پوشه‌ها

```text
src/     رابط کاربری، محتوای ساختگی، استایل و منطق کنترل ویدئو
public/  لوگوی نمونه و رسانه‌های عمومی کاربر
```

### متغیر محیط

- `VITE_BOOKING_URL`: نشانی عمومی رزرو یا تقویم برای دکمه‌های فراخوان اقدام.

نسخهٔ پایه به کلید خصوصی نیاز ندارد. اگر پایگاه داده، پرداخت، مدل هوش مصنوعی یا سرویس خصوصی اضافه کردی، اطلاعات دسترسی را فقط در محیط سمت سرور نگه دار و هرگز داخل کد فرانت‌اند قرار نده.

### دادهٔ نمایشی

نام «نکسا استودیو»، لوگو، متن خدمات و تمام لینک‌های نمونه ساختگی و فقط برای آموزش و نمایش هستند و به شرکت واقعی تعلق ندارند.

### مجوز

کد پروژه تحت مجوز استاندارد ام‌آی‌تی منتشر شده است. سلب مسئولیت فارسی در انتهای فایل مجوز توضیح می‌دهد که برندها و داده‌های همراه پروژه ساختگی و آموزشی‌اند.

</div>
