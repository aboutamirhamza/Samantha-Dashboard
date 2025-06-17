import React from 'react'

function SaveMoney({image, title, desc, btn}) {
    return (
       <div className='bg-gray-200 rounded-md py-8'>
                <div className='p-12 relative'>
                    <img src={image} alt="Save Money" className='absolute -top-14' />
                </div>
                <div className='flex flex-col gap-4 px-8'>
                    <div><h3 className='font-poppins text-lg text-text-color font-semibold'>{title}</h3></div>
                    <div><p className='font-poppins text-sm text-text-color'>{desc}</p></div>
                   {
                    btn && (
                        <div><button className='w-full rounded-md uppercase text-white font-poppins text-xl bg-black p-6 hover:bg-gray-700 hover:transition-colors'>{btn}</button></div>
                    )}
                </div>
            </div>
    )
}

export default SaveMoney