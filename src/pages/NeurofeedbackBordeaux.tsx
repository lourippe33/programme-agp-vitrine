import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Brain, Sparkles, Moon, Zap, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";

const NeurofeedbackBordeaux = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AGP – Méthodes douces & Neurofeedback",
    description:
      "Séances de neurofeedback NeurOptimal à Bordeaux : méthode douce pour réduire le stress, améliorer le sommeil, apaiser le mental et retrouver un meilleur équilibre émotionnel.",
    image: "https://methodes-douces-bordeaux.fr/og-agp-1200x630.jpg",
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
    url: "https://methodes-douces-bordeaux.fr/neurofeedback-bordeaux",
    areaServed: [
      { "@type": "City", name: "Bordeaux" },
      { "@type": "AdministrativeArea", name: "Bordeaux Métropole" },
    ],
    priceRange: "€€",
  };

  const benefits = [
    { icon: Brain, text: "Réduire le stress chronique" },
    { icon: Sparkles, text: "Apaiser un mental trop actif" },
    { icon: Moon, text: "Mieux dormir et réduire les réveils nocturnes" },
    { icon: Zap, text: "Retrouver une meilleure clarté mentale" },
    { icon: Heart, text: "Retrouver de l'énergie au quotidien" },
    { icon: Users, text: "Mieux vivre un burn-out ou un épuisement" },
  ];

  const results = [
    "Sommeil plus profond",
    "Moins de ruminations",
    "Réduction nette du stress",
    "Plus de stabilité émotionnelle",
    "Esprit plus clair",
    "Plus grande sensation de calme intérieur",
  ];

  const audiences = [
    "Adultes stressés ou surmenés",
    "Personnes en fatigue mentale ou morale",
    "Enfants ayant du mal à se concentrer",
    "Adolescents anxieux ou au sommeil perturbé",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Neurofeedback Bordeaux | Séances NeurOptimal pour Stress & Sommeil</title>
        <meta
          name="description"
          content="Découvrez le neurofeedback NeurOptimal à Bordeaux : méthode douce pour réduire le stress, améliorer le sommeil, apaiser le mental et retrouver un meilleur équilibre émotionnel."
        />
        <link rel="canonical" href="https://methodes-douces-bordeaux.fr/neurofeedback-bordeaux" />
        <meta property="og:title" content="Neurofeedback Bordeaux | Séances NeurOptimal pour Stress & Sommeil" />
        <meta
          property="og:description"
          content="Approche douce et naturelle pour apaiser le stress, améliorer le sommeil et retrouver une meilleure clarté mentale."
        />
        <meta property="og:url" content="https://methodes-douces-bordeaux.fr/neurofeedback-bordeaux" />
        <meta property="og:image" content="https://methodes-douces-bordeaux.fr/og-agp-1200x630.jpg" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* HERO */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-2 text-primary mb-4">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-medium">Cabinet à Tresses — à 10 min de Bordeaux</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Neurofeedback à Bordeaux – Une méthode douce pour apaiser le mental
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              À Bordeaux, le neurofeedback NeurOptimal accompagne de plus en plus de personnes souhaitant réduire le
              stress, retrouver un sommeil plus stable et apaiser un mental trop sollicité. C’est une approche douce,
              non invasive, qui aide naturellement le cerveau à retrouver un meilleur équilibre.
            </p>

            <img
              src="/images/agp-hero-2026-01-07.jpg"
              alt="Cabinet AGP neurofeedback Bordeaux Cenon Floirac – méthodes douces en Gironde"
              className="w-full rounded-xl shadow-lg mb-8"
            />
          </div>
        </section>

        {/* POURQUOI */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
              🌿 Pourquoi choisir le neurofeedback à Bordeaux ?
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Le neurofeedback attire de plus en plus d’habitants de Bordeaux recherchant une solution naturelle pour
              apaiser leur quotidien. Il permet au cerveau d’observer ses propres variations et de se réguler de manière
              autonome.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-lg text-muted-foreground">
                  <b.icon className="h-5 w-5 text-primary" />
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground leading-relaxed">
              Cette approche ne force rien : elle accompagne le cerveau dans un processus naturel d’ajustement, sans
              stimulation et sans effort.
            </p>
          </div>
        </section>

        {/* SEANCE */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">🎧 Comment se déroule une séance ?</h2>

            <div className="bg-card border border-border rounded-xl p-8 text-muted-foreground leading-relaxed">
              <p className="mb-4">
                Une séance dure <strong>33 minutes</strong>. Vous êtes installé confortablement, en écoutant une
                musique. L’appareil détecte les variations de l’activité cérébrale, et renvoie de micro-interruptions
                sonores qui permettent au cerveau de s’ajuster.
              </p>

              <p>
                Rien n’est imposé au système nerveux : le processus reste complètement naturel, doux et respectueux de
                votre rythme.
              </p>
            </div>
          </div>
        </section>

        {/* RESULTATS */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">💡 Bénéfices observés par les clients</h2>

            <ul className="grid md:grid-cols-2 gap-4">
              {results.map((r, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border text-lg text-muted-foreground"
                >
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* POUR QUI */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">📍 Pour qui ?</h2>

            <ul className="space-y-3 text-lg text-muted-foreground">
              {audiences.map((a, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">👉 Découvrir le neurofeedback</h2>
            <p className="text-muted-foreground mb-8">En savoir plus sur cette approche douce et naturelle.</p>

            <Button asChild size="lg" className="hover:scale-105 transition-transform">
              <Link to="/neurofeedback">Découvrir le neurofeedback</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NeurofeedbackBordeaux;
