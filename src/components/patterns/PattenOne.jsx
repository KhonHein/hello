import SectionHeader from '../SectionHeader'
import {BiSolidSelectMultiple} from 'react-icons/bi'

import Btn from '../UI/Btn'
import { sixVoiceOne } from '../../data'

// import A from '../../audios/A.mp3'
import { pattenOne } from '../../data'
import SixVoiceToneUi from '../UI/SixVoiceToneUi'

const Patten = () => {
  return (
    <section>
        <SectionHeader icon={<BiSolidSelectMultiple/>} title="မေꧥႍကပ်ငဝ်ႍ ꩬဵင်ꩼꩥူးꩫင်း မ-ꩬၫတ့် ( မ် )" />
        <div className="container alphapet_container">
            <div className="alphabet_content">
              {
                pattenOne.map(({name,source,id},index)=>{
                   return (<Btn key={index} name={name} source={source} id={id} />)
                })
              }
            </div>
        </div>
        <div className=''>
          <SixVoiceToneUi
          question="click me" 
          answer={sixVoiceOne}
          />
        </div>
    </section>
  )
}

export default Patten