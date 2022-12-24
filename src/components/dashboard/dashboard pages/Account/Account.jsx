import React from 'react'
import './Account.scss'
import { Outlet } from 'react-router-dom'
import AccountActions from './Account-actions/accountActions'
import Carousel from '../../../carousel/Carousel'
import Logo from '../../../../images/logo_black.png'

const Account = () => {
  return (
  <div className='Account_page'>
    <div className="pages_actions">
    <AccountActions/>
    <Outlet/>
    </div>
    <div className='carousel'>
    <img src={Logo} alt="logo" className='logo'/>
    <Carousel/>
    </div>
  </div>
  )
}

export default Account