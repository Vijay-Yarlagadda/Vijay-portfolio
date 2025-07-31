import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Intro from './Intro.jsx'
import Homepage from './Homepage.jsx'
import About from './About.jsx'
import Education from './Education.jsx'
import Skills from './Skills.jsx'
import Contact from './Contact.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Intro />
    <Homepage />
    <About />
    <Education />
    <Skills />
    <Contact />
  </StrictMode>,
)
