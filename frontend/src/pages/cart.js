import React, { useContext } from "react";
import CartContext from "../CartContext";
import { useNavigate } from "react-router-dom";
import "../cart.css";

const Cart = () => {
  const { cartitem, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  // EMPTY CART
  if (!cartitem || cartitem.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty 🛒</h2>
        <button onClick={() => navigate("/home")}>
          Start Shopping →
        </button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Shopping Cart</h2>

      {cartitem.map((item) => (
        <div key={item.id} className="cart-card">

          <img src={item.thumbnail} alt={item.title} />

          <div className="cart-info">
            <h4>{item.title}</h4>
            <p className="price">₹ {item.price}</p>
          </div>

          <button
            className="remove-btn"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>

        </div>
      ))}
    </div>
  );
};

export default Cart;
