import Sidenav from "./Sidenav"

function Donate() {
    return (
        <div className="wrapper">
            <section className="left">
                <h2>DILLON PERINO</h2>
                <Sidenav/>
            </section>
            <section className="right">
                <div className="container" style={{textAlign: 'left'}}>
                    <h3>donate, educate</h3>
                    <ul>
                        <li style={{listStyle:'none'}}><a href="https://blacklivesmatters.carrd.co/" target="_blank">black lives matter</a></li>
                        <li style={{listStyle:'none'}}><a href="https://mutualaid.carrd.co/" target="_blank">mutual aid</a></li>
                        <li style={{listStyle:'none'}}><a href="https://www.naacpldf.org/" target="_blank">NAACP Legal Defense Fund</a></li>
                        
                    </ul>
                </div>
                
            </section>
        </div>
    )
}

export default Donate

