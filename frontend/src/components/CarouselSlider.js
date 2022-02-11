import congruent from '../images/congruent.png'
import brighterside from '../images/brighterside.png'
import inbetween from '../images/inbetween.png'
import Carousel from 'react-bootstrap/carousel'

function CarouselSlider(){
    return (
        <Carousel className="carousel-fade">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={congruent}
                        alt="First slide"
                        style={{width: '220px'}}
                    />
                    <Carousel.Caption style={{color: 'white'}}>
                        <h2 style={{fontSize: '30px', fontFamily: 'helvetica'}}>Congruent Disillusion</h2>
                        <p>Mixed media on canvas. 9x12 inches. 2021.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={inbetween}
                        alt="Second slide"
                    />

                    <Carousel.Caption style={{color: 'white'}}>
                        <h2 style={{fontSize: '30px', fontFamily: 'helvetica'}}>In between</h2>
                        <p>Charcoal and acrylic on paper. 18x24 inches. 2018.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={brighterside}
                        alt="Third slide"
                    />

                    <Carousel.Caption style={{color: 'white'}}>
                        <h2 style={{fontSize: '30px', fontFamily: 'helvetica'}}>The brighter side of nothing</h2>
                        <p>Mixed media on canvas. 9x12 inches. 2020.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}

export default CarouselSlider