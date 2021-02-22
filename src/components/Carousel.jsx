import React, { useState, useEffect } from 'react';
import '../scss/mods/_carousel.scss';
import CarouselImage0 from '../images/coverArt/CD345304.jpeg';
import CarouselImage1 from '../images/coverArt/CD348889.jpeg';
import CarouselImage2 from '../images/coverArt/CD354937.jpeg';
import CarouselImage3 from '../images/coverArt/CD356113.jpeg';
import CarouselImage4 from '../images/coverArt/CD360052.jpeg';

const Slide = (props) => <img src={props.src} alt={props.alt} />;

const Carousel = ({ automaticCarousel = false, duration = 5000 }) => {
    let images = [
        { src: CarouselImage0, alt: 'They Did Bad Things' },
        { src: CarouselImage1, alt: 'They Conscious Creative' },
        { src: CarouselImage2, alt: 'Lessons from the Navy' },
        { src: CarouselImage3, alt: 'Ellies Voice' },
        { src: CarouselImage4, alt: 'Men Like Gods' }
    ];
    const [slide, setSlide] = useState(0);
    const [slidesLength] = useState(images.length);
    const findIndexValue = (index, count, arrayLength) => {
        let val;
        if (index + count >= arrayLength) {
            val = index + count - arrayLength;
        } else {
            val = index + count;
        }
        return val;
    };
    const prevSlide = () => {
        if (slide === 0) {
            setSlide(slidesLength - 1);
        } else {
            setSlide(0);
        }
    };
    const nextSlide = () => {
        if (slide === slidesLength - 1) {
            setSlide(0);
        } else {
            setSlide(slide + 1);
        }
    };
    useEffect(() => {
        if (automaticCarousel) {
            let timer = setTimeout(() => {
                if (slide === slidesLength - 1) {
                    setSlide(0);
                } else {
                    setSlide(slide + 1);
                }
            }, duration);
            return function cleanup() {
                clearTimeout(timer);
            };
        }
    }, [slide, slidesLength, automaticCarousel, duration]);
    return (
        <div className="carousel px-md-12 py-12">
            {slidesLength > 0 && (
                <div className="slider row middle-xs around-xs">
                    <div className="slide slide-sm">
                        <Slide
                            src={images?.[findIndexValue(4, slide, slidesLength)]?.src}
                            alt={images?.[findIndexValue(4, slide, slidesLength)]?.alt}
                        />
                    </div>
                    <div className="slide slide-md first">
                        <Slide
                            src={images?.[findIndexValue(3, slide, slidesLength)]?.src}
                            alt={images?.[findIndexValue(3, slide, slidesLength)]?.alt}
                        />
                    </div>
                    <div className="slide slide-lg">
                        <Slide
                            src={images?.[findIndexValue(2, slide, slidesLength)]?.src}
                            alt={images?.[findIndexValue(2, slide, slidesLength)]?.alt}
                        />
                    </div>
                    <div className="slide slide-md second">
                        <Slide
                            src={images[findIndexValue(1, slide, slidesLength)]?.src}
                            alt={images?.[findIndexValue(1, slide, slidesLength)]?.alt}
                        />
                    </div>
                    <div className="slide slide-sm">
                        <Slide
                            src={images?.[findIndexValue(0, slide, slidesLength)]?.src}
                            alt={images?.[findIndexValue(0, slide, slidesLength)]?.alt}
                        />
                    </div>
                </div>
            )}
            {!automaticCarousel && (
                <div className="row between-xs my-6">
                    <button onClick={() => prevSlide()} className="btn btn-primary">
                        Previous
                    </button>
                    <button onClick={() => nextSlide()} className="btn btn-primary">
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default Carousel;
