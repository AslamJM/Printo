import { FC, HtmlHTMLAttributes } from "react";

interface SectionTitleProps extends HtmlHTMLAttributes<HTMLHeadingElement> {}

const SectionTitle: FC<SectionTitleProps> = ({ children, className }) => {
  return (
    <h2 className="mt-3 mb-6 text-3xl text-slate-900 underline font-semibold underline-offset-4 text-center">
      {children}
    </h2>
  );
};

export default SectionTitle;
