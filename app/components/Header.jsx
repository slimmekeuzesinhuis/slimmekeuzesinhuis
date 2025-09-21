"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname?.startsWith(href + "/");

  const base =
    "inline-flex items-center px-2 py-1 rounded-md text-sm transition-colors border";
  const active =
    "text-emerald-700 bg-emerald-50 border-emerald-200";
  const inactive =
    "text-slate-700 hover:text-slate-900 hover:bg-slate-50 border-transparent";

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`${base} ${isActive ? active : inactive}`}
    >
      {children}
    </Link>
  );
}

export default function Header() {
  return (
    <header className="border-b bg-white">
      <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold">
          Slimme keuzes in huis
        </Link>

        <div className="flex gap-2">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/over">Over</NavLink>
          <NavLink href="/checklist">Checklist</NavLink>
        </div>
      </nav>
    </header>
  );
}
