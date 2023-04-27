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
    <div className="px-4 py-3  border-[1px] border-teal-900 shadow-teal-200 shadow-inner">
      <div className="flex items-center h-[200px] justify-center w-full bg-slate-400 ">
        Image
      </div>
      <h3 className="text-center my-2 text-2xl text-slate-800 font-semibold">
        {title}
      </h3>
      <p className=" text-slate-700">{description}</p>
      <div className="my-2 flex items-center justify-between px-2">
        <Link href="/" className="text-teal-800 hover:text-teal-950">
          See More
        </Link>
        <Link href="/" className="text-teal-800 hover:text-teal-950">
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
