import type { Metadata } from "next";
import { Archivo as ArchivoFont } from "next/font/google";
import React from "react";
import "./globals.css";
import Navbar from "./components/header";
import Footer from "./components/footer";

const Archivo = ArchivoFont({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aarushi Ammavajjala",
  description:
    "Aarushi Ammavajjala's portfolio — CS @ Georgia Tech, AI/ML research and software engineering.",
  openGraph: {
    title: "Aarushi Ammavajjala",
    description:
      "Aarushi Ammavajjala's portfolio — CS @ Georgia Tech, AI/ML research and software engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Archivo.className} antialiased flex min-h-screen flex-col`}>
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
