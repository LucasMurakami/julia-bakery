import { useState, useEffect } from 'react';
import SearchOverlay from './SearchOverlay';
import SideMenu from './SideMenu';
import ThemeToggle from './ThemeToggle';

type NavProps = {
  forceOpaque?: boolean;
};

export default function Nav({ forceOpaque = false }: NavProps) {
  const [isScrolled, setIsScrolled] = useState(forceOpaque);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [isSearchActive, setIsSearchActive] = useState(false);
  
  const [isSearchBgVisible, setIsSearchBgVisible] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (isSearchActive) {
        setIsSearchBgVisible(true);
        timeoutId = setTimeout(() => setIsSearchOpen(true), 100);
    } else {
        setIsSearchOpen(false);
        timeoutId = setTimeout(() => setIsSearchBgVisible(false), 500);
    }

    return () => clearTimeout(timeoutId);
  }, [isSearchActive]);

  useEffect(() => {
    if (forceOpaque) return;
    
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.9;
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [forceOpaque]);

  const links = [
    { href: '/cookies', label: 'Biscoitos' },
    { href: '/cakes', label: 'Bolos' },
    { href: '/about', label: 'Sobre' },
    { href: '/contact', label: 'Contato' },
  ];

  const handleSearchToggle = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(true);
    setIsSearchActive(false);
    setIsSearchOpen(false);
    setIsSearchBgVisible(false);
  };

  return (
    <>
      <header className={`fixed left-0 right-0 top-0 z-50 w-full ease-in-out ${
        isMenuOpen ? 'transition-none' : 'transition-all duration-500'
      } ${
        (isScrolled || forceOpaque || isSearchBgVisible) ? 'bg-[hsl(var(--background))]/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <SearchOverlay 
          isOpen={isSearchOpen} 
          isHidden={isMenuOpen} 
          onClose={() => setIsSearchActive(false)} 
        />

        <nav className="relative z-[60] flex items-center justify-between gap-6 px-6 py-5 md:px-10 lg:px-16">
          <a href="/" className={`text-xl font-bold uppercase tracking-wide md:text-2xl transition-colors duration-300 ${
             isScrolled || forceOpaque || isSearchBgVisible ? 'text-[hsl(var(--foreground))]' : 'text-white'
          }`}>
            Pinckmax
          </a>
          
          <ul className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-sm font-medium uppercase tracking-wider lg:flex transition-colors duration-300 ${
            isScrolled || forceOpaque || isSearchBgVisible ? 'text-[hsl(var(--foreground))]' : 'text-white/95'
          }`}>
            {links.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className={`transition-colors duration-300 ${isScrolled || forceOpaque || isSearchBgVisible ? 'hover:text-[hsl(var(--accent))]' : 'hover:text-white'}`}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className={`ml-auto flex items-center gap-5 transition-colors duration-300 ${
            isScrolled || forceOpaque || isSearchBgVisible ? 'text-[hsl(var(--foreground))]' : 'text-white'
          }`}>
             <div>
              <ThemeToggle />
             </div>
            <a href="#cart" className="hover:opacity-80 transition-opacity" aria-label="Sacola">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </a>
            <button 
                type="button" 
                onClick={handleSearchToggle}
                className="hover:opacity-80 transition-opacity" 
                aria-label={isSearchActive ? "Fechar busca" : "Buscar"}
            >
                {isSearchActive ? (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )}
            </button>
            <button 
              type="button" 
              className="lg:hidden p-2 -mr-2 z-[70] hover:opacity-80 transition-opacity focus:outline-none" 
              aria-label="Abrir menu"
              onClick={handleMenuToggle}
            >
              <div className="flex h-5 w-8 flex-col justify-between">
                  <span className="h-0.5 w-full bg-current" />
                  <span className="h-0.5 w-full bg-current" />
                  <span className="h-0.5 w-full bg-current" />
              </div>
            </button>
          </div>
        </nav>
      </header>

      <SideMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        links={links} 
      />
    </>
  );
}