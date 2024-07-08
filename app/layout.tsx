import { ThemeProvider } from "@components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import NavbarNew from "@components/NavbarNew";
import logo from "@public/assets/images/aswer-logo.png";
import HeaderNew from "@components/HeaderNew";
import Footer from "@components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aswer Sécurité Incendie",
  description: "Service de sécurité incendie et d'aide aux personnes à Paris et en Île-de-France",
  icons: {
    icon: "/assets/images/aswer-logo.png",
  },

  openGraph: {
    type: "website",
    url: "https://www.aswersecuriteincendie.com",
    title: "Aswer Sécurité Incendie",
    description:
      "Service de sécurité incendie et d'aide aux personnes à Paris et en ��le-de-France",
    images: [
      {
        url: `${logo}`,
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Aswer Sécurité Incendie",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <div className="min-h-screen flex flex-col relative">
            {/* <NavbarNew /> */}
            <HeaderNew />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
