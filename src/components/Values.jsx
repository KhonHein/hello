 import Image from '../images/me.png';
 import SectionHeader from './SectionHeader';

 import {GiCutDiamond} from 'react-icons/gi'
import { values  } from '../data';
import Card from './UI/Card';

 const Values = () => {
  return (
    <section className='values'>
        <div className="container values_container">
            <div className="values_left">
                <div className="values_image">
                    <img src={Image} alt="Values imag" srcSet="" />
                </div>
            </div>
            <div className="values_right">
                <SectionHeader icon={<GiCutDiamond/>} title="မႂꧥꩬုင်ꩼၸဝ်ႍ" />
                <p>
                Welcome to our TaiLeng language learning website! Immerse yourself in the beauty and intricacies of the Tai Leng, language as you embark on an exciting journey of linguistic discovery.
                </p>
                <div className="values_wrapper">
                    {
                        values.map(({id,icon,title,desc})=>{
                            return (
                                <Card key={id} className="values_value">

                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>

                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values