import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio: Koray RENKLİGİL",
  description:
    "My name is Koray, I am a front-end developer. I am passionate about web design and user experience, producing creative and original solutions. I develop modern and impressive websites using technologies such as React and Next. I focus on improving users' experiences by creating eye-catching designs and user-friendly interfaces in my projects. I would be happy to collaborate and contribute to new projects. You can contact me and get more information by reviewing my portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
