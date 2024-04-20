import React from 'react'
import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome'
import Features from './components/Features/Features'
import Discover from './components/Discover/Discover'
import Consultation from './components/Consultation/Consultation'
import Booking from './components/Booking/Booking'
import Approach from './components/Approach/Approach'
import GetApp from './components/GetApp/GetApp'
import Contact from './components/Contact/Contact'
import Testimonials from './components/Testimonials/TestimonialsAndSuccess'
import ExpertsTestimonials from './components/ExpertsTestimonials/TestimonialsAndSuccess'

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Features />
      <Discover />
      <Consultation />
      <Booking />
      <Approach />
      <Testimonials />
      <ExpertsTestimonials />
      <GetApp />
      <Contact />
      
    </>
  )
}

export default App
