import React from 'react'
import { HeroSection } from '../subComponents/HeroSection'
import { SearchBar } from '../subComponents/SearchBar'
import { EmpData } from '../subComponents/EmpData'

export const EmpInfo = () => {
  return (
    <div>
        <HeroSection/>

        <SearchBar/>

        <EmpData/>
    </div>
  )
}
