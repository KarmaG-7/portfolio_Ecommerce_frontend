import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./All_products.css";
import { productsListContent } from "../Context/Context";

function AllProducts() {
  const { productsArray, starRating } = useContext(productsListContent);
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("All products");
  const [selectedOrder, setSelectedOrder] = useState("");

  const filteredProducts = productsArray.filter((item) => {
    if (selectedCategory === "All products") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  });

  if (selectedOrder === "asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (selectedOrder === "desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleOrderChange(order) {
    setSelectedOrder(order);
  }

  return (
    <div className="list-products">
      <ul className="container selectMenu">
        <li>
          <select onChange={(e) => handleOrderChange(e.target.value)}>
            <option value="">Sort by Price</option>
            <option value="desc">Price: High to low</option>
            <option value="asc">Price: Low to high</option>
          </select>
        </li>

        <li>
          <select
            className="byCategory"
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="">By Category</option>
            <option value="All products">All products</option>
            <option value="Beauty">Beauty</option>
            <option value="Electronics">Electronics</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
            <option value="Books">Books</option>
          </select>
        </li>
      </ul>

      <div className="container mt-5 all-product">
        {filteredProducts.map((item) => (
          <div
            className="stretched-link row g-0 bg-body-secondary position-relative each-product"
            key={item.id}
            onClick={() => navigate(`/products/${item.id}`)}
          >
            <div className="col-md-6 mb-md-0 p-md-4">
              <img src={item.product_image} alt="Product" />
            </div>
            <div className="col-md-6 p-4 ps-md-0">
              <span className="mt-0">{item.product_name}</span>
              <p>{item.product_description}</p>
              <p>${item.price}</p>
              <p>{starRating(item.rating)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
