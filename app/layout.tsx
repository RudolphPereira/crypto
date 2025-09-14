import type { Metadata } from "next";
import "./globals.css";
// eslint-disable-next-line
import { Space_Grotesk, Inter } from "next/font/google";
import { Navigation } from "./components/Navigation/Navigation";
import { TopInfoBar } from "./components/TopInfoBar/TopInfoBar";
import { ThemeProvider } from "./components/Navigation/ThemeProvider";
import StoreProvider from "./StoreProvider";
import { Toaster } from "@/components/ui/sonner";
import PageLoader from "./components/PageLoader/PageLoader";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  style: "normal",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  style: "normal",
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CryptoVault",
  description:
    "A secure, user-friendly app for insights on various cryptocurrencies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} bg-dark-gunmetal`}
      >
        <StoreProvider>
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
          >
            <PageLoader />
            <main className="main bg-app-background text-white font-space-grotesk min-h-[100vh] max-w-[1500px] m-auto">
              <TopInfoBar />
              <div className="content w-[90%] mx-auto">
                <Navigation />
                {children}
              </div>
            </main>
          </ThemeProvider>
        </StoreProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
