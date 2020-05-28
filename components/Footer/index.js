import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import Logo from "../Logo";
import SocialMedia from "./SocialMedia";
const FooterWrapper = styled.div`
  min-height: 350px;
  margin-top: 60px;
  color: #000;

  .contact {
    li {
      a {
        color: #000;
        text-decoration: none;

        &:hover {
          color: #000;
          text-decoration: underline;
        }
      }
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
    li {
      font-size: 14px;
      padding: 6px 0;
    }
  }
  .first {
    padding-left: 30px !important;
  }
`;

export default function Footer() {
  var year = new Date().getFullYear();
  return (
    <FooterWrapper>
      <Container>
        <SocialMedia />
        <Divider style={{ marginBottom: 30 }} />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Logo />

            <ul className="contact">
              <li>
                <a href="mailto:info@vorbulla.com">info@vorbulla.com</a>
              </li>
              <li>
                <a href="tel:+383 44 407 456">+383 44 407 456</a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Vorbulla+Studio/@42.3877507,20.432025,17z/data=!3m1!4b1!4m5!3m4!1s0x1353b1fdb09ef58f:0x6b96432c76f38993!8m2!3d42.3877468!4d20.4342137"
                  target="_blank"
                >
                  Rruga UÇK, Gjakove 50000
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={2} className="first">
            <h2>SERVICES</h2>
            <ul>
              <li>Web Development</li>
              <li>PHP</li>
              <li>React</li>
              <li>Angular</li>
            </ul>
          </Grid>
          <Grid item xs={2} className="first">
            <ul style={{ marginTop: 65 }}>
              <li>Mobile Development</li>
              <li>IOS</li>
              <li>Android</li>
              <li>React Native</li>
            </ul>
          </Grid>
          <Grid item xs={2}>
            <h2>ABOUT</h2>
            <ul>
              <li>Contact</li>
              <li>About</li>
              <li>Support</li>
              <li>Blog</li>
            </ul>
          </Grid>
          <Grid item xs={2}>
            <h2>COMPANY</h2>
            <ul>
              <li>About</li>
              <li>Workflow</li>
              <li>Engineering</li>
            </ul>
          </Grid>
        </Grid>

        <Divider />
        <p>
          <span style={{ fontWeight: 300, fontSize: 14 }}>
            © Copyright {year} {process.env.COMPANY}. All Rights Reserved
          </span>
        </p>
      </Container>
    </FooterWrapper>
  );
}
