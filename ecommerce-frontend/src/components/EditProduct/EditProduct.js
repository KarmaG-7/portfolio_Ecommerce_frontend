import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { productsListContent } from "../Context/Context";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { productsArray } = useContext(productsListContent);

  const [is_popularValue, setIs_popularValue] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState({
    product_name: "",
    price: 0,
    rating: 0,
    product_image: "",
    category: "",
    is_popular: is_popularValue,
    product_description: "",
  });

  useEffect(() => {
    if (id) {
      const result = productsArray.find((item) => item.id === Number(id));

      setSelectedProduct(result);
    }
  }, [productsArray, id]);

  function handlePopularChange() {
    setSelectedProduct((prevState) => ({
      ...prevState,
      is_popular: !prevState.is_popular,
    }));
  }

  function handleChange(e) {
    setSelectedProduct({
      ...selectedProduct,
      [e.target.id]: e.target.value,
    });
  }

  function handleSelectChange(e) {
    const selectedValue = e.target.value;
    setSelectedProduct({
      ...selectedProduct,
      category: selectedValue,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const findIndex = productsArray.findIndex(
        (item) => item.id === Number(id)
      );

      productsArray[findIndex] = selectedProduct;
      await axios.put(
        `http://localhost:3001/products/edit/${id}`,
        selectedProduct
      );
      navigate(`/products/${id}`);
    } catch (error) {
      return error;
    }
  }
  return (
    <div className="form-container">
      <h2>Add a new product</h2>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group mx-5">
          <label htmlFor="product_name">Name of product</label>
          <input
            required
            type="text"
            className="form-control"
            id="product_name"
            value={selectedProduct.product_name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mx-5">
          <label htmlFor="price">Price</label>
          <br />
          <span className="small">
            Please provide either a decimal or a whole number
          </span>
          <input
            required
            type="number"
            className="form-control"
            id="price"
            value={selectedProduct.price}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mx-5">
          <label htmlFor="rating">Rating</label>
          <br />
          <span className="small">Give a rating out of 5 (Max 5)</span>
          <input
            required
            type="number"
            className="form-control"
            id="rating"
            value={selectedProduct.rating}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mx-5">
          <label htmlFor="is_popular">
            Is this a popular product in the current market?
          </label>
          <input
            type="checkbox"
            id="is_popular"
            checked={selectedProduct.is_popular}
            onChange={handlePopularChange}
          />
        </div>

        <div className="form-group mx-5">
          <label htmlFor="product_image">Product Image</label>
          <br />
          <span className="small">
            Provide an image URL link starting with either http or https
          </span>
          <input
            required
            type="text"
            className="form-control"
            id="product_image"
            value={selectedProduct.product_image}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mx-5">
          <label htmlFor="category">Category</label>
          <br />
          <select
            required
            className="form-control"
            id="category"
            value={selectedProduct.category}
            onChange={handleChange}
          >
            <option value="">select one from the dropdown</option>
            <option value="Beauty">Beauty</option>
            <option value="electronics">Electronics</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
            <option value="Books">Books</option>
          </select>
        </div>

        <div className="form-group mx-5">
          <label htmlFor="product_description">Product Description</label>
          <textarea
            required
            type="textarea"
            className="form-control"
            id="product_description"
            value={selectedProduct.product_description}
            onChange={handleSelectChange}
          ></textarea>
        </div>

        <button type="submit" className="button-form btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
