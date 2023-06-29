import React from 'react'
import profileImage from '../utility/images/Lolla 1.png'
import starImage from '../utility/images/star.png'

const TestimonialCard = () => {
  return (
    <div>
        <div className="testimonial shadow-lg p-6 mr-4 mt-10 mb-[50px]">
            <div className='flex flex-row'>
              <img src={profileImage} className='mr-[20px]'></img>
              <div>
                <h3>Lolla Smith</h3>
                <h4>Microsoft</h4>
                <div className='flex flex-row flex-wrap justify-between'>
                  <img src={starImage}></img>
                  <img src={starImage}></img>
                  <img src={starImage}></img>
                  <img src={starImage}></img>
                  <img src={starImage}></img>
                </div>
              </div>
            </div>
            <p className='mt-[10px] purpleColor text-sm'>Lorem Epsum is simply dummy text of the printing and the typesetting industry. Lorem ipsum has been the industry</p>
        </div>
    </div>
  )
}

export default TestimonialCard