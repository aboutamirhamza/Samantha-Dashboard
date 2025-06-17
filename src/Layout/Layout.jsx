import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../Components/Sidebar/Sidebar'

function Layout() {
  return (
    <>
        <section className='overflow-hidden'>
            <div className='flex extrasmall:flex-col md:flex-row'>
                <div className='w-1/6 bg-black min-h-screen extrasmall:w-full extrasmall:min-h-0 md:w-1/2 md:min-h-screen xl:w-1/4'><Sidebar /></div>
                <div className='w-full'><Outlet /></div>
            </div>
        </section>
    </>
  )
}

export default Layout