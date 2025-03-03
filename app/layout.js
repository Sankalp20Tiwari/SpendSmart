import {  Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { Toaster } from "sonner";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SpendSmart",
  description: "Manage your finances like a pro with SpendSmart",
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
        className={`${inter.className} bg-black`}
      >
        <Header />
        <main className="min-h-screen">
        {children}
        </main>
        <Toaster richColors/>
        <footer className="bg-black/80 backdrop-blur-md py-12">
          <hr  className="border-gray-800 pb-6"/>
          <div className="container mx-auto text-center text-xl  text-gray-600">
            All rights reserved@2025
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
