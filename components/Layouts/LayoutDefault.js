import React, { Component } from "react";
import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import styled from "styled-components";
import { initGA, logPageView } from "../../googleAnalytics.js";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const Content = styled.div`
  transition: 500ms ease;
  margin: 0 auto;
`;

class LayoutDefault extends Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>{process.env.COMPANY}</title>
        </Head>
        <Header
          position={this.props.header}
          toggle={this.toggleDrawer}
        ></Header>
        <TransitionGroup component={React.Fragment}>
          <CSSTransition key={this.props.route} timeout={500} classNames="page">
            <Content>
              {this.props.children}
              <Footer />
            </Content>
          </CSSTransition>
        </TransitionGroup>
      </React.Fragment>
    );
  }
}

export default LayoutDefault;
