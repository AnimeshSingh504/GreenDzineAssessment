import React from 'react'
import loginLogo from "../assets/logo/Group 3@2x.png"

export const LoginLogo = () => {
  return (
    <div className='topLogo'>
        <img src={loginLogo} alt="" className='mainLogo'/>

        <div className='logoText'>We are Electric</div>
    </div>
  )
}
