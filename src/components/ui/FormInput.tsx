import { FC } from "react";
import { useFormContext } from "@/context/FormContext";

interface FormInputProps {
  name: string;
}

const FormInput: FC<FormInputProps> = ({ name }) => {
  const { setAddress, setDescription } = useFormContext();

  return (
    <textarea
      className="w-full py-2 px-2 bg-teal-50  text-teal-900 rounded-md focus:ring-teal-900 focus:border-teal-900 focus:border-[1px] h-[100px]  shadow-sm mb-3"
      placeholder={
        name == "address"
          ? "Enter your delivery Address "
          : "Describe your order"
      }
      onChange={(e) => {
        if (name == "address") {
          setAddress(e.target.value);
        } else {
          setDescription(e.target.value);
        }
      }}
    />
  );
};

export default FormInput;
