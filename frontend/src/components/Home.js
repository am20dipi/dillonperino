import CarouselSlider from './CarouselSlider'
import Sidenav from './Sidenav'

function Home(){
    return (
        <div className="wrapper" style={{display: 'flex'}}>
            <section className="left">
                <Sidenav/>
            </section>
            <section className="right" style={{paddingRight: '220px'}}>
                <CarouselSlider/>
            </section>
        </div>
        
    )
}

export default Home
