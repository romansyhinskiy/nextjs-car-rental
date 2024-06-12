import type { Metadata } from "next";
import { NavBar, Footer } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Service for car rent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
