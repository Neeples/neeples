import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram } from 'lucide-react';

export default function Gallery() {
  const { t } = useLanguage();
  
  return (
    <section 
      id="gallery"
      className="relative py-24 md:py-32 bg-card"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex flex-col items-center justify-center mb-4">
            <Instagram className="text-accent mb-4" size={40} />
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter glitch" data-text={t('gallery.instagram')}>
              {t('gallery.instagram')}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('gallery.description')}
          </p>
        </div>
        
        {/* Instagram Feed - Elfsight */}
        <div className="w-full flex justify-center">
          <script src="https://elfsightcdn.com/platform.js" async></script>
          <div className="elfsight-app-7d91a8a4-d383-489b-857e-256399b5e4f0" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
}
