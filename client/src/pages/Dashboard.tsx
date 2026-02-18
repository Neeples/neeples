import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useContent } from '@/contexts/ContentContext';
import { useAuth } from '@/_core/hooks/useAuth';
import { Settings, Music, Calendar, Image as ImageIcon, Mail, Save, ArrowLeft, Loader2 } from 'lucide-react';
import { Link } from 'wouter';
import { toast } from 'sonner';
import { trpc } from '@/lib/trpc';

export default function Dashboard() {
  const { language, setLanguage, t, content, isLoading } = useContent();
  const { user, loading: authLoading } = useAuth();
  const [isSaving, setIsSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    'hero.subtitle': content['hero.subtitle'] || '',
    'hero.tagline': content['hero.tagline'] || '',
    'about.title': content['about.title'] || '',
    'about.description': content['about.description'] || '',
  });

  const updateMutation = trpc.content.update.useMutation();

  const handleChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      for (const [key, value] of Object.entries(formData)) {
        await updateMutation.mutateAsync({
          language,
          key,
          value: value as string,
        });
      }
      toast.success('Conteúdo publicado com sucesso!');
    } catch (error) {
      toast.error('Erro ao publicar conteúdo.');
    } finally {
      setIsSaving(false);
    }
  };

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || user.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground mb-4">Você não tem permissão para acessar o Dashboard.</p>
            <Link href="/" className="text-primary hover:underline">Voltar ao site</Link>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-border pb-4 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft size={20} />
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-tighter">NEEPLES DASHBOARD</h1>
            </div>
            <p className="text-muted-foreground">Gerencie e publique o conteúdo do seu site</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex bg-muted p-1 rounded-md">
              <Button 
                variant={language === 'pt-BR' ? 'default' : 'ghost'} 
                size="sm"
                onClick={() => setLanguage('pt-BR')}
                className="h-8"
              >
                PT
              </Button>
              <Button 
                variant={language === 'en' ? 'default' : 'ghost'} 
                size="sm"
                onClick={() => setLanguage('en')}
                className="h-8"
              >
                EN
              </Button>
            </div>
            <Button onClick={handleSave} disabled={isSaving} className="gap-2">
              {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save size={18} />} 
              Publicar
            </Button>
          </div>
        </header>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="flex flex-wrap bg-muted/50 p-1 h-auto gap-1">
            <TabsTrigger value="general" className="flex-1 min-w-[100px]">
              <Settings className="w-4 h-4 mr-2" /> Geral
            </TabsTrigger>
            <TabsTrigger value="music" className="flex-1 min-w-[100px]">
              <Music className="w-4 h-4 mr-2" /> Música
            </TabsTrigger>
            <TabsTrigger value="shows" className="flex-1 min-w-[100px]">
              <Calendar className="w-4 h-4 mr-2" /> Shows
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex-1 min-w-[100px]">
              <ImageIcon className="w-4 h-4 mr-2" /> Galeria
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex-1 min-w-[100px]">
              <Mail className="w-4 h-4 mr-2" /> Contato
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4">
            <Card className="border-border bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Hero & Cabeçalho</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="hero-subtitle">Subtítulo (Hero)</Label>
                  <Input 
                    id="hero-subtitle" 
                    value={formData['hero.subtitle']} 
                    onChange={(e) => handleChange('hero.subtitle', e.target.value)}
                    className="bg-background/50" 
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="hero-tagline">Tagline</Label>
                  <Input 
                    id="hero-tagline" 
                    value={formData['hero.tagline']} 
                    onChange={(e) => handleChange('hero.tagline', e.target.value)}
                    className="bg-background/50" 
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Sobre a Banda</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="about-title">Título da Seção</Label>
                  <Input 
                    id="about-title" 
                    value={formData['about.title']} 
                    onChange={(e) => handleChange('about.title', e.target.value)}
                    className="bg-background/50" 
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="about-description">Descrição</Label>
                  <Input 
                    id="about-description" 
                    value={formData['about.description']} 
                    onChange={(e) => handleChange('about.description', e.target.value)}
                    className="bg-background/50" 
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="music">
            <Card className="border-border bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Gerenciar Músicas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 italic">Funcionalidade de upload e integração com Spotify em desenvolvimento.</p>
                <div className="p-8 border-2 border-dashed border-border rounded-lg text-center">
                  <Music className="w-12 h-12 mx-auto mb-4 text-muted-foreground opacity-20" />
                  <Button variant="outline">Adicionar Nova Faixa</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shows">
            <Card className="border-border bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Agenda de Shows</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 italic">Gerenciamento de datas e locais em breve.</p>
                <div className="p-8 border-2 border-dashed border-border rounded-lg text-center">
                  <Calendar className="w-12 h-12 mx-auto mb-4 text-muted-foreground opacity-20" />
                  <Button variant="outline">Adicionar Show</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
