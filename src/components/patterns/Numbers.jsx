import SectionHeader from '../../components/SectionHeader'
import {GiArmorPunch} from 'react-icons/gi'

import Btn from '../../components/UI/Btn'
// import A from '../../audios/A.mp3'
import { numbers } from '../../data'

const Numbers = () => {
  return (
    <section>
        <SectionHeader icon={<GiArmorPunch/>} title="လႆၫးဢၫꩫ်ꩫပ့်တႆးꩫꧥင်း" />
        <div className="container alphapet_container">
            <div className="alphabet_content character_alphabet-content">
              {
                numbers.map(({name,source,desc,id},index)=>{
                   return (
                   <div key={index}>
                    <Btn name={name} source={source} id={id} />
                    <label htmlFor={id}>{desc}</label>
                   </div>
                   )
                })
              }
            </div>
        </div>
    </section>
  )
}

export default Numbers