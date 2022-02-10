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




function Charcoal(){
    return (
        <div className="container">
            <div className="img-gallery">
                <h2 style={{textAlign: 'left'}}>charcoal<p style={{fontSize:'medium', textAlign: 'left' }} className="text-muted">A collection of charcoal drawings.</p></h2>
                <div className="img__wrap">
                    <img src={standupslow}/>
                    <p style={{padding: '10px'}} className="img__description">Stand up slow. Charcoal and acrylic on paper. 11x14 inches. 2019.</p>
                </div>
                <div className="img__wrap">
                    <img src={deadeyes}/>
                    <p style={{padding: '10px'}} className="img__description">Dead eyes. 2018.</p>
                </div>
                <div className="img__wrap">
                    <img src={courage}/>
                    <p style={{padding: '10px'}} className="img__description">It takes courage falling so far. 2017.</p>
                </div>
                <div className="img__wrap">
                    <img src={withheld}/> 
                    <p style={{padding: '10px'}} className="img__description">Withheld. Pastel and charcoal on paper. 18x24 inches. 2019.</p>
                </div>
                <div className="img__wrap">
                    <img src={tonowhere}/>
                    <p style={{padding: '10px'}} className="img__description">To nowhere. Charcoal on paper. 18x24 inches. 2019.</p>
                </div>
                <div className="img__wrap">
                    <img src={untilthen}/>
                    <p style={{padding: '10px'}} className="img__description">Until then. Pastel and charcoal on paper. 14x17 inches. 2019.</p>
                </div>
                <div className="img__wrap">
                    <img src={celiaathome}/>
                    <p style={{padding: '10px'}} className="img__description">Celia at home. Charcoal and acrylic on paper. 18x24 inches. 2020.</p>
                </div>
                <div className="img__wrap">
                    <img src={christalone}/>
                    <p style={{padding: '10px'}} className="img__description">Misunderstood because he wanted to meet christ alone. 2017.</p>
                </div>
                <div className="img__wrap">
                    <img src={disintegratingeden}/>
                    <p style={{padding: '10px'}} className="img__description">Disintegrating eden. 2016. </p>
                </div>
                <div className="img__wrap">
                    <img src={emptyroom}/>
                    <p style={{padding: '10px'}} className="img__description">From an empty room I dreamt it was the end. Charcoal and Acrylic on paper. 18x24 inches. 2020.</p>
                </div>
                
                
                
                
                
                

            </div>
        </div>
    )
}

export default Charcoal


// 
// 
// 
// 

// 