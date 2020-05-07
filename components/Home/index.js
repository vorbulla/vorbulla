import React from "react";
import Hero from "./Hero";
import RecentCaseStudies from "./RecentCaseStudies";
import Fade from "react-reveal/Fade";
export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <div style={{ zIndex: 100, position: "relative" }}>
        <Fade bottom>
          <RecentCaseStudies />
        </Fade>
      </div>
    </React.Fragment>
  );
}
