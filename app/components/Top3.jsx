import ProductCard from "./ProductCard";

export default function Top3({ products = [] }) {
  const top = products.slice(0, 3);
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {top.map((p, i) => (
        <ProductCard key={p.id ?? i} product={p} rank={i + 1} />
      ))}
    </div>
  );
}
