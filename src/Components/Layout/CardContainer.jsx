import { useQuery } from "@tanstack/react-query";
import { getData } from "../../Api/api";
import { BiSolidOffer } from "react-icons/bi";
import "../../App.css";
import { CardDetail } from "./CardDetail";
import { useEffect, useState } from "react";
export const CardContainer = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getData,
  });
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const topRated = () => {
    const filtered = data.filter((product) => product.rating.rate >= 4);
    setProducts(filtered);
  };

  return (
    <div className="card-section">
      <div>
        <button onClick={topRated} className="top-rated-btn">Top Rated Product</button>
      </div>

      <div className="card-box">
        {products.map((product) => (
          <CardDetail product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
