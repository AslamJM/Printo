import { FC } from "react";
import Image from "next/image";
import Button from "../ui/Button";

interface SingleOrderProps {
  category: string;
  address: string;
  images: string[];
  status: string;
}

const SingleOrder: FC<SingleOrderProps> = ({
  category,
  address,
  images,
  status,
}) => {
  return (
    <div className=" px-6 py-4 bg-white w-full md:w-[600px] lg:w-[800px] rounded-md my-1">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold mb-2 text-teal-900">
          {category} Printing
        </h3>
        <StatusCard status={status} />
      </div>
      <div className="py-3 flex flex-wrap">
        {images.map((image, i) => (
          <Image
            src={image}
            alt="order"
            width={180}
            height={180}
            className="object-cover rounded-md m-1"
            key={`image-${i}`}
          />
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div>
          <h5 className="font-semibold  text-teal-800">Delivers To: </h5>
          <p className="text-teal-700 my-1">{address}</p>
        </div>
        <div className="flex">
          <Button variant="default">Pay Now</Button>
          <Button
            variant="cancel"
            className="ml-2 bg-red-500 hover:bg-red-700 rounded-md"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

const StatusCard = ({ status }: { status: string }) => {
  return (
    <div className="py-1 px-3 rounded-lg bg-teal-50 border-[1px] border-teal-700 flex items-center justify-center   text-teal-900 italic">
      {status}
    </div>
  );
};

export default SingleOrder;
