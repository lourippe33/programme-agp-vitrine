import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Sparkles, Brain, Heart, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const HypnoseBordeaux = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AGP – Méthodes douces & Neurofeedback",
    description:
      "Hypnose à Bordeaux : séances professionnelles pour réduire le stress, apaiser les émotions, dépasser les peurs et retrouver confiance en soi.",
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
    url: "https://programme-agp.fr/hypnose-bordeaux",
    areaServed: [
      { "@type": "City", name: "Bordeaux" },
      { "@type": "AdministrativeArea", name: "Bordeaux Métropole" },
    ],
    priceRange: "€€",
  };

  const reasons = [
    { icon: Zap, text: "Stress ou anxiété au quotidien" },
    { icon: Heart, text: "Blocages émotionnels persistants" },
    { icon: Shield, text: "Peurs, appréhensions, phobies" },
    { icon: Sparkles, text: "Manque de confiance ou d'estime de soi" },
    { icon: Brain, text: "Pensées envahissantes ou surcharge mentale" },
    { icon: Heart, text: "Difficulté à lâcher prise" },
  ];

  const results = [
    "Apaisement intérieur durable",
    "Réduction du stress",
    "Confiance personnelle renforcée",
    "Meilleure stabilité émotionnelle",
    "Plus grande sérénité au quotidien",
    "Capacité de recul améliorée",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Hypnose Bordeaux | Gestion du stress, émotions & confiance</title>
        <meta
          name="description"
          content="Hypnose à Bordeaux : séances professionnelles pour réduire le stress, apaiser les émotions, se libérer des blocages et retrouver confiance. Approche douce et personnalisée."
        />
        <link rel="canonical" href="https://programme-agp.fr/hypnose-bordeaux" />
        <meta property="og:title" content="Hypnose Bordeaux | Gestion du stress, émotions & confiance" />
        <meta
          property="og:description"
          content="Séances d’hypnose à Bordeaux pour apaiser le stress, dépasser les blocages et retrouver confiance en soi."
        />
        <meta property="og:image" content="https://programme-agp.fr/og-agp-1200x630.jpg" />
        <meta property="og:type" content="website" />
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
                <span className="text-sm font-medium">Cabinet à Tresses — à 10 min de Bordeaux</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Hypnose à Bordeaux – Une approche douce pour retrouver votre équilibre émotionnel
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                L’hypnose est un outil puissant pour dépasser les blocages, apaiser le stress et réactiver vos
                ressources internes. Accessible à tous, elle permet de transformer durablement vos automatismes
                émotionnels et vos schémas limitants.
              </p>

              <img
                src="/images/agp-hero-2026-01-07.jpg"
                alt="Cabinet AGP hypnose Bordeaux Cenon Floirac – méthodes douces et neurofeedback en Gironde"
                className="w-full rounded-xl shadow-lg mb-8"
              />
            </div>
          </div>
        </section>

        {/* POURQUOI CONSULTER */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
              🌿 Pourquoi consulter un praticien en hypnose à Bordeaux ?
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              L’hypnose peut vous accompagner dans de nombreuses situations du quotidien. Que vous traversiez une
              période difficile, que vous souhaitiez dépasser des blocages ou simplement retrouver un meilleur
              équilibre, l’hypnose permet de mobiliser vos ressources internes en douceur.
            </p>

            <ul className="space-y-3 mb-8">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-center gap-3 text-lg text-muted-foreground">
                  <reason.icon className="h-5 w-5 text-primary" />
                  <span>{reason.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* COMMENT SE DÉROULE UNE SÉANCE */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
              🎧 Comment se déroule une séance d’hypnose ?
            </h2>

            <div className="bg-card rounded-xl p-8 border border-border leading-relaxed text-muted-foreground">
              <p className="mb-4">
                Chaque séance est personnalisée. Vous êtes guidé vers un état de relaxation profonde tout en restant
                lucide et maître de vous-même. Cet état particulier permet d’accéder plus facilement à vos ressources
                internes, facilitant les changements émotionnels et comportementaux.
              </p>

              <p className="mb-4">
                Contrairement aux idées reçues, l’hypnose n’impose rien : vous restez conscient, présent et totalement
                acteur du processus.
              </p>
            </div>
          </div>
        </section>

        {/* RÉSULTATS */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">💡 Résultats fréquemment observés</h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Les effets peuvent apparaître progressivement ou rapidement selon les personnes. Voici les bénéfices les
              plus souvent rapportés :
            </p>

            <ul className="grid md:grid-cols-2 gap-4">
              {results.map((result, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-lg text-muted-foreground bg-card p-4 rounded-lg border border-border"
                >
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">👉 En savoir plus sur l’hypnose</h2>
            <p className="text-muted-foreground mb-8">
              Découvrez l’approche complète en hypnose et EFT-H proposée au cabinet.
            </p>

            <Button asChild size="lg" className="hover:scale-105 transition-transform">
              <Link to="/hypnose-eft-h">En savoir plus</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HypnoseBordeaux;
