import Home from './Home.js'
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './About.js'
import Navbar from './Navbar.js'
import Sidenav from './Sidenav.js'
import Contact from './Contact.js'
import Work from './Work.js'
import Commissions from './Commissions.js'
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
          <Route path="/work" element={<Work />} />
          <Route path="/commissions" element={<Commissions />} />
        </Routes>
        
      </BrowserRouter>
    <Footer/>
    </div>
  )
}

export default App
