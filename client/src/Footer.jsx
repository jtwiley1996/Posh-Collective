import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Ensure you create a Footer.css file for styling
import facebookIcon from './images/facebook.svg';
import instagramIcon from './images/instagram.svg';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section company-info">
          <h3>Posh Collective</h3>
          <p>1425 E Capitol Dr, Shorewood, WI 53211</p>
          <p>Email: contact@poshcollective.com</p>
          <p>Phone: (414)-573-8982</p>
          <p>Business Hours: Tue-Sat 12pm-5pm</p>
        </div>
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section customer-service">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="/shipping-returns">Shipping & Returns</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/size-guide">Size Guide</a></li>
            <li><a href="/order-tracking">Order Tracking</a></li>
          </ul>
        </div>
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" className="social-icon" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <form action="/subscribe" method="post">
            <input type="email" name="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-section payment-methods">
          <h3>Payment Methods</h3>
          <img src="/images/visa.png" alt="Visa   " />
          <img src="/images/mastercard.png" alt="MasterCard   " />
          <img src="/images/paypal.png" alt="PayPal" />
        </div>
        <div className="footer-section legal">
          <p>&copy; 2024 Posh Collective. All rights reserved.</p>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

