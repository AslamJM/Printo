import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ServiceCardProps {
  title: string;
  image: any;
  description: string;
  slug: string;
}

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  image,
  description,
  slug,
}) => {
  return (
    <div className="px-4 py-3  bg-white rounded-lg shadow-sm ">
      <div className="flex items-center h-[200px] justify-center w-full  relative">
        <Image
          src={image}
          alt={title}
          className="h-auto max-w-full rounded-lg"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <h3 className="text-center my-2 text-md md:text-xl xl:text-2xl text-slate-800 font-semibold">
        {title}
      </h3>
      <p className=" text-slate-700 text-sm md:text-base">{description}</p>
      <div className="my-2 flex items-center justify-between px-2">
        <Link
          href="/services"
          className="text-teal-800 hover:text-teal-950 font-semibold underline underline-offset-2"
        >
          See More
        </Link>
        <Link
          href="/order"
          className="text-teal-800 hover:text-teal-950 font-semibold underline underline-offset-2"
        >
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
