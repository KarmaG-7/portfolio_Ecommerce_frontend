import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

function NavBar() {
  return (
    <Header>
      <NavLink to={"/"}>
        {" "}
        <h1>KarmaCart</h1>{" "}
      </NavLink>

      <nav>
        <div className="menuIcon">
          <ul className="navbar-list">
            <li>
              <NavLink to={"/products"} className="navbar-link">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about-us"} className="navbar-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={"/products/new"} className="navbar-link">
                New Product
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </Header>
  );
}

const Header = styled.header`
  padding: 0 4.8rem;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .navbar-list {
    display: flex;
    gap: 4rem;
  }

  .navbar-link {
    font-size: 0.9rem;
    font-weight: 400;
    text-transform: uppercase;

    &:visited {
      display: inline-block;
      color: ${({ theme }) => theme.colors.black};
      transition: color 0.3s linear;
    }

    &:hover,
    &.active {
      color: ${({ theme }) => theme.colors.helper};
    }
  }
`;

export default NavBar;
