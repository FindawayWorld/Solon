import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs, BreadcrumbItem } from '../../components/Breadcrumbs';
import Carousel from '../../components/Carousel';

const CarouselPage = () => {
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
            <div className="mt-6">
                <h3>Prop automaticCarousel = false</h3>
                <p className="mb-0">The prev/next buttons are displayed for a manual carousel.</p>
                <Carousel automaticCarousel={false} />
            </div>
            <div className="mt-6">
                <h3>Prop automaticCarousel = true</h3>
                <p className="mb-0">A timer is set in the UseEffect and the carousel is automatic. Duration is by default 5000 but can be passed into Carousel.</p>
                <Carousel automaticCarousel={true} />
            </div>
        </section>
    );
};

export default CarouselPage;
