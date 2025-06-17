import React from 'react';

function ProfileAdmin({profile_img, alt_text, name, email}) {
  return (
    <>
        <div className='flex flex-col gap-4'>
            <div className='relative'>
                <img src={profile_img} alt={alt_text} />
                <div className='absolute bottom-14 right-32 w-6 h-6 bg-red-700 rounded-full text-center text-white extrasmall:left-14'>4</div>
            </div>
            <div><h3 className='font-poppins font-semibold text-3xl text-white'>{name}</h3></div>
            <div><p className='font-poppins text-lg text-white'>{email}</p></div>
        </div>
    </>
  )
}

export default ProfileAdmin;