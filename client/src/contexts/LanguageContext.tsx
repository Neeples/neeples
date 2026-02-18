import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

type Language = 'pt-BR' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  updateTranslation: (lang: Language, key: string, value: string) => void;
  saveTranslations: () => Promise<void>;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [dynamicTranslations, setDynamicTranslations] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.get('/api/translations');
        setDynamicTranslations(response.data);
      } catch (error) {
        console.error('Failed to fetch translations:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTranslations();
  }, []);

  const t = (key: string): string => {
    if (!dynamicTranslations) return key;
    return dynamicTranslations[language]?.[key] ?? key;
  };

  const updateTranslation = (lang: Language, key: string, value: string) => {
    setDynamicTranslations((prev: any) => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        [key]: value
      }
    }));
  };

  const saveTranslations = async () => {
    try {
      await axios.post('/api/translations', dynamicTranslations);
    } catch (error) {
      console.error('Failed to save translations:', error);
      throw error;
    }
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, updateTranslation, saveTranslations, isLoading }}>
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
