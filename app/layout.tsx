import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Thandululo Nengovhela - Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, React Native, and PHP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="black" lang="en" className="">
      <body>{children}</body>
    </html>
  );
}
