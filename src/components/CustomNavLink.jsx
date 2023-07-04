import React from 'react'
import { NavLink } from 'react-router-dom'

const CustomNavLink = ({ to, children }) => {
  return (
    <NavLink to={to} className="px-5 py-2 bg-blue-300 rounded-full">{children}</NavLink>
  )
}

export default CustomNavLink