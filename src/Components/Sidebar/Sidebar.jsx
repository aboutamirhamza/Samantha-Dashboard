import React from 'react'
import ProfileAdmin from './ProfileAdmin/ProfileAdmin';
import Profile from '../../img/profile.png'
import Navbar from '../Navbar/Navbar';

function Sidebar() {
  return (
    <>
        <div className='p-14 flex flex-col gap-32'>
            <div><ProfileAdmin profile_img={Profile} alt_text={"Profile"} name={"Samantha"} email={"samantha@email.com"} /></div>
            <div><Navbar /></div>
        </div>   
    </>
  )
}

export default Sidebar;