import React from "react";
import { Link } from "react-router-dom";
import "../about.css";

const About = () => {
  return (
    <div className="about-page">

      <div className="about-container">
        <h1>About Global Store</h1>

        <p>
          Welcome to <strong>Global Store</strong> – your one-stop destination for quality products from around the world.
          We pride ourselves on providing a seamless shopping experience with a wide range of products to suit every taste and need.
        </p>

        <p>
          Our mission is to bring the world to your doorstep. Whether it's electronics, fashion, home essentials, or groceries,
          we ensure top-notch quality, competitive prices, and reliable delivery.
        </p>

        <p>
          At Global Store, customer satisfaction is our top priority. We believe in creating lasting relationships with our customers
          by offering excellent service, easy returns, and secure payment options.
        </p>

        <h2>Our Vision</h2>
        <p>
          To become the leading global marketplace where everyone can discover and enjoy products from every corner of the world.
        </p>

        <h2>Contact Us</h2>
        <p>
          Have questions? Reach out to us at
          <a href="mailto:support@globalstore.com"> support@globalstore.com </a>
          or call us at <strong>+1-234-567-890</strong>.
        </p>

      </div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/917876580416?text=Hello%20I%20want%20to%20contact%20Global%20Store"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-btn"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="whatsapp" />
      </a>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <h3>My Product Store</h3>
            <p>Your trusted shopping partner for quality products.</p>
            <p>Chandigarh • Mohali</p>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p>📍 Sector 17, Chandigarh</p>
            <p>📞 +91 9876543210</p>
            <p>✉ info@myproductstore.com</p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/homep">Products</Link>
            <Link to="/cart">Cart</Link>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default About;
