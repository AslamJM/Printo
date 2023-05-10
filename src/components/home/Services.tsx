import React from "react";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

import { homeServices } from "@/data/Services";

const Services = () => {
  return (
    <div className="min-h-screen py-3">
      <SectionTitle className="md:my-16">Our Services</SectionTitle>
      <p className="text-slate-600 text-sm md:text-base  my-4 text-justify md:text-center">
        Printo offers a variety of high-quality printing services including
        customized banners, mugs, t-shirts, business cards, flyers, brochures,
        invitations, and booklets. With our online ordering system and design
        gallery, customers can easily customize and order products to promote
        their business, event, or personal brand.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {homeServices.map((service) => (
          <ServiceCard
            key={service.slug}
            title={service.name}
            description={service.description}
            slug={service.slug}
            image={service.image}
          />
        ))}
      </div>
      <p className="text-center text-slate-600 mt-6">
        There are many more checkout{" "}
        <Link
          href="/services"
          className="text-teal-900 font-semibold hover:animate-pulse underline underline-offset-2"
        >
          Services
        </Link>
      </p>
    </div>
  );
};

export default Services;
