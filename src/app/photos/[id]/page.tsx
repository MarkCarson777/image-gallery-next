import Image from "next/image";
import Link from "next/link";

type Params = {
  id: string;
};

type Props = {
  params: Params;
};

const accessKey = process.env.UNSPLASH_ACCESS_KEY;

async function getPhoto(params: Params) {
  const res = await fetch(
    `https://api.unsplash.com/photos/${params.id}?client_id=${accessKey}`
  );
  const photo = await res.json();

  return photo;
}

export default async function Page({ params }: Props) {
  const photo = await getPhoto(params);

  return (
    <div className="container mx-auto py-10">
      <Image
        src={photo.urls.raw}
        alt={photo.alt_description}
        width={600}
        height={600}
        className="object-cover h-full w-full"
        priority
      />
      <Link href="/">Back to gallery</Link>
    </div>
  );
}
