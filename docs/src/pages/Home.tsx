import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Music from '@/components/Music';
import Shows from '@/components/Shows';
import Videos from '@/components/Videos';

/**
 * Industrial Apocalypse Design System
 * - Dark background (#0a0a0a) with orange/red accents
 * - Glitch effects on titles (Rubik Glitch font)
 * - Glow effects on interactive elements
 * - Diagonal cuts between sections
 * - Brutal, honest aesthetic reflecting Stoner Rock identity
 * - Fonts: Rubik Glitch (titles) + Google Sans (body)
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Music />
        <Shows />
        <Videos />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
