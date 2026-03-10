import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Sparkles, Brain, Heart, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const EftBordeaux = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AGP – Méthodes douces & Neurofeedback",
    description:
      "EFT à Bordeaux : libération émotionnelle, gestion du stress et apaisement des blocages. Séances sur mesure à Tresses, proche Bordeaux.",
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
    url: "https://programme-agp.fr/eft-bordeaux",
    areaServed: [
      { "@type": "City", name: "Bordeaux" },
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
    { icon: Zap, text: "Stress intense et charge mentale élevée" },
    { icon: Brain, text: "Ruminations qui tournent en boucle" },
    { icon: Heart, text: "Émotions envahissantes ou hypersensibilité" },
    { icon: Shield, text: "Peurs, blocages ou réactions disproportionnées" },
    { icon: Sparkles, text: "Besoin de retrouver calme et clarté intérieure" },
  ];

  const results = [
    "Libération émotionnelle",
    "Sensation de légèreté intérieure",
    "Apaisement rapide du stress",
    "Retour d'un sentiment de contrôle",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>EFT Bordeaux | Libération émotionnelle & gestion du stress</title>
        <meta
          name="description"
          content="EFT à Bordeaux : une méthode douce pour libérer les émotions, réduire le stress et retrouver un apaisement profond. Séances à Tresses, proche Bordeaux."
        />
        <link rel="canonical" href="https://programme-agp.fr/eft-bordeaux" />
        <meta
          property="og:title"
          content="EFT Bordeaux | Libération émotionnelle & gestion du stress"
        />
        <meta
          property="og:description"
          content="Découvrez l'EFT à Bordeaux : libération émotionnelle, stress, blocages et surcharge mentale. Une méthode efficace et accessible."
        />
        <meta
          property="og:image"
          content="https://programme-agp.fr/og-agp-1200x630.jpg"
        />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* HERO */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-primary mb-4">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-medium">
                  Cabinet à Tresses — à 10 min de Bordeaux
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                EFT à Bordeaux — Une méthode simple, douce et puissante pour libérer vos
                émotions
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                L'EFT (Emotional Freedom Techniques) est une technique de libération
                émotionnelle accessible à tous. Elle aide à diminuer l'intensité du stress,
                des pensées envahissantes et des blocages, tout en favorisant un
                apaisement profond.
              </p>

              <img
                src="/images/agp-hero-2026-01-07.jpg"
                alt="Cabinet AGP EFT Bordeaux Cenon Floirac – méthodes douces et neurofeedback en Gironde"
                className="w-full rounded-xl shadow-lg mb-8"
              />
            </div>
          </div>
        </section>

        {/* POURQUOI ESSAYER */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
              🌿 Pourquoi essayer l'EFT à Bordeaux ?
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Que vous traversiez une période de stress intense, une surcharge émotionnelle
              ou un blocage récurrent, l'EFT offre un soutien concret et immédiat. C'est
              une approche douce, sans douleur et sans risque, qui agit directement sur le
              système nerveux.
            </p>

            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-lg text-muted-foreground"
                >
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
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
              💡 Les bienfaits que vous pouvez ressentir
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Dès les premières séances, beaucoup de personnes ressentent un apaisement
              notable et une diminution des tensions internes. Avec la pratique, l'EFT
              permet d'aller plus loin en libérant les émotions bloquées.
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
              L'EFT fait partie intégrante de l'accompagnement global EFT-H et Hypnose.
              Une approche complète pour apaiser le mental, libérer les émotions et
              retrouver un équilibre durable.
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

export default EftBordeaux;
