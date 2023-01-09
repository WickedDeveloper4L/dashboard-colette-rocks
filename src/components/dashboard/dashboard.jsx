import {useRef} from 'react'
import Navigation from './navigation/Navigation'
import { Outlet } from 'react-router-dom'
import './dashboard.scss'
import {FaBars} from 'react-icons/fa'
import Logo from '../../images/Logo white.png'


const Dashboard = () => {

  const navRef = useRef()

  const toggleNav =()=>{
    navRef.current.classList.toggle("responsive_nav")
  }
  return (
    <div className='dashboard'>
    <div className="header">
      <FaBars className='nav_icon' onClick={toggleNav}/>
      <img src={Logo} alt="logo" className='logo'/>
    </div>
    <div className="dashboard_content">
    <Navigation className='navigation' toggleNav={toggleNav} navRef={navRef}/>
    <Outlet className="flow"/>
    </div>
    </div>
  )
}

export default Dashboard