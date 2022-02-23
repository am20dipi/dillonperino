import { Link, NavLink } from 'react-router-dom'
import Social from './Social'



function Sidenav(){

    return (
        <nav>
            <h2>DILLON PERINO</h2>
            <ul className="navbar-nav">
                <li className="nav-item" >
                    <NavLink 
                        className="nav-link" 
                        to="/"
                        style={({ isActive }) => ({
                            fontWeight: isActive ? 'bold' : null
                        })}
                        >home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        className="nav-link" 
                        to="/about" 
                        style={({ isActive }) => ({
                            fontWeight: isActive ? 'bold' : null
                        })}
                    >about</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        className="nav-link" 
                        to="/paintings" 
                        style={({ isActive }) => ({
                            fontWeight: isActive ? 'bold' : null
                        })}
                    >paintings</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        className="nav-link" 
                        to="/flash" 
                        style={({ isActive }) => ({
                            fontWeight: isActive ? 'bold' : null
                        })}
                    >flash</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        className="nav-link" 
                        to="/charcoal" 
                        style={({ isActive }) => ({
                            fontWeight: isActive ? 'bold' : null
                        })}
                    >charcoal</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        className="nav-link" 
                        to="/commissions" 
                        style={({ isActive }) => ({
                            fontWeight: isActive ? 'bold' : null
                        })}
                    >commissions</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        className="nav-link" 
                        to="/donate" 
                        style={({ isActive }) => ({
                            fontWeight: isActive ? 'bold' : null
                        })}
                    >donate</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        className="nav-link" 
                        to="/contact" 
                        style={({ isActive }) => ({
                            fontWeight: isActive ? 'bold' : null
                        })}
                    >contact</NavLink>
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