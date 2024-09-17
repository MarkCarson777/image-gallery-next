"use client";

import Image from "next/image";

import { cloudinaryLoader } from "@/app/functions/cloudinaryLoader";

export default function CloudinaryImage() {
  return (
    <main className="mx-auto mt-24 flex max-w-[900px] flex-col items-center justify-center">
      <div className="relative h-[400px] w-full">
        <Image
          className="object-cover"
          src="/textures/texture-one"
          alt="Texture"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 900px"
          loader={cloudinaryLoader}
        />
      </div>
    </main>
  );
}
