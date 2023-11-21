import React, { useState } from 'react'
import { LOGIN_VAL } from '../data/loginCredientials/loginData';
import toast, {Toaster} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {

    const navigate = useNavigate();

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

    const success = () => {
        toast.success("Login Successful");
        setTimeout(() => {
            navigate('/dashboard');
        },2000);
    }

    const decline = () => {
        toast.error("Username or password is wrong");
    }

    // things need to be done
    const handleOnSubmit = (event) => {
        event.preventDefault();
        if(formdata.username === LOGIN_VAL.userName && formdata.password === LOGIN_VAL.password){
            success();
        }
        else{
            decline();
        }
    }


  return (
    <div>
        <Toaster/>
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
