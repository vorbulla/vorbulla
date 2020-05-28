import React from "react";
import Hero from "./Hero";
import RecentCaseStudies from "./RecentCaseStudies";
export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <div style={{ zIndex: 100, position: "relative" }}>
        <RecentCaseStudies />
      </div>
    </React.Fragment>
  );
}
