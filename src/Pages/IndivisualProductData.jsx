import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { singleData } from "../Api/api";
import { SkeletonCard } from "../Components/Ui/SkeletonCard";
import { useCart } from "../Context/CartContext";
import "../IndividualProduct.css";

export const IndivisualProductData = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [message, setMessage] = useState(false);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => singleData(id),
  });

  if (isLoading) {
    return (
      <div className="product-page">
        <SkeletonCard />
      </div>
    );
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const formatPrice = (price) =>
    price.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const handleAddToCart = () => {
    addToCart(data);
    setMessage(true);

    setTimeout(() => {
      setMessage(false);
    }, 2000);
  };

  return (
    <div className="product-page">

      {message && (
        <div className="cart-toast">
          <div className="cart-toast-icon">✓</div>

          <div>
            <p className="cart-toast-title">
              Added to Cart
            </p>

            <p className="cart-toast-text">
              {data.title}
            </p>
          </div>
        </div>
      )}

      <div className="product-detail-card">
        <div className="product-detail-image">
          <img src={data.image} alt={data.title} />
        </div>

        <div className="product-detail-info">
          <p className="product-detail-category">
            {data.category.toUpperCase()}
          </p>

          <h1>{data.title}</h1>

          <div className="detail-rating">
            {data.rating.rate} ★
            <span> | {data.rating.count} ratings</span>
          </div>

          <div className="detail-price">
            ₹{formatPrice(data.price * 70)}
          </div>

          <p className="detail-offer">
            Offer Price: ₹{formatPrice(data.price * 70 - 500)}
          </p>

          <p className="detail-description">
            {data.description}
          </p>

          <button
            className="add-cart-btn"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};