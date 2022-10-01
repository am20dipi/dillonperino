import Sidenav from "./Sidenav"

function Donate() {
    return (
        <div className="wrapper">
            <section className="left">
                <Sidenav/>
            </section>
            <section id="donate" className="right" style={{paddingLeft: '100px', paddingTop: '260px'}}>
            {/* <h1 style={{textAlign: 'left', paddingTop: '45px', paddingLeft: '29px'}}>donate</h1> */}

                    <ul>
                        <li style={{listStyle:'none'}}><a href="https://blacklivesmatters.carrd.co/" target="_blank" rel="noreferrer">black lives matter</a></li>
                        <li style={{listStyle:'none'}}><a href="https://mutualaid.carrd.co/" target="_blank" rel="noreferrer">mutual aid</a></li>
                        <li style={{listStyle:'none'}}><a href="https://www.naacpldf.org/" target="_blank" rel="noreferrer">NAACP Legal Defense Fund</a></li>
                        
                    </ul>
             
                
            </section>
        </div>
    )
}

export default Donate

