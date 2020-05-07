import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { FiChevronRight } from "react-icons/fi";
import Link from "../../src/Link";
import Fade from "react-reveal/Fade";
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
      <Container style={{ zIndex: 100, position: "relative" }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Fade bottom>
              <h1 style={{ fontWeight: 300 }}>
                <strong>We are</strong> an integrated{" "}
                <strong>media solutions</strong> company with a wide array of
                marketing and design services.
              </h1>
              <Button
                endIcon={<FiChevronRight></FiChevronRight>}
                variant="contained"
                color="primary"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  backgroundColor: "#fff",
                }}
                component={Link}
                href="/contact"
              >
                Tell us about your project
              </Button>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </HeroWrapper>
  );
}
