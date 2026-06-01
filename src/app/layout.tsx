import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { JsonLd } from "@/components/json-ld";
import {
  siteDescription,
  siteName,
  siteTitle,
  siteUrl,
} from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  creator: siteName,
  keywords: [
    "Jordan Allen",
    "Senior Full-Stack Engineer",
    "Technical Lead",
    "Software Architect",
    "Product Engineering",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description:
      "Selected work across architecture, full-stack execution, modernization, AI workflows, and shipped product engineering.",
    type: "website",
    url: siteUrl,
    siteName,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd />
        {children}
        <Analytics />
        <Script
          defer
          data-domain="www.jordantallen.com"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
