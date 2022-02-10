import Sidenav from "./Sidenav"
import brighterside from '../images/brighterside.png'
import congruent from '../images/congruent.png'
import selfportrait from '../images/selfportrait.png'

function Paintings(){
    return(
        <div className="wrapper" style={{display: 'flex'}}>
            <section className="left">
                <Sidenav/>
            </section>
            <section className="right">
            
                <div className="img-gallery">
                    <h2 style={{textAlign: 'left'}}>oil<p className="text-muted" style={{fontSize:'medium', textAlign: 'left' }}>A deeper dive into my favorite medium.</p></h2>
                    <div className="img__wrap">
                        <img src={congruent}/>
                        <p style={{padding: '10px', textAlign: 'center'}} id="painting" className="img__description">Congruent. Mixed media on canvas. 9x12 inches. 2021.  </p>
                    </div>
                    <div className="img__wrap">
                        <img src={brighterside}/>
                        <p style={{padding: '10px', textAlign: 'center'}}  id="painting" className="img__description">The brighter side of nothing. Mixed media on canvas. 9x12 inches. 2020. </p>
                    </div>
                    <div className="img__wrap">
                        <img src={selfportrait}/>
                        <p style={{padding: '10px', textAlign: 'center'}} id="painting"  className="img__description">Self portrait. Oil on canvas board. 2020. </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Paintings