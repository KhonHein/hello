import React from 'react'
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'
import { sideBarKeys } from '../../data'
import Icon from './Icon'


const SideBar = () => {

  const handleClick = (name,icon,index)=>{
    console.log(name+icon+index)
  }
  return (

    <nav className='sidebar_container'>
        <ul className="container sidebar_list">
            <li>
                <IoIosArrowBack/>
                <IoIosArrowForward/>
            </li>
            {
                sideBarKeys.map(({name,icon},index)=>{
                  return (
                    <li  
                    className={`sidebar_item ${name} `} 
                    key={index}
                    onClick={handleClick(name,icon,index)}
                    >{icon}</li>
                  )
                })
            }
        </ul>
    </nav>
  )
}

export default SideBar