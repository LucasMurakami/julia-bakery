interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClear: () => void;
  placeholder?: string;
  /** 'sidebar' = compact with embedded icon; 'overlay' = pill with external button */
  variant?: 'sidebar' | 'overlay';
  inputRef?: React.RefObject<HTMLInputElement | null>;
}

export default function SearchInput({
  value,
  onChange,
  onSubmit,
  onClear,
  placeholder = 'Buscar...',
  variant = 'sidebar',
  inputRef,
}: SearchInputProps) {
  if (variant === 'overlay') {
    return (
      <form onSubmit={onSubmit} className="flex-1 flex items-center gap-2">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-full bg-[hsl(var(--accent))] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white placeholder:text-white/70 outline-none transition-all focus:ring-2 focus:ring-[hsl(var(--accent))] focus:ring-offset-2"
        />
        <button
          type="submit"
          className="rounded-full bg-neutral-900 dark:bg-neutral-100 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white dark:text-neutral-900 transition-all hover:bg-neutral-800 dark:hover:bg-neutral-200"
        >
          Buscar
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--muted))] px-4 py-2.5 pr-10 text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition"
      />
      {value ? (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
          aria-label="Limpar busca"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      ) : (
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
          aria-label="Buscar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      )}
    </form>
  );
}
