import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddProduct.css";
import { productsListContent } from "../Context/Context";
import { Button } from "../Button/Button";

function AddProduct() {
  const productionBackendUrl = process.env.REACT_APP_BACKEND_URL;

  const navigate = useNavigate();

  const { productsArray, setProductsArray } = useContext(productsListContent);
  const [newProduct, setNewProduct] = useState({
    product_name: "",
    price: 0,
    rating: 0,
    product_image: "",
    category: "",
    is_popular: false,
    product_description: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${productionBackendUrl}/products/new`,
        newProduct
      );
      alert("The product has been successfully added!");
      const addedProductWithID = { ...newProduct, id: response.data.id };
      setProductsArray([...productsArray, addedProductWithID]);
      navigate("/products");
    } catch (error) {
      console.error("Error creating product:", error);
    }
  }

  function handleChange(e) {
    setNewProduct({
      ...newProduct,
      [e.target.id]: e.target.value,
    });
  }

  function handlePopularChange() {
    setNewProduct({
      ...newProduct,
      is_popular: !newProduct.is_popular,
    });
  }

  function handleSelectChange(e) {
    const selectedValue = e.target.value;
    setNewProduct({
      ...newProduct,
      category: selectedValue,
    });
  }

  return (
    <div className="form-container">
      <h2>New Product Registration</h2>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group mx-5">
          <label htmlFor="product_name">Name of product</label>
          <input
            required
            type="text"
            className="form-control"
            id="product_name"
            value={newProduct.product_name}
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
            value={newProduct.price}
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
            value={newProduct.rating}
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
            checked={newProduct.is_popular}
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
            value={newProduct.product_image}
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
            value={newProduct.category}
            onChange={handleSelectChange}
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
            value={newProduct.product_description}
            onChange={handleChange}
          ></textarea>
        </div>

        <Button className="submitBttn">Submit</Button>
      </form>
    </div>
  );
}

export default AddProduct;
