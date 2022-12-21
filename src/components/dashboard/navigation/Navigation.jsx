import React from 'react'
import './Navigation.scss'
import { NavLink } from 'react-router-dom'
import {TfiWallet} from 'react-icons/tfi'
import {RiExchangeDollarFill} from 'react-icons/ri'
import {CgProfile} from 'react-icons/cg'
import {FiSettings} from 'react-icons/fi'

const Navigation = () => {
  return (
    <div className='navigation'>
    <div className="profile">
    <h2 className="name">John Doe</h2>
    <h3 className="email">johndoe@gmail.com</h3>
    </div>
    <div className="links">
    <NavLink className={({isActive}) => isActive ? "Link-active link" : "Link-inactive link"} to='/dashboard/Account'><TfiWallet className='icon'/>My Wallet</NavLink>
    <NavLink className={({isActive}) => isActive ? "Link-active link" : "Link-inactive link"} to='/dashboard/Transactions'><RiExchangeDollarFill className='icon'/>Transactions</NavLink>
    <NavLink className={({isActive}) => isActive ? "Link-active link" : "Link-inactive link"} to='/dashboard/Profile'><CgProfile className='icon'/>Profile</NavLink>
    <NavLink className={({isActive}) => isActive ? "Link-active link" : "Link-inactive link"} to='/dashboard/settings'><FiSettings className='icon'/>Settings</NavLink>
    </div>
    </div>
  )
}

export default Navigation