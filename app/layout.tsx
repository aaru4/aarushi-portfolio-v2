import type { Metadata } from "next";
import { Ruda as RudaFont } from "next/font/google";
import React from "react";
import "./globals.css";

const Ruda = RudaFont({
  weight: "600",
  subsets: ["latin"],
});

interface ProjectCard {
  title: string
  org: string
}

export const ProjectBox: React.FC<ProjectCard> = ({ title, org }) => {
  return (
    <div style={cardStyles.container}>
      <h1 style={cardStyles.title}>{title}</h1>
      <p style={cardStyles.org}>{org}</p>
    </div>
  )
}

const cardStyles = {
  container: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
    padding: '16px',
    maxWidth: '400px',
    margin: '16px auto', 
    textAlign: 'center' as const, 
  },
  title: {
    fontSize: '24px', 
    fontWeight: 'bold',
    marginBottom: '8px', 
    color: '#333', 
  },
  org: {
    fontSize: '18px', 
    color: '#666', 
  },
};

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
