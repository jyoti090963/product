import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CartContext from "../CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../homep.css";

const Homep = () => {
  const { addToCart } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  useEffect(() => {
    if (!product) navigate("/home");
  }, [product, navigate]);

  if (!product) return null;

  return (
    <div className="single-wrapper">

      <div className="single-card">

        {/* IMAGE */}
        <img
          src={product.thumbnail}
          alt={product.title}
          className="single-img"
        />

        {/* DETAILS */}
        <div className="single-info">
          <h1>{product.title}</h1>
          <h2 className="price">₹ {product.price}</h2>
          <p className="desc">{product.description}</p>

          <div className="btns">
            <button
              className="cart-btn"
              onClick={() => {
                addToCart(product);
                toast.success(`${product.title} added to cart 🛒`);
              }}
            >
              Add to Cart
            </button>

            <button className="back-btn" onClick={() => navigate("/home")}>
              ← Back
            </button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Homep;
