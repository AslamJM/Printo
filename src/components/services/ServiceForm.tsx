import React, { useState } from "react";
import { generateReactHelpers } from "@uploadthing/react";
import { FileUploadRouter } from "@/server/uploadthing";
import Dropzone from "../order/Dropzone";

const { useUploadThing } = generateReactHelpers<FileUploadRouter>();

interface ServiceFormProps {
  title: string;
  prod_id: string;
}

const FormLabel = ({ label }: { label: string }) => {
  return (
    <div className="my-1  text-teal-900 text-sm sm:text-md lg:text-base font-semibold">
      {label}
    </div>
  );
};

const ServiceForm = ({ title, prod_id }: ServiceFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");

  const { getRootProps, getInputProps, files, startUpload } =
    useUploadThing("imageUploader");

  return (
    <div
      className="bg-white px-6 py-6 w-full  rounded-md shadow-sm"
      {...getRootProps()}
    >
      <h5 className="font-semibold text-xl my-1">{title}</h5>
      <FormLabel label={`upload the ${title.toLowerCase()} designs`} />
      <Dropzone getInputProps={getInputProps} files={files} />
      <FormLabel label="Order Description" />
      <textarea
        className="w-full py-2 px-2 bg-teal-50  text-teal-900 rounded-md focus:ring-teal-900 focus:border-teal-900 focus:border-[1px] h-[100px]  shadow-sm mb-3"
        placeholder="Describe your order"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <FormLabel label="Delivery Address" />
      <textarea
        className="w-full py-2 px-2 bg-teal-50  text-teal-900 rounded-md focus:ring-teal-900 focus:border-teal-900 focus:border-[1px] h-[100px]  shadow-sm mb-3"
        placeholder="Enter your delivery address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </div>
  );
};

export default ServiceForm;
