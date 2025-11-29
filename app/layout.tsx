import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";

export const metadata: Metadata = {
  title: "Contact Manager App",
  description: "A simple contact management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50 text-black">
          <Navbar />
          <main className="container mx-auto px-4 py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
