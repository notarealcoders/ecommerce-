import { ProductGrid } from '@/components/products/product-grid';
import { ProductFilters } from '@/components/products/product-filters';

export default function ProductsPage() {
  return (
    <div className="container px-4 py-8 lg:py-12">
      <div className="flex flex-col gap-8 md:flex-row">
        <aside className="md:w-64">
          <ProductFilters />
        </aside>
        <main className="flex-1">
          <ProductGrid />
        </main>
      </div>
    </div>
  );
}