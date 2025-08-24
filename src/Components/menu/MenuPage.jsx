import React from 'react';
import { Link } from 'react-router-dom';
import './MenuPage.css';
import logo from '../assets/logo/logo.png';

const MenuPage = () => {
  // Coffee items data
  const coffeeItems = [
    {
      id: 1,
      name: "Espresso",
      description: "Strong, bold flavor in a concentrated form",
      price: "$3.50",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      name: "Cappuccino",
      description: "Perfect balance of espresso, steamed milk and foam",
      price: "$4.25",
      image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    },
    {
      id: 3,
      name: "Latte",
      description: "Smooth and creamy with a delicate coffee taste",
      price: "$4.50",
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1135&q=80"
    },
    {
      id: 4,
      name: "Mocha",
      description: "Chocolate-infused coffee delight with whipped cream",
      price: "$4.75",
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1135&q=80"
    },
    {
      id: 5,
      name: "Americano",
      description: "Espresso with hot water for a smoother taste",
      price: "$3.75",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 6,
      name: "Macchiato",
      description: "Espresso with a dollop of foamed milk",
      price: "$4.00",
      image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    },
    {
      id: 7,
      name: "Flat White",
      description: "Creamy microfoam over a double shot of espresso",
      price: "$4.50",
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1135&q=80"
    },
    {
      id: 8,
      name: "Cold Brew",
      description: "Smooth, less acidic coffee brewed cold for 12 hours",
      price: "$4.75",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 9,
      name: "Iced Coffee",
      description: "Chilled coffee served with ice and optional milk",
      price: "$4.25",
      image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    },
    {
      id: 10,
      name: "Affogato",
      description: "Vanilla ice cream drowned in a shot of hot espresso",
      price: "$5.50",
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1135&q=80"
    }
  ];

  // Snack items data
  const snackItems = [
    {
      id: 1,
      name: "Croissant",
      description: "Buttery, flaky pastry perfect with any coffee",
      price: "$3.25",
      image: "https://images.unsplash.com/photo-1555507036-ab794f24d8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
    },
    {
      id: 2,
      name: "Blueberry Muffin",
      description: "Moist muffin bursting with fresh blueberries",
      price: "$3.50",
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1165&q=80"
    },
    {
      id: 3,
      name: "Chocolate Chip Cookie",
      description: "Classic cookie with melty chocolate chips",
      price: "$2.75",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
    },
    {
      id: 4,
      name: "Cinnamon Roll",
      description: "Sweet, swirled pastry with cream cheese icing",
      price: "$4.25",
      image: "https://images.unsplash.com/photo-1610622848850-7cef0a5d5f5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
    },
    {
      id: 5,
      name: "Banana Bread",
      description: "Moist, flavorful bread with walnuts",
      price: "$3.75",
      image: "https://images.unsplash.com/photo-1582914299256-3c6665ffbf9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 6,
      name: "Quiche Lorraine",
      description: "Savory pastry with bacon, cheese, and egg custard",
      price: "$5.50",
      image: "https://images.unsplash.com/photo-1599749735096-32c820546a01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 7,
      name: "Almond Biscotti",
      description: "Twice-baked Italian biscuit perfect for dipping",
      price: "$2.95",
      image: "https://images.unsplash.com/photo-1616702665497-6993477690f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 8,
      name: "Scone with Jam",
      description: "British pastry served with strawberry jam",
      price: "$4.00",
      image: "https://images.unsplash.com/photo-1567948293250-608178513957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
    },
    {
      id: 9,
      name: "Cheese Danish",
      description: "Flaky pastry with sweet cream cheese filling",
      price: "$4.25",
      image: "https://images.unsplash.com/photo-1626645735466-2c319588c2db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 10,
      name: "Bagel with Cream Cheese",
      description: "Fresh bagel with your choice of spread",
      price: "$4.50",
      image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
    }
  ];

  return (
    <div className="menu-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-container">
            <img src={logo} alt="Barizta Logo" className="nav-logo-image" />
            <Link to="/" className="nav-logo">Barizta</Link>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <a href="#coffees" className="nav-link">Coffee</a>
            </li>
            <li className="nav-item">
              <a href="#snacks" className="nav-link">Snacks</a>
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

      {/* Menu Header */}
      <section className="menu-header">
        <div className="container">
          <h1>Our Menu</h1>
          <p>Discover our carefully crafted selection of coffees and snacks</p>
        </div>
      </section>

      {/* Coffee Menu Section */}
      <section id="coffees" className="coffee-menu">
        <div className="container">
          <h2 className="section-title">Coffee Selection</h2>
          <div className="menu-grid">
            {coffeeItems.map(item => (
              <div key={item.id} className="menu-item">
                <div 
                  className="menu-item-image"
                  style={{backgroundImage: `url(${item.image})`}}
                ></div>
                <div className="menu-item-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span className="price">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Snacks Menu Section */}
      <section id="snacks" className="snacks-menu">
        <div className="container">
          <h2 className="section-title">Snacks & Pastries</h2>
          <div className="menu-grid">
            {snackItems.map(item => (
              <div key={item.id} className="menu-item">
                <div 
                  className="menu-item-image"
                  style={{backgroundImage: `url(${item.image})`}}
                ></div>
                <div className="menu-item-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span className="price">{item.price}</span>
                </div>
              </div>
            ))}
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
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}
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

export default MenuPage;