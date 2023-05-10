import React, { useState } from "react";
import SelectComponent from "../ui/Select";
import FormInput from "../ui/FormInput";
import Dropzone from "./Dropzone";
import Button from "../ui/Button";
import { FileUploadRouter } from "@/server/uploadthing";
import { generateReactHelpers } from "@uploadthing/react";
import { useFormContext } from "@/context/FormContext";
import { supabaseAdmin } from "@/utils/supabase";
import { useUser } from "@clerk/nextjs";

const { useUploadThing } = generateReactHelpers<FileUploadRouter>();

const FormLabel = ({ label }: { label: string }) => {
  return (
    <div className="my-1  text-teal-900 text-sm font-semibold">{label}</div>
  );
};

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { getRootProps, getInputProps, files, startUpload } =
    useUploadThing("imageUploader");

  const { address, category } = useFormContext();
  const { user } = useUser();

  const uploadImage = async () => {
    console.log("uploading...");

    try {
      setIsLoading(true);
      const res = await startUpload();
      const fileUrls = res.map((rs) => rs.fileUrl);
      const { data } = await supabaseAdmin.from("orders").insert([
        {
          userId: user?.id || "anonymous",
          category,
          address,
          images: fileUrls,
          paymentId: "",
        },
      ]);
      console.log(data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="bg-white px-6 py-6 w-full md:w-1/2 rounded-md"
      {...getRootProps()}
    >
      <FormLabel label="Select the printing category" />
      <SelectComponent />
      <FormLabel label="Upload the design" />
      <Dropzone getInputProps={getInputProps} files={files} />
      <FormLabel label="Delivery Address" />
      <FormInput />
      <div className="py-1 flex items-center justify-center">
        <Button
          disabled={
            files.length === 0 ||
            address.length === 0 ||
            category == "" ||
            isLoading
          }
          onClick={() => uploadImage()}
          isLoading={isLoading}
        >
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default Form;
