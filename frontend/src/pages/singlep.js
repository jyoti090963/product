import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import products from "../data";
import CartContext from "../CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../singlep.css";

const Singlep = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  const data = products.find((item) => item.id === parseInt(id));

  if (!data) {
    return <h2 className="not-found">Product not found!</h2>;
  }

  return (
    <div className="single-container">
      <div className="single-card">

        <div className="single-image">
          <img src={data.thumbnail} alt={data.title} />
        </div>

        <div className="single-details">
          <h2>{data.title}</h2>
          <h3>₹ {data.price}</h3>
          <p>{data.description}</p>

          <div className="btn-group">
            <button
              className="add-btn"
              onClick={() => {
                addToCart(data);
                toast.success(`${data.title} added to cart 🛒`);
              }}
            >
              Add to Cart
            </button>

            <button
              className="buy-btn"
              onClick={() => toast.info("Buying feature coming soon 💳")}
            >
              Buy Now
            </button>
          </div>
        </div>

      </div>

      <ToastContainer />
    </div>
  );
};

export default Singlep;
