"use client";

import Image from "next/image";

type ImageProps = {
  src: string;
  width: number;
  quality?: number;
};

const normalizeSrc = (src: string) => src.replace(/^\//, "");

export function cloudinaryLoader({ src, width, quality }: ImageProps) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!cloudName) {
    throw new Error(
      "NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is required in the environment",
    );
  }
  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "auto"}`];
  return `https://res.cloudinary.com/${cloudName}/image/upload/${params.join(",")}/${normalizeSrc(src)}`;
}

export default function CloudinaryImage() {
  return (
    <main className="mx-auto mt-24 flex max-w-[900px] flex-col items-center justify-center">
      <div className="relative h-[400px] w-full">
        <Image
          className="object-cover"
          src="texture-one"
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
