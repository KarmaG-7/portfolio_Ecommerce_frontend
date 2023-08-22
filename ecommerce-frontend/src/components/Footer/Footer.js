import React from "react";
import { styled } from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <FooterSection>
      <footer className="container grid grid-four-columns">
        <div className="app-slogan">
          <h6>KarmaCart</h6>
          <p className="slogan">
            "Empowering Your Shopping Experience with KarmaCart – Where Every
            Choice Makes a Difference"
          </p>
        </div>

        <div className="socials">
          <h6>Follow Us</h6>
          <div className="social-icons">
            <div>
              <FaInstagram className="icon" />
            </div>
            <div>
              <FaFacebookSquare className="icon" />
            </div>
            <div>
              <FaYoutube className="icon" />
            </div>
          </div>
        </div>

        <div className="contacts">
          <h6>Contacts</h6>
          <p>+1-529-529-5299</p>
          <p>karmaCart@gmail.com</p>
        </div>

        <div className="footer-details">
          <h6>©{new Date().getFullYear()} KarmaCart. All Rights Reserved</h6>
          <p>Privacy Policy</p>
          <p>Terms and conditions</p>
        </div>
      </footer>
    </FooterSection>
  );
}
const FooterSection = styled.section`
  padding: 4rem;
  margin-top: 20rem;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: 15px;
  }
  .slogan {
    font-size: 12px;
  }
  .app-slogan,
  .socials,
  .contacts,
  .footer-details {
    justify-self: center;
  }
  .social-icons {
    display: flex;
    gap: 1rem;

    div {
      padding: 0.3rem;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.white};
    }
    .icon {
      font-size: 1.5rem;
    }
  }
`;
export default Footer;
