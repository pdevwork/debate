import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import SignupForm from './components/SignupForm'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="app">
      <Hero onSignupClick={() => setShowForm(true)} />
      <About />
      
      <AnimatePresence>
        {showForm && (
          <SignupForm onClose={() => setShowForm(false)} />
        )}
      </AnimatePresence>
      
      <Footer />
    </div>
  )
}

export default App