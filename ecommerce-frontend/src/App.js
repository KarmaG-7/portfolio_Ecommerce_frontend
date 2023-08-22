import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { productsListContent } from "./components/Context/Context";
import { useState, useEffect } from "react";

import All_Products from "./components/All_Products/All_Products";
import AddProduct from "./components/AddProduct/AddProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import NavBar from "./components/NavBar/NavBar";
import AboutUs from "./components/AboutUS/AboutUs";
import Home from "./components/Home/Home";

import ErrorPage from "./components/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "styled-components";

import "./App.css";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";

function App() {
  const [productsArray, setProductsArray] = useState([]);
  const url = "http://localhost:3001";

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const result = await axios.get(`${url}/products`);
      setProductsArray(result.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  function starRating(rating) {
    let result = "";
    for (let i = 0; i < rating; i++) {
      result += "⭐️";
    }
    return `${rating}.0 ${result}`;
  }

  const theme = {
    colors: {
      htag: " rgb(98 84 243)",
      heading: "rgb(98 84 243)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <NavBar />
          <productsListContent.Provider
            value={{ productsArray, setProductsArray, starRating }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<All_Products />} />
              <Route path="/products/:id" element={<SingleProduct />} />
              <Route path="/products/edit/:id" element={<EditProduct />} />
              <Route path="/products/new" element={<AddProduct />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </productsListContent.Provider>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
