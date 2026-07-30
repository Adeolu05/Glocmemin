import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "GLOCMEMIN | Global Christ Message Ministry",
    template: "%s | GLOCMEMIN",
  },
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  keywords: [
    "GLOCMEMIN",
    "Global Christ Message Ministry",
    "End time Christ Army",
    "Dojutelegan Gekuba Apata Ibadan",
    "Odogbolu",
    "Ososa",
    "Imodimosan",
    "Adeyemi Ajakaye",
    "Christian ministry Nigeria",
  ],
  authors: [{ name: "GLOBAL CHRIST MESSAGE MINISTRY" }],
  openGraph: {
    title: "GLOCMEMIN | GLOBAL CHRIST MESSAGE MINISTRY",
    description:
      "Is to take undiluted word of God to the whole world. Jesus is Lord.",
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.shortName,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "GLOCMEMIN | GLOBAL CHRIST MESSAGE MINISTRY",
    description:
      "Is to take undiluted word of God to the whole world. Jesus is Lord.",
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
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="site-shell antialiased">
        <JsonLd />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
