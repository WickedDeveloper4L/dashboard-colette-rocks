import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../../components/dashboard/dashboard'
import Account from '../../components/dashboard/dashboard pages/Account/Account'
import Deposit from '../../components/dashboard/dashboard pages/Account/Account pages/Deposit/Deposit'
import Withdraw from '../../components/dashboard/dashboard pages/Account/Account pages/Withdraw/Withdraw'
import Profile from '../../components/dashboard/dashboard pages/profile/Profile'
import Settings from '../../components/dashboard/dashboard pages/Settings/Settings'
import Transactions from '../../components/dashboard/dashboard pages/transactions/Transactions'
import LoginForm from '../../components/LoginForm/LoginForm'
import SignUp from '../../components/sign-up-form/SignUpForm'

const Home = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='Account' element={<Account/>}>
            <Route path='Deposit' element={<Deposit/>}/>
            <Route path='Withdraw' element={<Withdraw/>}/>
          </Route>
          <Route path='Transactions' element={<Transactions/>}/>
          <Route path='Settings' element={<Settings/>}/>
          <Route path='Profile' element={<Profile/>}/>
        </Route>
        </Routes>
    </div>
  )
}

export default Home