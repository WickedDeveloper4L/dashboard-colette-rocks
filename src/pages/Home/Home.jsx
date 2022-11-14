import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../../components/dashboard/dashboard'
import LoginForm from '../../components/LoginForm/LoginForm'
import SignUp from '../../components/sign-up-form/SignUpForm'

const Home = () => {
  return (
    <div>
        
        <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
    </div>
  )
}

export default Home