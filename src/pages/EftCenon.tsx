import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Sparkles, Brain, Heart, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const EftCenon = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AGP – Méthodes douces & Neurofeedback",
    description:
      "EFT à Cenon : libération émotionnelle, gestion du stress et apaisement mental. Séances à Tresses, proche Cenon.",
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
    url: "https://programme-agp.fr/eft-cenon",
    areaServed: [
      { "@type": "City", name: "Cenon" },
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

  const reasons = [
    { icon: Zap, text: "Stress ou tension émotionnelle persistante" },
    { icon: Brain, text: "Anxiété, pensées qui tournent en boucle" },
    { icon: Shield, text: "Peurs, blocages ou perte de contrôle" },
    { icon: Heart, text: "Hypersensibilité ou réactivité émotionnelle" },
    { icon: Sparkles, text: "Envie de retrouver calme et clarté intérieure" },
  ];

  const results = [
    "Apaisement rapide du stress",
    "Libération émotionnelle",
    "Sensation de stabilité intérieure",
    "Retour d'un meilleur équilibre mental",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>EFT Cenon | Libération émotionnelle & apaisement du stress</title>
        <meta
          name="description"
          content="EFT à Cenon : une méthode douce pour réduire le stress, apaiser l'anxiété et libérer les émotions. Séances à Tresses, proche de Cenon."
        />
        <link rel="canonical" href="https://programme-agp.fr/eft-cenon" />
        <meta property="og:title" content="EFT Cenon | Libération émotionnelle & apaisement du stress" />
        <meta
          property="og:description"
          content="Découvrez l'EFT à Cenon : une méthode efficace pour calmer le mental, réduire le stress et retrouver un apaisement durable."
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
              <span className="text-sm font-medium">Cabinet à Tresses — proche de Cenon</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              EFT à Cenon — Une méthode douce pour apaiser vos émotions
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              L'EFT est une approche de libération émotionnelle reconnue pour réduire la charge mentale, calmer les
              pensées envahissantes et diminuer l'impact du stress sur le quotidien. Une méthode accessible, naturelle
              et efficace.
            </p>

            <img
              src="/images/agp-hero-2026-01-07.jpg"
              alt="Cabinet AGP EFT Cenon Bordeaux Floirac – méthodes douces et neurofeedback en Gironde"
              className="w-full rounded-xl shadow-lg mb-8"
            />
          </div>
        </section>

        {/* POURQUOI CONSULTER */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">🌿 Quand l'EFT peut-elle vous aider ?</h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Beaucoup de personnes venant de Cenon consultent pour retrouver de la stabilité émotionnelle. L'EFT aide
              le système nerveux à se réguler et permet d'apaiser ce qui pèse intérieurement.
            </p>

            <ul className="space-y-4 mb-8">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-center gap-3 text-lg text-muted-foreground">
                  <reason.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{reason.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* BIENFAITS */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">💡 Les bienfaits ressentis avec l'EFT</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Grâce à la stimulation douce de points énergétiques, l'EFT agit directement sur le stress, les émotions
              bloquées et les automatismes mentaux. C'est une méthode douce, respectueuse et adaptée à tous.
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
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              👉 En savoir plus sur l'accompagnement EFT-H
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              L'EFT fait partie de l'accompagnement EFT-H : une approche complète pour apaiser le mental, libérer les
              émotions et retrouver un véritable équilibre intérieur.
            </p>
            <Button asChild size="lg" className="hover:scale-105 transition-transform">
              <Link to="/hypnose-eft-h">Découvrir l'EFT-H</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EftCenon;
