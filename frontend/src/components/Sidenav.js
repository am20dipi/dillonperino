import { Link } from 'react-router-dom'
import Social from './Social'



function Sidenav(){
    return (
        <nav>
            <h2>DILLON PERINO</h2>
            <ul className="navbar-nav">
                <li className="nav-item" >
                    <Link className="nav-link" to="/">home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">about</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/paintings">paintings</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/flash">flash</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/charcoal">charcoal</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/commissions">commissions</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/donate">donate</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">contact</Link>
                </li>
                <br/>
                <li className="nav-item">
                    <Social/>
                </li>
                
            </ul>
         </nav>
    )
}

export default Sidenav