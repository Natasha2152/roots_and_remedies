import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Herbal Guide",
  description: "Minimal herbal medicine website with soothing design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#FAF3E0] text-[#333] font-sans`}
      >
        {/* Header */}
        <header className="bg-[#f08361] text-white p-4 shadow-md text-center text-2xl font-semibold">
          Herbal Essence
        </header>

        {/* Main content */}
        <main className="container mx-auto px-4 py-8 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
