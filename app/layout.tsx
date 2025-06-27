import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { Navigation } from "./components/Navigation/Navigation";
import { TopInfoBar } from "./components/TopInfoBar/TopInfoBar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  style: "normal",
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="en">
      <body className={`${spaceGrotesk.variable}`}>
        <main className="main bg-app-background text-white font-space-grotesk">
          <TopInfoBar />
          <Navigation />
          {children}
        </main>
      </body>
    </html>
  );
}
