import { ThemeProvider } from "@/app/_components/_ui/ThemeProvider";
import { inter } from "@/app/_lib/action";
import { ReactNode } from "react";
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import type { Viewport } from "next";
import { JsonLd } from "@/app/_components/JsonLd";
import "@/app/styles/globals.css";

const SITE_URL = "https://muhaymen-raed-portfolio.vercel.app";
type LayoutProps = {
  children: ReactNode;
};

// export const metadata: Metadata = {
//   title: {
//     default: "Mohayman Rayed Hamed",
//     template: "%s | Mohayman Rayed Hamed",
//   },
//   description:
//     "Front-End Developer specializing in modern, high-performance web applications...",
//   keywords: [
//     "Front-End Developer",
//     "React Developer",
//     "Next.js Portfolio",
//     "UI/UX Design",
//   ], // Add this!
//   authors: [{ name: "Mohayman Rayed Hamed" }],
//   creator: "Mohayman Rayed Hamed",
// };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Muhaymen Raed",
  description:
    "Front-end developer specializing in React, TypeScript, and modern web technologies. Explore my portfolio of interactive web applications and projects.",
  keywords: [
    "Muhaymen Raed",
    "مهيمن رائد",
    "Muhaymen",
    "Raed",
    "MuhaymenRaed",
    "muhaymen raed",
    "Mohayman Rayed",
    "Mohyaman Rayed",
    "Moheamin",
    "Muhaymin Raed",
    "Muhaymen Raid",
    "Muhaymen Raied",
    "Muhayman Raed",
    "Mohaymen Raed",
    "Front End Developer",
    "React Developer",
    "TypeScript",
    "Web Developer",
    "Portfolio",
    "Framer Motion",
    "Tailwind CSS",
    "Next.js",
    "JavaScript",
    "UI/UX",
    "Web Applications",
    "المبرمج",
    "تطوير الويب",
    "تطبيقات الويب",
    "مطور واجهات المستخدم",
    "تصميم واجهات المستخدم",
    "مهيمن رائد العزاوي",
    "مهيمن",
    "رائد",
  ],
  authors: [{ name: "Muhaymen Raed" }],
  creator: "Muhaymen Raed",
  publisher: "Muhaymen Raed",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
    other: {
      rel: "icon",
      url: "/icon.svg",
    },
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://muhaymen-raed-portfolio.vercel.app/",
    languages: {
      "en-US": "https://muhaymen-raed-portfolio.vercel.app/",
    },
  },
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhaymen-raed-portfolio.vercel.app/",
    title: "Muhaymen Raed",
    description:
      "Front-end developer specializing in Next.js, React, TypeScript, and modern web technologies. Explore my portfolio of interactive web applications and projects.",
    siteName: "Muhaymen Raed Portfolio",
    images: [
      {
        url: "https://muhaymen-raed-portfolio.vercel.app/myself.png",
        width: 1200,
        height: 630,
        alt: "Muhaymen Raed - Front End Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhaymen Raed",
    description:
      "Front-end developer specializing in React, TypeScript, and modern web technologies. Explore my portfolio of interactive web applications and projects.",
    images: ["https://muhaymen-raed-portfolio.vercel.app/myself.png"],
  },
  other: {
    "msapplication-TileColor": "#00bcd4",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Person: reconciles every spelling/translation of the name to one identity.
const personSchema = {
  "@type": "Person",
  name: "Muhaymen Raed",
  alternateName: [
    "Muhaymen Raed",
    "مهيمن رائد",
    "مهيمن رائد العزاوي",
    "MuhaymenRaed",
    "Mohayman Rayed",
    "Mohyaman Rayed",
    "Moheamin",
    "Muhaymin Raed",
    "Muhaymen Raid",
    "Muhaymen Raied",
    "Muhayman Raed",
    "Mohaymen Raed",
    "مهيمن",
    "رائد",
  ],
  jobTitle: "Front-End Developer",
  url: SITE_URL,
  image: `${SITE_URL}/myself.png`,
  sameAs: ["https://github.com/MuhaymenRaed", "https://www.linkedin.com/in/muhaymenraed"],
  knowsAbout: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Web development"],
  address: { "@type": "PostalAddress", addressCountry: "IQ", addressLocality: "Baghdad" },
};

const websiteSchema = {
  "@type": "WebSite",
  name: "Muhaymen Raed — Portfolio",
  alternateName: ["Muhaymen Raed", "مهيمن رائد", "MuhaymenRaed portfolio"],
  url: SITE_URL,
  inLanguage: ["en", "ar"],
  author: { "@type": "Person", name: "Muhaymen Raed" },
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Structured data — maps name spellings/translations to one identity */}
        <JsonLd
          data={{ "@context": "https://schema.org", "@graph": [personSchema, websiteSchema] }}
        />
      </head>
      <body className="bg-(--backgroundColor) font-inter text-(--fontColor)">
        <ThemeProvider>
          {/* Elegant Toast Configuration */}
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "var(--backgroundColor)",
                color: "var(--fontColor)",
                border: "1px solid rgba(161,161,161,0.15)",
                fontSize: "14px",
                borderRadius: "12px",
                padding: "12px 20px",
              },
            }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
