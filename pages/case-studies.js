import React from "react";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import Post from "../components/CaseStudies/Post";

export default function CaseStudies() {
  return (
    <Container style={{ maxWidth: 1024, marginTop: 140 }} r>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
}
