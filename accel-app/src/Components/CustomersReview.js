import React from 'react'
import Testimonial from './Testimonial'

const CustomersReview = () => {
  return (
    <div className='p-[50px] w-full max-w-1200px flex justify-center items-center'>
        <div className='pl-[70px]'>
        <h1 className='text-[30px] font-bold mb-3'>Review from Customers</h1>
        <p className="w-[400px] text-md purpleColor">Lorem Epsum is simply dummy text of the printing and the typesetting industry. Lorem ipsum has been the industry</p>
        <Testimonial />
        </div>
    </div>
  )
}

export default CustomersReview