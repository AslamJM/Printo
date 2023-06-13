import { FC } from "react";

interface TestimonialCardProps {
  name: string;
  text: string;
  image: any;
  description: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  name,
  text,
  description,
}) => {
  return (
    <div className="px-4 py-3  bg-white  rounded-lg shadow-sm">
      <div className="flex items-center">
        <div className="h-12 w-12 bg-slate-700 rounded-full"></div>
        <div className="ml-3">
          <h4 className="font-semibold text:md md:text-xl">{name}</h4>
          <p className="text-sm md:text-lg text-slate-600">{description}</p>
        </div>
      </div>
      <div className="h-[1px] my-2 bg-teal-900 w-full" />
      <div className="py-2">
        <p className="text-slate-700 text-md">{text}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
