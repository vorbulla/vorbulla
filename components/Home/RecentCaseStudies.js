import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const Recent = styled(Container)`
  margin-top: -130px;
  position: relative;
  z-index: 100;
`;

const Card = styled(Grid)`
  cursor: pointer;
`;
const Artwork = styled.div`
  background: ${(props) => props.color};
  padding: 45px 60px;
  display: flex;
  justify-content: center;
  overflow: hidden;

  &:hover {
    img {
      transform: scale(1.6);
    }
  }
  img {
    width: 100%;
    transition: 0.5s ease;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
`;
export default function RecentCaseStudies() {
  return (
    <Recent>
      <Grid container spacing={4}>
        <Card item xs={4}>
          <Artwork color="rgba(252, 147, 3, 1)">
            <img src="/images/work/viviuana.png" alt="" />
          </Artwork>

          <h1>Viviuana CBD</h1>
          <p>
            Created from some of the finest grown hemp in Switzerland, Viviuana
            CBD products are some of the highest quality organic ones available
            on the global market today.
          </p>
        </Card>
        <Card item xs={4}>
          <Artwork color="rgba(25, 80, 121, 1)">
            <img src="/images/work/twojobs.png" alt="" />
          </Artwork>

          <h1>RECRUITING REDEFINED!</h1>
          <p>
            As an interface to the most famous social media platforms, TWO finds
            the right applicants faster.
          </p>
        </Card>
        <Card item xs={4}>
          <Artwork color="rgb(207, 235, 216)">
            <img src="/images/work/ok.png" alt="" />
          </Artwork>

          <h1>The special one</h1>
          <p>
            <strong>Why is it so delicious? </strong> Quite simply, it is not an
            ordinary doner kebab. We have new ideas, work with fresh ingredients
            from local producers and with a lot of love and passion.
          </p>
        </Card>
      </Grid>
    </Recent>
  );
}
