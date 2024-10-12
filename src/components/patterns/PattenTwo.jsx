import SectionHeader from '../SectionHeader'
import {BiSolidSelectMultiple} from 'react-icons/bi'

import Btn from '../UI/Btn'

import { sixVoiceTwo } from '../../data'
// import A from '../../audios/A.mp3'
import { pattenTwo } from '../../data'
import SixVoiceToneUi from '../UI/SixVoiceToneUi'

const PattenTwo = () => {
  return (
    <section>
        <SectionHeader icon={<BiSolidSelectMultiple/>} title="မေꧥႍကပ်ငဝ်ႍ ꩬဵင်ꩼꩥူးꩫင်း ꩫ-ꩬၫတ့် ( ꩫ် )" />
        <div className="container alphapet_container">
            <div className="alphabet_content">
              {
                pattenTwo.map(({name,source,id},index)=>{
                   return (<Btn key={index} name={name} source={source} id={id} />)
                })
              }
            </div>
        </div>
        <div className=''>
          <SixVoiceToneUi
          question="click me" 
          answer={sixVoiceTwo}
          />
        </div>
    </section>
  )
}

export default PattenTwo