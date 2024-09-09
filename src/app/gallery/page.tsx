import Image from "next/image";
import Link from "next/link";

import imageOne from "/public/image-1.jpg";
import imageTwo from "/public/image-2.jpg";
import imageThree from "/public/image-3.jpg";

export default async function Page() {
  // Mock image data
  // Extend to fetch from an API
  const images = [
    {
      id: 1,
      src: imageOne,
      alt: "Mountains 1",
    },
    { id: 2, src: imageTwo, alt: "Mountains 2" },
    { id: 3, src: imageThree, alt: "Mountains 3" },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-center text-4xl mb-8 font-bold">Photo Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image) => (
          <Link href={`/gallery/${image.id}`} key={image.id}>
            <Image
              className="object-cover w-full h-full"
              src={image.src}
              alt={image.alt}
              width={300}
              height={300}
              priority
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
