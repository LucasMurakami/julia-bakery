import { useRef, useEffect, useState } from 'react';
import { allProducts } from '@/lib/products';
import SearchInput from '@/components/ui/SearchInput';

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
      (p.product_description || '').toLowerCase().includes(q) ||
      p.categories.some((c) => c.name.toLowerCase().includes(q)) ||
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
    <div className={`absolute top-full left-0 w-full bg-[hsl(var(--background))] border-t border-[hsl(var(--border))] shadow-xl px-6 py-8 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
        isOpen 
          ? 'translate-y-0 opacity-100 visible' 
          : (isHidden ? 'hidden' : '-translate-y-10 opacity-0 invisible pointer-events-none')
      }`}>
        <div className="w-full max-w-4xl mx-auto flex items-center gap-4">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            onSubmit={handleSearch}
            onClear={() => setSearchQuery('')}
            placeholder="PRODUTO, COLEÇÃO, PÁGINA..."
            variant="overlay"
            inputRef={searchInputRef}
          />
        </div>
    </div>
  );
}
