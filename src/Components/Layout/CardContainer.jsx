import { useQuery } from "@tanstack/react-query";
import { getData } from "../../Api/api";
import "../../App.css";
import { CardDetail } from "./CardDetail";
import { useEffect, useState } from "react";
import { SkeletonCard } from "../Ui/SkeletonCard";
import { FilterBar } from "./FilterBar";
import { NavLink } from "react-router-dom";

export const CardContainer = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getData,
  });
  const [products, setProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [input, setInput] = useState("");

  const clearSearch = () => {
    setInput("");
    if (activeFilter === "top") {
      setProducts(data.filter((product) => product.rating.rate >= 4));
    } else {
      setProducts(data);
    }
  };

  const searchInput = (value) => {
    const filteredData =
      activeFilter === "top"
        ? data.filter((product) => product.rating.rate >= 4)
        : data;
    const res = filteredData.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );

    setProducts(res);
  };
  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="card-section" >
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
    const filtered = data.filter((product) => {
      const isTopRated = product.rating.rate >= 4;
      const matchesSearch = product.title
        .toLowerCase()
        .includes(input.toLowerCase());

      return isTopRated && matchesSearch;
    });

    setProducts(filtered);
    setActiveFilter("top");
  };

  const showAllProduct = () => {
    const filtered = data.filter((product) =>
      product.title.toLowerCase().includes(input.toLowerCase())
    );

    setProducts(filtered);
    setActiveFilter("all");
  };

  return (
  <div className="card-section">
    <FilterBar
      activeFilter={activeFilter}
      input={input}
      setInput={setInput}
      products={products}
      showAllProduct={showAllProduct}
      showTopRated={showTopRated}
      clearSearch={clearSearch}
      searchInput={searchInput}
    />

    <div className="card-box">
      {products.map((product) => (
        <NavLink
          to={`/product/${product.id}`}
          key={product.id}
          className="product-link"
        >
          <CardDetail product={product} />
        </NavLink>
      ))}
    </div>
  </div>
);
};
