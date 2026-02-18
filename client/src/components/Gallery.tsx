import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram } from 'lucide-react';

export default function Gallery() {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Load EmbedSocial script
    const script = document.createElement('script');
    script.src = 'https://embedsocial.com/cdn/ht.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);
  
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
        
        {/* Instagram Feed - EmbedSocial Hashtag */}
        <div className="w-full flex justify-center">
          <div className="embedsocial-hashtag" data-ref="b27de234d270a50f1d97d482b8b2a7928a8d30ca"></div>
        </div>
      </div>
    </section>
  );
}
