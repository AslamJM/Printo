import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="grid gap-4">
        <div className="w-full relative h-[300px]">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full relative h-[300px]">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full relative h-[300px]">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div className="w-full relative h-[300px]">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full relative h-[300px]">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full relative h-[300px]">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div className="w-full relative h-[300px]">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full relative h-[300px]">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full relative h-[300px]">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div className="w-full relative h-[300px]">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full relative h-[300px]">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
            alt="/"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full relative h-[300px]">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
            alt="/"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
