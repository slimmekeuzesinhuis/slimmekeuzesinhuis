import Card, { CardContent, CardHeader } from "./ui/Card";
import Badge from "./ui/Badge";

export default function CategoryCard({ category }) {
  return (
    <Card>
      <CardHeader title={category.name} subtitle="Categorie" />
      <CardContent>
        {category.description && <p className="text-sm text-gray-700">{category.description}</p>}
        <div className="mt-3">
          <Badge color="emerald">{category.slug}</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
