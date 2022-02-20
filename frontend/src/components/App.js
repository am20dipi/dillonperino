import Home from './Home.js'
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './About.js'
import Paintings from './Paintings.js'
import Contact from './Contact.js'
import Flash from './Flash.js'
import Commissions from './Commissions.js'
import Charcoal from './Charcoal.js'
import Footer from './Footer.js'
import Donate from './Donate.js'



function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/flash" element={<Flash />} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/charcoal" element={<Charcoal />} />
          <Route path="/commissions" element={<Commissions />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      </BrowserRouter>
    <Footer/>
    </div>
  )
}

export default App
