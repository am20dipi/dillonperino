import Home from './Home.js'
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './About.js'
import Navbar from './Navbar.js'
import Paintings from './Paintings.js'
import Contact from './Contact.js'
import Flashes from './Flashes.js'
import Commissions from './Commissions.js'
import Charcoal from './Charcoal.js'
import Footer from './Footer.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
       {/*  <Sidenav/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/flashes" element={<Flashes />} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/charcoal" element={<Charcoal />} />
          <Route path="/commissions" element={<Commissions />} />
        </Routes>
        
      </BrowserRouter>
    <Footer/>
    </div>
  )
}

export default App
