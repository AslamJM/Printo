import { createFilething, type FileRouter } from "uploadthing/server";
const f = createFilething();

export const fileUploadRouter = {
  imageUploader: f
    .fileTypes(["image"])
    .maxSize("4MB")
    .onUploadComplete(async ({ file }) => {
      console.log(file.url);
    }),
} satisfies FileRouter;

export type FileUploadRouter = typeof fileUploadRouter;
