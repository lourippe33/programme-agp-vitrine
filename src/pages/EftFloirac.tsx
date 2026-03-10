import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Sparkles, Brain, Heart, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";

const EftFloirac = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AGP – Méthodes douces & Neurofeedback",
    description:
      "EFT à Floirac : libération émotionnelle, réduction du stress et apaisement mental. Séances proches de Floirac, au cabinet de Tresses.",
    image: "https://programme-agp.fr/og-agp-1200x630.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9 Galerie Marchande",
      addressLocality: "Tresses",
      postalCode: "33370",
      addressRegion: "Gironde",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.8637,
      longitude: -0.4837,
    },
    telephone: "+33 7 82 38 66 21",
    url: "https://programme-agp.fr/eft-floirac",
    areaServed: [
      { "@type": "City", name: "Floirac" },
      { "@type": "AdministrativeArea", name: "Bordeaux Métropole" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "EFT",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "EFT – Emotional Freedom Techniques" },
        },
      ],
    },
    priceRange: "€€",
  };

  const audiences = [
    { icon: Users, text: "Personnes sous forte pression émotionnelle" },
    { icon: Zap, text: "Adultes stressés ou tendus" },
    { icon: Heart, text: "Émotions instables ou hypersensibilité" },
    { icon: Brain, text: "Surcharge mentale ou rumination" },
  ];

  const results = [
    "Apaisement rapide",
    "Libération émotionnelle",
    "Stabilité intérieure ",
    "Clarté d’esprit retrouvée",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>EFT Floirac | Libération émotionnelle & apaisement du stress</title>
        <meta
          name="description"
          content="EFT à Floirac : méthode douce pour calmer le mental, libérer les émotions et réduire le stress. Séances à Tresses, proche Floirac."
        />
        <link rel="canonical" href="https://programme-agp.fr/eft-floirac" />
        <meta property="og:title" content="EFT Floirac | Libération émotionnelle & apaisement" />
        <meta
          property="og:description"
          content="Découvrez l’EFT à Floirac : une méthode efficace pour réduire le stress, libérer les émotions et retrouver plus de sérénité."
        />
        <meta property="og:image" content="https://programme-agp.fr/og-agp-1200x630.jpg" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* HERO */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-2 text-primary mb-4">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-medium">Cabinet à Tresses — proche de Floirac</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              EFT à Floirac — Une méthode douce pour retrouver votre équilibre émotionnel
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              L’EFT permet de relâcher rapidement les tensions internes, d’apaiser les émotions débordantes et de
              retrouver une sensation de stabilité mentale. Une approche douce, naturelle et accessible à tous.
            </p>

            <img
              src="/images/agp-hero-2026-01-07.jpg"
              alt="Cabinet AGP EFT Floirac Bordeaux Cenon – méthodes douces et neurofeedback en Gironde"
              className="w-full rounded-xl shadow-lg mb-8"
            />
          </div>
        </section>

        {/* POUR QUI */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
              🌿 Pour qui l’EFT est-elle particulièrement efficace ?
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              De nombreuses personnes venant de Floirac consultent pour retrouver du calme intérieur, sortir de la
              surcharge émotionnelle ou gérer des situations de stress récurrentes.
            </p>

            <ul className="space-y-4 mb-8">
              {audiences.map((audience, index) => (
                <li key={index} className="flex items-center gap-3 text-lg text-muted-foreground">
                  <audience.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{audience.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* RÉSULTATS */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
              💡 Les bienfaits ressentis après une séance d’EFT
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Grâce à une combinaison de stimulation douce et de mise en mots, l’EFT apporte souvent un soulagement
              immédiat et une meilleure compréhension de ses réactions émotionnelles.
            </p>

            <ul className="grid md:grid-cols-2 gap-4">
              {results.map((result, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-lg text-muted-foreground bg-card p-4 rounded-lg border border-border"
                >
                  <Sparkles className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">👉 Envie d’aller plus loin ?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              L’EFT fait partie de l’accompagnement EFT-H, une approche complète pour apaiser le mental et retrouver une
              vraie stabilité émotionnelle.
            </p>
            <Button asChild size="lg" className="hover:scale-105 transition-transform">
              <Link to="/hypnose-eft-h">Découvrir l’EFT-H</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EftFloirac;
