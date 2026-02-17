import { useEffect, useState } from 'react';
import { allProducts, type Product } from '../../lib/products';

export default function SearchResults() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get query param
    const searchParams = new URLSearchParams(window.location.search);
    const q = searchParams.get('q');
    
    if (!q) {
        // No query provided, maybe redirect to home or just show empty?
        // Prompt says "redirects to error page" if "returns nothing".
        // No query = returns nothing.
        window.location.href = '/404';
        return;
    }

    setQuery(q);

    const lowerQ = q.toLowerCase();
    const filtered = allProducts.filter(p => 
      p.name.toLowerCase().includes(lowerQ) || 
      (p.description || '').toLowerCase().includes(lowerQ) ||
      p.category.toLowerCase().includes(lowerQ) ||
      (p.details || '').toLowerCase().includes(lowerQ)
    );

    if (filtered.length === 0) {
      window.location.href = '/404';
    } else {
      setResults(filtered);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
        <div className="flex min-h-[50vh] items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>
        </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-16">
      <h1 className="mb-8 text-3xl font-bold uppercase tracking-wide">
        Resultados para "{query}"
      </h1>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {results.map((product) => (
          <a 
            key={product.id}
            href={product.category === 'cakes' ? `/cakes/${product.id}` : '/#cookies'} 
            className="group relative block overflow-hidden rounded-2xl bg-neutral-100 dark:bg-[hsl(var(--card))] shadow-sm transition-all hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--accent))]">
                        {product.category === 'cakes' ? 'Bolo' : 'Biscoito'}
                    </span>
                    {product.price && <span className="font-semibold text-[hsl(var(--primary))]">{product.price}</span>}
                </div>
                <h2 className="mb-2 text-xl font-bold uppercase text-[hsl(var(--foreground))]">{product.name}</h2>
                <p className="line-clamp-2 text-sm text-[hsl(var(--muted-foreground))]">{product.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
