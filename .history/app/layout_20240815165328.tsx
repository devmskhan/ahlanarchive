import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { authOptions } from "../"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahlan books archive",
  description: "A space for educational and entertaiment read",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
