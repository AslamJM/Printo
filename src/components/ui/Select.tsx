import React, { FC } from "react";
import * as Select from "@radix-ui/react-select";
import { useFormContext } from "@/context/FormContext";

interface SelectItemProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  value: string;
}

const SelectItem: FC<SelectItemProps> = ({ children, value, ...props }) => {
  return (
    <Select.Item
      value={value}
      className="px-2 py-1 text-[16px] cursor-pointer hover:bg-teal-50 rounded-md w-full "
      {...props}
    >
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  );
};

const SelectComponent = () => {
  const { setCategory } = useFormContext();
  return (
    <div className="w-xl mb-3">
      <Select.Root onValueChange={(e) => setCategory(e)}>
        <Select.Trigger className="w-full border-[1px] border-teal-800 py-2 rounded-md bg-teal-50 text-teal-800 font-semibold px-2">
          <Select.Value placeholder="select your printing option" />
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="w-full ">
            <Select.Viewport className="rounded-xl w-full bg-white p-4 shadow-sm">
              <SelectItem value="t-shirt">T-Shirt</SelectItem>
              <SelectItem value="mug">Mug</SelectItem>
              <SelectItem value="banner">Banner</SelectItem>
              <SelectItem value="brochure">Brochure</SelectItem>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};

export default SelectComponent;
