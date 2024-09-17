// Simple page
import Image from "next/image";

export default function ExampleOne() {
  return (
    <main className="mt-24 flex flex-col items-center justify-center">
      <Image
        src="https://plus.unsplash.com/premium_photo-1678937609110-61b091b7e1ee?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Example one"
        width={400}
        height={599.99}
      />
    </main>
  );
}
