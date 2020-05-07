import React, { Component } from "react";
import Head from "next/head";
import styled from "styled-components";

const Content = styled.div`
  width: 100%;
`;

export default class LayoutCanvas extends Component {
  render() {
    return (
      <>
        <Head>
          <title>
            {!this.props.title
              ? process.env.COMPANY
              : this.props.title + ` - ${process.env.COMPANY}`}
          </title>
        </Head>
        <Content>{this.props.children}</Content>
      </>
    );
  }
}
