import { FC, HtmlHTMLAttributes } from "react";

interface HeadingProps extends HtmlHTMLAttributes<HTMLHeadingElement> {}

const Heading: FC<HeadingProps> = ({ children, className }) => {
  return (
    <h1 className={`text-slate-900 font-bold text-6xl ${className}`}>
      {children}
    </h1>
  );
};

export default Heading;
