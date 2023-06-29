import React, { useState } from 'react'
import PlanCard from './PlanCard'
import podcast from '../utility/images/Podcast.png'
import LineImage from '../utility/images/LineImage.png'

const ChoosePlan = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [value, setValue] = useState("54")
  const [planMonth, setPlanMonth] = useState("month")
  const handleToggleYearly = () => {
    setIsMonthly(false);
    setValue("1054")
    setPlanMonth("year")
  }
  const handleToggleMonthly= () => {
    setIsMonthly(true);
    setValue("54")
    setPlanMonth("month")
  }
  return (
    <div className='flex flex-col items-center mt-[76px]' style={{backgroundImage:`url(${LineImage})`, backgroundSize: "100% 100%"}}>
        <div className='w-[455px] h-[166px] flex flex-col items-center'>
            <h3 className='font-bold text-md text-[32px] text-center'>Choose your Plan</h3>
            <p className=" text-md font-sm text-center mt-6">Lorem Epsum is simply dummy text of the printing and the typesetting industry. Lorem ipsum has been the industry</p>
            <div className='flex flex-row w-[180px] rounded-lg shadow-lg mt-6 p-1'>
                {
                  (isMonthly) ?
                  <div className='w-[90px] border-2 bg-purple-400 whiteColor rounded-lg p-1 text-sm text-center' onClick={handleToggleMonthly}>Monthly</div>
                  : <div className='w-[90px] p-1 text-sm text-center' onClick={handleToggleMonthly}>Monthly</div>
                }
                {
                  (isMonthly) ? 
                  <div className='w-[90px] p-1 text-sm text-center' onClick={handleToggleYearly}>Yearly</div>
                  : <div className='w-[90px] border-2 bg-purple-400 whiteColor rounded-lg p-1 text-sm text-center' onClick={handleToggleYearly}>Yearly</div>
                }
            </div>
            <div className='flex justify-end items-end items-end w-full'><img src={podcast} className='right-0.5'></img></div>
        </div>
        <div className='w-full flex flex-row justify-center items-center mt-[50px]'>
            <PlanCard classes={"w-[303px] h-[357px] p-[35px] m-[30px] bg-white border-[2px] border-purple-900 p-3 rounded-md flex flex-col justify-between shadow-lg"} planType={"Basic"} btnClass={"purpleColor w-[149px] h-[44px] rounded-md text-[12px] border-[1px] border-purple-900"} textColor={"purpleColor text-[30px] font-bold"} value={value} planMonth={planMonth}/>
            <PlanCard classes={"w-[303px] h-[357px] p-[35px] m-[30px] ghostPurple p-3 rounded-md flex flex-col justify-between whiteColor shadow-lg"} planType={"Premium"} btnClass={"purpleColor w-[149px] h-[44px] rounded-md text-[12px] border-[1px] border-purple-900 bg-white"} textColor={"text-[30px] font-bold"} value={value} planMonth={planMonth}/>
            <PlanCard classes={"w-[303px] h-[357px] p-[35px] m-[30px] bg-white border-[2px] border-purple-900 p-3 rounded-md flex flex-col justify-between shadow-lg"} planType={"Basic"} btnClass={"purpleColor w-[149px] h-[44px] rounded-md text-[12px] border-[1px] border-purple-900"} textColor={"purpleColor text-[30px] font-bold"} value={value} planMonth={planMonth}/>
        </div>
    </div>
  )
}

export default ChoosePlan