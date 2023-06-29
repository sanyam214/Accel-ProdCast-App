import React from 'react'
import HeroContainer from './HeroContainer'

const Head = () => {
  return (
    <div className='relative h-[550px] w-full'>
    <div class="relative top-0 right-0 left-0 h-[700px] my-gradient "></div>
    <div>
    <div className='flex flex-row justify-between absolute mt-[-700px] w-full'>
        <div className='text-[16px] font-bold whiteColor circle-gradient w-[600px]'></div>
            <div className='h-[500px] w-[800px] header-gradient'></div>
    </div>
    </div>
    <HeroContainer />
    </div>
  )
}

export default Head