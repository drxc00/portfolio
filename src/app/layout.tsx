import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import Header from "@/components/header";
import { Separator } from "@/components/ui/separator";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Digital Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="justify-items-center items-center min-h-screen p-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <Header />
          {children}
        </div>
        <Separator className="bg-muted/90"/>
        <footer className="text-center p-5">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Neil Patrick Villanueva</p>
        </footer>
      </body>
    </html>
  );
}
