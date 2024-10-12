import SectionHeader from '../../components/SectionHeader'
import {GiArmorPunch} from 'react-icons/gi'

import Btn from '../../components/UI/Btn'
// import A from '../../audios/A.mp3'
import { swuntThree } from '../../data'

const SwuntThree = ({toClass}) => {
  return (
    <section className={toClass}>
        <SectionHeader icon={<GiArmorPunch/>} title="မေꧥႍꩬဵင်ꩼꩬွꩫ်ႍ  ဝ ꩬွꩫ်ႍ " />
        <div className="container alphapet_container">
            <div className="alphabet_content character_alphabet-content">
              {
                swuntThree.map(({name,source,desc,id},index)=>{
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

export default SwuntThree