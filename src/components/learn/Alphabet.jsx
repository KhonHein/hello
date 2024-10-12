import SectionHeader from '../../components/SectionHeader'
import {GiBookshelf} from 'react-icons/gi'

import Btn from '../../components/UI/Btn'
// import A from '../../audios/A.mp3'
import { alphabets } from '../../data'

const Alphabet = ({toClass}) => {
  return (
    <section className={toClass}>
        <SectionHeader icon={<GiBookshelf/>} title="မေꧥႍကႃလိက့်တႆးꩫꧥင်း ꧱꧸ ꩥူꧧ်" />
        <div className="container alphapet_container">
            <div className="alphabet_content">
              {
                alphabets.map(({name,source,id},index)=>{
                   return (<Btn key={index} name={name} source={source} id={id} />)
                })
              }
            </div>
        </div>
    </section>
  )
}

export default Alphabet