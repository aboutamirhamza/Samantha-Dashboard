import React from 'react'
import LeftExpenses from '../Components/LeftExpenses/LeftExpenses'
import RightExpenses from '../Components/RightExpenses/RightExpenses'

function Expenses() {
  return (
    <>
      <div className='flex extrasmall:flex-col gap-4 xl:flex-row xl:gap-0'>
        <div className='w-4/5 extrasmall:w-full xl:w-4/5'><LeftExpenses /></div>
        <div className='w-1/3 extrasmall:w-full xl:w-1/3'><RightExpenses /></div>
      </div>
    </>
  )
}

export default Expenses