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
              <div>
                <label htmlFor='email'>Email&nbsp;address</label>
                <input type="email" className='email' id='email' name='email' placeholder='name@gmail.com' />
              </div>
              <div>
                <label htmlFor='password'>Password</label>
                <input type="password" className='password' id='password' name='password' placeholder='Password'/>
              </div>
              <Link to='/home'><button type='submit' className='btn btn-submit'>sign&nbsp;in</button></Link>
            </form>
          </div>
        </div>
    </>
  )
}

export default Login