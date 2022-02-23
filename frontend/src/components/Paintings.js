import Sidenav from "./Sidenav"
import brighterside from '../images/brighterside.png'
import congruent from '../images/congruent.png'
import selfportrait from '../images/selfportrait.png'

const paintings = [
    {
        image: congruent,
        description: 'Congruent. Mixed media on canvas. 9x12 inches. 2021.',
        
    },
    {
        image: brighterside,
        description: 'The brighter side of nothing. Mixed media on canvas. 9x12 inches. 2020.',
    },
    {
        image: selfportrait,
        description: 'Self portrait. Oil on canvas board. 2020.',
        
    }
]

function Paintings(){
    return(
        <div className="wrapper" style={{display: 'flex'}}>
            <section className="left">
                <Sidenav/>
            </section>
            <section className="right">
            
                <div className="img-gallery" style={{display: 'flex'}}>
                    <h1 style={{textAlign: 'left'}}>oil<p className="text-muted" style={{fontSize:'medium', textAlign: 'left' }}>A quick glance into one of my favorite mediums.</p></h1>
                    {paintings.map((painting, index) => {
                        return (
                            <div className="img__wrap" key={index}>
                                <img src={painting.image} alt={`painting-${index}`}  />
                                <p style={{padding: '10px', textAlign: 'center'}} id="painting" className="img__description"> {painting.description} </p>
                            </div>
                        )
                    })}
                   
                </div>
            </section>
        </div>
    )
}

export default Paintings