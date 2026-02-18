import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

const HEADER_IMAGE_URL = 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028700343/HEMwrgduhJCyjxPB.png';
const LOGO_URL = 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028700343/nGIirnuVPFagSene.png';

export default function Hero() {
  const { t, language } = useLanguage();
  
  const scrollToMusic = () => {
    const element = document.querySelector('#music');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  
  const newEpLabel = language === 'pt-BR' ? 'Novo EP' : 'New EP';
  const epTitleDisplay = 'The World Is Ending\nAnd This Frog Knows It!'
  
  return (
    <section 
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${HEADER_IMAGE_URL}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container flex flex-col items-center justify-center text-center gap-8 px-4">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src={LOGO_URL} 
            alt="Neeples" 
            className="h-48 md:h-56 w-auto hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* EP Featured Section */}
        <div className="space-y-6 max-w-3xl">
          {/* EP Label */}
          <p className="text-sm md:text-base text-accent/80 font-semibold tracking-widest uppercase">
            {t('hero.subtitle')}
          </p>
          
          {/* EP Title */}
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight glitch" data-text={t('hero.tagline')}>
            {t('hero.tagline')}
          </h2>
          

        </div>
        
        {/* CTA Button */}
        <button
          onClick={scrollToMusic}
          className="mt-8 px-8 py-3 border-2 border-accent text-accent font-bold uppercase tracking-widest hover:bg-accent hover:text-background transition-all duration-300 fire-glow"
        >
          {t('music.title')}
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown size={32} className="text-accent" />
      </div>
    </section>
  );
}
