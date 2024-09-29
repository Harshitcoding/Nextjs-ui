import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "aceternity-ui",
  description: "using aceternity ui",
  icons : "https://cdn.dribbble.com/users/2511168/screenshots/7172471/media/f27e59c038f172168158f3f55d6137c1.jpg?resize=400x300&vertical=center"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
      <div className="relative w-full flex items-center justify-center">
      <Navbar/>
      </div>
        {children}
        </body>
    </html>
  );
}
