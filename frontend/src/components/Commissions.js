import Sidenav from './Sidenav.js'
import ageof from '../images/commissions/ageof.jpeg'
import bindtruecolors from '../images/commissions/bindtruecolors.png'
import brokeninrefraction from '../images/commissions/brokeninrefraction.jpg'
import rulethemall from '../images/commissions/rulethemall.png'
import lifegoeson from '../images/commissions/lifegoeson.jpg'
import vamachara from '../images/commissions/vamachara.jpg'
import atonement from '../images/commissions/atonement.jpg'

const commissions = [
    {
        image: ageof,
        description: 'Age of Apocalypse -- Grim Wisdom -- Record Cover ',
        link: 'https://ageofapocalypseny.bandcamp.com/album/grim-wisdom'
    },
    {
        image: bindtruecolors,
        description: 'Bind -- True colors -- EP cover',
        link:'https://pleadyourcaserecords.bandcamp.com/album/pyc008-true-colors'
    },
    {
        image: brokeninrefraction,
        description: 'Sanction -- broken in refraction -- Record Cover',
        link: 'https://sanction631.bandcamp.com/album/broken-in-refraction'
    },
    {
        image: rulethemall,
        description: 'Rule them all -- blueprint for change -- EP cover',
        link: 'https://rulethemallhc.bandcamp.com/releases'
    },
    {
        image: lifegoeson,
        description: 'Bind -- Life Goes On-- Record Cover',
        link: 'https://open.spotify.com/album/6UXbKRqhxsyfc4JoiBERpt'
    },
    {
        image: vamachara,
        description: 'Vamachara -- Despondent -- EP',
        link: 'https://vamacharahc.bandcamp.com/album/despondent'
    },
    {
        image: atonement,
        description: 'Atonement -- In Search of Divinity -- EP ',
        link: 'https://atonementcthc.bandcamp.com/'
    }
]


function Commissions(){
    return (
        <div className="wrapper" style={{display: 'flex'}}>
            <section className="left">
                <Sidenav/>
            </section>
            <section className="right" style={{flex: '90%'}}>
                <div className="img-gallery">
                    {/* <h1 style={{textAlign: 'left'}}>
                        commissions */}
                        <p className="text-muted" style={{fontSize:'medium', textAlign: 'left' }}>
                            Click to listen. 
                        </p>
                    {/* </h1> */}
                    {commissions.map((commission, index) => {
                        return (
                            <div style={{cursor: 'pointer'}} id="commission" key={index} onClick={() => window.open(commission.link)}>
                                <img src={commission.image} alt={`commission-${index}`} />
                                <p style={{padding: '10px', textAlign: 'center'}} id="painting" className="img__description"> {commission.description}</p>
                            </div>
                        )
                    })}
                
                </div>
            </section>
        </div>

    )
}

export default Commissions
