import { useState, useEffect } from 'react';

type NavProps = {
  forceOpaque?: boolean;
};

export default function Nav({ forceOpaque = false }: NavProps) {
  const [isScrolled, setIsScrolled] = useState(forceOpaque);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // If forceOpaque is true, we don't need the scroll listener
  useEffect(() => {
    if (forceOpaque) return;
    
    const handleScroll = () => {
      // Toggle logic based on viewport height (Hero section is usually 100vh)
      // Switching at 90% of viewport height to start transition before fully exiting hero
      const threshold = window.innerHeight * 0.9;
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to set initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#cookies', label: 'Biscoitos' },
    { href: '/cakes', label: 'Bolos' },
    { href: '#about', label: 'Sobre' },
    { href: '#wholesale', label: 'Atacado' },
    { href: '#contact', label: 'Contato' },
  ];

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 w-full transition-all duration-500 ease-in-out ${
      isMenuOpen ? 'h-screen bg-white' : ((isScrolled || forceOpaque) ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent')
    }`}>
      <nav className="relative z-[60] flex items-center justify-between gap-6 px-6 py-5 md:px-10 lg:px-16">
        <a href="/" className={`text-xl font-bold uppercase tracking-wide md:text-2xl transition-colors duration-300 ${
          isMenuOpen || isScrolled || forceOpaque ? 'text-black' : 'text-white'
        }`}>
          Pinckmax
        </a>

        <ul className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-sm font-medium uppercase tracking-wider lg:flex transition-colors duration-300 ${
          isMenuOpen || isScrolled || forceOpaque ? 'text-neutral-800' : 'text-white/95'
        }`}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={`transition-colors duration-300 ${isMenuOpen || isScrolled || forceOpaque ? 'hover:text-black' : 'hover:text-white'}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className={`ml-auto flex items-center gap-5 transition-colors duration-300 ${
          isMenuOpen || isScrolled || forceOpaque ? 'text-neutral-900' : 'text-white'
        }`}>
          <a href="#cart" className="hover:opacity-80 transition-opacity" aria-label="Sacola">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </a>
          <a href="#search" className="hover:opacity-80 transition-opacity" aria-label="Buscar">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </a>
          <button 
            type="button" 
            className="lg:hidden p-2 -mr-2 z-[70] hover:opacity-80 transition-opacity focus:outline-none" 
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="flex h-5 w-8 flex-col justify-between">
                <span className={`h-0.5 w-full bg-current transition-all duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] ${isMenuOpen ? 'translate-y-[9px] rotate-45' : ''}`} />
                <span className={`h-0.5 w-full bg-current transition-all duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] ${isMenuOpen ? 'scale-0 opacity-0' : ''}`} />
                <span className={`h-0.5 w-full bg-current transition-all duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] ${isMenuOpen ? '-translate-y-[9px] -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`absolute inset-0 top-0 z-40 bg-white pt-24 transition-all duration-500 lg:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center gap-10 p-6">
          <ul className="flex flex-col items-center gap-8 text-3xl font-bold uppercase tracking-[0.2em] text-neutral-900">
            {links.map(({ href, label }, i) => (
              <li 
                key={label}
                className={`transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: isMenuOpen ? `${100 + (i * 100)}ms` : '0ms' }}
              >
                <a href={href} onClick={() => setIsMenuOpen(false)} className="hover:text-[hsl(var(--accent))] transition-colors duration-300">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}