import Section from "./components/ui/Section";
import Top3 from "./components/Top3";
import CategoryCard from "./components/CategoryCard";

const demoProducts = [
  {
    id: "radfolie-123",
    title: "Radiatorfolie set",
    brand: "WarmHuis",
    price: 19.95,
    tags: ["quick-win", "isoleren"],
    images: [{ src: "https://placehold.co/600x400?text=Radiatorfolie", alt: "Radiatorfolie" }],
    affiliate: { url: "#" }
  },
  {
    id: "tochtstrip-456",
    title: "Tochtstrips (4m)",
    brand: "SealPro",
    price: 9.99,
    tags: ["kierdichting", "quick-win"],
    images: [{ src: "https://placehold.co/600x400?text=Tochtstrips", alt: "Tochtstrips" }],
    affiliate: { url: "#" }
  },
  {
    id: "ledlamp-789",
    title: "LED-lampen set (6 st.)",
    brand: "Bright",
    price: 14.95,
    tags: ["verlichting", "besparen"],
    images: [{ src: "https://placehold.co/600x400?text=LED", alt: "LED lampen" }],
    affiliate: { url: "#" }
  }
];

const demoCategories = [
  { slug: "isoleren", name: "Isoleren", description: "Snel warme winst met kleine ingrepen." },
  { slug: "verwarming", name: "Verwarming", description: "Slim stoken met minder gas." }
];

export default function Home() {
  return (
    <>
      <Section
        title="Top 3 snelle bespaarders"
        intro="Drie populaire producten die vaak meteen resultaat geven."
      >
        <Top3 products={demoProducts} />
      </Section>

      <Section
        title="Categorieën"
        intro="Ontdek waar je het beste kunt beginnen."
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {demoCategories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </Section>
    </>
  );
}
