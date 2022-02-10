import Sidenav from './Sidenav.js'
import ageof from '../images/commissions/ageof.jpeg'
import bindtruecolors from '../images/commissions/bindtruecolors.png'
import brokeninrefraction from '../images/commissions/brokeninrefraction.jpg'
import rulethemall from '../images/commissions/rulethemall.png'
import lifegoeson from '../images/commissions/lifegoeson.jpg'

function Commissions(){
    return (
        <div className="wrapper" style={{display: 'flex'}}>
            <section className="left">
                <h2>DILLON PERINO</h2>
                <Sidenav/>
            </section>
            <section className="right">
            
                <div className="img-gallery">
                    <h2 style={{textAlign: 'left'}}>
                        commissions
                        <p className="text-muted" style={{fontSize:'medium', textAlign: 'left' }}>
                            A visual representing my passion for both art and music. 
                        </p>
                    </h2>
                    <div style={{cursor: 'pointer'}} id="commission" onClick={() => window.open('https://ageofapocalypseny.bandcamp.com/album/grim-wisdom')}>
                        <img src={ageof}/>
                        <p style={{padding: '10px', textAlign: 'center'}} id="painting" className="img__description"> Age of Apocalypse -- Grim Wisdom -- Record Cover --  </p>
                    </div>
                    <div style={{cursor: 'pointer'}}  id="commission"onClick={() => window.open('https://pleadyourcaserecords.bandcamp.com/album/pyc008-true-colors')}>
                        <img src={bindtruecolors}/>
                        <p style={{padding: '10px', textAlign: 'center'}} id="painting" className="img__description"> Bind -- True colors -- EP cover -- </p>
                    </div>
                    <div style={{cursor: 'pointer'}} id="commission" onClick={() => window.open('https://rulethemallhc.bandcamp.com/releases')}>
                        <img src={rulethemall}/>
                        <p style={{padding: '10px', textAlign: 'center'}} id="painting" className="img__description"> Rule them all -- blueprint for change -- EP cover -- </p>
                    </div>
                    <div style={{cursor: 'pointer'}} id="commission" onClick={() => window.open('https://sanction631.bandcamp.com/album/broken-in-refraction')}>
                        <img src={brokeninrefraction}/>
                        <p style={{padding: '10px', textAlign: 'center'}} id="painting" className="img__description">Sanction -- broken in refraction -- Record Cover --  </p>
                    </div>
                    <div style={{cursor: 'pointer'}} id="commission" onClick={() => window.open('https://open.spotify.com/album/6UXbKRqhxsyfc4JoiBERpt')}>
                        <img src={lifegoeson}/>
                        <p style={{padding: '10px', textAlign: 'center'}} id="painting" className="img__description">Bind -- Life Goes On-- Record Cover --  </p>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Commissions
