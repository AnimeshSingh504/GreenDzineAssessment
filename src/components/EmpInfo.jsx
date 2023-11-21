import React, { useState } from 'react'
import { HeroSection } from '../subComponents/HeroSection'
import { SearchBar } from '../subComponents/SearchBar'
import { EmpData } from '../subComponents/EmpData'
import { Footer } from './Footer'

export const EmpInfo = () => {

    const [userdata, setuserData] = useState("");
    
  return (
    <div>
        <HeroSection/>

        <SearchBar setuserData={setuserData}/>

        <EmpData userdata = {userdata} setuserData = {setuserData}/>

        <Footer/>
    </div>
  )
}
