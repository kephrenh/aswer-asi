import type { Metadata } from "next";
import { Inter } from "next/font/google";
import bgImg from "../public/assets/images/asi-hero.webp";
import "./globals.css";
import Image from "next/image";
import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import Contact from "@components/Contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ASWER Sécurité Incendie",
  description: "Sécurité incendie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
