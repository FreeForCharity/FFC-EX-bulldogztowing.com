import React from 'react'
import Hero from '@/components/home-page/Hero'
import About from '@/components/home-page/About'
import Services from '@/components/home-page/Services'
import Gallery from '@/components/home-page/Gallery'
import Testimonials from '@/components/home-page/Testimonials'
import ServiceAreas from '@/components/home-page/ServiceAreas'
import Contact from '@/components/home-page/Contact'

const HomePage: React.FC = () => {
  return (
    <main id="main">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <ServiceAreas />
      <Contact />
    </main>
  )
}

export default HomePage
