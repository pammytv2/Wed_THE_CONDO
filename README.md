# THE CONDO RESIDENCE — WordPress Landing Page

หน้าแลนดิ้งเพจโครงการคอนโดสำหรับนำไปใช้กับเว็บไซต์หางาน Freelance

## 📁 โครงสร้างโปรเจกต์

```
WordPress/
├── condo-landing-preview.html          ← ไฟล์พรีวิว standalone (เปิดได้ทันทีโดยไม่ต้องติดตั้ง WP)
└── wp-content/
    └── themes/
        └── condo-landing/
            ├── style.css               ← CSS หลัก + Design System
            ├── index.php               ← WordPress Page Template
            ├── functions.php           ← Theme Setup & Asset Enqueue
            └── assets/
                └── js/
                    └── main.js         ← JavaScript (animations, form, etc.)
```

## 🎨 Design System

| Token | Value |
|---|---|
| Primary | `#1a2744` (Navy Blue) |
| Gold | `#c9a84c` |
| Font Heading | Playfair Display |
| Font Body | Sarabun (Thai) |

## 🚀 วิธีติดตั้ง WordPress Theme

1. Copy โฟลเดอร์ `wp-content/themes/condo-landing/` ไปไว้ใน WordPress ของคุณ
2. เข้า **WP Admin → Appearance → Themes** แล้ว Activate "Condo Landing Page"
3. สร้าง Page ใหม่ แล้วตั้ง Template เป็น **Default Template**
4. Set เป็น Front Page ที่ **Settings → Reading**

## 🌐 พรีวิวแบบ Standalone

เปิดไฟล์ `condo-landing-preview.html` ในเบราว์เซอร์ได้ทันที (ไม่ต้องติดตั้ง WordPress)

## ✅ Feature

- Preloader animation
- Sticky Navbar + Smooth Scroll
- Hero Section พร้อม Parallax Zoom
- Counter Animation (Stats)
- Scroll Reveal Animation
- Gallery พร้อม Filter Tabs
- Unit Types Cards
- Location + Nearby Places
- Testimonials
- Contact Form พร้อม Validation
- Responsive (Mobile / Tablet / Desktop)
- Back to Top Button

## 📦 Dependencies (CDN — ไม่ต้องติดตั้ง)

- Google Fonts: Playfair Display + Sarabun
- ไม่มี external JS library (Vanilla JS ทั้งหมด)
