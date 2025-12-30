import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Navbar />
      <Hero />
      <About />
      <Courses />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App