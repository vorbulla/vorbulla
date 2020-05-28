import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
const HeroWrapper = styled.div`
  background: #fff;
  color: #fff;
  padding: 220px 0;
  background-image: url(./images/home.jpg);
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  overflow: hidden;
  position: relative;
  z-index: 10;

  .gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`;
export default function Hero() {
  return (
    <HeroWrapper>
      <div className="gradient"></div>
      <Container
        style={{
          zIndex: 100,
          position: "relative",
          textAlign: "center",
          maxWidth: 800,
        }}
      >
        <h1 style={{ fontWeight: 300 }}>
          Got an <strong>amazing business idea</strong>? <br /> Let’s bring it
          to market together
        </h1>
      </Container>
    </HeroWrapper>
  );
}
