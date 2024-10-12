import React from 'react'
import {FaCrown} from 'react-icons/fa'
import SectionHeader from './SectionHeader';
import {programs} from '../data';
import Card from '../components/UI/Card';
import {Link} from 'react-router-dom'
import { AiFillCaretRight } from 'react-icons/ai';
const Programs = ()=> {
  return (
    <section className='programs'>
        <div className="container programs_container">
            <SectionHeader icon={<FaCrown/>} title="Step By Step" />
            <div className="programs_wrapper">
            {
                programs.map(({id, icon, title, info, path}) => {
                    return (
                        <Card className="programs_programs" key={id}>
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{info}</small>
                            <Link to={path} className="btn sm">Learn<AiFillCaretRight/> </Link>
                        </Card>
                    )
                })
            }
            </div>
        </div>    
    </section>
  )
}
export default Programs;
