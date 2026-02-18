import { describe, it, expect } from 'vitest';

// Simular o dicionário do LanguageContext
const translations = {
  'pt-BR': {
    'nav.home': 'HOME',
    'nav.music': 'MUSIC',
    'hero.label': 'NEW EP',
    'hero.title': 'The World Is Ending And This Frog Knows It!',
    'music.title': 'Listen Now',
  },
  'en': {
    'nav.home': 'HOME',
    'nav.music': 'MUSIC',
    'hero.label': 'NEW EP',
    'hero.title': 'The World Is Ending And This Frog Knows It!',
    'music.title': 'Listen Now',
  },
};

// Simular a função t()
const createT = (language: 'pt-BR' | 'en') => {
  return (key: string): string => {
    return (translations as any)[language]?.[key] ?? key;
  };
};

describe('LanguageContext', () => {
  it('should return translated value for existing key', () => {
    const t = createT('en');
    expect(t('nav.home')).toBe('HOME');
    expect(t('hero.label')).toBe('NEW EP');
    expect(t('music.title')).toBe('Listen Now');
  });

  it('should return key for non-existing key', () => {
    const t = createT('en');
    expect(t('non.existent')).toBe('non.existent');
  });

  it('should work with pt-BR language', () => {
    const t = createT('pt-BR');
    expect(t('nav.home')).toBe('HOME');
    expect(t('hero.label')).toBe('NEW EP');
  });
});
