import Sidenav from "./Sidenav"
import IMG_9805 from '../images/flash/IMG_9805.jpg'
import IMG_9806 from '../images/flash/IMG_9806.jpg'
import IMG_9808 from '../images/flash/IMG_9808.jpg'
import IMG_9809 from '../images/flash/IMG_9809.jpg'
import IMG_9810 from '../images/flash/IMG_9810.jpg'
import IMG_9811 from '../images/flash/IMG_9811.jpg'
import IMG_9816 from '../images/flash/IMG_9816.jpg'
import IMG_9820 from '../images/flash/IMG_9820.jpg'
import IMG_9823 from '../images/flash/IMG_9823.jpg'
import IMG_9825 from '../images/flash/IMG_9825.jpg'
import IMG_9831 from '../images/flash/IMG_9831.jpg'
import IMG_9837 from '../images/flash/IMG_9837.jpg'


function Flash(){
    return (
        <div className="wrapper" style={{display: 'flex'}}>
            <section className="left">
                <Sidenav/>
            </section>
            <section className="right">
                <div className="img-gallery">
                    <h3 style={{textAlign: 'left'}}>flashes<p className="text-muted" style={{fontSize:'medium', textAlign: 'left' }}>My introduction into tattooing.</p></h3>
                    <div className="img__wrap">
                        <img src={IMG_9805}/>
                        <p style={{padding: '10px'}} className="img__description">Untitled. 2018.</p>
                    </div>
                    <div className="img__wrap">
                        <img src={IMG_9806}/>
                        <p style={{padding: '10px'}} className="img__description">Untitled. 2018.</p>
                    </div>
                    <div className="img__wrap">
                        <img src={IMG_9808}/>
                        <p style={{padding: '10px'}} className="img__description">Untitled. 2018.</p>
                    </div>
                    <div className="img__wrap">
                        <img src={IMG_9809}/>
                        <p style={{padding: '10px'}} className="img__description">Untitled. 2018.</p>
                    </div>
                    <div className="img__wrap">
                        <img src={IMG_9810}/>
                        <p style={{padding: '10px'}} className="img__description">Untitled. 2018.</p>
                    </div>
                    <div className="img__wrap">
                        <img src={IMG_9811}/>
                        <p style={{padding: '10px'}} className="img__description">Untitled. 2018.</p>
                    </div>
                    <div className="img__wrap">
                        <img src={IMG_9816}/>
                        <p style={{padding: '10px'}} className="img__description">Untitled. 2018.</p>
                    </div>
                    <div className="img__wrap">
                        <img src={IMG_9820}/>
                        <p style={{padding: '10px'}} className="img__description">Untitled. 2018.</p>
                    </div>
                    <div className="img__wrap">
                        <img src={IMG_9823}/>
                        <p style={{padding: '10px'}} className="img__description">Untitled. 2018.</p>
                    </div>
                    <div className="img__wrap">
                        <img src={IMG_9825}/>
                        <p style={{padding: '10px'}} className="img__description">Untitled. 2018.</p>
                    </div>
                    <div className="img__wrap">
                        <img src={IMG_9831}/>
                        <p style={{padding: '10px'}} className="img__description">Untitled. 2018.</p>
                    </div>
                    <div className="img__wrap">
                        <img src={IMG_9837}/>
                        <p style={{padding: '10px'}} className="img__description">Untitled. 2018.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Flash