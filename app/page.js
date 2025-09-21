import Section from "./components/ui/Section";
import Top3 from "./components/Top3";
import CategoryCard from "./components/CategoryCard";
import { getProducts, getCategories } from "./lib/data";

export default async function Home() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories()
  ]);

  return (
    <>
      <Section
        title="Top 3 snelle bespaarders"
        intro="Drie populaire producten die vaak meteen resultaat geven."
      >
        <Top3 products={products} />
      </Section>

      <Section title="Categorieën" intro="Ontdek waar je het beste kunt beginnen.">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </Section>
    </>
  );
}
