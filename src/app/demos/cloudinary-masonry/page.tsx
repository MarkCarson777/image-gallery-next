"use client";

import Image from "next/image";

import { cloudinaryLoader } from "@/app/functions/cloudinaryLoader";

export default function CloudinaryMasonry() {
  const imageUrls = [
    "/textures/texture-one",
    "/textures/texture-two",
    "/textures/texture-three",
    "/textures/texture-four",
    "/textures/texture-five",
  ];

  return (
    <main className="mx-auto max-w-[900px] columns-3 space-y-4 pt-4">
      {imageUrls.map((src, index) => {
        return (
          <Image
            className="h-auto w-[400px]"
            src={src}
            alt={`Texture-${index + 1}`}
            priority
            width={300}
            height={0}
            loader={cloudinaryLoader}
          />
        );
      })}
    </main>
  );
}
