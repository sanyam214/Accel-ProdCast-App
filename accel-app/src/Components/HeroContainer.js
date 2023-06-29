import React from 'react'
import HeroImage from './HeroImage'

const HeroContainer = () => {
  return (
    <div>
        <div className='w-[50%] flex flex-col justify-center items-center mt-[-400px] rounded-lg ml-[80px]'>
          <div className='flex flex-row justify-between h-[100px] absolute mt-[-430px] w-[500px]'>
            <h2 className='p-2 text-[16px] whiteColor'>Logo</h2>
            <ul className='list-none flex flex-row ml-[570px]'>
                <li className='p-2 text-[16px] mr-7 whiteColor'>About</li>
                <li className='p-2 text-[16px] mr-7 whiteColor'>Pricing</li>
                <li className='p-2 text-[16px] whiteColor'>Review</li>
            </ul>
          </div>
        <div className='w-[500px] absolute flex flex-col justify-start items-start'>
            <h1 className='font-bold text-[40px] text-left mb-[15px] whiteColor leading-[50px]'>Learn how to launch <br></br> a successful podcast</h1>
            <p className="text-sm text-left w-[400px] mt-[30px] whiteColor">Lorem Epsum is simply dummy text of the printing and the typesetting industry and Lorem Epsum is simply dummy text of the printing and the typesetting. Lorem ipsum has been the industry
            </p>
            <button className='w-[200px] h-[50px] rounded-lg startedPara mt-[80px] danger-gradient whiteColor font-bold'>SignUp now</button>
        </div>
        </div>
        <HeroImage />
    </div>
  )
}

export default HeroContainer