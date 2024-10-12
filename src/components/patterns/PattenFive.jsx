import SectionHeader from '../SectionHeader'
import {BiSolidSelectMultiple} from 'react-icons/bi'

import Btn from '../UI/Btn'
// import A from '../../audios/A.mp3'
import { pattenFive, sixVoiceFive } from '../../data'
import SixVoiceToneUi from '../UI/SixVoiceToneUi'

const PattenFive = () => {
  return (
    <section>
        <SectionHeader icon={<BiSolidSelectMultiple/>} title="မေꧥႍကပ်ငဝ်ႍ ꩬဵင်ꩼၷၫတ် ပ-ꩬၫတ့် ( ပ် )" />
        <div className="container alphapet_container">
            <div className="alphabet_content">
              {
                pattenFive.map(({name,source,id},index)=>{
                   return (<Btn key={index} name={name} source={source} id={id} />)
                })
              }
            </div>
        </div>
        <div className=''>
          <SixVoiceToneUi
          question="click me" 
          answer={sixVoiceFive}
          />
        </div>
    </section>
  )
}

export default PattenFive