import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonial = () => {
  return (
    <div>
        <div className='w-[500px] flex flex-row flex-nowrap w-full'>
          <TestimonialCard/>
          <TestimonialCard />
          <TestimonialCard />
        </div>
      <div className='w-full h-[20px]'>
          <ul className='flex flex-row justify-center'>
            <li className='rounded-full border-2 border-purple-900 w-[10px] h-[10px] m-2 bg-purple-900'></li>
            <li className='rounded-full border-2 border-purple-900 w-[10px] h-[10px] m-2'></li>
            <li className='rounded-full border-2 border-purple-900 w-[10px] h-[10px] m-2'></li>
            <li className='rounded-full border-2 border-purple-900 w-[10px] h-[10px] m-2'></li>
            <li className='rounded-full border-2 border-purple-900 w-[10px] h-[10px] m-2'></li>
          </ul>
      </div>
    </div>
  )
}

export default Testimonial