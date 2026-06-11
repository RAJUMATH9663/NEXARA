import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexara.vercel.app"),
  title: {
    default: "Nexara | Innovating the Future, One Solution at a Time",
    template: "%s | Nexara",
  },
  description:
    "Nexara delivers world-class web development, mobile applications, AI solutions, cloud services, UI/UX design, and digital transformation for startups and enterprises across India and globally.",
  keywords: [
    "web development",
    "mobile app development",
    "AI solutions",
    "software company",
    "technology solutions",
    "India",
    "digital transformation",
    "cloud services",
    "UI UX design",
    "Nexara",
  ],
  authors: [{ name: "Nexara Technologies" }],
  creator: "Nexara Technologies",
  publisher: "Nexara Technologies",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nexara.vercel.app",
    siteName: "Nexara",
    title: "Nexara | Innovating the Future, One Solution at a Time",
    description:
      "Nexara delivers world-class web development, mobile applications, AI solutions, cloud services, and digital transformation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexara - Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexara | Innovating the Future",
    description:
      "World-class web development, AI solutions, and digital transformation.",
    images: ["/og-image.png"],
    creator: "@NexaraTech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nexara",
              url: "https://nexara.vercel.app",
              logo: "https://nexara.vercel.app/logo.png",
              description:
                "Nexara delivers web development, mobile applications, AI solutions, and digital transformation.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              sameAs: [
                "https://twitter.com/NexaraTech",
                "https://linkedin.com/company/nexara",
                "https://github.com/nexara",
              ],
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Toaster
            position="top-right"
            toastOptions={{
              className: "toast-custom",
              style: {
                background: "var(--card-bg)",
                color: "var(--text-primary)",
                border: "1px solid var(--border-color)",
              },
            }}
          />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
          <WhatsAppButton />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
