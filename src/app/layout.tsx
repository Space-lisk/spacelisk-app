import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";
import '@rainbow-me/rainbowkit/styles.css';

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space lisk",
  description: "Space Lisk is a revolutionary suite designed to propel account abstraction on the Lisk chain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={lexend.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
