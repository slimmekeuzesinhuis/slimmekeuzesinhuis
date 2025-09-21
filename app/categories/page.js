import Section from "../components/ui/Section";
import CategoryCard from "../components/CategoryCard";
import { getCategories } from "../lib/data";

export default async function CategoriesPage() {
  const categories = await getCategories();
  return (
    <Section title="Categorieën" intro="Kies een onderwerp om te starten.">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {categories.map((c) => <CategoryCard key={c.slug} category={c} />)}
      </div>
    </Section>
  );
}
