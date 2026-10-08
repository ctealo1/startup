import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaponTech",
  description: "Decentralized eco-waste monetization platform in the Philippines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mobile-wrapper">
          <main className="content-area">
            {children}
          </main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
