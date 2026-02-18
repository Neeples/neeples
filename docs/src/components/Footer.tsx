import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Neeples. {t('footer.allRights')}.
            </p>
          </div>
          

          
          {/* Right */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Made with 🔥 by Neeples
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
