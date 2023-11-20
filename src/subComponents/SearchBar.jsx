import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";

export const SearchBar = () => {

    const [formdata,setformdata] = useState({
        searchEmp : ""
    });

    const handleOnChange = (event) => {
        setformdata((prevdata) => (
            {
                ...prevdata,
                [event.target.name] : event.target.value
            }
        ))
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(formdata.searchEmp);
    }

  return (
    <div className='search-top'>
        <form
            onSubmit={handleOnSubmit}
            className='search-form'
        >
            <input 
                type='text'
                placeholder='Search with name'
                name="searchEmp"
                value={FormData.empName}
                onChange={handleOnChange}
                className='search-bar'
            />

            <button
                type='submit'
                onClick={handleOnSubmit}
            >
                <IoIosSearch fill='#FFFFFF' fontSize={24} className='search-btn'/>
            </button>
        </form>
    </div>
  )
}
