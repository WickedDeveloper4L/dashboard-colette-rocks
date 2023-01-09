import React from 'react'
import './Navigation.scss'
import { NavLink } from 'react-router-dom'
import {TfiWallet} from 'react-icons/tfi'
import {RiExchangeDollarFill} from 'react-icons/ri'
import {CgProfile} from 'react-icons/cg'
import {FiSettings} from 'react-icons/fi'
import Pic from '../../../pngs/Ellipse7.png'
import Logo from '../../../images/Logo white.png'
import {FaTimes} from 'react-icons/fa'

const Navigation = ({navRef, toggleNav}) => {


  return (
    <div className='navigation' ref={navRef}>
    <div className="profile">
    <img src={Pic} alt="pic" className='pic'/>
    <h2 className="name">John Doe</h2>
    <h3 className="email">johndoe@gmail.com</h3>
    </div>
    <div className="links" onClick={toggleNav}>
    <NavLink className={({isActive}) => isActive ? "Link-active link" : "Link-inactive link"} to='/dashboard/Account/Deposit'>
    <TfiWallet className='icon'/>My Wallet</NavLink>
    <NavLink className={({isActive}) => isActive ? "Link-active link" : "Link-inactive link"} to='/dashboard/Transactions'><RiExchangeDollarFill className='icon'/>Transactions</NavLink>
    <NavLink className={({isActive}) => isActive ? "Link-active link" : "Link-inactive link"} to='/dashboard/Profile'><CgProfile className='icon'/>Profile</NavLink>
    <NavLink className={({isActive}) => isActive ? "Link-active link" : "Link-inactive link"} to='/dashboard/settings'><FiSettings className='icon'/>Settings</NavLink>
    </div>
      <img src={Logo} alt="colette-rocks" className='logo'/>
      <FaTimes className='close_btn' onClick={toggleNav}/>
    </div>
  )
}

export default Navigation