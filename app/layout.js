import {  Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider 
    appearance={{
      baseTheme: dark,
    }}
    
    >
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <Header />
        <main className="min-h-screen">
        {children}
        </main>
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto text-center text-gray-600">
            All rights reserved@2025
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
