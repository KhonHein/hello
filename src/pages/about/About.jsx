import SectionHeader from "../../components/SectionHeader"
import { FaQuestion } from "react-icons/fa"

import { aboutLines } from "../../data"

const About = () => {

  return (
    <section className="faqs">
        <div className="container faqs_container">
            <SectionHeader icon={<FaQuestion/>} title="About Team Objective" />
            <div className="faqs_wrapper">
                {
                    aboutLines.map(({ti,li,ta},index)=>{
                        return <div key={index}>
                                <h4>{ti}</h4>
                                <p>{li}</p>
                                <p>{ta}</p>
                                </div>
                    })
                }
                
            </div>
        </div>
    </section>
  )
}

export default About