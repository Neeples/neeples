import { useLanguage } from '@/contexts/LanguageContext';
import { Music as MusicIcon } from 'lucide-react';

export default function Music() {
  const { t } = useLanguage();
  
  return (
    <section 
      id="music"
      className="relative py-24 md:py-32 bg-background burnt-texture"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex flex-col items-center justify-center mb-4">
            <MusicIcon className="text-accent mb-4" size={40} />
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter glitch" data-text={t('music.title')}>
              {t('music.title')}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('music.description')}
          </p>
        </div>
        
        {/* Spotify Player - Full Width */}
        <div className="max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-accent uppercase tracking-wider mb-8 text-center">
            {t('music.spotify')}
          </h3>
          <div className="bg-card border border-border p-6 rounded-sm fire-glow">
            <iframe
              title="Spotify Player"
              style={{
                borderRadius: '12px',
              }}
              src="https://open.spotify.com/embed/artist/7qLuuFTabXeOYIPdeWjAWe?utm_source=generator"
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
          
          {/* Streaming Platform Buttons */}
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <a
              href="https://open.spotify.com/artist/7qLuuFTabXeOYIPdeWjAWe"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 font-bold uppercase tracking-wider text-sm"
            >
              Spotify
            </a>
            <a
              href="https://music.youtube.com/channel/UCDlLkwAxdHBlGmWEDiKEYFA"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 font-bold uppercase tracking-wider text-sm"
            >
              YouTube Music
            </a>
            <a
              href="https://neeples.bandcamp.com/album/the-world-is-endind-and-this-frog-knows-it"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 font-bold uppercase tracking-wider text-sm"
            >
              Bandcamp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
