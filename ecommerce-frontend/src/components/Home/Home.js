import React, { useContext } from "react";
import Layout from "../Layout/Layout";
import PopularProducts from "../PopularProducts/PopularProducts";
import { productsListContent } from "../Context/Context";
import { homeProductsListContent } from "../Context/Context";

function Home() {
  const { productsArray } = useContext(productsListContent);
  const data = {
    name: "KarmaCart",
    buttonInfo: "Explore",
    description: `your ultimate destination for
          online shopping! Discover a world of convenience and choice with our
          wide range of products from top brands. Browse through the latest
          trends in electronics, fashion, home essentials, and more. With
       KarmaCart, finding the perfect products at great prices
          is just a tap away. Join millions of satisfied customers and start
          your shopping journey today!`,
    srcLink:
      "https://www.netsolutions.com/insights/wp-content/uploads/2021/06/improve-your-ecommerce-website-design-1.jpg",
  };
  return (
    <homeProductsListContent.Provider value={{ productsArray }}>
      <div>
        <Layout {...data} />
        <PopularProducts />
      </div>
    </homeProductsListContent.Provider>
  );
}

export default Home;
