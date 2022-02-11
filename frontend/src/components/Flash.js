import Sidenav from "./Sidenav"

function Flash(){
    return (
        <div className="wrapper" style={{display: 'flex'}}>
            <section className="left">
                <Sidenav/>
            </section>
            <section className="right">
            
                <div className="img-gallery">
                    <h3 style={{textAlign: 'left'}}>flashes<p className="text-muted" style={{fontSize:'medium', textAlign: 'left' }}>My introduction into tattooing.</p></h3>
                </div>
            </section>
        </div>
    )
}

export default Flash