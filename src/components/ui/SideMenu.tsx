
type Link = {
  href: string;
  label: string;
};

type SideMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  links: Link[];
};

export default function SideMenu({ isOpen, onClose, links }: SideMenuProps) {
  return (
    <div 
        className={`fixed inset-0 z-[100] transition-all duration-500 ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={onClose}
        />
        
        {/* Drawer Content */}
        <div 
          className={`absolute right-0 top-0 h-full w-full max-w-md bg-[hsl(var(--background))] shadow-2xl transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-full flex-col p-6 md:p-10">
            {/* Drawer Header */}
            <div className="flex items-center justify-between mb-12">
              <a href="/" onClick={onClose} className="text-xl font-bold uppercase tracking-wide md:text-2xl text-[hsl(var(--foreground))]">
                Pinckmax
              </a>
              <div className="flex items-center gap-4">
                <button 
                  onClick={onClose}
                  className="p-2 -mr-2 text-[hsl(var(--foreground))] hover:opacity-70 transition-opacity"
                  aria-label="Fechar menu"
                >
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Links */}
            <ul className="flex flex-col items-center gap-8 text-2xl font-bold uppercase tracking-[0.2em] text-[hsl(var(--foreground))] mt-10">
              {links.map(({ href, label }, i) => (
                <li 
                  key={label}
                  className={`transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: isOpen ? `${300 + (i * 100)}ms` : '0ms' }}
                >
                  <a 
                    href={href} 
                    onClick={onClose} 
                    className="hover:text-[hsl(var(--accent))]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  );
}
