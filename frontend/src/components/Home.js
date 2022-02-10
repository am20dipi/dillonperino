import CarouselSlider from './CarouselSlider'
import Sidenav from './Sidenav'

function Home(){
    return (
        <div className="wrapper" style={{display: 'flex'}}>
            <section className="left">
                <h2>DILLON PERINO</h2>
                <Sidenav/>

            </section>
            <section className="right">
                <CarouselSlider/>

            </section>
        </div>
        
    )
}

export default Home
