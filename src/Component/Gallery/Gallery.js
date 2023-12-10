// Gallery.js
import React from 'react';
import './Gallery.css';
import img1 from "../../images/portfolio/5.jpg"
import img2 from "../../images/portfolio/6.jpg"
import img3 from "../../images/portfolio/7.jpg"
import img4 from "../../images/portfolio/8.jpg"
import img5 from "../../images/portfolio/9.jpg"
import img6 from "../../images/portfolio/10.jpg"
import img7 from "../../images/portfolio/11.jpg"

const Gallery = () => {
  return (
    <section id="gallery" className="Gallery_content">
        <h4>Khoảnh khắc</h4>
        <h2>Những kỉ niệm ngọt ngào được lưu giữ</h2>
        <div className='gallery'>
            <div class="image"><img src={img1} alt=""/></div>
            <div class="image"><img src={img2} alt=""/></div>
            <div class="image"><img src={img3} alt=""/></div>
            <div class="image"><img src={img4} alt=""/></div>
            <div class="image"><img src={img5} alt=""/></div>
            <div class="image"><img src={img6} alt=""/></div>
            <div class="image"><img src={img7} alt=""/></div>
        </div>
    </section>
  );
};

export default Gallery;