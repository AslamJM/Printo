import { FC } from "react";
import { useFormContext } from "@/context/FormContext";

interface FormInputProps {}

const FormInput: FC<FormInputProps> = ({}) => {
  const { setAddress } = useFormContext();

  return (
    <textarea
      className="w-full py-2 px-2 bg-teal-50  text-teal-900 rounded-md focus:ring-teal-900 focus:border-teal-900 focus:border-[1px] h-[100px]  shadow-sm mb-3"
      placeholder="Enter your delivery Address "
      onChange={(e) => setAddress(e.target.value)}
    />
  );
};

export default FormInput;
