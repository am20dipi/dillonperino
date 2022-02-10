import Home from './Home.js'
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './About.js'
import Navbar from './Navbar.js'
import Contact from './Contact.js'
import Flashes from './Flashes.js'
import Paintings from './Paintings.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/flashes" element={<Flashes />} />
          <Route path="/paintings" element={<Paintings />} />
        </Routes>
        
      </BrowserRouter>

    </div>
  )
}

export default App
