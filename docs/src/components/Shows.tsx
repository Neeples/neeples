import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, ExternalLink, MapPin, Clock } from 'lucide-react';

interface ShowEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  country: string;
  url: string;
}

export default function Shows() {
  const { t, language } = useLanguage();
  
  const bandsinTownUrl = 'https://www.bandsintown.com/a/14005772-neeples?came_from=210&utm_medium=web&utm_source=artist_event_page&utm_campaign=artist';
  
  // Shows data from BandsInTown
  const shows: ShowEvent[] = [
    {
      id: 1,
      title: language === 'pt-BR' ? 'Neeples & Sapolândia' : 'Neeples & Sapolândia',
      date: 'Feb 21, 2026',
      time: 'TBA',
      venue: 'Indaiatuba',
      city: 'Indaiatuba',
      country: 'Brazil',
      url: 'https://www.bandsintown.com/a/14005772-neeples'
    }
  ];
  
  return (
    <section 
      id="shows"
      className="relative py-24 md:py-32 bg-card"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex flex-col items-center justify-center mb-4">
            <Calendar className="text-accent mb-4" size={40} />
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter glitch" data-text={t('shows.title')}>
              {t('shows.title')}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('shows.description')}
          </p>
        </div>
        
        {/* Events List */}
        {shows.length > 0 ? (
          <div className="max-w-3xl mx-auto space-y-4 mb-12">
            {shows.map((show) => (
              <a
                key={show.id}
                href={show.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-background border border-border rounded-sm hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-accent mb-3 group-hover:text-primary transition-colors">
                      {show.title}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-foreground">
                        <Calendar size={18} className="text-accent" />
                        <span>{show.date}</span>
                        {show.time !== 'TBA' && (
                          <>
                            <Clock size={18} className="text-accent ml-4" />
                            <span>{show.time}</span>
                          </>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin size={18} className="text-accent" />
                        <span>{show.venue}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {show.city}, {show.country}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-accent group-hover:text-primary transition-colors">
                    <span className="text-sm font-semibold uppercase">
                      {language === 'pt-BR' ? 'Saiba mais' : 'Learn more'}
                    </span>
                    <ExternalLink size={20} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : null}
        
        {/* BandsInTown Link Button */}
        <div className="max-w-2xl mx-auto flex justify-center">
          <a
            href={bandsinTownUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-bold text-lg rounded-sm hover:bg-accent/90 transition-all duration-300 border-2 border-accent hover:shadow-lg hover:shadow-accent/50"
          >
            <Calendar size={24} />
            {t('shows.viewAll')}
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
