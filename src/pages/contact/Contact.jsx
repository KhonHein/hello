import React from 'react'
import './contact.css'
import { portfolios } from '../../data'
import SectionHeader from '../../components/SectionHeader'
import {FcContacts} from 'react-icons/fc'

const Contact = () => {
  return (
    <section id='portfolio'>
      <SectionHeader icon={<FcContacts/>} title="Contact to Team" />
      <div className="container portfolio_container">
        {
          portfolios.map(({id, image,title,github,demo}) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt="" srcSet={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} tarGet='_blank' className='btn'>Social</a>
                  <a href={demo} tarGet='_blank' className='btn btn-primary'>Contact</a>
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Contact