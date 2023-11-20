import React, { useState } from 'react'
import { LOGIN_VAL } from '../data/loginCredientials/loginData';

export const LoginForm = () => {

    const [formdata,setformdata] = useState({
        username: "", password : ""
    });

    const handleOnChange = (event) => { 
        setformdata( (prevdata) => (
            {
                ...prevdata,
                [event.target.name]: event.target.value,
            }
        ))
    };

    // things need to be done
    const handleOnSubmit = (event) => {
        event.preventDefault();
        if(formdata.username === LOGIN_VAL.userName && formdata.password === LOGIN_VAL.password){

        }
        else{
            
        }
    }


  return (
    <div>
        <form onSubmit={handleOnSubmit}
            className="formDesign">
            <input
                required
                type='text'
                name="username"
                placeholder='E-mail'
                value={formdata.username}
                onChange={handleOnChange}
                className='user-pass user'
            />

            <input
                required
                type='password'
                name='password'
                placeholder='Password'
                value={formdata.password}
                onChange={handleOnChange}
                className='user-pass'
            />
            <button
                type='submit'
                className='btn'
            >Login</button>

            <p className='forgot-psswd'>Forgot Password?</p>
        </form>
    </div>
  ) 
}
