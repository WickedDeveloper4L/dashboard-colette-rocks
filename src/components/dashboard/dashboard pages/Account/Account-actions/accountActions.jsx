import React from 'react'
import './accountActions.scss'
import {IoIosCash} from 'react-icons/io'
import {BsCash} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const AccountActions = () => {
  return (
    <div>
    <div className="account_controls">
      <h3 className="greeting">Hello John</h3>
      <div className="cash_container">
        <div className="total_balance">
          <IoIosCash className='icon'/>
          <div className="balance">
          <h3 className="title">Your Total balance</h3>
          <h3 className="cash">$6,000.00</h3>
        </div>
      </div>
      <div className="fund_balance">
        <BsCash className='icon'/>
        <div className="balance">
          <h3 className="title">Funded balance</h3>
          <h3 className="cash">$4,500.00</h3>
        </div>
      </div>
    </div>
    <div className="activities">
      <NavLink  className={({isActive}) => isActive ? "Link-active content" : "Link-inactive content"}  to='/dashboard/Account/Deposit'>
        <FaTelegramPlane className='icon one'/>
        <div className="text"><p>Deposit</p></div>
      </NavLink>
    <NavLink className={({isActive}) => isActive ? "Link-active content" : "Link-inactive content"}  to='/dashboard/Account/Withdraw'>
      <FaTelegramPlane className='icon three'/>
      <div className="text"><p>Withdraw</p></div>
    </NavLink>
    </div>
    </div>
    </div>
  )
}

export default AccountActions