// client/src/pages/Home.jsx

import React, { useState } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { v4 as uuidv4 } from 'uuid';
import { config } from 'react-spring';
import '../styling/Home.css';

import PoshMerch1 from '../images/PoshMerch1.png';
import PoshMerch2 from '../images/PoshMerch2.png';
import PoshMerch3 from '../images/PoshMerch3.png';
import PoshMerch4 from '../images/PoshMerch4.png';

const Home = () => {
  const [goToSlide, setGoToSlide] = useState(0);

  const slides = [
    { key: uuidv4(), content: <img src={PoshMerch1} alt="Chanel" /> },
    { key: uuidv4(), content: <img src={PoshMerch2} alt="Louis Vuitton" /> },
    { key: uuidv4(), content: <img src={PoshMerch3} alt="Louis Vuitton" /> },
    { key: uuidv4(), content: <img src={PoshMerch4} alt="Mulberry" /> },
  ];

  return (
    <div className="home-container">
      <section className="intro">
        <h2 className="home-title">Welcome to Posh Collective</h2>
        <p className="home-description">One stop shop for classic fashion finds.</p>
      </section>

      <section className="carousel-container">
        <Carousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={2}
          animationConfig={config.gentle}
        />
        <div className="carousel-buttons">
          <button onClick={() => setGoToSlide(goToSlide - 1)}>❮</button>
          <button onClick={() => setGoToSlide(goToSlide + 1)}>❯</button>
        </div>
      </section>

      <section className="hero-banner">
        <h1 className="hero-title">Discover Our Fall Collection</h1>
        <button className="cta-button">Shop Now</button>
      </section>

      <section className="product-category-container">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <div className="category-item">
            <img src="/src/images/women-category.jpg" alt="Women's Category" />
            <h3>Shoes</h3>
          </div>
          <div className="category-item">
            <img src="/src/images/women-category.jpg" alt="Women's Category" />
            <h3>Bags</h3>
          </div>
          <div className="category-item">
            <img src="/src/images/women-category.jpg" alt="Women's Category" />
            <h3>Clothes</h3>
          </div>
          <div className="category-item">
            <img src="/src/images/women-category.jpg" alt="Women's Category" />
            <h3>Accessories</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
