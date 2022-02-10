import selfportrait from '../images/selfportrait.png'
//
import Sidenav from './Sidenav'

function About(){
    return (
        <div className="wrapper" style={{display: 'flex'}}>
            <section className="left" >
            <h2>DILLON PERINO</h2>
                <Sidenav/>
            </section>
            
            <section className="right" style={{margin: '0'}}>
                    <h4 style={{textAlign: 'left'}}>ABOUT DILLON</h4>
                    <p style={{textAlign: 'left'}} className="text-muted">Modern oil-focused painter based out of New York.</p>
     
                    <img style={{width: '50%'}} src={selfportrait} alt="self portrait"/>
                    <figcaption style={{fontStyle: 'italic'}} className="text-muted">Self portrait. Oil on canvas board. 2020.</figcaption>
            </section>
            
        </div>
    )
}

export default About