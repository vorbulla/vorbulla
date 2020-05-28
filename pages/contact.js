import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Hero from "../components/Contact/Hero";
import Form from "../components/Contact/Form";

const Map = styled.iframe`
  height: 500px;
  width: 100%;
  border: none;
  margin-top: 80px;
`;

const ContactInfo = styled.div`
  background-color: rgb(248, 248, 249);
  padding: 80px 40px;
  height: 100%;
  padding-left: 140px;
  margin-left: -100px;
  z-index: 10;
  margin-top: -60px;
  position: relative;

  .ordered-list {
    margin-bottom: 0px;
    padding-top: 10px;
    padding-left: 0px;
    counter-reset: item 0;
    list-style: none;
  }

  .contact-flow__list-item {
    opacity: 0.8;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.86;
  }

  .ordered-list__item {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.88;
    position: relative;
    margin-bottom: 24px;
    padding-left: 48px;
  }

  .ordered-list__item::before {
    content: counter(item) "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 32px;
    height: 32px;
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 500;
    line-height: 32px;
    text-align: center;
    counter-increment: item 1;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.17);
  }

  .in-violet-450 {
    color: #000 !important;
  }
`;
export default function Contact() {
  return (
    <React.Fragment>
      <Hero />

      <Container
        style={{
          maxWidth: 1024,
          margin: "0 auto",
          marginTop: -120,
          zIndex: 100,
          position: "relative",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Form />
          </Grid>
          <Grid item xs={5}>
            <ContactInfo>
              <h1>
                <strong className="in-violet-450">What’s</strong> next?
              </h1>

              <ol className="ordered-list pt-0">
                <li className="contact-flow__list-item ordered-list__item">
                  We’ll contact you within 24 hours with more information on our
                  next steps. In the meantime, you can check out our{" "}
                  <a className="in-violet-450" href="/case-studies">
                    case studies
                  </a>
                  .
                </li>
                <li className="contact-flow__list-item ordered-list__item">
                  Our next step will be to collect all the requirements for your
                  project, clarify your business objectives, and expectations
                  towards our cooperation.
                </li>
                <li className="contact-flow__list-item ordered-list__item">
                  After that, we’ll develop a proposal for you.
                </li>
              </ol>
            </ContactInfo>
          </Grid>
        </Grid>
      </Container>

      <Map
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.877747811942!2d20.432025015374716!3d42.3877507413452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1353b1fdb09ef58f%3A0x6b96432c76f38993!2sVorbulla%20Studio!5e0!3m2!1sen!2sro!4v1588772757235!5m2!1sen!2sro"
        frameBorder="0"
      />
    </React.Fragment>
  );
}

Contact.Header = "fixed";
