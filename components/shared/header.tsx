
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className="w-full b-0" >
      <div className='max-w-7xl p-5 md:px-10 xl:px-0 w-full wrapper flex items-center justify-between '>
        <Link href="/" className="w-60 px-10">
            <Image src="/assets/images/logo.png" alt="logo" width={250} height={100} />
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className='flex w-32 justify-end gap-3'>
          <SignedIn>
            <MobileNav />
            <UserButton />
          </SignedIn>
            <SignedOut>
              <Button asChild className='rounded-full' size="lg">
                <Link href='/sign-in'>
                  Login 
                </Link>
              </Button>
            </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header