import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { MdAttachFile } from "react-icons/md";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import { TextField } from "formik-material-ui";
import CircularProgress from "@material-ui/core/CircularProgress";
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

const ContactForm = styled(Form)`
  background: #000;
  color: #fff;
  padding: 80px;
  max-width: 600px;
  height: 100%;
  z-index: 100;
  position: relative;
`;

const Loading = styled.div`
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  right: 0;
  height: 100%;

  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    svg {
      width: 60px;
      height: 60px;
    }
  }
`;

export default function ContactFormComp() {
  const [success, setSuccess] = useState(null);

  const handleSubmit = (values, formikApi) => {
    const { name, email, phone, message } = values;

    const data = {
      name,
      email,
      phone,
      message,
    };

    axios
      .post("/api/v1/contact", data)
      .then((data) => {
        setSuccess(true);
        formikApi.setSubmitting(false);
      })
      .catch((err) => {
        setSuccess(false);
        formikApi.setSubmitting(false);
      });
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        message: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Required"),
        email: Yup.string().required("Required"),
        phone: Yup.string().required("Required"),
        message: Yup.string().required("Required"),
      })}
    >
      {({ isSubmitting, dirty }) => (
        <ContactForm>
          {isSubmitting && (
            <Loading>
              <div className="icon">
                <CircularProgress />
              </div>
            </Loading>
          )}

          {success && (
            <React.Fragment>
              <Alert severity={success === true ? "success" : "error"}>
                {success === true
                  ? "Thank you for contacting us!"
                  : "Something went wrong please try again!"}
              </Alert>
            </React.Fragment>
          )}
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
            disableElevation
            disabled={!dirty}
            style={{ background: "#fff", color: "#000" }}
          >
            Request Project
          </Button>
        </ContactForm>
      )}
    </Formik>
  );
}
