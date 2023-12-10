import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './ImageSlider.css';

import SlideImageItem1 from '../../images/slider/slide-4.jpg';
import SlideImageItem2 from '../../images/slider/slide-5.jpg';
import SlideImageItem3 from '../../images/slider/slide-6.jpg';
import SlideImageItem4 from '../../images/slider/slide-7.jpg';
import SlideImageItem5 from '../../images/slider/slide-8.jpg';

const ImageSlider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.swiper-container', {
      loop: true,
      lazy: true,
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    }, 10000); // Auto slide transition after every 10 seconds

    return () => {
      clearInterval(interval);
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  // Function to handle pagination bullet click
  const handlePaginationClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index); // Move to the clicked slide
    }
  };

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img className="image-slide-item" src={SlideImageItem1} alt="Slide 1" />
        </div>
        <div className="swiper-slide">
          <img className="image-slide-item" src={SlideImageItem2} alt="Slide 2" />
        </div>
        <div className="swiper-slide">
          <img className="image-slide-item" src={SlideImageItem3} alt="Slide 3" />
        </div>
        <div className="swiper-slide">
          <img className="image-slide-item" src={SlideImageItem4} alt="Slide 4" />
        </div>
        <div className="swiper-slide">
          <img className="image-slide-item" src={SlideImageItem5} alt="Slide 5" />
        </div>
        {/* Add other slides here */}
      </div>
      <div className="swiper-pagination">
        <span class = "swiper-pagination-bullet" onClick={() => handlePaginationClick(0)}></span>
        <span class = "swiper-pagination-bullet" onClick={() => handlePaginationClick(1)}></span>
        <span class = "swiper-pagination-bullet" onClick={() => handlePaginationClick(2)}></span>
        <span class = "swiper-pagination-bullet" onClick={() => handlePaginationClick(3)}></span>
        <span class = "swiper-pagination-bullet" onClick={() => handlePaginationClick(4)}></span>
      </div>
    </div>
  );
};

export default ImageSlider;
