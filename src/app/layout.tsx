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
  title: "Neil Patrick Villanueva",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-100`}
      >
        <div className="place-items-center items-center min-h-screen p-8 sm:p-16 font-[family-name:var(--font-geist-sans)]">
          <Header />
          {children}
        </div>
        <Separator className="bg-muted/90"/>
        <footer className="text-center p-5">
          <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Neil Patrick Villanueva</p>
        </footer>
      </body>
    </html>
  );
}
