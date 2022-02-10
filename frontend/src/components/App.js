import Home from './Home.js'
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import About from './About.js'
import Navbar from './Navbar.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
      </BrowserRouter>

    </div>
  )
}

export default App
