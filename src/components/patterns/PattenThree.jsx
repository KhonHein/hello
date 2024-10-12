import SectionHeader from '../SectionHeader'
import {BiSolidSelectMultiple} from 'react-icons/bi'
import SixVoiceToneUi from '../UI/SixVoiceToneUi'
import { sixVoiceThree } from '../../data'
import Btn from '../UI/Btn'
// import A from '../../audios/A.mp3'
import { pattenThree } from '../../data'

const PattenThree = () => {
  return (
    <section>
        <SectionHeader icon={<BiSolidSelectMultiple/>} title="မေꧥႍကပ်ငဝ်ႍ ꩬဵင်ꩼꩥူးꩫင်း င-ꩬၫတ့် ( င် )" />
        <div className="container alphapet_container">
            <div className="alphabet_content">
              {
                pattenThree.map(({name,source,id},index)=>{
                   return (<Btn key={index} name={name} source={source} id={id} />)
                })
              }
            </div>
        </div>
        <div className=''>
          <SixVoiceToneUi
          question="click me" 
          answer={sixVoiceThree}
          />
        </div>
    </section>
  )
}

export default PattenThree