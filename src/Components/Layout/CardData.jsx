import { useQuery } from "@tanstack/react-query";
import { getData } from "../../Api/api";
import { BiSolidOffer } from "react-icons/bi";
import "../../App.css"
export const CardData = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getData,
  });
  const formatPrice = (price) =>
    price.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <section className="card-section">
      {data.map((product) => (
        <article key={product.id} className="card-container">
          <figure>
            <img
              className="product-img"
              src={product.image}
              alt={product.category}
            />
          </figure>
<div className="product-details">

  <h3 className="product-brand">
    {product.category.toUpperCase()}
  </h3>

  <p className="product-title">
    {product.title}
  </p>

  <div className="product-rating">
    {product.rating.rate} ★ | {product.rating.count}
  </div>

  <div className="product-price">
    <span className="current-price">
      ₹{formatPrice(product.price * 70)}
    </span>

    <span className="old-price">
      ₹{formatPrice(product.price * 70 + 900)}
    </span>

    <span className="discount">
      (40% OFF)
    </span>
  </div>

  <div className="product-offer-price">
    <BiSolidOffer className="offer-icon" />
    <span className="offer-price">
      Offer Price: ₹{formatPrice(product.price * 70 - 500)}
    </span>
  </div>

</div>
        </article>
      ))}
    </section>
  );
};
