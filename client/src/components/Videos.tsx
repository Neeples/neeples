import { useLanguage } from '@/contexts/LanguageContext';
import { Film } from 'lucide-react';

export default function Videos() {
  const { t } = useLanguage();
  
  const videos = [
    {
      id: 'highlight',
      title: 'New video – She May Own Me',
      titlePt: 'Novo vídeo – She May Own Me',
      youtubeId: '5rvb63CXq6s',
      featured: true,
    },
    {
      id: 'spells',
      title: 'Spells',
      youtubeId: 'KJQ3_xVTyY4',
      featured: false,
      awards: [
        {
          name: '15ª Mostra Curta de Campinas',
          link: 'https://www.mostracurta.art.br/selecionados/videoclipes/neeples-spells',
          image: '/mostra-laurel.png',
        },
        {
          name: 'Chroma Awards - Honourable Mention',
          link: 'https://www.ChromaAwards.com',
          image: '/chroma-laurel.png',
        },
      ],
    },
  ];
  
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
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter glitch" data-text={t('videos.title')}>
              {t('videos.title')}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('videos.subtitle')}
          </p>
        </div>
        
        {/* Videos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Featured Video */}
          <div className="lg:col-span-2">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Video Container - Left Side */}
              <div className="flex-1">
                <div className="relative w-full bg-card border border-border p-4 rounded-sm fire-glow">
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${videos[0].youtubeId}`}
                      title={videos[0].title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div className="mt-6 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-accent uppercase tracking-wider">
                    {videos[0].title}
                  </h3>
                </div>
              </div>
              
              {/* Spells Video - Right Side */}
              <div className="flex-1">
                <div className="relative w-full bg-card border border-border p-4 rounded-sm fire-glow">
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${videos[1].youtubeId}`}
                      title={videos[1].title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                
                {/* Exhibitions and Mentions */}
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-accent uppercase tracking-wider mb-4">
                    {t('videos.exhibitions')}
                  </h3>
                  <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                    {t('videos.spellsDescription')}
                  </p>
                  
                  {/* Awards/Laurels */}
                  {videos[1].awards && videos[1].awards.length > 0 && (
                    <div className="flex gap-6 flex-wrap justify-center lg:justify-start">
                      {videos[1].awards.map((award) => (
                        <a
                          key={award.name}
                          href={award.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-80 transition-opacity"
                          title={award.name}
                        >
                          <img
                            src={award.image}
                            alt={award.name}
                            className={award.name.includes('Chroma') ? 'h-28 w-auto' : 'h-24 w-auto'}
                          />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
