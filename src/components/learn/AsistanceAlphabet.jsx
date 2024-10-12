import SectionHeader from '../../components/SectionHeader'
import {FaSith} from 'react-icons/fa'

import Btn from '../../components/UI/Btn'
// import A from '../../audios/A.mp3'
import { asistanceAlphabets } from '../../data'

const AsistanceAlphabet = ({toClass}) => {
  return (
    <section className={toClass}>
        <SectionHeader icon={<FaSith/>} title="မေꧥႍꩬဵင်ꩼကꧥမ် ꧵ ꩥူꧧ်" />
        <div className="container alphapet_container">
            <div className="alphabet_content ">
              {
                asistanceAlphabets.map(({name,source,id},index)=>{
                   return (<Btn key={index} name={name} source={source} id={id} />)
                })
              }
            </div>
        </div>
    </section>
  )
}

export default AsistanceAlphabet