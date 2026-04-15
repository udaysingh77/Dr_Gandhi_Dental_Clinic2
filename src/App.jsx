import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Reviews from './components/Reviews'
import Appointment from './components/Appointment'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import FloatingButtons from './components/FloatingButtons'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    document.title = "Dr. Mitesh Gandhi | Best Dentist in Mumbai"
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Reviews />
      <Appointment />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default App
