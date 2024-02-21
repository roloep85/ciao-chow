import type { Metadata } from "next";
import { Inter, Montserrat_Alternates } from "next/font/google";

import "./globals.css";

export const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const montserrat_alternates = Montserrat_Alternates({
  variable: "--font-montserrat-alt",
  subsets: ["latin"],
  weight: "600"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}