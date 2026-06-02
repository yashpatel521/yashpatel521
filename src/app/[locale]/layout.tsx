import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import CustomCursor from "@/components/CustomCursor";
import InteractiveGrid from "@/components/InteractiveGrid";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#121212",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL("https://yashpatel521.github.io/yashpatel521/"),
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    keywords: [
      "Yash Patel",
      "Full Stack Developer",
      "Creative Developer",
      "Portfolio",
      "Scrollytelling",
      "Next.js",
      "WebGL",
      "Three.js",
      "Interactive Web Design",
      "Frontend Engineer",
      "Animation",
    ],
    authors: [
      {
        name: "Yash Patel",
        url: "https://yashpatel521.github.io/yashpatel521/",
      },
    ],
    creator: "Yash Patel",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        fr: "/fr",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_CA" : "en_US",
      url: `/${locale}`,
      title: t("title"),
      description: t("ogDescription"),
      siteName: t("siteName"),
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("ogDescription"),
      creator: "@yashpatel521",
      images: ["/og-image.png"],
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
      icon: "/favicon.png",
      shortcut: "/favicon.png",
      apple: "/favicon.png",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200 bg-[#121212]`}
      >
        <NextIntlClientProvider messages={messages}>
          <InteractiveGrid />
          <CustomCursor />
          <LocaleSwitcher />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
