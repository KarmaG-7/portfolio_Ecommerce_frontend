import React from "react";
import Layout from "../Layout/Layout";
import { styled } from "styled-components";

function AboutUs() {
  const data = {
    name: "Karma S Ghale",
    buttonInfo: "Explore My Site",
    description: `a current student at Pursuit—a non-profit
          organization dedicated to empowering individuals through a year-long
          software development bootcamp. My aspiration is to contribute my
          skills as a software engineer or developer within the tech industry.
          I've always been captivated by technology's potential to create
          meaningful change, and software engineering provides the perfect
          avenue for me to bring innovative solutions to life.`,
    srcLink:
      "https://media.licdn.com/dms/image/D4E03AQGARMe4q6bzYg/profile-displayphoto-shrink_800_800/0/1680616660822?e=2147483647&v=beta&t=sGjOn51F3-bu6Yii-8ei2YQf2WfKg1x0dMmawTkeMk0",
  };
  return (
    <AboutSection>
      <Layout {...data} />
    </AboutSection>
  );
}

const AboutSection = styled.section`
  img {
    height: 75%;
    width: 90%;
  }
  .image {
    justify-self: end;
  }
`;

export default AboutUs;
