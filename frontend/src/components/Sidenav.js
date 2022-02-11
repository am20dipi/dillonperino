import { Link } from 'react-router-dom'
import Contact from './Contact'



function Sidenav(){
    return (
        <nav>
            <ul className="navbar-nav">
                <li className="nav-item" >
                    <Link activeStyle={{
                        fontWeight: 'bold'
                    }} className="nav-link" to="/">home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">about</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/paintings">paintings</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/flashes">flashes</Link>
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
                <br/>
                <li className="nav-item">
                    <Contact/>
                </li>
                
            </ul>
         </nav>
    )
}

export default Sidenav