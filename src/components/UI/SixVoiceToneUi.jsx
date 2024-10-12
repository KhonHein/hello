import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"
import { useState } from "react"
import Btn from "./Btn"
const SixVoiceToneUi = ({question , answer}) => {

    const [isAnswerShowing, setAnswerShowing] = useState(false);
  return (
    <article className="faq">
        <div onClick={()=>setAnswerShowing((prev => !prev))}>
            <h4>{question}</h4>
            <button className="faq_icon">
            {
                isAnswerShowing ? <AiOutlineMinus/> : <AiOutlinePlus/>
            }
            </button>
        </div>      
        <div>
            {
                isAnswerShowing && <div>
                    {
                        answer.map(({name,source,id},index)=>{
                            return (<Btn key={index} clsAtr="voice-6-tone" name={name} source={source} id={id} />)
                            })
                    }
                </div>
            }
        
        </div>
    </article>
  )
}

export default SixVoiceToneUi