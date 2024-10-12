
import './learn.css'
import { useState ,useEffect } from 'react'


import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'
import { sideBarKeys } from '../../data'

const Learn = () => {

const [toShow , setToShow] = useState('');
const [preShow , setPreShow] = useState('');
const [isMenu,setMenu] = useState(false);



useEffect(()=>{
  setPreShow(toShow);
},[toShow])
const showMenu = (e) =>{
  setMenu(!isMenu);
}
const defaultContent= sideBarKeys[0].content;

  return (

    <section className='learn_container_page'>
            <nav className='sidebar_container'>
              <ul className="container sidebar_list">
                  <li onClick={showMenu} id='hideShowMenu'>
                      {
                        isMenu ? <IoIosArrowForward/> :<IoIosArrowBack/> 
                      }
                      
                  </li>
                  {
                    
                  sideBarKeys.map(({name,icon},index)=>{
                    return (
                      
                        <li  
                        className={`sidebar_item ${name} ${isMenu ? '' : 'move'}`} 
                        id={`${name}+${index}`}
                        key={index}
                        onClick={()=>{setToShow(name+index); }}
                        style={{ 
                                  background: toShow === name+index ? '#15153A' : '',
                                  color: toShow === name+index ? 'yellow' : '',
                                  borderColor: toShow === name+index ? 'green' : ''
                              }}
                        >{icon}</li>
                        )
                      })
                  }
              </ul>
          </nav>
          {
            <div className={`defaultContent ${preShow ? 'none' : ''}`}>{defaultContent}</div>
          }
          {
            
            sideBarKeys.map(({name,content},index) => {
              return (
                <div className='' key={index}>
                  {name+index === toShow ? content : null}
                </div>
              )
            })
          }

    </section>
  )
}

export default Learn