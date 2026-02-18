import { useLanguage } from '@/contexts/LanguageContext';
import { Users } from 'lucide-react';

const BAND_PHOTO_URL = 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028700343/rEogDOCPxiYcczXQ.png';

const aboutTexts = {
  en: `Formed in 2016 by Leonardo Freitas (guitar), Gabriel Ribeiro (bass), and Nicolas Andrade (drums), Neeples emerged the way many good bands do: from the urge to play, have fun, and make noise among friends. Influenced by heavy sounds like Black Sabbath, they began composing and rehearsing, shaping a raw, dense identity with no commitment to formulas.

In the early years, the band went through changes in vocalists and periods of pause. The project was suspended for some time, especially during the pandemic — but never truly abandoned. In 2024, with greater maturity (and the same desire to make music together), Neeples resumed activities, now with Rodrigo Vicentin on vocals — a longtime friend of Nicolas and the missing piece needed to continue what had always come naturally between them: creating.

Their return was marked by the single "Spells" — a track that, without trying to be a spokesperson for anything, ends up saying a lot. A heavy, ambiguous lyric filled with doubt and collapse. A perfect portrait of what it means to (re)begin with honesty.

Today, Neeples remains a space for free expression, where fun and heaviness coexist. The band does not aim for fame or the market, but for the desire to share their music and their essence.`,
  'pt-BR': `Formada em 2016 por Leonardo Freitas (guitarra), Gabriel Ribeiro (baixo) e Nicolas Andrade (bateria), Neeples surgiu da forma como muitas boas bandas surgem: do desejo de tocar, se divertir e fazer barulho entre amigos. Influenciados por sons pesados como Black Sabbath, começaram a compor e ensaiar, moldando uma identidade bruta e densa, sem compromisso com fórmulas.

Nos primeiros anos, a banda passou por mudanças de vocalistas e períodos de pausa. O projeto foi suspenso por um tempo, especialmente durante a pandemia — mas nunca foi verdadeiramente abandonado. Em 2024, com maior maturidade (e o mesmo desejo de fazer música juntos), Neeples retomou as atividades, agora com Rodrigo Vicentin nos vocais — um amigo de longa data de Nicolas e a peça que faltava para continuar o que sempre fluiu naturalmente entre eles: criar.

Seu retorno foi marcado pelo single "Spells" — uma faixa que, sem tentar ser porta-voz de nada, acaba dizendo muito. Uma letra pesada e ambígua repleta de dúvida e colapso. Um retrato perfeito do que significa (re)começar com honestidade.

Hoje, Neeples permanece como um espaço de livre expressão, onde diversão e peso coexistem. A banda não busca fama ou mercado, mas o desejo de compartilhar sua música e sua essência.`
};

export default function About() {
  const { t, language } = useLanguage();
  const aboutText = aboutTexts[language as keyof typeof aboutTexts] || aboutTexts.en;
  
  return (
    <section 
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${BAND_PHOTO_URL}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex flex-col items-center justify-center mb-4">
            <Users className="text-accent mb-4" size={40} />
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-foreground glitch" data-text={t('about.title')}>
              {t('about.title')}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.description')}
          </p>
        </div>
        
        {/* Content Box */}
        <div className="max-w-3xl mx-auto bg-background/90 backdrop-blur border border-border p-8 md:p-12 space-y-6">
          {/* Text Content */}
          <div className="space-y-4 text-foreground leading-relaxed">
            {aboutText.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-base md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Band Info */}
          <div className="pt-6 border-t border-border space-y-4">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">
                {language === 'pt-BR' ? 'Origem' : 'Hometown'}
              </p>
              <p className="text-lg text-accent font-bold">Campinas, Brasil</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">
                {language === 'pt-BR' ? 'Gêneros' : 'Genres'}
              </p>
              <p className="text-lg text-accent font-bold">Rock, Stoner Rock</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
