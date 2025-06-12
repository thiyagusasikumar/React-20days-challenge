import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/hero/hero'
import Programs from './Components/Programs/Programs'
import About from './Components/About/About'
import Title from './Components/Title/Title'
import Gallery from './Components/Gallery/Gallery'
import Contact from './Components/Contact/Contact'
import Testimonials from './Components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Programs />
        <About />
        <Title subTitle='GALLERY' Titles='Institute Photos'/>
        <Gallery />
        <Title subTitle='TESTIMONIALS' Titles='What Student Says'/>
        <Testimonials/>
        <Title subTitle='CONTACT US' Titles='Get in Touch'/>
        <Contact/>
    </div>
  )
}

export default App