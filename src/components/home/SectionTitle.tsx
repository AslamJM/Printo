import { FC, HtmlHTMLAttributes } from "react";

interface SectionTitleProps extends HtmlHTMLAttributes<HTMLHeadingElement> {}

const SectionTitle: FC<SectionTitleProps> = ({ children, className }) => {
  return (
    <h2
      className={`mt-3 mb-6 text-lg md:text-xl xl:text-3xl text-slate-900 underline font-semibold underline-offset-4 text-center ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
