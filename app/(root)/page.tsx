'use client'
 
import HardcodedEvents from '@/components/shared/HardCodedEvents';
import { Button } from '@/components/ui/button'

import Image from 'next/image'
import Link from 'next/link'

export default async function Home() { 
 
    return (
      <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain px-12 py-5 md:py-10">
        <div className=" max-w-7xl p-5 md:px-10 xl:px-0 w-full wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Host, Connect, Celebrate: Your Events, Our Platform!</h1>
            <p className="p-regular-20 md:p-regular-24">Book and Enjoy with our global community!</p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>

          <Image 
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section> 

      <section id="events" className="wrapper px-12 my-8 flex flex-col gap-8 md:gap-12">
          <h2 className="h2-bold px-12">Trusted by <br /> Thousands of Events</h2>
          <h2 className="text-3xl font-bold text-center text-gray-900">
          🎉 Upcoming Events
          </h2>
          <div className="flex w-full flex-col gap-5 md:flex-row">

              <HardcodedEvents />
          </div>
          
      </section>
      </>
    )
  }