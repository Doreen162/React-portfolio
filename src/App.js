import React, { useEffect } from 'react'
import Particles from './components/layouts/Particles'
import Header from './components/pages/Header'
import About from './components/pages/About'
import Works from './components/pages/Works'
import Education from './components/pages/Education'
import Experience from './components/pages/Experience'
import Testimonials from './components/pages/Testimonial'
import Contact from './components/pages/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true
    })
// eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <Header />
      <Particles />
      <About />
      <Education />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Experience />
      <Works />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;