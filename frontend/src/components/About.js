import selfportrait from '../images/selfportrait.png'
//
import Sidenav from './Sidenav'

function About(){
    return (
        <div className="wrapper" style={{display: 'flex'}}>
            <section className="left" >
                <Sidenav/>
            </section>
            <section className="right" style={{margin: '0'}}>
                <div className="col-7">

                    <h4 style={{textAlign: 'left'}}>ABOUT DILLON</h4>
                    <br/>
                    <img style={{width: '50%'}} src={selfportrait} alt="self portrait"/>
                    <figcaption style={{fontStyle: 'italic'}} className="text-muted">Self portrait. Oil on canvas board. 2020.</figcaption>
                </div>
                <br/>
                <div className="col-5">
                    <div className="row">
                        <p>DILLON PERINO is a NY-based artist, who often works with charcoals, oil paints and water color. Dillon's focus shifts between portraiture and abstract, in which all mediums borrow inspiration from the other.</p>
                    </div>
                    <div className="row">
                        <p>Early on, Dillon realized that he would dedicate most of his life to art, and has spent the years since doing so. Having left college early Dillon has very little formal training. While he has many famous mentors, and takes inspiration from music and art-culture, his art is completely independent. </p>
                    </div>
                    <div className="row">
                        <p>Within this independence, Dillon has cultivated a collection of art that represents the idiosyncrasies of human life.</p>
                    </div>
                    <div className="row">
                        <p>Dillon is the drummer of <i>Sanction</i>, <i>The Fight</i> and <i>Heal</i>.</p>
                    </div>
                </div>
            </section> 
        </div>
    )
}

export default About