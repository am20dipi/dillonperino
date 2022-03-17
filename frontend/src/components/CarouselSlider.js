import congruent from '../images/congruent.png'
import brighterside from '../images/brighterside.png'
import inbetween from '../images/inbetween.png'
import Carousel from 'react-bootstrap/carousel'

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
        <Carousel className="carousel-fade">
            {slides.map((slide, index) => {
                return (

                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={slide.img}
                            alt={slide.name}
                            style={{width: '220px'}}
                        />
                        <Carousel.Caption style={{color: 'white'}}>
                            <h2 style={{fontSize: '30px', fontFamily: 'helvetica'}}>{slide.name}</h2>
                            <p>{slide.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
            </Carousel>
    )
}

export default CarouselSlider