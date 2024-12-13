import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Shirt, Footprints, Watch } from 'lucide-react';

const categories = [
  {
    id: 'clothing',
    name: 'Clothing',
    description: 'T-shirts, jeans, dresses, and more',
    icon: Shirt,
    color: 'bg-blue-500',
  },
  {
    id: 'shoes',
    name: 'Shoes',
    description: 'Sneakers, boots, sandals, and more',
    icon: Footprints,
    color: 'bg-green-500',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Watches, bags, jewelry, and more',
    icon: Watch,
    color: 'bg-purple-500',
  },
];

export default function CategoriesPage() {
  return (
    <div className="container px-4 py-8 lg:py-12">
      <h1 className="text-3xl font-bold mb-8">Shop by Category</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.id} href={`/products?category=${category.id}`}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
                <p className="text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}