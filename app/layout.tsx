import type { Metadata } from "next";
import { Ruda as RudaFont } from "next/font/google";
import React from "react";
import "./globals.css";

const Ruda = RudaFont({
  weight: "600",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aarushi Ammavajjala",
  description: "Aarushi Ammavajjala's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Ruda.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
