import React, { useContext } from "react";
import { productsListContent } from "../Context/Context";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import "./SingleProduct.css";
import axios from "axios";

function SingleProduct() {
  const [productInfo, setProductInfo] = useState({});

  const { productsArray, setProductsArray, starRating } =
    useContext(productsListContent);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      let foundProduct = productsArray.find((item) => item.id === Number(id));
      setProductInfo(foundProduct);
    }
  }, [productsArray, id]);

  function handleDelete(productId) {
    const deleteConfirm = window.confirm(
      "Wait! Are you sure you want to delete this product?"
    );
    if (deleteConfirm) {
      const updatedAllProducts = productsArray.filter(
        (item) => item.id !== productId
      );
      setProductsArray(updatedAllProducts);
      axios.delete(`http://localhost:3001/products/${productId}`);
      navigate("/products");
    }
  }

  return (
    <div>
      {productInfo && (
        <div className="container mt-5">
          <div className="row detail">
            <div className="col-md-6">
              <img
                src={productInfo.product_image}
                className="img-fluid"
                alt={productInfo.product_name}
              />
            </div>
            <div className="col-md-6 info">
              <span>{productInfo.product_name}</span>

              <p>{productInfo.product_description}</p>
              <p className="category">{productInfo.category}</p>
              <p>{starRating(productInfo.rating)}</p>
              <p>${productInfo.price}</p>
              <div className="d-flex justify-content-between buttons">
                <Button onClick={() => navigate("/products")}>Products</Button>

                <Button onClick={() => navigate(`/products/edit/${id}`)}>
                  Edit Product
                </Button>

                <Button onClick={() => handleDelete(productInfo.id)}>
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleProduct;
