import { ProductCard } from "@/products/components/ProductCard/ProductCard";
import { products } from "@/products/data/products";

export const metadata = {
  title: "Cookies Page",
  description: "SEO Title",
};

export default async function ProductsPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
      {products.map((product) => (
        <ProductCard key={`product-${product.id}`} {...product} />
      ))}
    </div>
  );
}
