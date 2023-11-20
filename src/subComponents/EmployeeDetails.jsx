import React from 'react'
import { Productivity } from '../utility/productivityData'

export const EmployeeDetails = () => {
  return (
    <div className='dashboard-container'>
        <div className='productivity-back'>
            <p className='emptext'>Employee Productivity Dashboard</p>
        </div>

        <div className='progress-container'>
            {
                Productivity.map((data,index) => (
                    <div key={index} className='data-container'>
                        <div className='left-part'>
                            <div className='left-part-text'>{data.name}</div>
                            <div style={{ width: `${data.val}%` }} className='progress-bar'></div>
                        </div>
                        <div className='per-data'>
                            {data.val}%
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
