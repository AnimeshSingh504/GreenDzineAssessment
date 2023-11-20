import React, { useState } from 'react'
import { employee } from '../data/employeeData/employeeVal'

export const EmpData = () => {

    const[showData,setShowData] = useState([]);

  return (
    <div className='empMain'>
        <div className='holder-container'>
            {
                employee.map((data,index) => (
                    <div key={index} className='dataholder'>
                        <div className='empData'>
                            <div className='core-data-left'>
                                <p className='emp-left'>EMP ID</p>
                                <p className='emp-left'>Name</p>
                                <p className='emp-left'>DOB</p>
                                <p className='emp-left'>Role</p>
                            </div>
                            <div className='core-data-middle'>
                                <p className='colon'>:</p>
                                <p className='colon'>:</p>
                                <p className='colon'>:</p>
                                <p className='colon'>:</p>
                            </div>
                            <div className='core-data-right'>
                                <p className='Id'>{data.empId}</p>
                                <p className='name'>{data.empName}</p>
                                <p className='dob'>{data.dob}</p>
                                <p className='role'>{data.role}</p>
                            </div>
                        </div>
                        <div className='rightno'>
                            <p className='no-text'>{data.empId}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
