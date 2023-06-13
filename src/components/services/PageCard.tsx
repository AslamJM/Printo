import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Button from "../ui/Button";

interface ServicePageCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

const ServicePageCard: FC<ServicePageCardProps> = ({
  title,
  description,
  image,
  slug,
}) => {
  return (
    <div className="w-full   rounded-lg p-3 bg-white shadow-sm">
      <div className="h-[200px] relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg border-2 border-teal-900"
        />
      </div>
      <div className="my-3">
        <h3 className="text-center font-semibold mb-2 text-teal-950">
          {title}
        </h3>
        <p className="text-slate-600 text-center text-base">{description}</p>
      </div>
      <div className="py-2 flex items-center justify-center">
        <Link href={`/services/${slug}`}>
          <Button variant="default">Learn More</Button>
        </Link>
      </div>
    </div>
  );
};

export default ServicePageCard;
