import Link from "next/link";
export default function NotFound() {
  return (<div className="sec text-center"><h1 className="grad-text font-serif text-7xl">404</h1>
    <p className="mt-4 text-mute">Ei page ta khuje paoa jai nai.</p>
    <Link href="/" className="btn mt-8 bg-accent text-bg">Back Home</Link></div>);
}
