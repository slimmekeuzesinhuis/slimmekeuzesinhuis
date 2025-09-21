import Link from "next/link";

export const metadata = {
  title: "Slimme keuzes in huis",
  description:
    "We helpen je stap voor stap met korte, haalbare acties en duidelijke uitleg (wat en waarom).",
};

export default function Home() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <p className="text-sm font-semibold text-emerald-700">
        SLIMME KEUZES IN HUIS
      </p>

      <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
        Praktische tips om je huis comfortabeler én energiezuiniger te maken
      </h1>

      <p className="mt-4 text-slate-600">
        We helpen je stap voor stap (korte, haalbare acties) met duidelijke
        uitleg (wat en waarom).
      </p>

      <div className="mt-6 flex gap-3">
        <Link
          href="/checklist"
          className="rounded-md bg-emerald-700 px-4 py-2 text-white hover:bg-emerald-800"
        >
          Start met besparen
        </Link>
        <Link
          href="/over"
          className="rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-50"
        >
          Lees meer
        </Link>
      </div>
    </section>
  );
}
