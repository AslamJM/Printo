"use client";

/* eslint-disable @next/next/no-img-element */
import { FC, useState } from "react";
import { DropzoneInputProps, FileWithPath } from "react-dropzone";
import { CloseIcon, UploadIcon } from "../Icons";

interface FullFile {
  file: FileWithPath;
  contents: string;
}

interface DropzoneProps {
  getInputProps: <T_1 extends DropzoneInputProps>(
    props?: T_1 | undefined
  ) => T_1;
  files: FullFile[];
}

const ImagePreview = ({
  src,
  onCLose,
}: {
  src: string;
  onCLose: () => void;
}) => {
  return (
    <div className="mr-1 py-1 relative">
      <img
        src={src}
        className="w-[100px] h-[100px] rounded-md cursor-pointer object-cover "
        alt="upload"
      />
      <span
        className="absolute top-1/2 left-1/2 w-8 h-8 p-1 rounded-full text-teal-600 text-lg font-bold flex items-center justify-center -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-teal-950 hover:bg-teal-800/50 transition-all"
        onClick={() => onCLose()}
      >
        <CloseIcon />
      </span>
    </div>
  );
};

const Dropzone: FC<DropzoneProps> = ({
  getInputProps,
  files: acceptedFiles,
}) => {
  const [imgs, setImgs] = useState(acceptedFiles);
  return (
    <>
      <div className="mb-3">
        <label htmlFor="dropzone">
          <div className="bg-teal-50 w-full h-[150px]  border-teal-900 rounded-md cursor-pointer flex items-center justify-center flex-col">
            <UploadIcon />
            <p className="mb-2  text-teal-500">
              Click to upload or drag and drop
            </p>
            <p className="mb-2  text-teal-400">{`uploaded ${imgs.length} images`}</p>
          </div>
          <input
            id="dropzone"
            type="file"
            className="hidden"
            {...getInputProps()}
          />
        </label>
      </div>
      {
        <div className="flex items-center">
          {imgs.map((file, index) => (
            <ImagePreview
              src={URL.createObjectURL(file.file)}
              key={file.file.name}
              onCLose={() => setImgs((prev) => prev.splice(index, 1))}
            />
          ))}
        </div>
      }
    </>
  );
};

Dropzone.displayName = "DropZone";

export default Dropzone;
