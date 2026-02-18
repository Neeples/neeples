import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const LOGO_URL = 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028700343/nGIirnuVPFagSene.png';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.music', href: '#music' },
    { key: 'nav.shows', href: '#shows' },
    { key: 'nav.videos', href: '#videos' },
    { key: 'nav.gallery', href: '#gallery' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.contact', href: '#contact' },
  ];
  
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
          <img 
            src={LOGO_URL} 
            alt="Neeples" 
            className="h-12 w-auto"
          />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="text-sm font-semibold uppercase tracking-wider text-foreground hover:text-accent transition-colors duration-300 glow-hover"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>
        
        {/* Language Switcher & Mobile Menu */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button
              onClick={() => setLanguage('pt-BR')}
              className={`px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                language === 'pt-BR'
                  ? 'text-accent glow'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              PT
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                language === 'en'
                  ? 'text-accent glow'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-card border-t border-border">
          <div className="container py-4 flex flex-col gap-4 items-center text-center">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-sm font-semibold uppercase tracking-wider text-foreground hover:text-accent transition-colors duration-300"
              >
                {t(item.key)}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
