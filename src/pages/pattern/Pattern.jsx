import '../learn/learn.css'
import './pattern.css'
import SectionHeader from '../../components/SectionHeader'
import {LuSubtitles} from 'react-icons/lu'

//patterns 
import PattenOne from '../../components/patterns/PattenOne'
import PattenTwo from '../../components/patterns/PattenTwo'
import PattenThree from '../../components/patterns/PattenThree'
import PattenFour from '../../components/patterns/PattenFour'
import PattenFive from '../../components/patterns/PattenFive'
import PattenSix from '../../components/patterns/PattenSix'

import Numbers from '../../components/patterns/Numbers'

const Pattern = () => {
  return (
    <section>
      <SectionHeader icon={<LuSubtitles/>} title="ꩬဵင်ꩼဢွက် ꧱꧰ ꩬဵင်ꩼ ꧶ ၸႃႍ" />
      
      <PattenOne className="learn-div patten-1"/>
      <PattenTwo className="learn-div patten-2"/>
      <PattenThree className="learn-div patten-3"/>
      <PattenFour className="learn-div patten-4"/>
      <PattenFive className="learn-div patten-5"/>
      <PattenSix className="learn-div patten-6"/>

      <Numbers className="learn-div patten-7 numbers" />
    </section>
  )
}

export default Pattern