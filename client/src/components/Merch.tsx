import { useLanguage } from '@/contexts/LanguageContext';
import { ShoppingBag } from 'lucide-react';

export default function Merch() {
  const { t } = useLanguage();
  
  return (
    <section 
      id="merch"
      className="relative py-24 md:py-32 bg-background burnt-texture diagonal-cut"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShoppingBag className="text-accent" size={32} />
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
              {t('merch.title')}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('merch.description')}
          </p>
        </div>
        
        {/* Coming Soon */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-card border-2 border-accent/30 p-12 md:p-16 rounded-sm fire-glow">
            <p className="text-3xl md:text-4xl font-black text-accent mb-4">
              {t('merch.comingSoon')}
            </p>
            <p className="text-muted-foreground text-lg">
              Camisetas, discos, pôsteres e muito mais em breve!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
