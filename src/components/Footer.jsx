import { Link } from "react-router-dom"
import Logo from '../images/logo.png'

import { FaLinkedin , FaFacebook } from "react-icons/fa"

const Footer = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();
  return (
    <footer>
        <div className="container footer_container">
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="footer logo" />
                </Link>
                <p>
                The website provides personalized language learning for Shan Ni, with customized courses in Tai Deng, Tai Naing, and Tai Laing dialects, ensuring an effective and tailored learning experience.
                </p>
            </article>
            <article>
                <p>click to contact :</p>
                <a href="https://khon-hein.vercel.app/" className="hightLightText" tarGet="_blank">
                 contact to developer 
                </a>
                <a href="mailto:khonhein.dev@gmail.com" className="hightLightText" tarGet="_blank">
                 khonhein.dev@gmail.com</a>
            </article>
            <article>
                <Link to="/about">About</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <Link to="/">Home</Link>
                <a href="https://www.linkedin.com/in/k%C4%A5%C3%B5%C3%B1-%C4%A5%C3%AA%C3%AE%C3%B1-6615a7271/" tarGet="_blank" alt="noreferre"><FaLinkedin/></a>
                <a href="https://www.facebook.com/KhonHein.2000" tarGet="_blank" alt="noreferre"><FaFacebook/></a>
                
            </article>
        </div>
        <div className="footer_copyright">
            <small>{formattedDate} Hello ShanNi && copy; All Right Reserve</small>
        </div>
    </footer>
  )
}

export default Footer