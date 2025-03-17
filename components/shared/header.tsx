import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SignedOut } from '@clerk/nextjs'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <header className="w-full b-0" >
      <div className='wrapper ml-10 flex items-center justify-between '>
        <Link href="/" className="w-60">
            <Image src="/assets/images/logo.jpg" alt="logo" width={60} height={60} />
        </Link>
        <div className='flex w-32 justify-end gap-3'>
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