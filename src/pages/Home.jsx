import React from 'react';
import './Home.css';
import banner from '../assets/home-banner.jpg';
import img1 from '../assets/gallery1.jpg';
import img2 from '../assets/gallery2.jpg';
import img3 from '../assets/gallery3.jpg';

function Home() {
  return (
    <div className="home-page">
      <img src={banner} alt="Custom luxury swimming pool" className="home-banner" />

      <h1>Custom Swimming Pools in India</h1>
      <p className="intro">
        Welcome to <strong>BlueWave Pools</strong>, the leading custom pool construction company in India. 
        We design and build luxury swimming pools, jacuzzis, water features, and outdoor living areas for homes and resorts.
      </p>

      <h2>Why Choose BlueWave Pools?</h2>
      <ul className="seo-list">
        <li>Over 15 years of expertise in custom swimming pool design</li>
        <li>Top-rated materials and cutting-edge construction technology</li>
        <li>Experienced architects and certified pool engineers</li>
        <li>On-time delivery and post-installation support</li>
      </ul>

      <h2>Gallery: Our Recent Work</h2>
      <div className="home-gallery">
        <img src={img1} alt="Modern backyard pool with LED lighting" />
        <img src={img2} alt="Infinity pool at luxury villa in Jaipur" />
        <img src={img3} alt="Kid-friendly family swimming pool" />
      </div>

      <h2>Serving Across India</h2>
      <p>
        Whether you're based in <strong>Jaipur, Delhi, Mumbai</strong> or anywhere else in India, we can turn your dream pool into reality.
        Contact us today for a personalized quote and a free consultation.
      </p>
    </div>
  );
}

export default Home;
