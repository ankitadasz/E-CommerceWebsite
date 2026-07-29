import { BiSolidOffer } from "react-icons/bi";
export const CardDetail = ({ product }) => {
  const { image, category, title, rating, price } = product;
  const formatPrice = (price) =>
    price.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  return (
    <div className="card-container">
      <figure>
        <img className="product-img" src={image} alt={category} />
      </figure>
      <div className="product-details">
        <h3 className="product-brand">{category.toUpperCase()}</h3>

        <p className="product-title">{title}</p>

        <div className="product-rating">
          {rating.rate} ★ | {rating.count}
        </div>

        <div className="product-price">
          <span className="current-price">₹{formatPrice(price * 70)}</span>

          <span className="old-price">₹{formatPrice(price * 70 + 900)}</span>

          <span className="discount">(40% OFF)</span>
        </div>

        <div className="product-offer-price">
          <BiSolidOffer className="offer-icon" />
          <span className="offer-price">
            Offer Price: ₹{formatPrice(price * 70 - 500)}
          </span>
        </div>
      </div>
    </div>
  );
};
