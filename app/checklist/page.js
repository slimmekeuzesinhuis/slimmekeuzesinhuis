import Checklist from "../components/Checklist";

export const metadata = {
  title: "Checklist",
  description:
    "Start vandaag met kleine, haalbare stappen om je huis comfortabeler en energiezuiniger te maken."
};

export default function Page() {
  const items = [
    "Thermostaat 1°C lager zetten (overdag)",
    "Tochtstrips plaatsen bij buitendeuren",
    "Radiatorfolie achter radiatoren plakken",
    "Ledlampen in veelgebruikte ruimtes",
    "Douchetijd terug naar 5 minuten"
  ];

  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Checklist: vandaag starten</h1>
      <p className="mt-2 text-gray-600">
        Vink af wat je al gedaan hebt of waar je mee aan de slag wilt. (handig
        om je voortgang te zien)
      </p>

      <div className="mt-6 rounded-2xl bg-white/80 backdrop-blur border shadow-sm p-6">
        <Checklist items={items} />
      </div>

      <p className="mt-8 text-sm text-gray-500">
        Tip: later kun je categorieën toevoegen (verwarming, verlichting, water,
        gedrag) en items uitbreiden met links naar uitleg.
      </p>
    </section>
  );
}
