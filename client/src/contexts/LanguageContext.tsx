import { createContext, useState, useContext } from 'react';

type Language = 'pt-BR' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  'pt-BR': {
    'nav.home': 'INÍCIO',
    'nav.music': 'MÚSICA',
    'nav.shows': 'SHOWS',
    'nav.gallery': 'GALERIA',
    'nav.about': 'SOBRE',
    'nav.contact': 'CONTATO',
    'hero.label': 'NOVO EP',
    'hero.title': 'O Mundo Está Acabando E Este Sapo Sabe!',
    'hero.cta': 'OUÇA AGORA',
    'music.title': 'Ouça Agora',
    'music.description': 'Últimas músicas e álbuns',
    'music.spotify': 'OUÇA NO SPOTIFY',
    'music.platforms': 'SPOTIFY|YOUTUBE MUSIC|BANDCAMP',
    'shows.title': 'Shows',
    'shows.description': 'Próximas apresentações',
    'shows.viewAll': 'Ver todos os shows',
    'gallery.title': 'Vídeos',
    'gallery.description': 'Últimos clipes musicais',
    'gallery.instagram': 'Instagram',
    'gallery.instagramDesc': 'Fotos, vídeos e arte',
    'about.title': 'Sobre',
    'about.description': 'Conheça a banda',
    'about.hometown': 'Campinas, Brasil',
    'about.genres': 'Rock, Stoner Rock',
    'contact.title': 'Contato',
    'contact.description': 'Entre em contato conosco',
    'footer.copyright': '© 2026 Neeples. Todos os direitos reservados.',
    'footer.madeWith': 'Feito com 🔥 por Neeples',
    'footer.allRights': '© 2026 Neeples. Todos os direitos reservados.',
    'merch.title': 'Loja',
    'merch.description': 'Em breve',
    'merch.comingSoon': 'Em Breve',
    'gallery.latestClip': 'Último Clipe',
    'gallery.videos': 'Vídeos',
  },
  'en': {
    'nav.home': 'HOME',
    'nav.music': 'MUSIC',
    'nav.shows': 'SHOWS',
    'nav.gallery': 'GALLERY',
    'nav.about': 'ABOUT',
    'nav.contact': 'CONTACT',
    'hero.label': 'NEW EP',
    'hero.title': 'The World Is Ending And This Frog Knows It!',
    'hero.cta': 'LISTEN NOW',
    'music.title': 'Listen Now',
    'music.description': 'Latest music and albums',
    'music.spotify': 'LISTEN ON SPOTIFY',
    'music.platforms': 'SPOTIFY|YOUTUBE MUSIC|BANDCAMP',
    'shows.title': 'Shows',
    'shows.description': 'Upcoming performances',
    'shows.viewAll': 'View all shows',
    'gallery.title': 'Videos',
    'gallery.description': 'Latest music videos',
    'gallery.instagram': 'Instagram',
    'gallery.instagramDesc': 'Photos, videos and art',
    'about.title': 'About',
    'about.description': 'Get to know the band',
    'about.hometown': 'Campinas, Brasil',
    'about.genres': 'Rock, Stoner Rock',
    'contact.title': 'Contact',
    'contact.description': 'Get in touch with us',
    'footer.copyright': '© 2026 Neeples. All rights reserved.',
    'footer.madeWith': 'Made with 🔥 by Neeples',
    'footer.allRights': '© 2026 Neeples. All rights reserved.',
    'merch.title': 'Merchandise',
    'merch.description': 'Coming soon',
    'merch.comingSoon': 'Coming Soon',
    'gallery.latestClip': 'Latest Clip',
    'gallery.videos': 'Videos',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = (key: string): string => {
    return (translations as any)[language]?.[key] ?? key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
