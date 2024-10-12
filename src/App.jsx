import {BrowserRouter , Route , Routes } from 'react-router-dom'

import Home from './pages/home/Home'
import Learn from './pages/learn/Learn'
import Pattern from './pages/pattern/Pattern'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Trainer from './pages/trainer/Trainer'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='learn' element={<Learn/>} />
        <Route path='pattern' element={<Pattern/>} />
        <Route path='trainer' element={<Trainer/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='gallery' element={<Gallery/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

