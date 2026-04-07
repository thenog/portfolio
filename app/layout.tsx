import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import PageTransition from "@/components/PageTransition";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dm-sans",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Andrew Pawlik — Portfolio",
  description: "Portfolio & creative work by Andrew Pawlik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${inter.variable} font-body antialiased bg-black text-white`}
      >
        <PageTransition>{children}</PageTransition>
        <NavBar />
      </body>
    </html>
  );
}
