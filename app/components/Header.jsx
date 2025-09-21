import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold">
          Slimme keuzes in huis
        </Link>
        <div className="flex gap-4 text-sm">
          <Link href="/">Home</Link>
          <Link href="/over">Over</Link>
        </div>
      </nav>
    </header>
  );
}
