import React from 'react'
import { BsThreeDots } from "react-icons/bs";
function TopText({title}) {
  return (
    <div>
            <div className='flex justify-around items-center extrasmall:justify-between lg:justify-around'>
                <div><h3 className='font-poppins text-base font-medium text-gray-900'>{title}</h3></div>
                <div><a href="#"><BsThreeDots /></a></div>
            </div>
            <div className='flex justify-around py-4'>
                <div className='w-2/3 h-0.5 bg-gray-300 extrasmall:w-full lg:w-2/3'></div>
            </div>
    </div>
  )
}

export default TopText