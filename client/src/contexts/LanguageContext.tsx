import React, { createContext, useContext, useState } from 'react';

type Language = 'pt-BR' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  'pt-BR': {
    'nav.home': 'Início',
    'nav.music': 'Música',
    'nav.shows': 'Shows',
    'nav.gallery': 'Galeria',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    'hero.subtitle': 'Desde 2016 | Campinas, Brasil',
    'hero.tagline': 'Pesado. Honesto. Sem fórmulas. Apenas criação.',
    'music.title': 'Ouça Agora',
    'music.description': 'Últimas músicas e álbuns',
    'music.spotify': 'Ouça no Spotify',
    'shows.title': 'Shows',
    'shows.description': 'Próximas apresentações',
    'shows.noShows': 'Nenhum show agendado no momento',
    'shows.viewAll': 'Ver todos os shows',
    'gallery.title': 'Galeria',
    'gallery.description': 'Fotos, vídeos e arte',
    'gallery.videos': 'Vídeos',
    'gallery.latestClip': 'Últimos videoclipes',
    'gallery.instagram': 'Instagram',
    'about.title': 'Sobre',
    'about.description': 'Conheça a banda',
    'about.hometown': 'Campinas, Brasil',
    'about.genres': 'Rock, Stoner Rock',
    'contact.title': 'Contato',
    'contact.description': 'Entre em contato conosco',
    'contact.email': 'Email',
    'contact.booking': 'Booking',
    'contact.social': 'Redes Sociais',
    'footer.followUs': 'Nos siga',
    'footer.allRights': 'Todos os direitos reservados',
  },
  'en': {
    'nav.home': 'Home',
    'nav.music': 'Music',
    'nav.shows': 'Shows',
    'nav.gallery': 'Gallery',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.subtitle': 'Since 2016 | Campinas, Brazil',
    'hero.tagline': 'Heavy. Honest. No formulas. Just creation.',
    'music.title': 'Listen Now',
    'music.description': 'Latest music and albums',
    'music.spotify': 'Listen on Spotify',
    'shows.title': 'Shows',
    'shows.description': 'Upcoming performances',
    'shows.noShows': 'No shows scheduled at the moment',
    'shows.viewAll': 'View all shows',
    'gallery.title': 'Gallery',
    'gallery.description': 'Photos, videos and art',
    'gallery.videos': 'Videos',
    'gallery.latestClip': 'Latest music videos',
    'gallery.instagram': 'Instagram',
    'about.title': 'About',
    'about.description': 'Get to know the band',
    'about.hometown': 'Campinas, Brazil',
    'about.genres': 'Rock, Stoner Rock',
    'contact.title': 'Contact',
    'contact.description': 'Get in touch with us',
    'contact.email': 'Email',
    'contact.booking': 'Booking',
    'contact.social': 'Social Media',
    'footer.followUs': 'Follow us',
    'footer.allRights': 'All rights reserved',
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
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
