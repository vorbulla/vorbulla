import React from "react";
import App from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import NProgress from "nprogress";
import TagManager from "react-gtm-module";
import Router from "next/router";
import LayoutDefault from "../components/Layouts/LayoutDefault";
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://a687880c705141a89fd6b5cdef4bcc29@sentry.io/4159943",
});

if (process.env.loader) {
  // nprogress
  Router.events.on("routeChangeStart", (url) => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());
}

const tagManagerArgs = {
  gtmId: process.env.tagManager,
};

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    // if (process.env.tagManager) {
    //   TagManager.initialize(tagManagerArgs);
    // }

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
            body {
              overflow-y: scroll !important;
            }
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

            #nprogress .bar {
              z-index: 99999999 !important;
              top: 0 !important;
              background: #000 !important;
            }
            #nprogress .spinner {
              top: 10px !important;
              left: 15px !important;
              z-index: 99999999 !important;
            }
            #nprogress .spinner .spinner-icon {
              border-top-color: #000;
              border-left-color: #000;
            }

            .MuiFormHelperText-root.MuiFormHelperText-contained.Mui-error {
              position: absolute !important;
              bottom: -18px !important;
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
