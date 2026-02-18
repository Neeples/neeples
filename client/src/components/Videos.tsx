import { useLanguage } from '@/contexts/LanguageContext';
import { Film } from 'lucide-react';

export default function Videos() {
  const { t } = useLanguage();
  
  return (
    <section 
      id="videos"
      className="relative py-24 md:py-32 bg-background burnt-texture"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex flex-col items-center justify-center mb-4">
            <Film className="text-accent mb-4" size={40} />
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter glitch" data-text={t('gallery.videos')}>
              {t('gallery.videos')}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('gallery.latestClip')}
          </p>
        </div>
        
        {/* Video Player */}
        <div className="max-w-4xl mx-auto aspect-video bg-black rounded-sm overflow-hidden fire-glow">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/KJQ3_xVTyY4"
            title="Neeples - YouTube Videos"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
