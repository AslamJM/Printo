import { FC, HtmlHTMLAttributes } from "react";

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, className, isLoading }) => {
  return (
    <button
      className={`${className} px-6 py-3 text-slate-50 bg-teal-800 flex items-center justify-center rounded-sm hover:bg-teal-900`}
    >
      {children}
    </button>
  );
};

export default Button;
