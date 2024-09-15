import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <div className="header">
        <h1>Fruit.AI</h1>
        <p>"Be Healthy!"</p>
      </div>
      <div className="services-grid">
        <Link to="/chatbot" className="service-item chatbot">
          <span>Chat.</span>
        </Link>
        <Link to="/translator" className="service-item translator">
          <span>Translator</span>
        </Link>
        <Link to="/faq" className="service-item faq">
          <span>FAQs</span>
        </Link>
        <Link to="/about" className="service-item about">
          <span>About</span>
        </Link>
      </div>
      <div className="fruit-images">
        <img src="https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Apple" className="fruit-image"/>
        <img src="https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Banana" className="fruit-image"/>
        <img src="https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Orange" className="fruit-image"/>
        <img src="https://images.pexels.com/photos/1258264/pexels-photo-1258264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Strawberry" className="fruit-image"/>
        <img src="https://images.pexels.com/photos/915016/pexels-photo-915016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Pineapple" className="fruit-image"/>
      </div>
    </div>
  );
}

export default HomePage;
