import { ThemeProvider } from "@components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import NavbarNew from "@components/NavbarNew";
import logo from "@public/assets/images/aswer-logo.png";
import HeaderNew from "@components/HeaderNew";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aswer Sécurité Incendie",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col relative">
            {/* <NavbarNew /> */}
            <HeaderNew />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
