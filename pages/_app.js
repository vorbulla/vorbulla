import React from "react";
import App from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import NProgress from "nprogress";
import Router from "next/router";
import LayoutDefault from "../components/Layouts/LayoutDefault";
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://a687880c705141a89fd6b5cdef4bcc29@sentry.io/4159943",
});

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key]);
      });

      Sentry.captureException(error);
    });

    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || LayoutDefault;
    const Header = Component.Header || "absolute";
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <style jsx global>{`
            .page-enter {
              opacity: 0 !important;
              position: absolute !important;
              width: 100% !important;
            }

            .page-enter-active {
              opacity: 1 !important;
              transition: opacity 500ms, transform 500ms !important;
            }

            .page-exit {
              opacity: 1 !important;
              position: absolute !important;
              width: 100% !important;
            }

            .page-exit-active {
              opacity: 0 !important;
              transition: opacity 500ms, transform 500ms !important;
            }

            .MuiFormHelperText-root {
              position: absolute !important;
              bottom: -18px !important;
            }

            #nprogress {
              pointer-events: none;
            }

            #nprogress .bar {
              background: #000;

              position: fixed;
              z-index: 1031;
              top: 0;
              left: 0;

              width: 100%;
              height: 2px;
            }

            #nprogress .peg {
              display: block;
              position: absolute;
              right: 0px;
              width: 100px;
              height: 100%;
              box-shadow: 0 0 10px #000, 0 0 5px #000;
              opacity: 1;

              -webkit-transform: rotate(3deg) translate(0px, -4px);
              -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
            }

            #nprogress .spinner {
              display: none;
            }

            .nprogress-custom-parent {
              overflow: hidden;
              position: relative;
            }

            .nprogress-custom-parent #nprogress .bar {
              position: absolute;
            }
          `}</style>

          <Layout route={this.props.router.route} header={Header}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
