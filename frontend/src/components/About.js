import selfportrait from '../images/selfportrait.png'

function About(){
    return (
        <div style={{textAlign: 'left'}} className="container">
            <h4 style={{textAlign: 'left'}}>ABOUT DILLON</h4>
            <p className="text-muted">Modern oil-focused painter based out of New York.</p>
            <br/>
            <img style={{width: '50%'}} src={selfportrait} alt="self portrait"/>
            <figcaption style={{fontStyle: 'italic'}} className="text-muted">Self portrait. 2020. Oil on canvas board.</figcaption>
        </div>
    )
}

export default About