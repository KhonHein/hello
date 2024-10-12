import SectionHeader from '../SectionHeader'
import {BiSolidSelectMultiple} from 'react-icons/bi'

import Btn from '../UI/Btn'
// import A from '../../audios/A.mp3'
import { pattenFour, sixVoiceFour } from '../../data'
import SixVoiceToneUi from '../UI/SixVoiceToneUi'

const PattenFour = () => {
  return (
    <section>
        <SectionHeader icon={<BiSolidSelectMultiple/>} title="မေꧥႍကပ်ငဝ်ႍ ꩬဵင်ꩼၷၫတ် တ-ꩬၫတ့် ( တ် )" />
        <div className="container alphapet_container">
            <div className="alphabet_content">
              {
                pattenFour.map(({name,source,id},index)=>{
                   return (<Btn key={index} name={name} source={source} id={id} />)
                })
              }
            </div>
        </div>
        <div className=''>
          <SixVoiceToneUi
          question="click me" 
          answer={sixVoiceFour}
          />
        </div>
    </section>
  )
}

export default PattenFour