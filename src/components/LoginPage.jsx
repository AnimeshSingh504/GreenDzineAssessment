import React from 'react'
import { LoginForm } from '../subComponents/LoginForm'
import { LoginLogo } from '../subComponents/LoginLogo'

export const LoginPage = () => {
  return (
    <div className='loginPage'>
        <LoginLogo/>
        <LoginForm/>
    </div>
  )
}
