import { useContent } from "@/contexts/ContentContext";
import { Loader2 } from "lucide-react";

export default function Home() {
  const { t, isLoading } = useContent();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">{t("hero.subtitle")}</h1>
        <p className="text-xl text-muted-foreground mb-8">{t("hero.tagline")}</p>
        <p className="text-lg mb-4">{t("about.title")}</p>
        <p className="text-muted-foreground">{t("about.description")}</p>
      </main>
    </div>
  );
}
