import React from 'react'
import '../styles/login.css'
import Loginsvg from '../images/login-svg.svg'
import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
const Login = () => {
  return (

    <>
      <div className="backdrop"></div>
        <div className='login'>
          <div className="img-container">
            <Link to='/home'>
              <BiArrowBack className='backarrow'/>
            </Link>
            <img src={Loginsvg} alt="" />
          </div>
          <div className="form-container">
            <h2 className='form-title'>Admin Login</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" className='email' placeholder='Email' />
              <input type="password" className='password' placeholder='Password' />
              <Link to='/home'><button type='submit' className='btn'>sign&nbsp;in</button></Link>
            </form>
          </div>
        </div>
    </>
  )
}

export default Login