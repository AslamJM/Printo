import { createNextPageApiHandler } from "uploadthing/server";
import { fileUploadRouter } from "@/server/uploadthing";

const handler = createNextPageApiHandler({
  router: fileUploadRouter,
});

export default handler;
