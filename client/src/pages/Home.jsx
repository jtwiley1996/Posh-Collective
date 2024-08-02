import React, { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import '../styling/Home.css'; // Ensure this path matches your folder structure

const images = [
  '/src/images/PoshMerch1.png',
  '/src/images/PoshMerch2.png',
  '/src/images/PoshMerch3.png',
  '/src/images/PoshMerch4.png',
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  return (
    <div className="home-container">
      <section className="intro">
        <h2 className="home-title">Welcome to Posh Collective</h2>
        <p className="home-description">One stop shop for classic fashion finds.</p>
      </section>

      <section className="hero-banner">
        <h1 className="hero-title">Discover Our New Collection</h1>
        <button className="cta-button">Shop Now</button>
      </section>

      <section className="slideshow-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            alt={`Posh Merch ${index + 1}`}
          />
        ))}
        <button className="prev" onClick={handlePrev}>❮</button>
        <button className="next" onClick={handleNext}>❯</button>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-item">
            <img src="/src/images/product1.jpg" alt="Product 1" />
            <h3>Product Name</h3>
            <p>$99.99</p>
          </div>
          <div className="product-item">
            <img src="/src/images/product2.jpg" alt="Product 2" />
            <h3>Product Name</h3>
            <p>$99.99</p>
          </div>
          {/* Add more product items */}
        </div>
      </section>

      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <div className="category-item">
            <img src="/src/images/men-category.jpg" alt="Men's Category" />
            <h3>Men</h3>
          </div>
          <div className="category-item">
            <img src="/src/images/women-category.jpg" alt="Women's Category" />
            <h3>Women</h3>
          </div>
          {/* Add more categories */}
        </div>
      </section>
    </div>
  );
};

export default Home;
