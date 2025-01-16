import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import Header from "@/components/header";
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "@/components/theme-provider";

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
        className={`font-sans antialiased bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <Header />
            {children}
          </div>
          <Separator className="bg-muted/90" />
          <footer className="text-center p-5">
            <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Neil Patrick Villanueva</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
