import React from 'react'
import { TweetCard } from './helper/TweetCard'

const Testimonials = () => {
  return (
    <div className="w-full h-auto lg:h-auto mx-auto  flex flex-col items-center">
      <div className="mt-8 w-auto text-center">
        <h1 className="text-[var(--primary)] text-4xl">
          Voices of Our{" "}
          <span className="gradient-linear-text font-semibold">Customers</span> 
        </h1>
        <p className="mt-4 text-lg">
          Hear the trusted feedback of our customer who have put their faith on us.
        </p>
      </div>
    <TweetCard/>
    </div>
  )
}

export default Testimonials

