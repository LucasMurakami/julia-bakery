import { useEffect, useState } from 'react';
import { allProducts, type Product } from '@/lib/products';
import { allCategories } from '@/lib/category';
import SearchInput from '@/components/ui/SearchInput';

// ── FilterPanel ──────────────────────────────────────────────────────────────
// Defined outside SearchResults so React never unmounts it on re-render.

interface FilterPanelProps {
  inputValue: string;
  onInputChange: (v: string) => void;
  onSearch: (e: React.FormEvent) => void;
  onClearSearch: () => void;
  bestseller: boolean;
  onToggleBestseller: () => void;
  activeCategories: Set<string>;
  onToggleCategory: (name: string) => void;
  hasActiveFilters: boolean;
  onClearAll: () => void;
}

function FilterPanel({
  inputValue, onInputChange, onSearch, onClearSearch,
  bestseller, onToggleBestseller,
  activeCategories, onToggleCategory,
  hasActiveFilters, onClearAll,
}: FilterPanelProps) {
  return (
    <div className="flex flex-col gap-6">

      {/* Text search */}
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[hsl(var(--muted-foreground))]">
          Buscar
        </p>
        <SearchInput
          value={inputValue}
          onChange={onInputChange}
          onSubmit={onSearch}
          onClear={onClearSearch}
          placeholder="Nome, ingrediente..."
        />
      </div>

      <hr className="border-[hsl(var(--border))]" />

      {/* Bestseller */}
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[hsl(var(--muted-foreground))]">
          Destaque
        </p>
        <label className="flex cursor-pointer items-center gap-3 group">
          <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${bestseller ? 'border-[hsl(var(--primary))] bg-[hsl(var(--primary))]' : 'border-[hsl(var(--border))] group-hover:border-[hsl(var(--primary))]'}`}>
            {bestseller && (
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="text-[hsl(var(--primary-foreground))]"><polyline points="20 6 9 17 4 12"/></svg>
            )}
          </span>
          <input type="checkbox" className="sr-only" checked={bestseller} onChange={onToggleBestseller} />
          <span className="text-sm font-semibold text-[hsl(var(--foreground))]">Favoritos da Casa</span>
        </label>
      </div>

      <hr className="border-[hsl(var(--border))]" />

      {/* Category checkboxes */}
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[hsl(var(--muted-foreground))]">
          Categoria
        </p>
        <div className="flex flex-col gap-3">
          {allCategories.map((cat) => {
            const checked = activeCategories.has(cat.name);
            return (
              <label key={cat.name} className="flex cursor-pointer items-center gap-3 group">
                <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${checked ? 'border-[hsl(var(--primary))] bg-[hsl(var(--primary))]' : 'border-[hsl(var(--border))] group-hover:border-[hsl(var(--primary))]'}`}>
                  {checked && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="text-[hsl(var(--primary-foreground))]"><polyline points="20 6 9 17 4 12"/></svg>
                  )}
                </span>
                <input type="checkbox" className="sr-only" checked={checked} onChange={() => onToggleCategory(cat.name)} />
                <span className="text-sm font-semibold text-[hsl(var(--foreground))]">{cat.label}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Clear all */}
      {hasActiveFilters && (
        <>
          <hr className="border-[hsl(var(--border))]" />
          <button
            onClick={onClearAll}
            className="text-left text-xs font-bold uppercase tracking-widest text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
          >
            Limpar filtros
          </button>
        </>
      )}
    </div>
  );
}

// ── SearchResults ────────────────────────────────────────────────────────────

