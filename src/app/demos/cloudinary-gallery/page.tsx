"use client";

import Image from "next/image";

import { cloudinaryLoader } from "@/app/functions/cloudinaryLoader";

export default function CloudinaryGallery() {
  const imageUrls = [
    "/textures/texture-one",
    "/textures/texture-two",
    "/textures/texture-three",
    "/textures/texture-four",
    "/textures/texture-five",
  ];

  return (
    <main className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 md:grid-cols-2 md:px-4 md:pt-4 lg:grid-cols-3">
      {imageUrls.map((src, index) => {
        return (
          <div key={index} className="relative h-[400px] w-full">
            <Image
              className="object-cover"
              src={src}
              alt={`Texture-${index + 1}`}
              fill
              priority
              // (max-width: 768px) There are no gaps for a single column. You only need to compensate for the padding, which is 32px total.
              // (max-width: 1024px) There are two columns, so half the width of the viewport, minus the padding and half of the gap (since only one gap is shared between two columns.
              // (> 1024px) There are three columns, so a third of the width of the viewport, minus the padding and two thirds of the gap (since two gaps are shared between three columns).
              sizes="
                (max-width: 768px) calc(100vw - 32px), 
                (max-width: 1024px) calc((50vw - 16px) - 8px), 
                calc((33vw - 16px) - 10.67px)"
              loader={cloudinaryLoader}
            />
          </div>
        );
      })}
    </main>
  );
}
