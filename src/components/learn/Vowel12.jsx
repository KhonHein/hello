import SectionHeader from '../../components/SectionHeader'
import {FaSith} from 'react-icons/fa'

import Btn from '../../components/UI/Btn'
// import A from '../../audios/A.mp3'
import { vowel12 } from '../../data'

const Vowel12 = ({toClass}) => {
  return (
    <section className={toClass}>
        <SectionHeader icon={<FaSith/>} title="မေꧥႍကပ်ႍငဝ်ႍ ꧱꧲ ꩥူꧧ်" />
        <div className="container alphapet_container">
            <div className="alphabet_content ">
              {
                vowel12.map(({name,source,id},index)=>{
                   return (<Btn key={index} name={name} source={source} id={id} />)
                })
              }
            </div>
        </div>
    </section>
  )
}

export default Vowel12