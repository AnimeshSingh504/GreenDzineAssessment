import React from 'react'
import caller from "../assets/logo/Group 46@2x.png"
import centerLogo from "../assets/logo/moptro logo@2x.png"

export const HeroSection = () => {
  return (
    <div className='hero-top'>
      <div className='hero-section'>
        <div className='top-lvl'>
          <img src={caller} alt="" className='top-img'/>
        </div>
        <div className='bottom-lvl'>
          <div>
            <img src={centerLogo} alt="" className='bottom-img'/>
          </div>
          <div className='above-four'>
            <div className='above-text'>4</div>
          </div>
        </div>
      </div>
    </div>
  )
}
