import React from 'react';
import "./Carousel.module.scss";
import { Carousel } from 'react-bootstrap';

const MyCarousel = () => {
    return (
        <Carousel interval={2000} pause={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default MyCarousel;