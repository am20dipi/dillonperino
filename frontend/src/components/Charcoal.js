import standupslow from '../images/charcoals/standupslow.png'
import deadeyes from '../images/charcoals/deadeyes.png'
import courage from '../images/charcoals/courage.png'
import withheld from '../images/charcoals/withheld.png'
import tonowhere from '../images/charcoals/tonowhere.png'
import untilthen from '../images/charcoals/untilthen.png'
import celiaathome from '../images/charcoals/celiaathome.png'
import christalone from '../images/charcoals/christalone.png'
import disintegratingeden from '../images/charcoals/disintegratingeden.png'
import emptyroom from '../images/charcoals/emptyroom.png'
import Sidenav from './Sidenav'
import IMG_9765 from '../images/charcoals/IMG_9765.jpg'
import IMG_9768 from '../images/charcoals/IMG_9768.jpg'
import IMG_9772 from '../images/charcoals/IMG_9772.jpg'
import IMG_9774 from '../images/charcoals/IMG_9774.jpg'
import IMG_9781 from '../images/charcoals/IMG_9781-1.jpg'
import IMG_9783 from '../images/charcoals/IMG_9783-1.jpg'
import IMG_9785 from '../images/charcoals/IMG_9785.jpg'
import IMG_9788 from '../images/charcoals/IMG_9788.jpg'
import IMG_9790 from '../images/charcoals/IMG_9790.jpg'
import IMG_9792 from '../images/charcoals/IMG_9792.jpg'
import IMG_9793 from '../images/charcoals/IMG_9793.jpg'
import IMG_9794 from '../images/charcoals/IMG_9794.jpg'
import IMG_9795 from '../images/charcoals/IMG_9795.jpg'
import IMG_9798 from '../images/charcoals/IMG_9798.jpg'
import IMG_9801 from '../images/charcoals/IMG_9801.jpg'

const charcoals = [
    {
        image: standupslow,
        description: 'stand up slow. Charcoal and acrylic on paper. 11x14 inches. 2019.'
    },
    {
        image: deadeyes,
        description: 'Untitled. 2018.'
    },
    {
        image: withheld,
        description: 'Withheld. Pastel and charcoal on paper. 18x24 inches. 2019.'
    },
    {
        image: tonowhere,
        description: 'To nowhere. Charcoal on paper. 18x24 inches. 2019.'
    },
    {
        image: untilthen,
        description: 'Until then. Pastel and charcoal on paper. 14x17 inches. 2019.'
    },
    {
        image: celiaathome,
        description: 'Celia at home. Charcoal and acrylic on paper. 18x24 inches. 2020.'
    },
    
    {
        image: christalone,
        description: 'Untitled. 2017.'
    },
    {
        image: disintegratingeden,
        description: 'Disintegrating eden. 2016.'
    },
    {
        image: emptyroom,
        description: 'From an empty room I dreamt it was the end. Charcoal and Acrylic on paper. 18x24 inches. 2020.'
    },
    {
        image: IMG_9765,
        description: 'Charcoal on paper.'
    },
    {
        image: IMG_9768,
        description: 'Charcoal on paper.'
    },
    {
        image: IMG_9772,
        description: 'Charcoal on paper.'
    },
    {
        image: IMG_9774,
        description: 'Charcoal on paper.'
    },
    {
        image: IMG_9781,
        description: 'Charcoal on paper.'
    },

    {
        image: IMG_9783,
        description: 'Charcoal and pastel on paper.'
    },
    {
        image: IMG_9785,
        description: 'Charcoal on paper.'
    },
    {
        image: IMG_9788,
        description: 'Charcoal on paper.'
    },
    {
        image: IMG_9790,
        description: 'Charcoal on paper.'
    },
    {
        image: IMG_9793,
        description: 'Public Speaker. Charcoal on paper. 2019.'
    },
    {
        image: IMG_9795,
        description: 'Charcoal and pastel on paper. 2018.'
    },
    {
        image: IMG_9798,
        description: 'Charcoal and pastel on paper. 2018.'
    },
    {
        image: IMG_9801,
        description: 'Charcoal on paper. 2019. '
    },
    {
        image: IMG_9794,
        description: 'Charcoal on paper. 2019. '
    },
    {
        image: IMG_9792,
        description: 'Charcoal on paper.'
    },
    {
        image: courage,
        description: 'Untitled. 2017.'
    }
    
]



function Charcoal(){
    return (
        <div className="wrapper" style={{display: 'flex'}}>
            <section className="left">
                <Sidenav/>
            </section>

            <section className="right" style={{flex: '90%'}}>
                <div className="img-gallery">
                    {/* <h1 style={{textAlign: 'left'}}>charcoal<p style={{fontSize:'medium', textAlign: 'left' }} className="text-muted">A collection of charcoal drawings spanning from 2016-present.</p></h1> */}
                    {charcoals.map((charcoal, index) => {
                        return (
                            <div className="img__wrap" key={index}>
                                <img src={charcoal.image} alt={`charcoal-${index}`} />
                                <p style={{padding: '10px'}} className="img__description">{charcoal.description} </p>
                            </div>
                        )
                    })}
        
               

            
                </div>
            </section>

        </div>
        
    )
}

export default Charcoal
