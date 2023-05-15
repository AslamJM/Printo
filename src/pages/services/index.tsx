import SectionTitle from "@/components/home/SectionTitle";
import Heading from "@/components/ui/Heading";
import React from "react";
import Stripe from "stripe";

import ServicePageCard from "@/components/services/PageCard";
import { GetServerSideProps } from "next";

interface Props {
  services: Stripe.Product[];
}

const ServicesPage = ({ services }: Props) => {
  return (
    <div>
      <Heading className="text-center text-2xl my-16 hidden md:block">
        Our Printing Services
      </Heading>
      <SectionTitle className="md:hidden">Our Printing Services</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServicePageCard
            title={service.name}
            description={service.description || "no description"}
            image={service.images[0]}
            slug={service.id}
            key={service.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2022-11-15",
  });
  const { data: products } = await stripe.prices.list({
    active: true,
    expand: ["data.product"],
  });

  const services = products.map((product) => product.product);

  return {
    props: {
      services,
    },
  };
};
