import React from 'react'

const PlanCard = ({classes, planType, btnClass, textColor, value}) => {
  return (
    <div className={classes}>
        <h2 className='font-bold'>{planType} Plan</h2>
        <p className="text-sm">Lorem Epsum is simply dummy text of the printing. Lorem ipsum has been the industry</p>
        <div className='flex flex-row'>
            <h2 className={textColor}>{`$ ${value}`}</h2>
            <p className='mt-[12px] ml-5 text-sm'>/month</p>
        </div>
        <ul className='list-disc ml-4'>
            <li>Free access to video class</li>
            <li>Free access to video class</li>
            <li>Free access to video class</li>
        </ul>
        <button className={btnClass}>
            Start free trial
        </button>
    </div>
  )
}

export default PlanCard