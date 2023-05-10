import React from "react";
import SectionTitle from "../home/SectionTitle";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="min-h-screen py-3 flex flex-col md:items-center md:justify-center">
      <SectionTitle>Testimonials</SectionTitle>
      <p className="my-2 text-slate-600 text-center">
        Listen from our satisfied clients.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <TestimonialCard
          name="john doe"
          description="sports man newland"
          text="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur molestiae repellendus eius totam ipsum iste magni. Quasi excepturi vero consectetur.
        "
          image=""
        />
        <TestimonialCard
          name="john doe"
          description="sports man newland"
          text="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur molestiae repellendus eius totam ipsum iste magni. Quasi excepturi vero consectetur.
        "
          image=""
        />
        <TestimonialCard
          name="john doe"
          description="sports man newland"
          text="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur molestiae repellendus eius totam ipsum iste magni. Quasi excepturi vero consectetur.
        "
          image=""
        />
      </div>
    </div>
  );
};

export default Testimonials;
