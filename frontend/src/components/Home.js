import CarouselSlider from './CarouselSlider'
import { Link } from 'react-router-dom'

function Home(){
    return (
        <div className="wrapper" style={{display: 'flex'}}>
            <section className="left">
                <h2>DILLON PERINO</h2>
                <nav>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">about</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">contact</Link>
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
                        
                    </ul>
                </nav>

            </section>
            <section className="right">
                <CarouselSlider/>

            </section>
        </div>
    )
}

export default Home
