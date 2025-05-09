import {  Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { Toaster } from "sonner";
import Footer from "@/app/components/Footer";


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
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}
