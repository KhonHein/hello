import SectionHeader from '../../components/SectionHeader'
import {GiArmorPunch} from 'react-icons/gi'

import Btn from '../../components/UI/Btn'
// import A from '../../audios/A.mp3'
import { characters } from '../../data'

const AsistanceAlphabet = ({toClass}) => {
  return (
    <section className={toClass}>
        <SectionHeader icon={<GiArmorPunch/>} title="မေꧥႍကႃလႆၫးလေႃး" />
        <div className="container alphapet_container">
            <div className="alphabet_content character_alphabet-content">
              {
                characters.map(({name,source,desc,id},index)=>{
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

export default AsistanceAlphabet