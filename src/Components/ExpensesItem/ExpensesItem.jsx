import React from 'react'

function ExpensesItem({icon, color, title, timeshorttext, amount}) {
  return (
    <div>
        <div className='py-2'>
                <div className='flex justify-around items-center'>
                    <div className='flex gap-4'>
                        <div className={`w-14 h-14 ${color} rounded-full flex justify-center items-center text-white`}>{icon}</div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='font-poppins text-base font-medium text-text-color'>{title}</h3>
                            <p className='font-poppins text-sm text-gray-400'>{timeshorttext}</p>
                        </div>
                    </div>
                    <div><p className='font-poppins text-text-color font-semibold text-base'>{amount}</p></div>
                </div>
        </div>
    </div>
  )
}

export default ExpensesItem