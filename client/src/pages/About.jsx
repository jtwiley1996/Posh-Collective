import React from 'react';
import '../styling/About.css'; // Assuming you'll add some CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Us</h2>
      <p className="about-description">Learn more about our company and mission.</p>
      
      <div className="location-section">
        <h3 className="section-title">Our Location</h3>
        <p className="location-description">We are located near the intersection of Morris and Capitol, at 1425 E. Capitol Drive in Shorewood.</p>
      </div>
      
      <div className="consignment-section">
        <h3 className="section-title">Consignment Information</h3>
        <p className="consignment-notice">We are no longer accepting Summer Consignment. Fall consignment will begin August 15th.</p>
        <p className="consignment-details">
          We strive to offer our customers HIGH QUALITY ITEMS that are current, stylish, and in mint condition.
        </p>
        <p className="consignment-rules">
          We do NOT accept counterfeit/replica handbags or accessories.
        </p>
        <p className="consignment-policy">
          At Posh Collective, we are very selective with what we take on consignment. When bringing in items for consignment, please be sure items are clean, free of stains, holes, etc., with a MAXIMUM of 20 items. Because of limited space and our desire to keep our shop fresh with something new each time you visit, we may only accept a select number of your total items.
        </p>
        <p className="contact-info">
          Please contact us and provide your email address for a copy of our consignment policy and agreement.
        </p>
      </div>
    </div>
  );
};

export default About;
