import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Logo from "../Logo";
import Navigation from "./Navigation";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    transition: ".3s ease",

    "&.MuiAppBar-positionFixed": {
      height: "80px",
      position: "absolute",
      backgroundColor: "transparent",
    },
    "&.MuiAppBar-positionFixed ~ .page--content": {
      paddingTop: "80px",
    },
  },

  loginLink: {
    marginRight: "20px",
    padding: "12px 32px",
  },
  container: {
    margin: "0 auto",
    padding: "0 15px",
  },
  logoWrapper: {
    textDecoration: "none",
    display: "block",
    float: "left",
  },
}));

function Header({ position }) {
  const classes = useStyles();
  return (
    <AppBar position={position} className={clsx(classes.appBar, "header")}>
      <Container>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <Logo style={{ fill: position === "fixed" ? "#fff" : "#000" }} />
          </Grid>
          <Grid item xs={9}>
            <Navigation color={position === "fixed" ? "#fff" : "#000"} />
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}

export default Header;
