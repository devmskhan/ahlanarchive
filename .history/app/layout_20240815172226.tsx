import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { authOptions } from "../pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth";
import { SessionProvider } from ".."

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahlan books archive",
  description: "A space for educational and entertaiment read",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
        <SessionProvider session={session}>
        {children}
        </SessionProvider>
        </main>
        
        </body>
    </html>
  );
}
