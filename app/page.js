import Link from "next/link";

export default function Page() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <div className="rounded-2xl bg-white/80 backdrop-blur border shadow-sm p-8">
        <p className="text-sm uppercase tracking-wide text-emerald-700 font-medium">
          Slimme keuzes in huis
        </p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-semibold">
          Praktische tips om je huis comfortabeler én energiezuiniger te maken
        </h1>
        <p className="mt-4 text-gray-600">
          We helpen je stap voor stap (korte, haalbare acties) met duidelijke
          uitleg (wat en waarom).
        </p>
        <div className="mt-6 flex gap-3">
          <Link
            href="/checklist"
            className="inline-flex items-center rounded-lg border border-emerald-700 bg-emerald-600 text-white px-4 py-2 text-sm font-medium hover:bg-emerald-700"
          >
            Start met besparen
          </Link>
          <Link
            href="/over"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white text-gray-900 px-4 py-2 text-sm font-medium hover:bg-gray-50"
          >
            Lees meer
          </Link>
        </div>
      </div>
    </section>
  );
}
