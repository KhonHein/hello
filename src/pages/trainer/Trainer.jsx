import React from 'react'
import './trainer.css'
import ME from '../../images/trainer.jpg'
import {DiCodeigniter} from 'react-icons/di'


import SectionHeader from '../../components/SectionHeader'
import {GiTeacher} from 'react-icons/gi'

import { trainerDetail } from '../../data'

const Trainer = () => {
  return (
    <section id='about'>
      <SectionHeader icon={<GiTeacher/>} title="Talk to Trainer" />
      <div className="container about_container">
        <div className="about_me">
          <img src={ME} className='about_me-image' alt="About img " />
        </div>
        <div className="about_content">
          <div className="about_cards">
            {
              trainerDetail.map(({status,desc},index)=>{
                return (
                  <article className='about_card' key={index}>
                    <DiCodeigniter className='about_icon'/>
                    <h5>{status}</h5>
                    <small>{desc}</small>
                  </article>
                );
              })
            }
            
          </div>
          <p>
          I would like to improve our Shan Ni languages and who wants to learn this languages can learn
          If you don't do anything , can get nothing. ꩥႂꧥးၷႃႍ ၷႂꧥႍꩥႂꧥႍၷိူꩫ်ႍꩬုင်ꩼလိက်ႍလႆၫးတႆးꩫꧥင်း ꩬင်ꩼယဝ်ႍ ကူꩫ်းၷႂꧥႍလဵပ့်ꩥဵမ်းလိက်ႍလႆၫးတႆးꩫꧥင်း မႃးလဵပ့်ꩥဵမ်းꩬီꩼ လႆႍၷႃႍဢေႃး ။
          </p>
          <a href="https://www.facebook.com/sai.kyawlin.73" target='__blank' className='btn btn-primary'>contact to social</a>
        </div>
      </div>
    </section>
  )
}

export default Trainer