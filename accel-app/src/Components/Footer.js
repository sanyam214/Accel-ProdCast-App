import React from 'react'
import twitter from "../utility/images/uil_twitter.png"
import facebook from "../utility/images/Vector.png"
import instagram from "../utility/images/basil_instagram-solid.png"
import youtube from "../utility/images/uil_youtube.png"

export const StartedContent = () => {
    return(
        <div className='w-full absolute flex flex-col justify-center items-center mt-[-365px]'>
            <h1 className='font-bold text-[30px] text-center mb-[15px]'>We have what you're looking for</h1>
            <p className="text-sm text-center whiteColor paraColor w-[700px]">Lorem Epsum is simply dummy text of the printing and the typesetting industry. Lorem ipsum has been the industry
            Lorem Epsum is simply dummy text of the printing and the typesetting industry
            </p>
            <button className='w-[200px] h-[50px] rounded-lg startedPara mt-[100px] danger-gradient whiteColor font-bold'>Get Started Now</button>
        </div>
    );
}

const Footer = () => {
  return (
    <div className='bg-transparent mt-[-70px] absolute flex align-center justify-center w-full'>
        <StartedContent />
    <div className='w-[900px] border-t-[0.5px] border-white flex justify-between p-6'>
        <p className='whiteColor text-sm'>All Right Reserved@Copyright 2023</p>
        <div className='whiteColor'>
            <ul className='list-none flex flex-row'>
                <li className='px-4 text-sm font-bold'>Terms of service</li>
                <li className='px-4 text-sm font-bold'>Privacy Policy</li>
                <li className='px-2 text-sm font-bold'>Product</li>
            </ul>
        </div>
        <div className='whiteColor'>
            <ul className='list-none flex flex-row'>
                <li className='px-2'><img src={facebook}></img></li>
                <li className='px-2'><img src={youtube}></img></li>
                <li className='px-2'><img src={instagram}></img></li>
                <li className='px-2'><img src={twitter}></img></li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Footer