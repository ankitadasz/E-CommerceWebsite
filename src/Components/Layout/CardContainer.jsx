import { useQuery } from "@tanstack/react-query";
import { getData } from "../../Api/api";
import { BiSolidOffer } from "react-icons/bi";
import "../../App.css";
import { CardDetail } from "./CardDetail";
import { useEffect, useState } from "react";
import { SkeletonCard } from "../Ui/SkeletonCard";

export const CardContainer = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getData,
  });
  const [products, setProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [input, setInput] = useState("");

  const searchInput = (value) =>{
    const res=data.filter((products)=>{
    return products.title.toLowerCase().includes(value.toLowerCase());
      
    })
    setProducts(res);
  }
  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="card-section">
        <div className="filter-bar">
          <div className="filter-toggle">
            <button className="filter-btn active">All Products</button>
            <button className="filter-btn">Top Rated</button>
          </div>
          <p className="product-count">Loading products...</p>
        </div>

        <div className="card-box">
          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const showTopRated = () => {
    const filtered = data.filter((product) => product.rating.rate >= 4);
    setProducts(filtered);
    setActiveFilter("top");
  };

  const showAllProduct = () => {
    setProducts(data);
    setActiveFilter("all");
  };

  return (
    <div className="card-section">
      <div className="filter-bar">
        <div className="filter-toggle">
          <button
            onClick={showAllProduct}
            className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
          >
            All Products
          </button>
          <button
            onClick={showTopRated}
            className={`filter-btn ${activeFilter === "top" ? "active" : ""}`}
          >
            Top Rated
          </button>
        </div>
       <div className="search-bar">
  <input
    type="text"
    className="search-input"
    value={input}
    onChange={(e) => {
      setInput(e.target.value);
    }}
    placeholder="Search here..."
  />
  <button className="search-btn" onClick={() => searchInput(input)}>
    Search
  </button>
</div>

        <p className="product-count">
          Showing <span>{products.length}</span> products
        </p>
      </div>

      <div className="card-box">
        {products.map((product) => (
          <CardDetail product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
