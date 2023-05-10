import React from "react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image, { StaticImageData } from "next/image";
import { servicesData } from "@/data/Services";
import Heading from "@/components/ui/Heading";
import SectionTitle from "@/components/home/SectionTitle";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const SingleService = ({
  name,
  image,
  description,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Heading className="my-12 text-center hidden md:block">{name}</Heading>
      <SectionTitle className="md:hidden my-2">{name}</SectionTitle>
      <div>
        <div className="h-[300px] relative  max-w-2xl mx-auto">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="flex items-center justify-center my-2">
        <div className="max-w-2xl">
          <p className=" text-base md:text-lg text-slate-600">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-center my-3">
        <Link href="/order">
          <Button>Order Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default SingleService;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = servicesData.map((service) => ({
    params: { slug: service.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{
  name: string;
  description: string;
  image: StaticImageData;
  slug: string;
}> = async (context) => {
  const { slug } = context.params as IParams;

  const data = servicesData.find((service) => service.slug === slug);

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
