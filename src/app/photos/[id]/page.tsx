import Link from "next/link";

import { Photo } from "../../components/Photo";

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props) {
  return (
    <div className="container mx-auto py-10">
      <Photo params={params} />
      <Link href="/">Back to gallery</Link>
    </div>
  );
}
