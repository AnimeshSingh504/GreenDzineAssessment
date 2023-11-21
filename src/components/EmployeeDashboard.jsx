import React from 'react'
import { HeroSection } from '../subComponents/HeroSection'
import { EmployeeDetails } from '../subComponents/EmployeeDetails'
import { Footer } from './Footer'

export const EmployeeDashboard = () => {
  return (
    <div className='dashboard-top'>
        <div className='dashboardContainer'>

            <HeroSection/>

            <EmployeeDetails/>

            <Footer/>

        </div>
    </div>
  )
}
