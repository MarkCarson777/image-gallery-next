import Image from "next/image";
import Link from "next/link";

type Image = {
  id: string;
  urls: {
    raw: string;
  };
  alt_description: string;
};

async function fetchPhotos(total: number) {
  const res = await fetch(
    `https://api.unsplash.com/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&per_page=${total}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch photo");
  }

  return res.json();
}

export default async function Page() {
  const photos = await fetchPhotos(20);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-center text-4xl mb-8 font-bold">Photo Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((image: Image, index: number) => (
          <Link href={`/photos/${image.id}`} key={index}>
            <Image
              className="object-cover w-full h-full"
              src={image.urls.raw}
              alt={image.alt_description}
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
