import Sidenav from "./Sidenav"
import React, { useState } from 'react'

import IMG_9805 from '../images/flash/IMG_9805.jpg'
import IMG_9806 from '../images/flash/IMG_9806.jpg'
import IMG_9808 from '../images/flash/IMG_9808.jpg'
import IMG_9809 from '../images/flash/IMG_9809.jpg'
import IMG_9810 from '../images/flash/IMG_9810.jpg'
import IMG_9811 from '../images/flash/IMG_9811.jpg'

import IMG_9820 from '../images/flash/IMG_9820.jpg'
import IMG_9823 from '../images/flash/IMG_9823.jpg'
import IMG_9825 from '../images/flash/IMG_9825.jpg'
import IMG_9831 from '../images/flash/IMG_9831.jpg'


const flashes = [
    {
        image: IMG_9805,
        description: '2021.'
    },
    {
        image: IMG_9806,
        description: '2021'
    },
    {
        image: IMG_9808,
        description: '2021'
    },
    {
        image: IMG_9809,
        description: '2021'
    },
    {
        image: IMG_9810,
        description: '2021'
    },
    {
        image: IMG_9811,
        description: '2021'
    },
    {
        image: IMG_9820,
        description: '2021'
    },
    {
        image: IMG_9823,
        description: '2021'
    },
    {
        image: IMG_9825,
        description: '2021'
    },
    {
        image: IMG_9831,
        description: '2021'
    },
]


function Flash(){
    const [modal, setModal] = useState(false)
    const [tempImgSrc, setTempImgSrc] = useState('')


    const getImage = (image) => {
        setTempImgSrc(image)
        
        setModal(true)
        debugger
    }

    return (
        <div className="wrapper" style={{display: 'flex'}}>
            <section className="left">
                <Sidenav/>
            </section>
            <section className="right" style={{flex: '90%'}}>
                <div className={modal ? "modal open" : "modal" }>
                    <img src={tempImgSrc}/>
                </div>
                <div className="img-gallery" id="flash-gallery">
                    {/* <h1 style={{textAlign: 'left'}}>flash<p className="text-muted" style={{fontSize:'medium', textAlign: 'left' }}>My introduction into tattooing.</p></h1> */}
                    {flashes.map((flash, index) => {
                        return (

                            <div className="img_wrap" key={index} onClick={() => getImage(flash.image)}>
                                <img src={flash.image}  alt={`flash-${index}`}  />
                                <p style={{padding: '10px'}} className="img__description">{flash.description}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Flash