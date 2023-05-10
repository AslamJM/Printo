import { FC } from "react";

import { StepperIcon } from "../Icons";

interface OrderStepProps {
  step: string;
}

const OrderStep: FC<OrderStepProps> = ({ step }) => {
  return (
    <div className="w-full flex items-center  my-2 py-1">
      <StepperIcon />
      <p className="ml-2 text-slate-600 text-lg ">{step}</p>
    </div>
  );
};

export default OrderStep;
