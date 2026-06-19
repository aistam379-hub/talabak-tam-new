# طلبك تم — Talabak Tam

منصة إعلانات مبوبة لمدينة جبلة واللاذقية، سوريا.

## الموقع

**https://talabaktam.com**

## الأقسام

- شقق للإيجار (يومي / شهري)
- شقق للبيع
- سيارات للإيجار (مع حجز بروزنامة)
- سيارات للبيع
- معدات للإيجار (مع حجز بروزنامة)
- معدات للبيع
- إعلانات مجانية (خدمات ومهن)

## التقنيات

| التقنية | الاستخدام |
|---------|-----------|
| HTML / CSS / JS | واجهة أمامية (SPA) |
| Firebase Firestore | قاعدة بيانات الإعلانات والصفقات |
| Firebase Auth | تسجيل دخول لوحة التحكم |
| Cloudinary | استضافة صور الإعلانات |
| Cloudflare Pages | استضافة الموقع |
| Cloudflare Worker | حذف الصور بأمان (SHA-1) |
| GitHub | مستودع الكود |
| PWA | تطبيق ويب تقدمي (قابل للتثبيت) |

## بنية الملفات

```
index.html                       — الصفحة الرئيسية
style.css                        — التنسيقات
app.js                           — المنطق والوظائف
firebase-config.js               — إعدادات Firebase
manifest.json                    — إعدادات PWA
sw.js                            — Service Worker
offline.html                     — صفحة بدون إنترنت
404.html                         — توجيه SPA
worker.js                        — Cloudflare Worker
sitemap.xml                      — خريطة الموقع
robots.txt                       — تعليمات محركات البحث
googlef86787125f26b8ce.html      — تحقق Google Search Console
```

### الصور المطلوبة (ترفع مع الملفات)

```
logo.png             — لوجو الموقع
icon-app.webp        — أيقونة دائرية بالهيرو
icon-192.png         — أيقونة PWA صغيرة
icon-512.png         — أيقونة PWA كبيرة
hero1.webp           — صورة هيرو 1
hero2.webp           — صورة هيرو 2
hero3.webp           — صورة هيرو 3
cat-apt.webp         — أيقونة قسم الشقق
cat-car.webp         — أيقونة قسم السيارات
cat-equip.webp       — أيقونة قسم المعدات
cat-free.webp        — أيقونة قسم الإعلانات المجانية
```

## الحسابات

| الخدمة | المعرّف |
|--------|---------|
| Firebase | talabaktamweb |
| Cloudinary Cloud | doc9zocnw |
| Cloudinary Preset | talabak.album.dev |
| Cloudflare Worker | orange-unit-fd89.gggghvv79.workers.dev |
| الدومين | talabaktam.com |
| رقم التواصل | +963 983 127 483 |

## إعداد Firebase

### Firestore Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /ads/{adId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /settings/{docId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /failed_deletions/{docId} {
      allow read, write: if request.auth != null;
    }
    match /deals/{dealId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### Authentication

1. Email/Password: مفعّل
2. Enable create (sign-up): معطّل
3. Authorized domains: أضف `talabaktam.com`

## إعداد Cloudflare Worker

أضف المتغيرات التالية في Settings → Variables and Secrets:

| المتغير | القيمة |
|---------|--------|
| CLOUDINARY_CLOUD_NAME | (من لوحة Cloudinary) |
| CLOUDINARY_API_KEY | (من لوحة Cloudinary) |
| CLOUDINARY_API_SECRET | (مشفّر — Encrypt) |
| FIREBASE_API_KEY | (مفتاح الويب من Firebase — للتحقق من توكن الأدمن) |

## النشر

1. ارفع الملفات على GitHub
2. Cloudflare Pages مربوط بالمستودع — يتحدث تلقائياً خلال 1-2 دقيقة
3. الدومين `talabaktam.com` مربوط بـ Cloudflare Pages

## الميزات

- تصميم RTL عربي بخط Tajawal
- هيرو مع سلايدر صور
- 7 أقسام إعلانات
- بحث وفلاتر متقدمة
- صفحة تفاصيل لكل نوع إعلان
- نظام حجز بروزنامة (للإيجار)
- تبديل إيجار يومي/شهري (للشقق)
- عارض صور Lightbox بكامل الشاشة
- مشاركة إعلانات (WhatsApp + Native Share)
- PWA قابل للتثبيت على الموبايل
- عمل أوفلاين من الكاش
- حماية XSS
- متجاوب: موبايل + تابلت + لابتوب

## SEO

- 29 كلمة مفتاحية عربية
- 4 بلوكات JSON-LD (WebSite, LocalBusiness, ItemList, BreadcrumbList)
- Open Graph + Twitter Card
- sitemap.xml + robots.txt
- Google Search Console مفعّل
- Geo meta tags (جبلة 35.3614, 35.9264)

## التواصل

- هاتف: +963 983 127 483
- واتساب: +963 983 127 483
- تلغرام: +963 983 127 483

---

طلبك تم © 2026
