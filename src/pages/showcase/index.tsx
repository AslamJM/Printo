import Heading from "@/components/ui/Heading";
import ImageComponent from "@/components/works/ImageComponent";
import React from "react";

import { supabaseAdmin } from "@/utils/supabase";
import { GetStaticProps } from "next";

interface ImageSource {
  id: number;
  imageSrc: string;
  name: string;
  date: string;
}

const ShowCasePage = ({ images }: { images: ImageSource[] }) => {
  return (
    <div>
      <Heading className="text-center mt-16">Showcase of Works</Heading>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {images.map((image) => (
            <ImageComponent
              key={image.id}
              src={image.imageSrc}
              name={image.name}
              date={image.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowCasePage;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await supabaseAdmin.from("Showcase").select("*");

  return {
    props: {
      images: data,
    },
  };
};
