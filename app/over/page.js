export const metadata = {
  title: "Over",
  description:
    "Wat is Slimme keuzes in huis en wat kun je verwachten van deze site?"
};

export default function Page() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Over Slimme keuzes in huis</h1>
      <p className="mt-4 text-gray-700">
        We helpen je met praktische, kleine stappen (haalbaar en duidelijk) om
        je huis comfortabeler te maken en je energierekening te verlagen.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-medium">Wat je kunt verwachten</h2>
          <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700">
            <li>Korte, haalbare acties</li>
            <li>Uitleg: wat is het en waarom werkt het</li>
            <li>Checklists om voortgang bij te houden</li>
          </ul>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-medium">Waarom</h2>
          <p className="mt-3 text-gray-700">
            Comfortabeler wonen, lagere kosten en een kleinere footprint. Kleine
            keuzes maken samen een groot verschil.
          </p>
        </div>
      </div>
    </section>
  );
}
