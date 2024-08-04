import React, { useRef } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../styling/Home.css'; // Ensure this path matches your folder structure

// Import images directly
import PoshMerch1 from '../images/PoshMerch1.png';
import PoshMerch2 from '../images/PoshMerch2.png';
import PoshMerch3 from '../images/PoshMerch3.png';
import PoshMerch4 from '../images/PoshMerch4.png';

const Home = () => {
  const slideRef = useRef();

  const goBack = () => {
    slideRef.current.goBack();
  };

  const goNext = () => {
    slideRef.current.goNext();
  };

  return (
    <div className="home-container">
      <section className="intro">
        <h2 className="home-title">Welcome to Posh Collective</h2>
        <p className="home-description">One stop shop for classic fashion finds.</p>
      </section>

      <section className="hero-banner">
        <h1 className="hero-title">Discover Our Fall Collection</h1>
        <button className="cta-button">Shop Now</button>
      </section>

      <section className="slideshow-container">
        <Slide autoplay={true} ref={slideRef} dots={false}>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${PoshMerch1})` }}>
              <span>Chanel</span>
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${PoshMerch2})` }}>
              <span>Louis Vuitton</span>
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${PoshMerch3})` }}>
              <span>Louis Vuitton</span>
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${PoshMerch4})` }}>
              <span>Mulberry</span>
            </div>
          </div>
        </Slide>
        <button className="prev" onClick={goBack}>❮</button>
        <button className="next" onClick={goNext}>❯</button>
      </section>

      <section className="product-category-container">
        <div className="product-grid">
          {/* Add more product items */}
        </div>

        <h2>Shop by Category</h2>
        <div className="category-grid">
          <div className="category-item">
            <img src="/src/images/men-category.jpg" alt="Men's Category" />
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
          {/* Add more categories */}
        </div>
      </section>
    </div>
  );
};

export default Home;
