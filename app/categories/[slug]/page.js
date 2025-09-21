import Section from "../../components/ui/Section";
import ProductCard from "../../components/ProductCard";
import { getCategories, getProductsByCategory } from "../../lib/data";

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map(c => ({ slug: c.slug }));
}

// (optioneel) fallback revalidate
export const revalidate = 900;

export default async function CategoryDetail({ params }) {
  const items = await getProductsByCategory(params.slug);
  return (
    <Section title={`Categorie: ${params.slug}`} intro="Selectie van producten.">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((p, i) => <ProductCard key={p.id ?? i} product={p} />)}
      </div>
    </Section>
  );
}
