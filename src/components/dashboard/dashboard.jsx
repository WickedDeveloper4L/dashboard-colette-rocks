import React from 'react'
import Header from './header/Header'
import Navigation from './navigation/Navigation'
import { Outlet } from 'react-router-dom'
import './dashboard.scss'

const Dashboard = () => {
  return (
    <div className='dashboard'>
    <div className="dashboard_content">
    <Navigation className='navigation'/>
    <Outlet className="flow"/>
    </div>
    </div>
  )
}

export default Dashboard