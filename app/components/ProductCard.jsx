import Card, { CardContent, CardFooter, CardHeader } from "./ui/Card";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

export default function ProductCard({ product, rank }) {
  const img = product?.images?.[0]?.src ?? "https://placehold.co/600x400?text=Product";
  const alt = product?.images?.[0]?.alt ?? product?.title ?? "Product";

  return (
    <Card className="overflow-hidden">
      <img
        src={img}
        alt={alt}
        className="h-40 w-full object-cover"
        loading="lazy"
      />
      <CardHeader
        subtitle={product.brand}
        title={product.title}
      />
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {product.tags?.slice(0, 3).map((t) => (
            <Badge key={t} color="sky">{t}</Badge>
          ))}
          {typeof rank === "number" && (
            <Badge color="amber" className="ml-auto">#{rank}</Badge>
          )}
        </div>
        <p className="mt-3 text-sm text-gray-700">
          {product.price != null ? `€ ${product.price.toFixed(2)}` : "Prijs volgt"}
        </p>
      </CardContent>
      <CardFooter>
        <Button
          href={product?.affiliate?.url ?? "#"}
          variant="primary"
          rel="nofollow sponsored noopener"
          target="_blank"
          aria-label={`Bekijk ${product.title}`}
          className="w-full"
        >
          Bekijk
        </Button>
      </CardFooter>
    </Card>
  );
}
