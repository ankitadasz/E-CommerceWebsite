import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { SkeletonCard } from "../Components/Ui/SkeletonCard";
import { getData } from "../Api/api";
import { FilterBar } from "../Components/Layout/FilterBar";
import { CardDetail } from "../Components/Layout/CardDetail";

export const Accessories = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getData,
  });

  const [products, setProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [input, setInput] = useState("");

  // First get only men's products
  const accessories = data?.filter(
    (product) => product.category ==="electronics"
  );

  const clearSearch = () => {
    setInput("");

    if (activeFilter === "top") {
      setProducts(
        accessories.filter((product) => product.rating.rate >= 4)
      );
    } else {
      setProducts(accessories);
    }
  };

  const searchInput = (value) => {
    const filteredData =
      activeFilter === "top"
        ? accessories.filter((product) => product.rating.rate >= 4)
        : accessories;

    const res = filteredData.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );

    setProducts(res);
  };

  useEffect(() => {
    if (accessories) {
      setProducts(accessories);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="card-section">
        <div className="filter-bar">
          <div className="filter-toggle">
            <button className="filter-btn active">
              All Products
            </button>

            <button className="filter-btn">
              Top Rated
            </button>
          </div>

          <p className="product-count">
            Loading products...
          </p>
        </div>

        <div className="card-box">
          {Array.from({ length: 4 }).map((_, index) => (
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
    const filtered = accessories.filter((product) => {
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
    const filtered = accessories.filter((product) =>
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
          <CardDetail
            product={product}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};