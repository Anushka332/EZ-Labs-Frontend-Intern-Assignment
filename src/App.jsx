import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Destinations from './components/Destinations'
import Packages from './components/Packages'
import Gallery from './components/Gallery'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="destinations">
          <Destinations />
        </section>
        <section id="packages">
          <Packages />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
        <Footer />
      </main>
    </div>
  )
}
