import './SignUpForm.scss'
import CButton from '../CButton/CButton'
import CInput from '../CInput/CInput'
import {Link} from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import Carousel from '../carousel/Carousel'
import logo from '../../images/logo_black.png'
import PasswordStrengthBar from 'react-password-strength-bar'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import React from 'react'
import 'react-phone-input-2/lib/style.css'

const SignUp = () =>{
   const [inputs, setInputs] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
        })
    const [passwordShown, setPasswordShown] = React.useState(false)
    
   
    const handleSubmit = async (event) =>{
        event.preventDefault()
        const {firstName, lastName, email, password} = inputs
        if(password.length < 8){
            alert("password must be a minimum of 8 characters! check and try again!")
            return
        }
        try {
            const {user} = await createUserWithEmailAndPassword(auth, email, password)
            console.log(user)
            const data = {firstName:firstName, lastName:lastName}

            await createUserProfileDocument(user, data)

            setInputs({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
            console.log(inputs)
        } catch (error) {
            console.error(error)
        }

    }

    const handleChange =(event)=>{
        const {name, value} = event.target
        setInputs((prevInfo) =>{
                return{
                    ...prevInfo,
                    [name]: value
                }
               
            }
        )
    }
    function togglePassword() {
        setPasswordShown(!passwordShown)
    }
    return(
        <div className="container">
        <div className='signup-page'>
        <img src={logo} alt="logo" />
        <div className="signup_container">
        <div className="signup_content">
        <h1 className='title'>Get Started</h1>
        <p className='subtitle'> Let's start the Journey.</p>
        <form onSubmit={handleSubmit} className='form'>
        <CInput
            type='text'
            handleChange={handleChange}
            name='firstName'
            value={inputs.firstName}
            required={true}
            id='firstName'
            label="first name"
            placeholder="first-name"
            />
            <CInput
            type='text'
            handleChange={handleChange}
            name='lastName'
            value={inputs.lastName}
            required={true}
            id='lastName'
            label="Last name"
            placeholder="last-name"
            />
            <CInput
            type='email'
            handleChange={handleChange}
            name='email'
            value={inputs.email}
            required={true}
            id="email"
            label="Email"
            placeholder="your email"
            />
            <div className="password"> 
            <CInput
            type={passwordShown ? "text" : "password"}
            handleChange={handleChange}
            name='password'
            value={inputs.password}
            required={true}
            id='password'
            label="Password"
            placeholder="password"
            />
           {passwordShown ?  <AiOutlineEyeInvisible onClick={togglePassword} className='password-toggle'/> : <AiOutlineEye onClick={togglePassword} className='password-toggle'/>}
            </div>
           {inputs.password.length ? <PasswordStrengthBar password={inputs.password}/> : null}
            
          <CButton type='submit' text="Create account" className='button'/>
          <div className="linker_cont">
          <span className='sub'>Already have an account?</span> 
         <Link to='/' className='subtitle1'> Sign In!</Link>
          </div>
        </form>   
        </div>
        </div>
        </div>
        <div ><Carousel className='carousel'/></div>        
        </div>
    )
}

export default SignUp