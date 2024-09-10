import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { id: string };
};

async function fetchPhoto(id: string) {
  const res = await fetch(
    `https://api.unsplash.com/photos/${id}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch photo");
  }

  return res.json();
}

export default async function Page({ params }: Props) {
  const photo = await fetchPhoto(params.id);

  return (
    <div className="container mx-auto py-10">
      <Image
        src={photo.urls.raw}
        alt={photo.alt_description || "Unsplash photo"}
        width={600}
        height={600}
        className="object-cover h-full w-full"
        priority
      />
      <Link href="/">Back to gallery</Link>
    </div>
  );
}
