import React, { useState, useContext, useEffect } from "react";
import { homeProductsListContent } from "../Context/Context";
import { styled } from "styled-components";
import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";

function PopularProducts() {
  const { productsArray } = useContext(homeProductsListContent);
  const [popularProductsArray, setPopularProductsArray] = useState([]);

  useEffect(() => {
    const topRatedProducts = productsArray.filter(
      (item) => item.is_popular === true
    );
    setPopularProductsArray(topRatedProducts);
  }, [productsArray]);
  return (
    <>
      <h3>Our Popular Products</h3>
      <MainBody className="container grid grid-three-columns">
        {popularProductsArray.map((item) => (
          <div key={item.id} className="card" style={{ width: "22rem" }}>
            <img
              className="card-img-top"
              src={item.product_image}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">
                <span>{item.product_name}</span>
              </h5>
              <p className="card-text">
                {item.product_description.substring(0, 60)}....
              </p>
              <NavLink to={`/products/${item.id}`}>
                <Button className="seeDetails">See Details</Button>
              </NavLink>
            </div>
          </div>
        ))}
      </MainBody>
    </>
  );
}

const MainBody = styled.section`
  margin-top: 5rem;
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 3rem;
  img {
    height: 30vh;
  }
  .card-body {
    p {
      font-size: 1.2rem;
      line-height: 1.5rem;
      margin-top: 1rem;
      font-weight: 400;
    }
  }

  .seeDetails {
    margin: 1rem auto;
    padding: 0.5rem 0.9rem;
  }
`;

export default PopularProducts;
