import './components/Navbar/Navbar.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import './components/Hero/Hero.css'
import './components/About/About.css'
import About from './components/About/About'
import Services from './components/Services/Services'
import './components/Services/Services.css'
import Projects from './components/Projects/Projects'
import './components/Projects/Projects.css'
import Contact from './components/Contact/Contact'
import './components/Contact/Contact.css'
function App() {

  return (
      <>
      <Navbar/>
      <Hero/>
          <About/>

          <Services/>

          <Projects/>

          <Contact/>
      </>
  )
}

export default App
