import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { MdAttachFile } from "react-icons/md";
import { FiChevronRight } from "react-icons/fi";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import ContactSVG from "../public/images/contact.svg";
const TextFieldWhite = withStyles({
  root: {
    "& label": {
      color: "#fff",
      borderBottomColor: "#fff",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#fff",
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: "#fff",
    },
    "& label.Mui-focused": {
      color: "#fff",
    },
    "& .MuiInput-input": {
      color: "#fff",
    },
    "& label.Mui-focused": {
      color: "#fff",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#fff",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fff",
      },
      "&:hover fieldset": {
        borderColor: "#fff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#fff",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const Map = styled.iframe`
  height: 500px;
  width: 100%;
  border: none;
  margin-top: 80px;
`;

const ContactForm = styled(Form)`
  background: #000;
  color: #fff;
  padding: 80px;
  max-width: 600px;
  height: 100%;
`;

const ContactInfo = styled.div`
  background-color: rgb(248, 248, 249);
  padding: 80px 40px;
  height: 100%;

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
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container style={{ marginTop: 120 }}>
        <Grid
          container
          spacing={2}
          style={{ maxWidth: 1024, margin: "0 auto", marginBottom: 80 }}
        >
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1 style={{ fontSize: 40, margin: 0 }}>Contact</h1>
            <h3 style={{ fontSize: 22, fontWeight: 400 }}>
              Got an <strong>amazing business idea</strong>? <br /> Let’s bring
              it to market together
            </h3>
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactSVG />
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid
          container
          style={{ maxWidth: 1024, margin: "0 auto" }}
          spacing={2}
        >
          <Grid item xs={7}>
            <Formik
              initialValues={{
                name: "asdasd",
                email: "",
                phone: "",
                message: "",
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string().required("Required"),
                email: Yup.string().required("Required"),
                phone: Yup.string().required("Required"),
                message: Yup.string().required("Required"),
              })}
            >
              {({ submitForm, isSubmitting }) => (
                <ContactForm>
                  <h1>Tell Us About Your Project</h1>
                  <Field
                    component={TextFieldWhite}
                    type="text"
                    margin="normal"
                    fullWidth
                    label="Your name"
                    name="name"
                  />
                  <Field
                    component={TextFieldWhite}
                    type="email"
                    margin="normal"
                    fullWidth
                    label="Your email"
                    name="email"
                  />
                  <Field
                    component={TextFieldWhite}
                    type="tel"
                    margin="normal"
                    fullWidth
                    label="Your phone number"
                    name="phone"
                  />
                  <Field
                    component={TextFieldWhite}
                    type="text"
                    margin="normal"
                    fullWidth
                    label="Message"
                    name="message"
                  />

                  <Grid container>
                    <Grid item xs></Grid>
                    <Grid item>
                      <Button
                        style={{ color: "#fff" }}
                        endIcon={<MdAttachFile></MdAttachFile>}
                      >
                        Attach files
                      </Button>
                    </Grid>
                  </Grid>

                  <br />
                  <br />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    onClick={submitForm}
                    disableElevation
                    style={{ background: "#fff", color: "#000" }}
                  >
                    Request Project
                  </Button>
                </ContactForm>
              )}
            </Formik>
          </Grid>
          <Grid item xs={5}>
            <ContactInfo>
              <h1>
                <strong className="in-violet-450">What’s</strong> next?
              </h1>

              <ol class="ordered-list pt-0">
                <li class="contact-flow__list-item ordered-list__item">
                  We’ll contact you within 24 hours with more information on our
                  next steps. In the meantime, you can check out our{" "}
                  <a class="in-violet-450" href="/case-studies">
                    case studies
                  </a>
                  .
                </li>
                <li class="contact-flow__list-item ordered-list__item">
                  Our next step will be to collect all the requirements for your
                  project, clarify your business objectives, and expectations
                  towards our cooperation.
                </li>
                <li class="contact-flow__list-item ordered-list__item">
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
