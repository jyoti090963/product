import React, { useEffect, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";
import CartContext from "../CartContext";
import "../home.css";
import productsdata from "../data";

function Home() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User Logged out");
    setTimeout(() => navigate("/login"), 1000);
  };

  return (
    <div className="home">
      <ToastContainer />

      {/* HERO SECTION */}
      <div className="hero">
        <img
          src="https://images.pexels.com/photos/18896772/pexels-photo-18896772.jpeg"
          alt="Hero"
        />
        <div className="hero-text">
          <h1>My Product Store</h1>
          <p>Best Products • Best Quality • Best Price</p>
          <Link to="/product">
            <button className="shop-btn">Shop Now</button>
          </Link>
        </div>
      </div>

      {/* COLLECTION SECTION */}
      <div className="collection">
        <h2>Our Best Collection</h2>

        <div className="product-grid">
          {productsdata.slice(0, 5).map((item) => (
            <div className="card" key={item.id}>

              {/* IMAGE CLICK → SEND PRODUCT */}
              <Link to="/homep" state={{ product: item }}>
                <img src={item.thumbnail} alt={item.title} />
              </Link>
              <h3>{item.title}</h3>
           

              {/* VIEW BUTTON */}
              <Link to="/homep" state={{ product: item }}>
                <button
                  className="add-cart-btn">
                  View Product
                </button>
              </Link>


            </div>
          ))}
        </div>
      </div>

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
}

export default Home;
