import { getHomepageHero } from "@/lib/data";

export default async function Home() {
  const hero = await getHomepageHero();   // <-- taggable

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl font-bold">{hero.title}</h1>
      <p className="mt-3 text-gray-700">{hero.intro}</p>
    </section>
  );
}
