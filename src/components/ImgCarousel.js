import React, { useState, useRef } from "react";
import startingImg from "../assets/images/main.png";

import "./styles/Carousel.css";
import girlImg from "../assets/images/girl.png";
import boyImg from "../assets/images/boy.png";

import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ImgCarousel = () => {
    const carouselRef = useRef(null);

    const sampleImages = [
        { id: 0, src: girlImg },
        { id: 1, src: startingImg },
        { id: 2, src: boyImg },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);


    const handlePrev = () => {
        if (currentIndex === 0) {
            setCurrentIndex(sampleImages.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex === sampleImages.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (

        <div className="carousel-container">

            <div className="carousel" ref={carouselRef}>
                <button className="carousel-btn prev-btn" onClick={handlePrev}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                <img src={sampleImages[currentIndex].src} alt={`${currentIndex + 1}`} />

                <button className="carousel-btn next-btn" onClick={handleNext}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>

            <div className="carousel-dots">
                {sampleImages.map((image) => (
                    <div
                        key={image.id}
                        className={`dot ${image.id === sampleImages[currentIndex].id ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(sampleImages.findIndex((img) => img.id === image.id))}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImgCarousel;