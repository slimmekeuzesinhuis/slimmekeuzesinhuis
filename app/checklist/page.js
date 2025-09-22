import { getChecklistItems } from "@/lib/data";
export const metadata = { title: "Checklist" };

export default async function Page() {
  const items = await getChecklistItems();   // <-- taggable

  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Checklist: vandaag starten</h1>
      <ul className="mt-6 space-y-2">
        {items.map((label, i) => (
          <li key={i} className="flex items-center gap-3">
            <input id={`item-${i}`} type="checkbox" className="mt-1 h-4 w-4" />
            <label htmlFor={`item-${i}`}>{label}</label>
          </li>
        ))}
      </ul>
    </section>
  );
}
