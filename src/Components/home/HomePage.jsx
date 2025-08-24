import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../home/HomePage.css';
import logo from '../assets/logo/logo.png';
import about from '../assets/images/about.jpg';

const HomePage = () => {
  const [currentBg, setCurrentBg] = useState(0);
  
  // Array of background images
  const backgroundImages = [
    'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg(prev => (prev + 1) % backgroundImages.length);
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-container">
            <img src={logo} alt="Barizta Logo" className="nav-logo-image" />
            <h1 className="nav-logo">Barizta</h1>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <Link to="/menu" className="nav-link">Menu</Link>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section with Slideshow */}
      <section id="home" className="hero">
        <div 
          className="hero-background" 
          style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2 className="hero-title">Experience the Perfect Blend</h2>
          <p className="hero-subtitle">Artisanal coffee crafted with passion</p>
          <button className="cta-button">Explore Our Menu</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Barizta</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">☕</div>
              <h3>Premium Quality</h3>
              <p>We source only the finest ethically traded coffee beans from around the world.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍🍳</div>
              <h3>Expert Baristas</h3>
              <p>Our skilled baristas craft each cup with precision and care.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Sustainable Practices</h3>
              <p>We're committed to environmentally friendly practices from bean to cup.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3>Cozy Atmosphere</h3>
              <p>Enjoy our warm and welcoming space designed for comfort and relaxation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section id="menu" className="menu-preview">
        <div className="container">
          <h2 className="section-title">Customer Favorites</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <div 
                className="menu-item-image"
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')"}}
              ></div>
              <h3>Espresso</h3>
              <p>Rich, bold and full-bodied</p>
            </div>
            <div className="menu-item">
              <div 
                className="menu-item-image"
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')"}}
              ></div>
              <h3>Cappuccino</h3>
              <p>Perfect balance of espresso, steamed milk and foam</p>
            </div>
            <div className="menu-item">
              <div 
                className="menu-item-image"
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')"}}
              ></div>
              <h3>Latte</h3>
              <p>Smooth and creamy with a delicate coffee taste</p>
            </div>
            <div className="menu-item">
              <div 
                className="menu-item-image"
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1135&q=80')"}}
              ></div>
              <h3>Mocha</h3>
              <p>Chocolate-infused coffee delight with whipped cream</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Our Story</h2>
              <p>Founded in 2015, Barizta began as a small neighborhood coffee shop with a big dream: to serve exceptional coffee while building community. Today, we continue that tradition by crafting each cup with care and creating a warm, welcoming space for all.</p>
              <button className="secondary-button">Learn More</button>
            </div>
            <div 
              className="about-image"
              style={{ backgroundImage: `url(${about})` }}
            ></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Visit Us</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Hours</h3>
              <p>Monday - Friday: 7am - 8pm</p>
              <p>Saturday - Sunday: 8am - 9pm</p>
              <h3>Location</h3>
              <p>123 Coffee Lane, Brewville, BC 12345</p>
              <h3>Contact</h3>
              <p>info@barizta.com</p>
              <p>(555) 123-4567</p>
            </div>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57306.873112256464!2d80.2999798486328!3d7.253954399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae31500762a9405%3A0x5adc70bfb6c089b6!2sCoffee%20Factory%20Outlet!5e1!3m2!1sen!2slk!4v1755938287394!5m2!1sen!2slk" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Barizta Coffee Shop Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 Barizta Coffee Shop. All rights reserved.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Twitter">TW</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;