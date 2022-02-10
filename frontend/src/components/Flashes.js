import Sidenav from "./Sidenav"

function Flashes(){
    return (
        <div className="wrapper" style={{display: 'flex'}}>
            <section className="left">
                <Sidenav/>
            </section>
            <section className="right">
            
                <div className="img-gallery">
                    <h2 style={{textAlign: 'left'}}>flashes<p className="text-muted" style={{fontSize:'medium', textAlign: 'left' }}>My introduction into tattooing.</p></h2>
                </div>
            </section>
        </div>
    )
}

export default Flashes