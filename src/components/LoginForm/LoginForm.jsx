import { useState } from 'react'
import './LoginForm.scss'
import CInput from '../CInput/CInput'
import CButton from '../CButton/CButton'
import {Link, useNavigate} from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebase.utils'
import Carousel from '../carousel/Carousel'
import logo from '../../images/logo_black.png'

const LoginForm = () =>{
    const [info, setInfo] = useState({
        email: "",
        password: ""
    })
     const navigate = useNavigate()

    const handleSubmit = async (event)=>{
        event.preventDefault()
        const {email, password} = info   


        try{
            await signInWithEmailAndPassword(auth, email, password)
            setInfo({email:"",
                    password:""})
                    
            navigate('/dashboard/Account')
        } catch(error){
            console.log(error)
        }
    }

    const handleChange =(event)=>{
        const {name, value} = event.target
        setInfo(
            prevInfo =>({
                ...prevInfo,
                [name]: value
            })
        )
    }

    
    return(
        <div className='container'>
        <div className='login-page'>
        <img src={logo} alt="logo" />
        <div className="login_container">
        <div className="login_content">
        <h1 className='title'>Welcome Back</h1>
        <p className='subtitle'> Login to your dashboard below.</p>
        <form onSubmit={handleSubmit} className='form'>
            <CInput
            type='email'
            handleChange={handleChange}
            name='email'
            value={info.email}
            required={true}
            id="email"
            label="Email"
            placeholder="your email"

            />
            <CInput
            type='password'
            handleChange={handleChange}
            name='password'
            value={info.password}
            required={true}
            id='password'
            label="Password"
            placeholder="password"
            />
            <a href='*' className='subtitle1'> forgot password?</a>
          <CButton text="Sign In" className='button'/>
          <div className="linker_cont">
          <span className='sub'>Dont have an account?</span> 
         <Link to='/signUp' className='subtitle1'> Sign Up!</Link>
          </div>
        </form>   
        </div>
        </div>
        </div>
        <Carousel/>
        </div>
       
    )
}

export default LoginForm