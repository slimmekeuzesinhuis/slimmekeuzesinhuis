"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ links }) {
  const pathname = usePathname();

  const base =
    "inline-flex items-center px-2 py-1 rounded-md text-sm transition-colors";
  const active =
    "text-emerald-700 bg-emerald-50 border border-emerald-200";
  const inactive =
    "text-gray-700 hover:text-gray-900 hover:bg-gray-50 border border-transparent";

  return (
    <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
      <Link href="/" className="font-semibold">
        Slimme keuzes in huis
      </Link>

      <div className="flex gap-2">
        {links.map(({ href, label }) => {
          const isActive =
            pathname === href || (href !== "/" && pathname.startsWith(href));
          return (
            <Link key={href} href={href} className={`${base} ${isActive ? active : inactive}`}>
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
