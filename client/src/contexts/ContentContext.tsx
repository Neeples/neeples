import React, { createContext, useContext, useState, useEffect } from 'react';
import { trpc } from '@/lib/trpc';

type Language = 'pt-BR' | 'en';

interface ContentContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  content: Record<string, string>;
  isLoading: boolean;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [content, setContent] = useState<Record<string, string>>({});

  const { data, isLoading } = trpc.content.getByLanguage.useQuery({ language });

  useEffect(() => {
    if (data) {
      setContent(data);
    }
  }, [data]);

  const t = (key: string): string => {
    return content[key] ?? key;
  };

  return (
    <ContentContext.Provider value={{ language, setLanguage, t, content, isLoading }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within ContentProvider');
  }
  return context;
}
