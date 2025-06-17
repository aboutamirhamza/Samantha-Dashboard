import React from 'react'
import { FiPlusCircle } from "react-icons/fi";
import { Link } from 'react-router';

function Header({title, datetime, groupprofile, graph}) {
  return (
    <div>
        <div className='flex justify-evenly extrasmall:flex-col extrasmall:justify-center extrasmall:gap-4 xl:flex-row xl:justify-evenly xl:gap-0'>
            <div className='flex flex-col gap-2'>
                <h3 className='font-poppins text-3xl font-semibold'>{title}</h3>
                <p className='font-poppins text-base text-gray-400'>{datetime}</p>
            </div>
            <div className='flex gap-2'>
                <div><img src={groupprofile} alt="" /></div>
                <div><Link to='/'><FiPlusCircle className='w-9 h-9 text-gray-400' /></Link></div>
            </div>
        </div>

        <div className='px-56 py-7 extrasmall:hidden xl:px-56 xl:block'>
            <div><img src={graph} alt="" /></div>
        </div>
    </div>
  )
}

export default Header