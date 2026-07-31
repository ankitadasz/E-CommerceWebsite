import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { singleData } from "../Api/api";
import { SkeletonCard } from "../Components/Ui/SkeletonCard";
import { useCart } from "../Context/CartContext";
import "../IndividualProduct.css";

export const IndivisualProductData = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

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

  return (
    <div className="product-page">
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
            onClick={() => addToCart(data)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};