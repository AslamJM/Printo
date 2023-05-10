import { FC, HtmlHTMLAttributes } from "react";
import { LoadingIcon } from "../Icons";

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  isLoading,
  disabled,
  onClick,
}) => {
  return (
    <button
      className={`${className} px-6 py-3 text-slate-50 border-[1px] bg-teal-800 flex items-center justify-center rounded-sm hover:bg-teal-900 disabled:bg-teal-50 disabled:text-teal-400 disabled:border-teal-400`}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <LoadingIcon />
          <span className="text-teal-900 ml-2">Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
