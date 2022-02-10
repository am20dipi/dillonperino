import congruent from '../images/congruent.png'
import brighterside from '../images/brighterside.png'
import inbetween from '../images/inbetween.png'

import React, { useState } from 'react'

import Carousel from 'react-bootstrap/carousel'


function Home(){
    return (
        <div className="container">
            <h2>DILLON PERINO</h2>
            <Carousel className="carousel-fade">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={congruent}
                        alt="First slide"
                        style={{width: '220px'}}
                    />
                    <Carousel.Caption style={{color: 'gray'}}>
                        <h2 style={{fontSize: '30px'}}>Congruent Disillusion</h2>
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
                        <h2 style={{fontSize: '30px'}}>In between</h2>
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
                        <h2 style={{fontSize: '30px'}}>The brighter side of nothing</h2>
                        <p>Mixed media on canvas. 9x12 inches. 2020.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home

{/* <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100"  src={congruent} alt="First slide"/>
                            <div className="carousel-caption d-none d-md-block" style={{color: 'black', fontSize: '40px', fontWeight: 'bold'}}>
                                <p>Congruent Disillusion</p>
                                <p>Mixed media on canvas. 9x12 inches. 2021.</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={brighterside} alt="Second slide"/>
                        <div className="carousel-caption d-none d-md-block" style={{color: 'black', fontSize: '40px', fontWeight: 'bold'}}>
                               
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={inbetween} alt="Third slide"/>
                        <div className="carousel-caption d-none d-md-block" style={{color: 'black', fontSize: '40px', fontWeight: 'bold'}}>
                                
                        </div>
                    </div>
                </div> */}