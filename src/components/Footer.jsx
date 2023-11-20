import React from 'react'
import { ImHome } from "react-icons/im";
import { RiUserFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <div>
        <div>
            <ImHome fill='#FFFFFF' fontSize={30}/>
            <RiUserFill fill='#FFFFFF' fontSize={30}/>
        </div>
    </div>
  )
}
