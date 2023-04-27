import React from "react";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="min-h-screen py-3">
      <SectionTitle>Our Services</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          title="banner printing"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quod
        eum doloremque."
          image=""
          slug="1"
        />
        <ServiceCard
          title="banner printing"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quod
        eum doloremque."
          image=""
          slug="1"
        />
        <ServiceCard
          title="banner printing"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quod
        eum doloremque."
          image=""
          slug="1"
        />
      </div>
    </div>
  );
};

export default Services;
