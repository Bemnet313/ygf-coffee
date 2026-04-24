import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "YGF Global Coffee Collective — Premium Ethiopian Specialty Coffee",
  description:
    "Sourcing and exporting the finest Ethiopian specialty coffee from Yirgacheffe, Sidamo, Guji, and Harrar to the world's best roasters.",
  keywords: [
    "Ethiopian coffee",
    "specialty coffee",
    "coffee export",
    "Yirgacheffe",
    "Sidamo",
    "Guji",
    "Harrar",
    "green coffee beans",
    "wholesale coffee",
    "YGF Global Coffee Collective",
  ],
  authors: [{ name: "YGF Global Coffee Collective" }],
  metadataBase: new URL("https://ygf-coffee.vercel.app"),
  openGraph: {
    title: "YGF Global Coffee Collective — Premium Ethiopian Specialty Coffee",
    description:
      "Sourcing and exporting the finest Ethiopian specialty coffee from Yirgacheffe, Sidamo, Guji, and Harrar to the world's best roasters.",
    type: "website",
    locale: "en_US",
    siteName: "YGF Global Coffee Collective",
    url: "https://ygf-coffee.vercel.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "YGF Global Coffee Collective — Premium Ethiopian Specialty Coffee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YGF Global Coffee Collective — Premium Ethiopian Specialty Coffee",
    description:
      "Sourcing and exporting the finest Ethiopian specialty coffee from Yirgacheffe, Sidamo, Guji, and Harrar.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" }
    ],
    apple: "/favicon.png",
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${jost.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel="preload" href="/sequence-opt/frame_0001.webp" as="image" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y50B0EVEDZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              'analytics_storage': 'granted'
            });
            gtag('config', 'G-Y50B0EVEDZ');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FAFAF9] text-[#0C0A09] selection:bg-[#064e3b] selection:text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
