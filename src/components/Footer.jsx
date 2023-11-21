import React, { useState } from 'react'
import { ImHome } from "react-icons/im";
import { RiUserFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

export const Footer = () => {

  const [activeIcon,setActiveIcon] = useState("");

  const navigate = useNavigate();

  const moveToDashboard = () => {
    setActiveIcon("dashboard");
    navigate("/dashboard");
  }

  const moveToHome = () => {
    setActiveIcon("employee");
    navigate("/details");
  }

  return (
    <div className='footer-top'>
       <div className={`${activeIcon === 'dashboard' ? 'left-btn' : '' } btnn`} onClick={moveToDashboard}>
        <ImHome fill='#36A546CC' fontSize={30}/>
       </div>
       <div className={`${activeIcon === 'employee' ? 'right-btn' : '' } btnn`} onClick={moveToHome}>
        <RiUserFill fill='#36A546CC' fontSize={30}/>
       </div>
    </div>
  )
}
