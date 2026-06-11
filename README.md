# 🚀 Nexara — Professional Technology Company Website

> **Innovating the Future, One Solution at a Time.**

A complete, production-ready website for Nexara built with **Next.js 14**, **Tailwind CSS**, **Framer Motion**, and a **Django REST Framework** backend.

---

## 🌐 Live Demo

**Frontend:** Deploy to Vercel at [nexara.vercel.app](https://nexara.vercel.app)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS with custom design tokens |
| Animations | Framer Motion |
| Icons | Lucide React |
| Backend | Django REST Framework |
| Database | MongoDB (via djmongo) |
| Auth | JWT (SimpleJWT) |
| Deployment | Vercel (frontend) |

---

## 📁 Project Structure

```
NEXARA/
├── nexara-site/          # Next.js Frontend
│   ├── app/              # App Router pages
│   │   ├── about/
│   │   ├── services/
│   │   ├── portfolio/
│   │   ├── pricing/
│   │   ├── blog/
│   │   ├── careers/
│   │   ├── contact/
│   │   ├── login/
│   │   ├── register/
│   │   ├── layout.tsx    # Root layout + SEO
│   │   ├── page.tsx      # Home page
│   │   ├── sitemap.ts    # Auto-generated sitemap
│   │   └── robots.ts     # robots.txt
│   ├── components/
│   │   ├── sections/     # Page sections
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeProvider.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── CookieBanner.tsx
│   │   └── SectionHeader.tsx
│   ├── public/
│   │   └── logo.png
│   ├── .env.example      # Environment variables template
│   ├── vercel.json       # Vercel deployment config
│   └── tailwind.config.ts
└── backend/              # Django REST Backend
    ├── nexara_api/       # Django project config
    ├── apps/
    │   ├── contacts/     # Contact form API
    │   ├── blog/         # Blog CMS API
    │   ├── portfolio/    # Portfolio CMS API
    │   ├── auth_users/   # JWT Auth API
    │   └── newsletter/   # Newsletter API
    └── requirements.txt
```

---

## ⚡ Quick Start (Frontend)

```bash
# Navigate to frontend
cd nexara-site

# Copy environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Install dependencies (already done)
npm install

# Run development server
npm run dev
# → Open http://localhost:3000
```

---

## 🔧 Environment Variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `NEXT_PUBLIC_API_BASE_URL` | Django backend URL |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number (with country code) |
| `NEXT_PUBLIC_GOOGLE_MAPS_KEY` | Google Maps API key |

---

## 🐍 Backend Setup (Django)

```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv
venv\Scripts\activate  # Windows

# Install dependencies
pip install -r requirements.txt

# Copy environment variables
cp .env.example .env

# Run migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Run development server
python manage.py runserver
# → API at http://localhost:8000/api/
```

### API Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/api/auth/token/` | POST | Get JWT token |
| `/api/auth/token/refresh/` | POST | Refresh JWT token |
| `/api/auth/register/` | POST | Create account |
| `/api/contacts/` | POST | Submit contact form |
| `/api/blog/` | GET | List blog posts |
| `/api/blog/<slug>/` | GET | Get blog post |
| `/api/portfolio/` | GET | List projects |
| `/api/newsletter/subscribe/` | POST | Subscribe to newsletter |

---

## 🚀 Deploy to Vercel

1. Push code to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Set environment variables in Vercel dashboard
4. Deploy! ✨

---

## 🎨 Features

- ✅ **Responsive Design** — Mobile-first, works on all devices
- ✅ **Dark Mode** — Toggle with persistence via localStorage
- ✅ **Animations** — Smooth Framer Motion transitions throughout
- ✅ **SEO Optimized** — Meta tags, OG tags, Twitter cards, sitemap, robots.txt
- ✅ **Accessibility** — WCAG compliant, keyboard navigation, ARIA labels
- ✅ **Security** — Security headers, CSRF, XSS protection
- ✅ **10 Services** — Full services section with icons
- ✅ **Filterable Portfolio** — Projects filtered by category
- ✅ **Testimonials Carousel** — Auto-cycling with nav controls
- ✅ **FAQ Accordion** — Animated expandable questions
- ✅ **Contact Form** — With EmailJS integration point
- ✅ **WhatsApp Button** — Floating with pulse animation
- ✅ **Cookie Banner** — GDPR-compliant
- ✅ **Newsletter** — Footer + popup subscription
- ✅ **Login/Register** — JWT auth pages
- ✅ **Pricing Plans** — Starter, Professional, Enterprise

---

## 📞 Contact

**Nexara Technologies**
- 📧 hello@nexara.in
- 📍 Bengaluru, Karnataka, India
- 🌐 nexara.vercel.app

---

*Built with ❤️ by the Nexara Team*
