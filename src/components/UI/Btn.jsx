import { useState } from 'react'
const Btn = ({clsAtr,name,source,id}) => {
  const [isPlay , setIsPlay] = useState(false);
  const handleClick = () => {
    const audio = new Audio(source);
    if (isPlay) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlay(!isPlay);
  };
  return (
    <div className={`container btn_container ${clsAtr}`}>
      <div className={` btn_content ${clsAtr}`}>
      <label htmlFor={id} onClick={handleClick}>
      <button className={`btn alphabet_btn ${clsAtr} ${ isPlay ? 'success' : ''} ShanNiFont`}>{name}</button>
      </label>
      </div>
    </div>
  )
}

export default Btn