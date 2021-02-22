import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs, BreadcrumbItem } from '../../components/Breadcrumbs';
import Carousel from '../../components/Carousel';
import CarouselImage0 from '../../images/coverArt/CD345304.jpeg';
import CarouselImage1 from '../../images/coverArt/CD348889.jpeg';
import CarouselImage2 from '../../images/coverArt/CD354937.jpeg';
import CarouselImage3 from '../../images/coverArt/CD356113.jpeg';
import CarouselImage4 from '../../images/coverArt/CD360052.jpeg';

const CarouselPage = () => {
    let images = [
        { src: CarouselImage0, alt: 'They Did Bad Things' },
        { src: CarouselImage1, alt: 'They Conscious Creative' },
        { src: CarouselImage2, alt: 'Lessons from the Navy' },
        { src: CarouselImage3, alt: 'Ellies Voice' },
        { src: CarouselImage4, alt: 'Men Like Gods' }
    ];
    return (
        <section className="mb-5">
            <Breadcrumbs>
                <BreadcrumbItem as={Link} to="/components">
                    Components
                </BreadcrumbItem>
                <BreadcrumbItem current>Carousel</BreadcrumbItem>
            </Breadcrumbs>
            <h2>Carousel</h2>
            <hr />
            <p>
                <strong>Required assets:</strong> <code>scss/components/_carousel.scss</code>,
                <code>components/carousel.jsx</code>.
            </p>
            <p>
                <strong>* Currently set up to display 5 images.</strong>
            </p>
            <div className="mt-6">
                <h3>Prop automaticCarousel = false</h3>
                <p className="mb-0">The prev/next buttons are displayed for a manual carousel.</p>
                <Carousel automaticCarousel={false} images={images} />
            </div>
            <div className="mt-6">
                <h3>Prop automaticCarousel = true</h3>
                <p className="mb-0">
                    A timer is set in the UseEffect and the carousel is automatic. Duration is by default 5000 but can
                    be passed into Carousel.
                </p>
                <Carousel automaticCarousel={true} images={images} />
            </div>
        </section>
    );
};

export default CarouselPage;
