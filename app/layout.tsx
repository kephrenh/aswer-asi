import { ThemeProvider } from "@components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
// import NavbarNew from "@components/NavbarNew";
import logo from "@public/assets/images/asi-logo-bg.jpg";
import icon from "../favicon.ico";
import HeaderNew from "@components/HeaderNew";
import Footer from "@components/footer/Footer";
import Contact from "@components/Contact";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://aswersecuriteincendie.vercel.app/"),
  keywords: ["sécurité incendie", "sécurité", "montreuil", "93100"],
  authors: [{ name: "Mohamed Amoussa", url: "https://www.linkedin.com/in/mohamed-amoussa" }],
  creator: "Mohamed Amoussa",
  publisher: "Mohamed Amoussa",
  referrer: "origin-when-cross-origin",
  robots: { index: true, follow: true },
  title: {
    default: "Aswer Sécurité Incendie à 93100 Montreuil - SIREN 917 945 485",
    template: "%s | Aswer Sécurité Incendie",
  },
  description: "Service de sécurité incendie et d'aide aux personnes en Ile-de-France",

  icons: {
    icon: icon.src,
  },
  verification: {
    google: "SIbIkcgtyFwYvw1L5OjAN3hWc5OkRRRYI2bAtZJJATM",
  },

  openGraph: {
    type: "website",
    url: "https://aswersecuriteincendie.vercel.app/",
    title: "Aswer Sécurité Incendie à 93100 Montreuil - SIREN 917 945 485",
    description: "Service de sécurité incendie et d'aide aux personnes en Ile-de-France",

    images: [
      {
        url: logo.src,
        width: 1260,
        height: 800,
        alt: "Aswer Sécurité Incendie",
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
      <head>
        <Script id="schema-org-markup-website" type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "ProfessionalService",
              "name": "Aswer Sécurité Incendie à 93100 Montreuil - SIREN 917 945 485",
              "url": "https://aswersecuriteincendie.vercel.app/",
              "image": "${logo.src}",
              "description": "Système de sécurité incendie pour les entreprises et les particuliers.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "56 rue Rochebrune",
                "addressLocality": "Montreuil",
                "addressRegion": "Ile-de-France",
                "postalCode": "93100",
                "addressCountry": "FR"
              },
                "telephone": "+33 6 19 90 82 73"
              }
            `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <div className="min-h-screen bg-gray-100 flex flex-col">
            <Contact />
            <div className="px-16 mt-16">
              <HeaderNew />
            </div>
            {children}
            <Footer />
          </div>
          <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
        </ThemeProvider>
      </body>
    </html>
  );
}
