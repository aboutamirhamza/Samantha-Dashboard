import React from 'react'
import { Link } from 'react-router'

function NavLink({name, path}) {
  return (
    <>
      <li className='font-poppins text-gray-400 list-none text-2xl font-semibold hover:text-white hover:transition-colors focus:text-white'><Link to={path}>{name}</Link></li>
    </>
  )
}

export default NavLink