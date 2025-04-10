import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import HardcodedEvents from '@/components/shared/EventCard'

const page = () => {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center px-12 py-5 md:py-10">
        <div className="wrapper px-5 flex items-center justify-center sm:justify-between">
          <h3 className='h3-bold text-center sm:text-left'>My Events</h3>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/#events">
              Explore More Events
            </Link>
          </Button>
        </div>
        <HardcodedEvents limit={1} />
    </section>

      

    <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center px-12 py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
            <h3 className='h3-bold text-center sm:text-left'>Events Organized</h3>
            <Button asChild size="lg" className="button hidden sm:flex">
                <Link href="/events/create">
                Create New Event
                </Link>
            </Button>
        </div>
        <HardcodedEvents limit={2} />
    </section>
    </>
  )
}

export default page