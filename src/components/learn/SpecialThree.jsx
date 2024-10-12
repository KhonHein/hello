import SectionHeader from '../../components/SectionHeader'
import {GiArmorPunch} from 'react-icons/gi'

import Btn from '../../components/UI/Btn'
 import { specialLetterThree } from '../../Voice/specialThree'
import { specialThree } from '../../data'

const SpecialTwo = ({toClass}) => {
  return (
    <section className={toClass}>
        <SectionHeader icon={<GiArmorPunch/>} title="မေꧥႍကပ့်ꩬွꩫ်ႍ (ဢိုဝ်)  " />
        <div className="container alphapet_container">
            <div className="alphabet_content character_alphabet-content">
            <div>
                <Btn name="ဢႂꧥ" source={specialLetterThree.a} id="ai-ar" />
                <label htmlFor="ai-ar">ဢ+ဢိုဝ် = ဢႂꧥ </label>
                </div>
            </div>
        </div>
        <SectionHeader icon={<GiArmorPunch/>} title="မေꧥႍꩬဵင်ꩼꩬွꩫ်ႍ ꧳ ꩥူꧧ်  " />
        <div className="container alphapet_container">
            <div className="alphabet_content character_alphabet-content">
              {
                specialThree.map(({name,source,desc,id},index)=>{
                   return (
                   <div>
                    <Btn key={index} name={name} source={source} id={id} />
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

export default SpecialTwo