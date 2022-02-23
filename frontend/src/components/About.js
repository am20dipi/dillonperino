import selfportrait from '../images/selfportrait.png'
import { Row, Col } from 'react-bootstrap'
import Sidenav from './Sidenav'

function About(){
    return (
        <div className="wrapper" style={{display: 'flex'}}>
            <section className="left" >
                <Sidenav/>
            </section>
            <section className="center" style={{margin: '0', paddingLeft: '100px', paddingTop: '100px', flex: '35%'}}>
                {/* <h1 style={{textAlign: 'left', paddingTop: '50px'}}>ABOUT DILLON</h1>> */}
                    <br/>
                <div className="row">
                    <p><b>DILLON PERINO </b>is a NY-based artist, who often works with charcoals, oil paints and water color. Dillon's focus shifts between portraiture and abstract, in which all mediums borrow inspiration from the other.</p>
                </div>
                <div className="row">
                    <p>Early on, Dillon realized that he would dedicate most of his life to art, and has spent the years since doing so. Having left college early Dillon has very little formal training. While he has many famous mentors, and takes inspiration from music, tattoo-culture and religious iconography, his art is completely independent. </p>
                </div>
                <div className="row">
                    <p>Within this independence, Dillon has created a collection of art that represents the depth of human life and expression.</p>
                </div>
                <div className="row">
                    <p>Dillon is the drummer of <i>Sanction</i>, <i>The Fight</i> and <i>Heal</i>. He has a cat named Charlie and a dog named Zoie.</p>
                </div>
                    <br/>
            </section> 
            <section className="right" style={{margin: '0', flex: '50%'}}>  
                <img style={{width: '70%'}} src={selfportrait} alt="self portrait"/>
                {/* <figcaption style={{fontStyle: 'italic', textAlign: 'center'}} className="text-muted">Self portrait. Oil on canvas board. 2020.</figcaption> */}
            </section>
        </div>
    )
}

export default About