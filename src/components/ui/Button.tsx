import { FC, HtmlHTMLAttributes, ButtonHTMLAttributes } from "react";
import { LoadingIcon } from "../Icons";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/functions";

export const buttonVariants = cva(
  "px-6 py-3 text-slate-50 border-[1px] flex items-center justify-center rounded-md disabled:bg-teal-50 disabled:text-teal-400 disabled:border-teal-400",
  {
    variants: {
      variant: {
        default: "bg-teal-800 hover:bg-teal-900",
        cancel: "bg-red-500 hover:bg-red-700",
      },
    },
  }
);
interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
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
  variant,
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, className }))}
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
