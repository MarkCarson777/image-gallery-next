import Image from "next/image";
import Link from "next/link";

type Image = {
  id: string;
  urls: {
    raw: string;
  };
  alt_description: string;
};

async function fetchPhotos(amount: number) {
  const res = await fetch(
    `https://api.unsplash.com/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&per_page=${amount}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch photos");
  }

  return res.json();
}

export default async function Page() {
  const photos = await fetchPhotos(20);

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-8 text-center text-4xl font-bold">Photo Gallery</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {photos.map((image: Image, index: number) => (
          <Link key={index} href={`/photos/${image.id}`}>
            <div className="relative h-96 w-full">
              <Image
                className="object-cover"
                src={image.urls.raw}
                alt={image.alt_description}
                sizes={
                  "(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                }
                fill
                priority
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
