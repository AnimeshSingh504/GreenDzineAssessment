import React, { useState, useEffect } from 'react'
import { ImHome } from "react-icons/im";
import { RiUserFill } from "react-icons/ri";
import { useLocation, useNavigate } from 'react-router-dom';

export const Footer = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [activeIcon,setActiveIcon] = useState('dashboard');

  useEffect(() => {
    if (location.pathname === '/dashboard') {
      setActiveIcon('dashboard');
    } else if (location.pathname === '/details') {
      setActiveIcon('employee');
    }
  }, [location.pathname]);

  

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
