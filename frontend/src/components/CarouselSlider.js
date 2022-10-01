import congruent from '../images/congruent.png'
import brighterside from '../images/brighterside.png'
import inbetween from '../images/inbetween.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const slides = [
    {
        name: "Congruent Disillusion",
        img: congruent,
        description: 'Mixed media on canvas. 9x12 inches. 2021.'
    },
    {
        name: 'In Between',
        img: inbetween,
        description: 'Charcoal and acrylic on paper. 18x24 inches. 2018.'
    },
    {
        name: 'The brighter side of nothing',
        img: brighterside,
        description: 'Mixed media on canvas. 9x12 inches. 2020.'
    }
]

function CarouselSlider(){
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop interval={5000} useKeyboardArrows swipeable autoPlay showArrows={false} showStatus={false} showThumbs={false} className="carousel">
                {slides.map((slide, index) => {
                    return (
                        <div className="carousel-slide" key={index}>
                            <figure>
                                <img
                                    className="d-block w-100"
                                    src={slide.img}
                                    alt={slide.name}
                                />
                                <br/>
                                <figcaption>
                                    <h2 style={{fontSize: '20px', fontFamily: 'Syncopate'}}>{slide.name}</h2>
                                    <p>{slide.description}</p>
                                </figcaption>
                            </figure>
                            <br/>
                        </div>
                    )
                })}
                </Carousel>
        </div>
    
    )
}

export default CarouselSlider