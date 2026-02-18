import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, MessageSquare, Share2, Instagram, Music2, Youtube, Headphones } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/neeeeples',
      icon: Instagram,
    },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/artist/7qLuuFTabXeOYIPdeWjAWe',
      icon: Music2,
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@neeeeples',
      icon: Youtube,
    },
    {
      name: 'Bandcamp',
      url: 'https://neeples.bandcamp.com',
      icon: Headphones,
    },
  ];
  
  return (
    <section 
      id="contact"
      className="relative py-24 md:py-32 bg-card"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex flex-col items-center justify-center mb-4">
            <Mail className="text-accent mb-4" size={40} />
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter glitch" data-text={t('contact.title')}>
              {t('contact.title')}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>
        
        {/* Email Section */}
        <div className="max-w-2xl mx-auto mb-16 md:mb-24 text-center">
          <a
            href="mailto:contato@neeples.com.br"
            className="text-lg text-accent hover:text-primary transition-colors font-semibold"
          >
            contato@neeples.com.br
          </a>
        </div>
        
        {/* Social Links with Icons */}
        <div className="text-center">
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                  className="text-accent hover:text-primary hover:scale-125 transition-all"
                >
                  <IconComponent size={32} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
