import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yash Patel | Motion Designer & Creative Developer",
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
  authors: [{ name: "Yash Patel" }],
  creator: "Yash Patel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yashpatel.dev", // Assuming a domain, but keeping it general
    title: "Yash Patel | Motion Designer & Creative Developer",
    description: "Explore the creative portfolio of Yash Patel, specializing in high-end scrollytelling and interactive web experiences.",
    siteName: "Yash Patel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Patel | Motion Designer & Creative Developer",
    description: "Explore the creative portfolio of Yash Patel, specializing in high-end scrollytelling and interactive web experiences.",
    creator: "@yashpatel", // Placeholder or from profile if found
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
