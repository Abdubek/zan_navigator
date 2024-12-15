import Link from "next/link";

export default function Home() {
  return (
    <div>Main page <Link href="/doc" className="underline">go to doc</Link></div>
  );
}
