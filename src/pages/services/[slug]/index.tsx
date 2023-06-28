import React from "react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Heading from "@/components/ui/Heading";
import SectionTitle from "@/components/home/SectionTitle";
import Link from "next/link";
import ServiceForm from "@/components/services/ServiceForm";
import { ParsedUrlQuery } from "querystring";
import axios from "axios";
import { Product } from "@/types";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const SingleService = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title, image, description, id } = product;
  return (
    <div>
      <Heading className="my-12 text-center hidden md:block">{title}</Heading>
      <SectionTitle className="md:hidden my-2">{title}</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2">
          <ServiceForm title={title} prod_id={id} />
        </div>
        <div className="col-span-1">
          <div>
            <div className="h-[300px] relative  max-w-2xl mx-auto">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="flex items-center justify-center my-2">
            <div className="max-w-2xl">
              <p className=" text-base  text-slate-600">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-3"></div>
    </div>
  );
};

export default SingleService;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get<{ products: Array<{ slug: string }> }>(
    `http://localhost:3000/api/stripe/products/paths`
  );

  const paths = data.products.map((service) => ({
    params: service,
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{
  product: Product;
}> = async (context) => {
  const { slug } = context.params as IParams;

  const { data } = await axios.get<{ product: Product }>(
    `http://localhost:3000/api/stripe/products/${slug}`
  );

  if (!data) {
    return {
      redirect: {
        destination: "/services",
        permanent: false,
      },
    };
  } else {
    return {
      props: data,
    };
  }
};
