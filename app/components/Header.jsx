"use client";
import Link from 'next/link';
import React from 'react';
import { 
  SignInButton, 
  SignUpButton, 
  SignedIn, 
  SignedOut, 
  UserButton 
} from '@clerk/nextjs';
import { Button } from '../../components/ui/button';
import { LayoutDashboard, PenBox } from 'lucide-react';

const Header = () => {
  return (
    <header>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href={'/'} className="flex items-center space-x-2 group">
          <h1 className='text-3xl  text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600 transition duration-300 group-hover:opacity-80'>
            SpendSmart
          </h1>
        </Link>

        {/* Navigation Links (Desktop only) */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#features" className="text-white/80 hover:text-teal-400 transition-colors duration-200">
            Features
          </a>
          <a href="#how-it-works" className="text-white/80 hover:text-teal-400 transition-colors duration-200">
            How It Works
          </a>
          <a href="#testimonials" className="text-white/80 hover:text-teal-400 transition-colors duration-200">
            Testimonials
          </a>
          <a href="#pricing" className="text-white/80 hover:text-teal-400 transition-colors duration-200">
            Pricing
          </a>
          <a href="#faq" className="text-white/80 hover:text-teal-400 transition-colors duration-200">
            FAQ
          </a>
        </div>

        {/* Auth Buttons */}
        <div className='flex items-center space-x-4'>
          <SignedIn>
            <Link href={'/dashboard'}>
              <Button variant='ghost' className="flex items-center gap-2 text-white hover:text-teal-400 hover:bg-white/5">
                <LayoutDashboard size={18} />
                <span className='hidden md:inline'>Dashboard</span>
              </Button>
            </Link>

            <Link href={'/transaction/create'}>
              <Button className="flex items-center gap-2 bg-gradient-to-r from-teal-400 to-cyan-600 text-navy hover:opacity-90">
                <PenBox size={18} />
                <span className='hidden md:inline'>Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button className="text-white bg-gradient-to-r from-cyan-600 to-cyan-400 mx-2">
                Login
              </Button>
            </SignInButton>

            <SignUpButton forceRedirectUrl="/dashboard">
              <Button className=" text-white hover:opacity-90 bg-gradient-to-br from-cyan-800 to-cyan-600 hidden md:inline">
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton appearance={{ elements: { avatarBox: "h-10 w-10" } }} />
          </SignedIn>
        </div>
      </div>
    </nav>
    </header>
  );
};

export default Header;
