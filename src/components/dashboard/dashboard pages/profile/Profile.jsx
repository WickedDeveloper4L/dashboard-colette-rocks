import React from 'react'
import profilepic from '../../../../pngs/Ellipse7.png'
import CInput from '../../../CInput/CInput'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import './profile.scss'

const Profile = () => {


 const [value, setValue] = React.useState()

const [inputs, setInputs] = React.useState({
  firstName:'',
  lastName:'',
  email:'',
  phone:value,
  country:''
})



const handleChange = (event) => {
  const { name, value } = event.target
  setInputs((prev)=>{
    return {...prev, [name]:value}
  })
}


  return (
    <div className="profile-container">
    <div className="profile-content">
    <div className="intro"> <h3>Personal Information</h3>
      <p>Here's what we know about you. Please update it if there have been any recent changes.</p>
</div>
<div className="profile-pic">
<img src={profilepic} alt="profile" className='pic'/>
<img src="https://img.icons8.com/office/30/null/add--v1.png" alt='plus' className='plus'/>
</div>
<div className="input-field">
  <form action="">
  <div className="grid-inputs">
  <CInput
    type='text'
    name='firstName'
    value={inputs.firstName}
    required={true}
    id='fullName'
    label="First Name"
    handleChange={handleChange}
    className='input'
    />
    <CInput
    type='text'
    name='lastName'
    value={inputs.lastName}
    required={true}
    id='fullName'
    label="Last Name"
    handleChange={handleChange}
    className='input'
    />
  </div>
  <div className="email">
  <CInput
    type='email'
    name='email'
    value={inputs.email}
    required={true}
    id='email'
    label="Email"
    handleChange={handleChange}
    />
    <div className="phone-container">
    <label htmlFor="phone">Phone Number</label>
    <div className="phone">
    <PhoneInput
      placeholder="Enter phone number"
      value={value}
      id='phone'
      onChange={setValue}/>
    </div>
    </div>
    <div className="buttons">
      <button>Save</button>
      <button className='black'>Back</button>
    </div>
  </div>
    
  </form>
</div>
    </div>
    </div>
  )
}

export default Profile