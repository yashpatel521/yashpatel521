import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://yashpatel521.github.io/yashpatel521/"),
  title: {
    default: "Yash Patel | Motion Designer & Creative Developer",
    template: "%s | Yash Patel",
  },
  description: "Explore the creative portfolio of Yash Patel, a Motion Designer and Creative Developer specializing in high-end scrollytelling and interactive web experiences.",
  keywords: [
    "Yash Patel",
    "Motion Designer",
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
  authors: [{ name: "Yash Patel", url: "https://yashpatel521.github.io/yashpatel521/" }],
  creator: "Yash Patel",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Yash Patel | Motion Designer & Creative Developer",
    description: "Explore the creative portfolio of Yash Patel, specializing in high-end scrollytelling and interactive web experiences.",
    siteName: "Yash Patel Portfolio",
    images: [
      {
        url: "/yashpatel521/og-image.png", // Recommended to have an OG image
        width: 1200,
        height: 630,
        alt: "Yash Patel Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Patel | Motion Designer & Creative Developer",
    description: "Explore the creative portfolio of Yash Patel, specializing in high-end scrollytelling and interactive web experiences.",
    creator: "@yashpatel521", // Updated to match GitHub/GitHub Pages username
    images: ["/yashpatel521/og-image.png"],
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
    icon: "/yashpatel521/favicon.png",
    shortcut: "/yashpatel521/favicon.png",
    apple: "/yashpatel521/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
