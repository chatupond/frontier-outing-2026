import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai"],
  weight: ["400", "500", "600", "700"],
});

// Use only the primary Geist font name (without Next.js auto-generated fallback)
// so Thai characters aren't intercepted by the system font used as fallback.
const geistPrimary = geistSans.style.fontFamily.split(",")[0].trim();

export const metadata: Metadata = {
  title: "2026 Frontier's Outing @THANN Pool Villa",
  description: "Frontier team outing getaway together",
  openGraph: {
    title: "2026 Frontier's Outing @THANN Pool Villa",
    description: "Frontier team outing getaway together",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "2026 Frontier's Outing @THANN Pool Villa",
    description: "Frontier team outing getaway together",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${geistMono.variable} ${notoSansThai.variable} h-full antialiased`}
      style={{ "--font-geist-primary": geistPrimary } as React.CSSProperties}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
