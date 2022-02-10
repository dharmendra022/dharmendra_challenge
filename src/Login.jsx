import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <>
        <div className='loginPage'>
        <form action="">
            <label htmlFor="">Enter Your Email</label>
            <br />
            <input type="text" name="" id="" placeholder='email'/>
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="text" placeholder='password' />
            <br />
            {/* <button>Submit</button> */}
            <Link to='/foodapp'>Submit</Link>
        </form>

        </div>
    </>
  )
}

export default Login