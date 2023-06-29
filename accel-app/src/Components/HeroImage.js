import React from 'react'
import Image1 from '../utility/images/heroImage-3.png'
import Image2 from '../utility/images/heroImage-2.png'
import Image3 from '../utility/images/heroImage-1.png'
import Image4 from '../utility/images/image-2.png'
import GroupImage from '../utility/images/Group 75.png'

const HeroImage = () => {
  return (
    <div className='absolute w-full flex justify-end items-end mt-[-150px] pr-[110px]'>
        <div style={{backgroundImage:`url(${GroupImage})`, backgroundSize: "100% 100%"}} className='w-[350px] h-[350px] bg-contain'>
            <img src={Image1} className='w-[310px] h-[200px]'></img>
            <img src={Image2} className='w-[310px] h-[200px] ml-[-60px] mt-[-100px] heroImage'></img>
            <img src={Image3} className='ml-[220px] mt-[-40px]'></img>
            <img src={Image4} className='mt-[-330px] ml-[280px]'></img>
        </div>
    </div>
  )
}

export default HeroImage