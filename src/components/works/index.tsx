import React from "react";
import Gallery from "./Gallery";
import SectionTitle from "../home/SectionTitle";

const Works = () => {
  return (
    <div className="py-3">
      <SectionTitle className="md:my-16">Our Works</SectionTitle>
      <p className="my-3 text-center text-slate-600">
        See some of our recent outstanding works.
      </p>
      <Gallery />
    </div>
  );
};

export default Works;
