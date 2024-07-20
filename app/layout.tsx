import { ThemeProvider } from "@components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
// import NavbarNew from "@components/NavbarNew";
import logo from "@public/assets/images/aswer-logo.png";
import HeaderNew from "@components/HeaderNew";
import Footer from "@components/footer/Footer";
import Contact from "@components/Contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://aswer-securite-incendie.vercel.app/"),
  title: {
    default: "Aswer Sécurité Incendie",
    template: `%s | Aswer Sécurité Incendie`,
  },

  description: "Service de sécurité incendie et d'aide aux personnes à Paris et en Île-de-France",
  icons: {
    icon: "/assets/images/aswer-logo.png",
  },

  openGraph: {
    type: "website",
    url: "https://aswer-securite-incendie.vercel.app/",
    title: "Aswer Sécurité Incendie",
    description:
      "Service de sécurité incendie et d'aide aux personnes à Paris et en ��le-de-France",
    images: [
      {
        url: "/assets/images/aswer-logo.png",
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
          <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* <NavbarNew /> */}
            <Contact />
            <div className="px-16 mt-16">
              <HeaderNew />
            </div>
            {children}
            <Footer />
          </div>
          <Toaster
            position="top-right"
            toastOptions={{ duration: 2000 }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
