import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"
import { useState } from "react"
const FAQ = ({question , answer}) => {

    const [isAnswerShowing, setAnswerShowing] = useState(false);
  return (
    <article className="faq" onClick={()=>setAnswerShowing((prev => !prev))}>
        <div>
            <h4>{question}</h4>
            <button className="faq_icon">
            {
                isAnswerShowing ? <AiOutlineMinus/> : <AiOutlinePlus/>
            }
            </button>
        </div>      
        {
             isAnswerShowing && <div>{answer}</div>
        }
    </article>
  )
}

export default FAQ