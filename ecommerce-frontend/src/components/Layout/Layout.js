import React from "react";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../Button/Button";
function Layout({ name, description, srcLink, buttonInfo }) {
  return (
    <HomeSection className="container grid grid-two-columns">
      <div className="app-data">
        <p>
          This is <span>{name}</span>, {description}
        </p>
        <NavLink to={"/products"}>
          <Button className="explore">{buttonInfo}</Button>
        </NavLink>
      </div>
      <div className="image">
        <img src={srcLink} alt="homeImage" />
      </div>
    </HomeSection>
  );
}

const HomeSection = styled.section`
  margin-top: 7rem;
  gap: 5rem;

  .app-data {
    height: 80%;
  }

  img {
    padding-top: 1rem;
    width: 100%;
    height: 90%;
  }
`;

export default Layout;
