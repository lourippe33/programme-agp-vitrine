import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Calendar, Target, TrendingDown, CircleCheck as CheckCircle2, MapPin, Phone } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import logoProgramme30Jours from "@/assets/logo-programme-30-jours.jpg";
import heroImage from "@/assets/pexels-pixabay-53404.jpg";

const Programme30Jours = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Programme Perte de Poids 30 Jours Bordeaux | Méthode AGP Tresses Gironde";

    // Canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", "https://methodes-douces-bordeaux.fr/programme-30-jours");

    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const descContent =
    "Programme perte de poids 30 jours à Bordeaux et en Gironde. Méthode AGP sans régime, avec suivi personnalisé en visio depuis Tresses (33370). Hypnose, EFT et chronobiologie. 90€.";
    if (metaDescription) {
      metaDescription.setAttribute("content", descContent);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descContent;
      document.head.appendChild(meta);
    }

    // Meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      "content",
      "programme perte de poids bordeaux, maigrir bordeaux, perte de poids gironde, programme minceur tresses, méthode AGP, hypnose perte de poids bordeaux"
    );

    // Structured Data - Product
    const structuredData = document.createElement("script");
    structuredData.type = "application/ld+json";
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Programme Perte de Poids 30 Jours AGP",
      description:
      "Programme complet de gestion du poids sur 30 jours avec hypnose, EFT-H et suivi personnalisé depuis Tresses, Bordeaux",
      offers: {
        "@type": "Offer",
        price: "90",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "LocalBusiness",
          name: "Méthodes Douces Bordeaux",
          address: {
            "@type": "PostalAddress",
            streetAddress: "9 Galerie Marchande",
            addressLocality: "Tresses",
            postalCode: "33370"
          }
        }
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "55"
      }
    });
    document.head.appendChild(structuredData);
    return () => {
      if (structuredData.parentNode) {
        structuredData.parentNode.removeChild(structuredData);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs
            items={[
            {
              label: "Programme 30 Jours"
            }]
            } />

        </div>

        {/* Hero Section with Background Image */}
        <section className="py-20 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Programme perte de poids - Balance et ruban de mesure"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            {/* Overlay pour améliorer la lisibilité du texte */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background/90"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 animate-pulse">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-sm font-semibold text-primary">Nouveau Programme</span>
              </div>

              {/* Logo du programme */}
              <div className="mb-8">
                <img
                  src={logoProgramme30Jours}
                  alt="Logo Programme AGP Perte de Poids Bordeaux"
                  className="w-48 h-48 mx-auto rounded-full shadow-lg object-cover" />

              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Programme Perte de Poids 30 Jours - Bordeaux &amp; Gironde
              </h1>

              <div className="space-y-4 text-lg text-foreground/80 mb-8 max-w-3xl mx-auto text-left">
                <p>
                  Le Programme 30 Jours AGP est destiné à toute personne francophone souhaitant perdre du poids de
                  manière durable, sans régime strict ni frustration. Cet accompagnement se déroule entièrement en
                  ligne, avec un suivi pratique et progressif basé sur l'écoute du corps, la gestion des habitudes
                  alimentaires et la compréhension du rythme biologique. Vous êtes guidé pas à pas, quel que soit votre
                  lieu de vie, avec des conseils simples, applicables au quotidien et adaptés à votre organisation
                  personnelle.
                </p>
                <p>
                  Ce programme peut également être associé, si vous le souhaitez, à un travail en cabinet à Tresses pour
                  renforcer la motivation ou faciliter certaines étapes. L'objectif reste le même : un changement
                  durable, agréable et respectueux de votre équilibre.
                </p>
              </div>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Transformez votre quotidien en seulement 30 jours
              </p>

              <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
                Un programme complet alliant méthodes douces et accompagnement personnalisé pour des résultats durables
                et sans frustration.
              </p>

              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-strong text-lg px-8 py-6 hover:scale-105 transition-transform"
                asChild>

                <a
                  href="https://ericgata.thrivecart.com/httpsbuystripecom14a4gzetc8fu1qtekqc3m02/"
                  target="_blank"
                  rel="noopener noreferrer">

                  Je réserve mon programme à 90€
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-6 rounded-lg border border-border bg-card hover:shadow-soft transition-all">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">30 Jours</h3>
                <p className="text-muted-foreground">Programme structuré et progressif</p>
              </div>

              <div className="text-center p-6 rounded-lg border border-border bg-card hover:shadow-soft transition-all">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Objectifs Clairs</h3>
                <p className="text-muted-foreground">Résultats mesurables et atteignables</p>
              </div>

              <div className="text-center p-6 rounded-lg border border-border bg-card hover:shadow-soft transition-all">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingDown className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Résultats durables</h3>
                <p className="text-muted-foreground">Méthode douce et efficace</p>
              </div>

              <div className="text-center p-6 rounded-lg border border-border bg-card hover:shadow-soft transition-all">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Suivi Personnalisé</h3>
                <p className="text-muted-foreground">Accompagnement tout au long du programme</p>
              </div>
            </div>
          </div>
        </section>

        {/* Program Details Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Détails du Programme</h2>

              {/* Introduction */}
              <div className="bg-card p-8 rounded-lg border border-border mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">🌿 Défi minceur 30 jours</h3>
                <p className="text-xl font-semibold text-primary mb-6">
                  30 jours pour reprendre le contrôle en douceur, naturellement.
                </p>
                <div className="space-y-4 text-foreground/80">
                  <p>
                    Vous avez peut-être déjà essayé plusieurs régimes, compté les calories, supprimé des aliments,
                    repris, re-perdu, puis reperdu confiance dans votre capacité à changer. Si c'est le cas, sachez une
                    chose : <strong>ce n'est pas vous le problème.</strong>
                  </p>

                  {/* INSERTION 1 - Paragraphe géolocalisé */}
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                    <p className="font-semibold text-foreground flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-primary" /> Vous habitez Bordeaux, Tresses, Libourne ou la Gironde
                      ?
                    </p>
                    <p>
                      Ce programme est 100% accessible en ligne avec un suivi personnalisé hebdomadaire en visio depuis
                      mon cabinet à Tresses (33370).
                    </p>
                  </div>

                  <p>
                    Le corps, les émotions et les automatismes alimentaires travaillent ensemble. Si l'un prend le
                    dessus, tout devient lutte.
                  </p>
                  <p>
                    Le programme AGP a été conçu pour vous permettre de sortir de cette bataille intérieure, sans
                    régime, sans frustration, et sans culpabilité.
                  </p>
                </div>
              </div>

              {/* Origin */}
              <div className="bg-card p-8 rounded-lg border border-border mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span>✨</span> La Méthode AGP : 10 Ans d'Expertise en Perte de Poids à Bordeaux
                </h3>
                <div className="space-y-4 text-foreground/80">
                  <p>
                    Je suis le créateur de la méthode AGP, une approche globale de la gestion du poids et du
                    comportement alimentaire, qui a déjà permis de former plus de 450 praticiens. Cette méthode existe
                    depuis plus de 10 ans.
                  </p>
                  <p>Le programme AGP 30 jours est la version destinée au grand public : une méthode accessible, guidée, simple à suivre grâce à l'application, qui vous permet d'agir sur votre relation à la nourriture, à votre rythme. C'est une application qui vous guide et vous permet d'avancer à votre rythme. Et les 30 premiers jours je vous accompagne une fois par semaine. Le suivi jour 1, on met ensemble l'application en marche, je vous explique tout et c'est à vous de jouer.





                  </p>
                </div>
              </div>

              {/* How it works */}
              <div className="bg-card p-8 rounded-lg border border-border mb-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span>🧭</span> Comment Fonctionne le Programme Perte de Poids en Ligne ?
                </h3>
                <p className="text-foreground/80 mb-6">
                  Pendant 30 jours, vous êtes accompagné(e) étape par étape via :
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <span>📱</span> Une application dédiée
                    </h4>
                    <ul className="space-y-2 text-foreground/80">
                      <li>• Chaque jour, des indications claires</li>
                      <li>• Des conseils alimentaires basés sur la chronobiologie</li>
                      <li>• Des exercices courts pour intégrer des nouveaux comportements</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <span>🎧</span> Des techniques guidées comme l'hypnose, PNE, bulle 3p...
                    </h4>
                    <p className="text-foreground/80 mb-2">Pour :</p>
                    <ul className="space-y-2 text-foreground/80">
                      <li>• apaiser les envies impulsives</li>
                      <li>• diminuer le stress</li>
                      <li>• relâcher le besoin de compenser avec la nourriture</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <span>💬</span> Un suivi hebdomadaire personnalisé pendant 30 jours
                    </h4>
                    <p className="text-foreground/80 mb-2">
                      Vous n'êtes pas seul(e). Chaque semaine, nous faisons un point ensemble, en visio, pour :
                    </p>
                    <ul className="space-y-2 text-foreground/80">
                      <li>• ajuster</li>
                      <li>• soutenir</li>
                      <li>• encourager</li>
                      <li>• maintenir l'élan</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <span>💬</span> Une communauté WhatsApp
                    </h4>
                    <p className="text-foreground/80">
                      Pour échanger entre nous et répondre à vos questions tout au long du programme.
                    </p>
                  </div>

                  {/* INSERTION 2 - Suivi géolocalisé */}
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                    <p className="font-semibold text-foreground flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-primary" /> Suivi depuis Tresses, et accessible partout :
                    </p>
                    <p className="text-foreground/80">
                      Que vous soyez à Bordeaux centre, Libourne, Cenon ou ailleurs en Gironde, vous bénéficiez du même
                      accompagnement de qualité en visio.
                    </p>
                  </div>
                </div>
              </div>

              {/* What it's not */}
              <div className="bg-card p-8 rounded-lg border border-border mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span>💛</span> Une Alternative aux Régimes : Méthode Douce et Durable
                </h3>
                <ul className="space-y-3 text-foreground/80 mb-6">
                  <li>• Ce n'est pas un régime</li>
                  <li>• Ce n'est pas du contrôle par la force</li>
                  <li>• Ce n'est pas de la restriction</li>
                </ul>
                <p className="text-foreground/80 mb-4">
                  Le but n'est pas que vous vous battiez avec vous-même. Le but est que vous retrouviez votre pouvoir,
                  naturellement.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Si vous vivez une difficulté émotionnelle plus profonde (trauma, anxiété intense, blessure
                  affective…), l'application vous en informera dans le suivi bien-être et je vous orienterai vers un
                  accompagnement complémentaire adapté. Vous ne serez jamais seul(e).
                </p>
              </div>

              {/* Who is it for */}
              <div className="bg-card p-8 rounded-lg border border-border mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span>🎯</span> Pour Qui ? Habitants de Bordeaux, Tresses, Libourne et Gironde
                </h3>
                <ul className="space-y-3 text-foreground/80 mb-4">
                  <li>• Si vous mangez par stress, fatigue, ennui ou vide</li>
                  <li>• Si vous avez l'impression de "perdre le contrôle"</li>
                  <li>• Si vous cherchez une solution douce mais durable</li>
                  <li>• Si vous voulez vous sentir fière, stable, alignée</li>
                  <li>• Si vous voulez arrêter de commencer / arrêter / recommencer</li>
                  {/* INSERTION 3 - Ligne géolocalisée */}
                  <li>• Si vous cherchez un accompagnement perte de poids à Bordeaux ou en Gironde</li>
                </ul>
                <p className="text-lg font-semibold text-primary">Alors ce programme est pour vous.</p>
              </div>

              {/* Launch Offer */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg border-2 border-primary/20 mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span>🚀</span> Offre de Lancement : 90€ au lieu de 149€
                </h3>
                <p className="text-foreground/80 mb-6">
                  Je propose actuellement ce programme, à tarif réduit, pour donner un coup de boost à votre perte de
                  poids :
                </p>
                <div className="bg-card p-6 rounded-lg mb-6 text-center">
                  <p className="text-3xl font-bold text-primary mb-2">
                    Profitez de cette offre de lancement à 90€ au lieu de 149€
                  </p>
                  <p className="text-sm text-muted-foreground"></p>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-gradient-primary hover:shadow-strong text-lg hover:scale-105 transition-transform"
                  asChild>

                  <a
                    href="https://ericgata.thrivecart.com/httpsbuystripecom14a4gzetc8fu1qtekqc3m02/"
                    target="_blank"
                    rel="noopener noreferrer">

                    Je réserve mon programme à 90€
                  </a>
                </Button>
              </div>

              {/* What you'll find */}
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span>🧡</span> Les Bénéfices : Retrouvez une Relation Saine avec la Nourriture
                </h3>
                <ul className="space-y-3 text-foreground/80 mb-6">
                  <li>• La sensation de vous choisir</li>
                  <li>• Le plaisir de manger sans culpabilité</li>
                  <li>• Une relation plus douce avec votre corps</li>
                  <li>• Une capacité à dire stop, calmement</li>
                  <li>• Et surtout : de la fierté</li>
                </ul>
                <div className="space-y-2 text-lg font-semibold text-primary">
                  <p>Cette fois-ci, vous ne serez pas seul(e).</p>
                  <p>Cette fois-ci, vous avancez accompagné(e).</p>
                  <p>Cette fois-ci… vous vous choisissez.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Zone d'intervention - Gironde */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center flex items-center justify-center gap-3">
                <MapPin className="w-8 h-8 text-primary" />
                Zone d'Intervention - Gironde (33)
              </h2>

              <div className="bg-card p-8 rounded-lg border border-border mb-8 text-center">
                <p className="text-xl font-semibold mb-4">Cabinet situé à Tresses (entre Bordeaux et Libourne)</p>
                <p className="text-foreground/80 mb-6">
                  Le Programme 30 Jours AGP est accessible en ligne depuis toute la France, avec un suivi personnalisé
                  hebdomadaire en visioconférence.
                </p>
                <p className="text-foreground/80 font-medium mb-4">Nos clients viennent de :</p>
                <p className="text-muted-foreground leading-relaxed">
                  Bordeaux • Tresses • Libourne • Cenon • Floirac • Artigues-près-Bordeaux • Carbon-Blanc • Bègles •
                  Talence • Mérignac • Pessac • Lormont • Bassens • Saint-Loubès • et toute la Gironde (33)
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg border border-primary/10 text-center">
                <p className="text-xl font-semibold mb-4 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Vous avez des questions ?
                </p>
                <a href="tel:0782386621" className="text-2xl font-bold text-primary hover:underline mb-4 inline-block">
                  07 82 38 66 21
                </a>
                <p className="mt-4">
                  <Link to="/#contact" className="text-primary hover:underline font-medium">
                    Ou contactez-nous via notre formulaire →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

};

export default Programme30Jours;