export default function SearchResults() {
  const [textQuery, setTextQuery]               = useState('');
  const [inputValue, setInputValue]             = useState('');
  const [bestseller, setBestseller]             = useState(false);
  const [activeCategories, setActiveCategories] = useState<Set<string>>(new Set());
  const [results, setResults]                   = useState<Product[]>([]);
  const [initialized, setInitialized]           = useState(false);
  const [filtersOpen, setFiltersOpen]           = useState(false);

  // ── bootstrap from URL ───────────────────────────────────────────────────
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const q  = sp.get('q') || '';
    const f  = sp.get('filter') || '';

    setInputValue(q);
    setTextQuery(q);

    if (f === 'bestseller') {
      setBestseller(true);
    } else if (f) {
      setActiveCategories(new Set([f]));
    }

    setInitialized(true);
  }, []);

  // ── filter products ──────────────────────────────────────────────────────
  useEffect(() => {
    if (!initialized) return;

    let filtered = allProducts;

    if (textQuery.trim()) {
      const lq = textQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(lq) ||
          (p.product_description || '').toLowerCase().includes(lq) ||
          p.categories.some((c) => c.name.toLowerCase().includes(lq)),
      );
    }

    if (bestseller) {
      filtered = filtered.filter((p) => p.bestseller);
    }

    if (activeCategories.size > 0) {
      filtered = filtered.filter((p) =>
        p.categories.some((c) => activeCategories.has(c.name)),
      );
    }

    setResults(filtered);
  }, [textQuery, bestseller, activeCategories, initialized]);

  // ── helpers ──────────────────────────────────────────────────────────────
  function syncURL(q: string, bs: boolean, cats: Set<string>) {
    const url = new URL(window.location.href);
    q ? url.searchParams.set('q', q) : url.searchParams.delete('q');
    if (bs) {
      url.searchParams.set('filter', 'bestseller');
    } else if (cats.size === 1) {
      url.searchParams.set('filter', [...cats][0]);
    } else {
      url.searchParams.delete('filter');
    }
    window.history.replaceState({}, '', url.toString());
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setTextQuery(inputValue);
    syncURL(inputValue, bestseller, activeCategories);
  }

  function clearSearch() {
    setInputValue('');
    setTextQuery('');
    syncURL('', bestseller, activeCategories);
  }

  function toggleBestseller() {
    const next = !bestseller;
    setBestseller(next);
    syncURL(textQuery, next, activeCategories);
  }

  function toggleCategory(name: string) {
    const next = new Set(activeCategories);
    next.has(name) ? next.delete(name) : next.add(name);
    setActiveCategories(next);
    syncURL(textQuery, bestseller, next);
  }

  function clearAll() {
    setInputValue('');
    setTextQuery('');
    setBestseller(false);
    setActiveCategories(new Set());
    syncURL('', false, new Set());
  }

  const hasActiveFilters = bestseller || activeCategories.size > 0 || textQuery.trim() !== '';
  const heading = textQuery.trim() ? `Resultados para "${textQuery}"` : 'Nosso Cardápio';

  const filterPanelProps: FilterPanelProps = {
    inputValue,
    onInputChange: setInputValue,
    onSearch: handleSearch,
    onClearSearch: clearSearch,
    bestseller,
    onToggleBestseller: toggleBestseller,
    activeCategories,
    onToggleCategory: toggleCategory,
    hasActiveFilters,
    onClearAll: clearAll,
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-16">

      {/* Page heading */}
      <h1 className="mb-2 text-3xl font-bold uppercase tracking-wide">
        {heading}
      </h1>
      <div className="mb-8 h-1 w-16 rounded-full bg-[hsl(var(--primary))]" />

      {/* Mobile: filter toggle bar */}
      <div className="mb-6 flex items-center justify-between lg:hidden">
        <button
          onClick={() => setFiltersOpen((o) => !o)}
          className="flex items-center gap-2 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--muted))] px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-[hsl(var(--foreground))] transition hover:bg-[hsl(var(--accent))]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/></svg>
          Filtros
          {hasActiveFilters && (
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[hsl(var(--primary))] text-[10px] font-bold text-[hsl(var(--primary-foreground))]">
              {(bestseller ? 1 : 0) + activeCategories.size + (textQuery.trim() ? 1 : 0)}
            </span>
          )}
        </button>
        <span className="text-sm text-[hsl(var(--muted-foreground))]">
          {results.length} {results.length === 1 ? 'produto' : 'produtos'}
        </span>
      </div>

      {/* Mobile: collapsible filter drawer */}
      {filtersOpen && (
        <div className="mb-8 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 lg:hidden">
          <FilterPanel {...filterPanelProps} />
        </div>
      )}

      {/* Desktop: sidebar + grid */}
      <div className="flex gap-10">

        {/* Sidebar — desktop only */}
        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-28 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6">
            <FilterPanel {...filterPanelProps} />
          </div>
        </aside>

        {/* Product grid */}
        <div className="min-w-0 flex-1">
          {/* Result count — desktop */}
          <p className="mb-6 hidden text-sm text-[hsl(var(--muted-foreground))] lg:block">
            {results.length} {results.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
          </p>

          {!initialized ? (
            <div className="flex min-h-[30vh] items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent" role="status" />
            </div>
          ) : results.length === 0 ? (
            <div className="flex min-h-[30vh] flex-col items-center justify-center gap-4 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[hsl(var(--muted-foreground))]"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <p className="text-lg font-semibold text-[hsl(var(--foreground))]">Nenhum produto encontrado</p>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Tente ajustar os filtros ou a busca.</p>
              <button onClick={clearAll} className="mt-2 text-sm font-bold uppercase tracking-widest text-[hsl(var(--primary))] hover:underline">
                Limpar filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {results.map((product) => (
                <a
                  key={product.id}
                  href={`/${product.categories[0].name}/${product.slug || product.id}`}
                  className="group relative block overflow-hidden rounded-2xl bg-neutral-100 dark:bg-[hsl(var(--card))] shadow-sm transition-all hover:shadow-md"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--accent))]">
                        {product.categories[0].label}
                      </span>
                      <div className="flex items-center gap-2">
                        {product.bestseller && (
                          <span className="rounded-full bg-[hsl(var(--primary))] px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-[hsl(var(--primary-foreground))]">
                            Favorito
                          </span>
                        )}
                        {product.price && (
                          <span className="font-semibold text-[hsl(var(--primary))]">
                            R$ {product.price.toFixed(2).replace('.', ',')}
                          </span>
                        )}
                      </div>
                    </div>
                    <h2 className="mb-1.5 text-lg font-bold uppercase text-[hsl(var(--foreground))]">
                      {product.name}
                    </h2>
                    <p className="line-clamp-2 text-sm text-[hsl(var(--muted-foreground))]">
                      {product.product_description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
