import React from 'react'

function Progress({title, amount, width}) {
    return (
        <div>
            <div className='py-2'>
                <div className='flex justify-between'>
                    <div><h3 className='font-poppins font-medium text-sm text-text-color'>{title}</h3></div>
                    <div><p className='font-poppins text-gray-400 text-sm'>{amount}</p></div>
                </div>
                <div className='py-4'>
                    <div className='relative w-full h-2 bg-gray-200 rounded-full'><div className={`absolute ${width} h-2 bg-green-500 rounded-full`}></div></div>
                </div>
            </div>
        </div>
    )
}

export default Progress