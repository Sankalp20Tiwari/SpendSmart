import Link from 'next/link';
import React from 'react';
import { 
  SignInButton, 
  SignUpButton, 
  SignedIn, 
  SignedOut, 
  UserButton 
} from '@clerk/nextjs';
import { Button } from './ui/button';
import { LayoutDashboard, PenBox } from 'lucide-react';

const Header = () => {
  return (
    <div className='fixed top-0 w-full bg-black/80 backdrop-blur-md z-50'>
      <nav className='container mx-auto px-4 py-4 flex justify-between items-center'>
        {/* Logo or Brand Name */}
        <Link href={'/'}>
          <h1 className='font-bold text-2xl text-white' aria-label="SpendSmart Home">
            SpendSmart
          </h1>
        </Link>

        {/* Navigation & Authentication Buttons */}
        <div className='flex items-center space-x-4'>
          <SignedIn>
            <Link href={'/dashboard'} className='flex items-center gap-2'>
              <Button variant='outline'>
                <LayoutDashboard size={18}/>
                <span className='hidden md:inline'>Dashboard</span>
              </Button>
            </Link>

            <Link href={'/transaction/create'} className='flex items-center gap-2'>
              <Button>
                <PenBox size={18}/>
                <span className='hidden md:inline'>Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant='outline'>Login</Button>
            </SignInButton>

            <SignUpButton forceRedirectUrl="/dashboard">
              <Button>Sign Up</Button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton appearance={{ elements: { avatarBox: "h-10 w-10" } }}/>
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Header;

