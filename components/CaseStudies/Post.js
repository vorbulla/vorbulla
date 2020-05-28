import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const PostWrapper = styled.div`
  background: #3d756a;
  border-radius: 3px;
  margin-bottom: 30px;
  overflow: hidden;
  color: #fff;
  p {
    margin-bottom: 30px;
  }
`;

const ImageWrapper = styled(Grid)`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  img {
    height: 60%;
    margin-bottom: 60px;
  }
`;

export default function Post() {
  return (
    <PostWrapper>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <div style={{ padding: 30 }}>
            <h1>Project title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              ratione fugit aut reiciendis! Quasi quas perferendis quae facilis
              sint blanditiis.
            </p>
            <Button
              color="primary"
              variant="contained"
              style={{ color: "#000", backgroundColor: "#fff" }}
            >
              View Project
            </Button>
          </div>
        </Grid>
        <ImageWrapper item xs={12} md={6}>
          <img src="/images/fake.png" alt="fake" />
        </ImageWrapper>
      </Grid>
    </PostWrapper>
  );
}
