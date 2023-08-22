import React from "react";
import { styled } from "styled-components";
import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";
function ErrorPage() {
  return (
    <Wrapper>
      <img
        src="https://img.freepik.com/premium-vector/oops-404-error-landing-page-concept-illustration_693194-166.jpg"
        alt="errorPage"
      />
      <NavLink to={"/"}>
        <Button>Go Home</Button>
      </NavLink>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 55%;
    height: 60vh;
  }
`;

export default ErrorPage;
