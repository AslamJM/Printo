import { FC, useState } from "react";
import Image from "next/image";

interface ImageComponentProps {
  src: string;
  name: string;
  date: string;
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const ImageComponent: FC<ImageComponentProps> = ({ src, name, date }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden  xl:aspect-w-7 xl:aspect-h-8 group">
      <Image
        alt={name}
        src={src}
        fill
        className={cn(
          "object-cover",
          isLoading
            ? "grayscale blur-2xl scale-110"
            : "grayscale-0 bulr-0 scale-100"
        )}
        onLoadingComplete={() => setIsLoading(false)}
      />
      <h3 className="mt-1 text-lg text-gray-700 group-hover:font-semibol">
        {name}
      </h3>
      <p className="mt-8 text-sm font-medium text-gray-700">{date}</p>
    </div>
  );
};

export default ImageComponent;
