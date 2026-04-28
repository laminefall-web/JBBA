import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Cabinet } from "@/components/cabinet";
import { SavoirFaire } from "@/components/savoir-faire";
import { Offre } from "@/components/offre";
import { Equipe } from "@/components/equipe";
import { Actualites } from "@/components/actualites";
import { Medias } from "@/components/medias";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { RevealProvider } from "@/components/reveal-provider";

export default function Home() {
  return (
    <RevealProvider>
      <Navigation />
      <main>
        <Hero />
        <Cabinet />
        <SavoirFaire />
        <Offre />
        <Equipe />
        <Actualites />
        <Medias />
        <Contact />
      </main>
      <Footer />
    </RevealProvider>
  );
}
