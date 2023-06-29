import React from 'react'
import InteractiveFeatureCard from './InteractiveFeatureCard'

const AboutCourse = () => {
  return (
    <div className='flex flex-row justify-center items-center mt-[100px]'>
        <div className='flex flex-col justify-around w-[40%]'>
            <div className='flex flex-row justify-center'>
                <InteractiveFeatureCard classes={"w-[268px] h-[160px] border-2 border-purple-900 rounded-lg p-3"}/>
                <InteractiveFeatureCard classes={"w-[268px] h-[160px] border-2 border-purple-900 rounded-lg my-6 mx-3 p-3"}/>
            </div>
            <div className='flex flex-row justify-center'>
                <InteractiveFeatureCard classes={"w-[268px] h-[160px] border-2 border-purple-900 rounded-lg p-3"}/>
                <InteractiveFeatureCard classes={"w-[268px] h-[160px] border-2 border-purple-900 rounded-lg my-6 mx-3 p-3"}/>
            </div>
        </div>
        <div className='w-[40%] flex flex-col justify-center items-center'>
        <div className='absolute flex flex-col justify-center items-center'>
            <h1 className='font-bold text-[35px] text-center mb-[15px]'>About the Course</h1>
            <p className="text-sm text-center whiteColor paraColor w-[300px]">Lorem Epsum is simply dummy text of the printing and the typesetting industry. Lorem ipsum has been the industry
            </p>
            <button className='w-[200px] h-[50px] rounded-lg startedPara mt-[70px] danger-gradient whiteColor font-bold'>Explore More</button>
        </div>
        </div>
    </div>
  )
}

export default AboutCourse