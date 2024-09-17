import Image from "next/image";

async function fetchPhoto(id: string) {
  const res = await fetch(
    `https://api.unsplash.com/photos/${id}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch photo");
  }

  return res.json();
}

export async function Photo({ params }: { params: { id: string } }) {
  const photo = await fetchPhoto(params.id);

  return (
    <div className="relative h-96 w-1/2">
      <Image
        className="object-cover object-center"
        src={photo.urls.raw}
        alt={photo.alt_description || "Unsplash photo"}
        fill
        priority
        sizes="50vw"
      />
    </div>
  );
}
