import SectionTitle from "@/components/home/SectionTitle";
import Heading from "@/components/ui/Heading";
import React from "react";

import { servicesData } from "@/data/Services";
import ServicePageCard from "@/components/services/PageCard";

const ServicesPage = () => {
  return (
    <div>
      <Heading className="text-center text-2xl my-16 hidden md:block">
        Our Printing Services
      </Heading>
      <SectionTitle className="md:hidden">Our Printing Services</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service) => (
          <ServicePageCard
            title={service.name}
            description={service.description}
            image={service.image}
            slug={service.slug}
            key={service.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
