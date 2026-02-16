import React, { useEffect } from "react";
import products from "../data";
import { Link } from "react-router-dom";
import Loader from "../loader";
import "../product.css";  // <-- import CSS here

const Productpage = () => {
  const [loading, setLoading] = React.useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  
  return (
    <div className="product-page">
      <div className="product-grid">
        {products.map((item) => (
          <Link
            key={item.id}
            to={`/product/${item.id}`}
            className="product-card-link"
          >
            <div className="product-card">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="product-image"
              />
              <h3 className="product-title">{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Productpage;