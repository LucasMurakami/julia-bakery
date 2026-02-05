import { useRef, useEffect, useState } from 'react';
import { allProducts } from '../../lib/products';

type SearchOverlayProps = {
  isOpen: boolean;
  isHidden: boolean;
  onClose: () => void;
};

export default function SearchOverlay({ isOpen, isHidden, onClose }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    const q = searchQuery.toLowerCase();
    const hasResults = allProducts.some(p => 
      p.name.toLowerCase().includes(q) || 
      (p.description || '').toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.details || '').toLowerCase().includes(q)
    );

    if (hasResults) {
        window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    } else {
        window.location.href = '/404';
    }

    onClose();
  };

  return (
    <div className={`absolute top-full left-0 w-full bg-white border-t border-neutral-100 shadow-xl px-6 py-8 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
        isOpen 
          ? 'translate-y-0 opacity-100 visible' 
          : (isHidden ? 'hidden' : '-translate-y-10 opacity-0 invisible pointer-events-none')
      }`}>
        <div className="w-full max-w-4xl mx-auto flex items-center gap-4">
          <form onSubmit={handleSearch} className="flex-1 flex items-center gap-2">
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="PRODUTO, COLEÇÃO, PÁGINA..."
              className="w-full rounded-full bg-[hsl(var(--accent))] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white placeholder:text-white/70 outline-none transition-all focus:ring-2 focus:ring-[hsl(var(--accent))] focus:ring-offset-2"
            />
            <button 
              type="submit"
              className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-neutral-800"
            >
              Buscar
            </button>
          </form>
        </div>
    </div>
  );
}
