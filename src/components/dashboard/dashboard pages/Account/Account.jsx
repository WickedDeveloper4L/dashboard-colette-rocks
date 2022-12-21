import React from 'react'
import './Account.scss'
import { Outlet } from 'react-router-dom'
import AccountActions from './Account-actions/accountActions'

const Account = () => {
  return (
  <div className='Account_page'>
    <AccountActions/>
    <Outlet/>
  </div>
  )
}

export default Account