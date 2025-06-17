import React from 'react'
import NavLink from './NavLink'

function Navbar() {

    const navigation = [
        {
            id:1,
            name:'Dashboard',
            path:'/',
        },
        {
            id:2,
            name:'Expenses',
            path:'/expenses',
        },
        {
            id:3,
            name:'Wallets',
            path:'/wallets',
        },
        {
            id:4,
            name:'Summary',
            path:'/summary',
        },
        {
            id:5,
            name:'Accounts',
            path:'/accounts',
        },
        {
            id:6,
            name:'Settings',
            path:'/settings',
        },
    ]

  return (
    <>
        <nav className='flex flex-col gap-10'>
            {
                navigation.map(navItem => (
                    <NavLink key={navItem.id} name={navItem.name} path={navItem.path} />
                ))
            }
        </nav>
    </>
  )
}

export default Navbar