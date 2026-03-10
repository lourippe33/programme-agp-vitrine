import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, ArrowRight, CheckCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import featuredImage from "@/assets/perte-poids-apres-40-ans.jpg";
import ericPortrait from "@/assets/eric-gata-portrait.png";

const BlogPertePoidsApres40Ans = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Perte de poids après 40 ans : pourquoi votre corps ne réagit plus comme avant",
    description:
      "Découvrez pourquoi perdre du poids après 40 ans est différent : métabolisme ralenti, hormones, masse musculaire. Solutions concrètes et approche adaptée.",
    image: "https://programme-agp.fr/og-agp-1200x630.jpg",
    datePublished: "2025-02-24",
    dateModified: "2025-02-24",
    author: {
      "@type": "Person",
      name: "Éric Gata",
      url: "https://programme-agp.fr/a-propos",
      jobTitle: "Praticien en méthodes douces",
      worksFor: {
        "@type": "Organization",
        name: "Méthodes Douces Bordeaux",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Méthodes Douces Bordeaux",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://programme-agp.fr/blog/perdre-du-poids-apres-40-ans-pourquoi-cest-different",
    },
    articleSection: "Perte de poids",
    keywords:
      "perte de poids après 40 ans, métabolisme femme 40 ans, ménopause poids, hormones perte de poids, sarcopénie",
    wordCount: 3000,
    inLanguage: "fr-FR",
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Est-ce que le programme fonctionne vraiment après 40 ans ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, justement. Le Programme AGP a été conçu pour s'adapter aux réalités physiologiques des femmes après 40 ans : métabolisme ralenti, hormones en mouvement, stress élevé. La chronobiologie, l'hypnose et le coaching personnalisé permettent d'obtenir des résultats durables même quand les méthodes classiques échouent.",
        },
      },
      {
        "@type": "Question",
        name: "Je suis en périménopause / ménopause. Le programme convient-il ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolument. Beaucoup de nos clientes sont en périménopause ou ménopause. Le programme intègre des outils spécifiques pour gérer les fringales hormonales, le stress, les troubles du sommeil et la prise de poids abdominale typiques de cette période.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de kilos puis-je perdre après 40 ans ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Après 40 ans, une perte progressive de 2 à 3 kg par mois est idéale. Sur 3 à 6 mois, nos clientes perdent généralement entre 6 et 15 kg, de façon stable et sans yoyo.",
        },
      },
      {
        "@type": "Question",
        name: "Je n'ai jamais fait d'hypnose. Est-ce que ça fonctionne à mon âge ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'hypnose thérapeutique fonctionne à tout âge. Ce sont des audios guidés qui vous aident à modifier vos automatismes alimentaires. Aucune expérience préalable n'est nécessaire.",
        },
      },
      {
        "@type": "Question",
        name: "Je prends un traitement hormonal substitutif (THS). Puis-je suivre le programme ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si vous suivez un traitement médical, informez votre médecin avant de commencer. Le Programme AGP est un accompagnement bien-être qui se combine très bien avec un suivi médical, mais ne le remplace pas.",
        },
      },
      {
        "@type": "Question",
        name: "Le programme est accessible où ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "100% en ligne. L'application fonctionne partout en France. Les sessions de coaching se font en visioconférence depuis le cabinet à Tresses (Gironde), accessible depuis n'importe où.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Perdre du poids après 40 ans : pourquoi c'est différent</title>
        <meta
          name="description"
          content="Votre corps ne réagit plus comme avant ? Métabolisme, hormones, stress : découvrez pourquoi perdre du poids après 40 ans nécessite une approche différente."
        />

        <meta
          name="keywords"
          content="perdre du poids après 40 ans, maigrir après 40 ans femme, perte de poids ménopause, métabolisme après 40 ans, pourquoi je grossis après 40 ans, perdre du poids après 45 ans, perte de poids femme 40 ans"
        />

        <link
          rel="canonical"
          href="https://programme-agp.fr/blog/perdre-du-poids-apres-40-ans-pourquoi-cest-different"
        />

        <meta
          property="og:title"
          content="Perte de Poids Après 40 Ans : Pourquoi Votre Corps Ne Réagit Plus Comme Avant"
        />
        <meta
          property="og:description"
          content="Métabolisme, hormones, stress : découvrez pourquoi perdre du poids après 40 ans nécessite une approche différente et ce qui fonctionne vraiment."
        />

        <meta
          property="og:url"
          content="https://programme-agp.fr/blog/perdre-du-poids-apres-40-ans-pourquoi-cest-different"
        />

        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://programme-agp.fr/og-agp-1200x630.jpg" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="article:published_time" content="2025-02-24" />
        <meta property="article:author" content="Éric Gata" />
        <meta property="article:section" content="Perte de poids" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Perdre du poids après 40 ans : pourquoi c'est différent" />
        <meta
          name="twitter:description"
          content="Métabolisme, hormones : pourquoi votre corps ne réagit plus comme avant et que faire."
        />
        <script type="application/ld+json">{JSON.stringify(articleStructuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      </Helmet>

      <Header />

      <main className="pt-24">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs
            items={[
              { label: "Accueil", path: "/" },
              { label: "Blog", path: "/blog" },
              { label: "Perte de poids", path: "/blog/agp" },
              { label: "Perdre du poids après 40 ans" },
            ]}
          />
        </div>

        {/* Featured Image */}
        <section className="container mx-auto px-4 mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-warm">
              <img
                src={featuredImage}
                alt="Femme de 45 ans confiante en tenue de sport se regardant dans le miroir avec détermination et bienveillance envers son corps"
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                width="1200"
                height="675"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center mt-2 italic">
              Après 40 ans : comprendre son corps pour mieux l'accompagner
            </p>
          </div>
        </section>

        {/* Article Metadata */}
        <section className="container mx-auto px-4 mb-8">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="mb-6 hover:bg-primary/10">
              <Link to="/blog/agp">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux articles Perte de poids
              </Link>
            </Button>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Perte de poids après 40 Ans : pourquoi votre corps ne réagit plus comme avant (et que faire)
            </h1>
            <p className="text-xl text-muted-foreground mb-6 italic">
              Ce qui fonctionnait à 30 ans ne fonctionne plus. Et ce n'est pas votre faute.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
              <span className="flex items-center gap-1">
                <Calendar size={16} />
                Février 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock size={16} />5 min de lecture
              </span>
              <span className="flex items-center gap-1">
                <User size={16} /> Éric Gata
              </span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose-lg">
            {/* Introduction */}
            <section className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Vous vous souvenez peut-être de vos 25-30 ans.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                À cette époque, si vous vouliez perdre 3-4 kilos, c'était simple : vous réduisiez un peu les portions
                pendant deux semaines, vous bougiez davantage, et ça fonctionnait. Les kilos partaient. Assez
                facilement.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Aujourd'hui, vous avez dépassé 40 ans. Et quelque chose a changé.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Vous mangez la même chose qu'avant — peut-être même moins. Vous faites du sport. Vous faites attention.
                Et pourtant, les kilos s'installent. Progressivement. Insidieusement.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Pire encore : quand vous essayez les méthodes qui marchaient avant, rien ne se passe. Ou si peu. Comme
                si votre corps ne répondait plus aux mêmes règles.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">
                  Si c'est ce que vous vivez, sachez une chose : vous n'êtes pas seule. Et surtout, ce n'est pas de
                  votre faute.
                </strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Votre corps a changé. Et continuer à utiliser les mêmes stratégies qu'à 30 ans, c'est comme essayer
                d'ouvrir une nouvelle serrure avec une vieille clé. Si vous avez déjà vécu{" "}
                <Link
                  to="/blog/pourquoi-je-mange-mes-emotions-comprendre-pour-perdre-du-poids"
                  className="text-primary hover:underline"
                >
                  le cycle des régimes yo-yo
                </Link>
                , vous savez de quoi je parle.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Il est temps de comprendre ce qui se passe réellement dans votre corps après 40 ans. Et surtout, ce
                qu'il faut faire différemment.
              </p>
            </section>

            {/* Section 1 - Ce qui change */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Ce qui change dans votre corps après 40 ans (la science derrière)
              </h2>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                1. Votre métabolisme ralentit — vraiment
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                On entend souvent dire que « le métabolisme ralentit avec l'âge ». Mais qu'est-ce que ça signifie
                concrètement ?
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Votre métabolisme de base</strong> — c'est-à-dire la quantité de
                calories que votre corps brûle au repos, juste pour fonctionner — diminue d'environ{" "}
                <strong className="text-foreground">2 à 5% par décennie</strong> après 30 ans.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Cela peut sembler peu. Mais sur 10 ans, ça représente une différence de 100 à 200 calories par jour. Sur
                un an, c'est l'équivalent de{" "}
                <strong className="text-foreground">plusieurs kilos de graisse stockée en plus</strong> — même si vous
                mangez exactement la même chose qu'avant.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Avec l'âge, vous perdez progressivement de la masse musculaire (environ 3 à 8% par décennie après 30
                ans). Or, le muscle brûle plus de calories que la graisse, même au repos. Moins de muscle = métabolisme
                plus lent.
              </p>
              <div className="bg-muted/30 rounded-lg p-5 mb-6 border-l-4 border-primary">
                <p className="text-muted-foreground font-medium">
                  <strong className="text-foreground">Ce que ça change pour vous :</strong> Ce qui maintenait votre
                  poids à 30 ans vous fait maintenant prendre du poids à 45 ans. Ce n'est pas que vous mangez plus.
                  C'est que votre corps brûle moins.
                </p>
              </div>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                2. Vos hormones jouent contre vous
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Si vous approchez ou avez dépassé la quarantaine, vous avez probablement remarqué des changements
                hormonaux. Cycles irréguliers, fatigue plus marquée, sommeil perturbé. Ce n'est pas juste dans votre
                tête. C'est hormonal.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-3">
                <strong className="text-foreground">L'œstrogène en chute libre :</strong> À partir de la périménopause
                (qui peut commencer dès 40 ans), votre production d'œstrogène diminue progressivement. Quand il baisse :
              </p>
              <ul className="list-disc list-inside mb-4 text-lg text-muted-foreground space-y-1">
                <li>Votre corps stocke plus facilement la graisse, notamment autour du ventre</li>
                <li>Votre appétit augmente (l'œstrogène régule la sensation de satiété)</li>
                <li>Votre humeur devient plus instable, ce qui peut pousser à manger émotionnellement</li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">L'insuline moins efficace :</strong> Avec l'âge, vos cellules
                deviennent moins sensibles à l'insuline. Les pics d'insuline favorisent le stockage des graisses,
                surtout autour de l'abdomen.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Le cortisol plus élevé :</strong> Entre 40 et 50 ans, beaucoup de
                femmes cumulent : carrière exigeante, enfants ados, parents vieillissants, charge mentale intense. Le
                stress chronique élève le cortisol, qui favorise le stockage de graisse abdominale et augmente les
                fringales de sucre.
              </p>
              <div className="bg-muted/30 rounded-lg p-5 mb-6 border-l-4 border-primary">
                <p className="text-muted-foreground font-medium">
                  <strong className="text-foreground">Ce que ça change pour vous :</strong> Même en mangeant « bien »,
                  votre corps réagit différemment. Il stocke plus facilement. Il brûle moins vite. Et vos envies de
                  sucré explosent au moindre coup de stress.
                </p>
              </div>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                3. Votre sommeil se dégrade (et ça compte plus que vous ne pensez)
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-3">
                Après 40 ans, la qualité du sommeil se dégrade souvent. Réveils nocturnes, difficultés d'endormissement,
                sommeil moins profond.{" "}
                <strong className="text-foreground">Le lien avec le poids ? Il est direct.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-2">Le manque de sommeil :</p>
              <ul className="list-disc list-inside mb-4 text-lg text-muted-foreground space-y-1">
                <li>Augmente la ghréline (hormone de la faim)</li>
                <li>Diminue la leptine (hormone de satiété)</li>
                <li>Pousse à manger plus, surtout des aliments riches en sucre et en gras</li>
                <li>Ralentit encore plus votre métabolisme</li>
              </ul>
              <div className="bg-muted/30 rounded-lg p-5 mb-6 border-l-4 border-primary">
                <p className="text-muted-foreground font-medium">
                  <strong className="text-foreground">Ce que ça change pour vous :</strong> Vous avez beau « faire
                  attention », si vous dormez mal, votre corps sabote vos efforts de l'intérieur.
                </p>
              </div>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                4. Votre masse musculaire fond (sarcopénie)
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Entre 40 et 50 ans, vous pouvez perdre jusqu'à{" "}
                <strong className="text-foreground">8% de votre masse musculaire par décennie</strong> si vous ne faites
                rien pour la maintenir. Moins de muscle = métabolisme plus lent + silhouette moins ferme + difficulté
                accrue à perdre du poids.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Le piège :</strong> Beaucoup de femmes se concentrent uniquement sur
                la balance. Mais vous pouvez peser le même poids à 45 ans qu'à 35 ans, tout en ayant perdu 3 kg de
                muscle et gagné 3 kg de graisse. Même poids. Corps complètement différent.
              </p>
              <div className="bg-muted/30 rounded-lg p-5 mb-6 border-l-4 border-primary">
                <p className="text-muted-foreground font-medium">
                  <strong className="text-foreground">Ce que ça change pour vous :</strong> Perdre du poids après 40 ans
                  ne consiste pas juste à « manger moins ». Il faut aussi préserver (voire reconstruire) votre masse
                  musculaire.
                </p>
              </div>
            </section>

            {/* Section 2 - Les 5 erreurs */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Les 5 erreurs à éviter absolument après 40 ans
              </h2>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                Erreur 1 : Faire les mêmes régimes qu'à 30 ans
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Réduire drastiquement les calories après 40 ans est contre-productif. Votre métabolisme est déjà
                ralenti. Si vous mangez trop peu, vous l'affaiblissez encore plus. Résultat : dès que vous remangez
                normalement, vous reprenez tout (et souvent plus).
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Ce qu'il faut faire à la place :</strong> Ne pas réduire
                brutalement, mais manger intelligemment en respectant votre chronobiologie (manger les bons aliments aux
                bons moments).
              </p>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">Erreur 2 : Négliger les protéines</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-2">
                Beaucoup de femmes réduisent instinctivement les protéines en voulant « manger léger ». Grosse erreur
                après 40 ans. Les protéines :
              </p>
              <ul className="list-disc list-inside mb-4 text-lg text-muted-foreground space-y-1">
                <li>Préservent votre masse musculaire</li>
                <li>Rassasient plus longtemps</li>
                <li>Demandent plus d'énergie pour être digérées (effet thermique)</li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Ce qu'il faut faire à la place :</strong> Viser environ 1,2 à 1,5g
                de protéines par kilo de poids corporel par jour.
              </p>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                Erreur 3 : Faire uniquement du cardio
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Courir, marcher, faire du vélo, c'est bien. Mais après 40 ans, ce n'est plus suffisant. Le cardio seul
                ne préserve pas votre masse musculaire. Pire, un excès de cardio peut même la faire fondre.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Ce qu'il faut faire à la place :</strong> Intégrer du renforcement
                musculaire 2 à 3 fois par semaine (poids, élastiques, pilates, yoga dynamique).
              </p>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                Erreur 4 : Ignorer le stress et les émotions
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Après 40 ans, le stress s'accumule souvent : responsabilités professionnelles, charge familiale, parents
                vieillissants, ados à gérer. Si vous ne traitez pas cette dimension émotionnelle, vous continuerez à
                manger pour réguler votre stress. Et aucun régime ne pourra compenser ça.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Ce qu'il faut faire à la place :</strong> Travailler sur la gestion
                du stress (
                <Link to="/hypnose-eft-h" className="text-primary hover:underline">
                  hypnose, EFT-H
                </Link>
                , méditation, respiration) en parallèle de l'alimentation.
              </p>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                Erreur 5 : Vouloir aller trop vite
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-2">
                À 25 ans, vous pouviez perdre 5 kg en 3 semaines. À 45 ans, c'est différent. Vouloir perdre trop vite
                après 40 ans, c'est :
              </p>
              <ul className="list-disc list-inside mb-4 text-lg text-muted-foreground space-y-1">
                <li>Ralentir encore plus votre métabolisme</li>
                <li>Perdre du muscle au lieu de la graisse</li>
                <li>Reprendre tout dès l'arrêt</li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Ce qu'il faut faire à la place :</strong> Viser une perte
                progressive (2 à 3 kg par mois maximum). C'est moins spectaculaire, mais infiniment plus durable.
              </p>
            </section>

            {/* Section 3 - Ce qui fonctionne */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Ce qui fonctionne vraiment après 40 ans : l'approche douce et durable
              </h2>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">1. Respecter votre chronobiologie</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Après 40 ans, votre corps devient plus sensible aux rythmes biologiques. Manger au bon moment devient
                crucial.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-5 rounded-lg border bg-card">
                  <h4 className="font-bold text-foreground mb-2">🌅 Matin (7h-9h)</h4>
                  <p className="text-muted-foreground text-base">
                    Cortisol naturellement élevé. Moment idéal pour les protéines et les bonnes graisses (œufs, avocat,
                    oléagineux). Évitez le sucre rapide.
                  </p>
                </div>
                <div className="p-5 rounded-lg border bg-card">
                  <h4 className="font-bold text-foreground mb-2">☀️ Midi (12h-14h)</h4>
                  <p className="text-muted-foreground text-base">
                    Pic de votre capacité digestive. Repas le plus copieux sans stocker. C'est le moment pour les
                    féculents.
                  </p>
                </div>
                <div className="p-5 rounded-lg border bg-card">
                  <h4 className="font-bold text-foreground mb-2">🌙 Soir (19h-20h)</h4>
                  <p className="text-muted-foreground text-base">
                    Métabolisme ralentit. Protéines légères et légumes. Les glucides lents (en petite quantité)
                    favorisent le sommeil.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                2. Travailler sur vos émotions, pas juste sur votre assiette
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-3">
                Si vous mangez par stress, par ennui, par fatigue émotionnelle, compter les calories ne résoudra rien.
                Les outils qui fonctionnent :
              </p>
              <ul className="list-disc list-inside mb-4 text-lg text-muted-foreground space-y-1">
                <li>
                  <strong className="text-foreground">L'hypnose</strong> pour reprogrammer vos automatismes alimentaires
                </li>
                <li>
                  <strong className="text-foreground">L'EFT-H</strong> pour libérer les émotions bloquées et réguler le
                  stress sans passer par la nourriture
                </li>
                <li>
                  <strong className="text-foreground">La pleine conscience</strong> pour retrouver les signaux de faim
                  et de satiété
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                C'est exactement ce que propose le{" "}
                <Link to="/programme-30-jours" className="text-primary hover:underline">
                  Programme AGP 30 Jours
                </Link>
                . En complément, le{" "}
                <Link to="/neurofeedback" className="text-primary hover:underline">
                  neurofeedback
                </Link>{" "}
                peut aider à réguler le stress chronique.
              </p>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                3. Préserver votre masse musculaire
              </h3>
              <ul className="list-disc list-inside mb-4 text-lg text-muted-foreground space-y-1">
                <li>Renforcement musculaire 2-3 fois par semaine (20-30 minutes suffisent)</li>
                <li>Apport suffisant en protéines à chaque repas</li>
                <li>Sommeil de qualité (le muscle se reconstruit la nuit)</li>
              </ul>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                4. Améliorer votre sommeil (non négociable)
              </h3>
              <ul className="list-disc list-inside mb-4 text-lg text-muted-foreground space-y-1">
                <li>Couchez-vous à heure régulière</li>
                <li>Évitez les écrans 1h avant le coucher</li>
                <li>Pratiquez la cohérence cardiaque ou la respiration profonde avant de dormir</li>
                <li>Si vous avez des réveils nocturnes liés aux hormones, parlez-en à votre médecin</li>
              </ul>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                5. Être accompagnée (ça change tout)
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                À 30 ans, vous pouviez peut-être vous débrouiller seule. À 45 ans, avec un métabolisme plus lent, des
                hormones en chaos et un quotidien chargé, c'est différent.
              </p>
              <ul className="list-disc list-inside mb-4 text-lg text-muted-foreground space-y-1">
                <li>Pour ajuster le programme à votre réalité hormonale</li>
                <li>Pour travailler sur les vraies causes (émotions, automatismes, stress)</li>
                <li>Pour ne pas abandonner quand ça stagne</li>
                <li>Pour éviter les erreurs qui ralentiraient encore plus votre métabolisme</li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                Ce n'est pas de la faiblesse. C'est de l'intelligence.
              </p>
            </section>

            {/* Section 4 - Programme AGP */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Le Programme AGP après 40 ans : une approche spécifiquement adaptée
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Le{" "}
                <Link to="/programme-30-jours" className="text-primary hover:underline">
                  Programme AGP 30 Jours
                </Link>{" "}
                a été conçu pour s'adapter aux réalités physiologiques des femmes après 40 ans.
              </p>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">Ce qui le rend différent</h3>
              <ul className="space-y-3 mb-8 text-lg text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={18} />
                  <span>
                    <strong className="text-foreground">Chronobiologie intégrée</strong> — l'application vous guide pour
                    manger en respectant vos rythmes biologiques, crucial quand votre métabolisme ralentit
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={18} />
                  <span>
                    <strong className="text-foreground">Travail émotionnel inclus</strong> — hypnose et EFT-H intégrés
                    pour gérer le stress, les fringales émotionnelles et les automatismes ancrés depuis des années
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={18} />
                  <span>
                    <strong className="text-foreground">Coaching hebdomadaire personnalisé</strong> — chaque semaine, un
                    point en visio pour ajuster le programme à votre réalité (hormones, fatigue, plateau de poids)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={18} />
                  <span>
                    <strong className="text-foreground">Pas de restriction brutale</strong> — on optimise ce que vous
                    mangez et quand vous le mangez, sans baisser drastiquement les calories
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={18} />
                  <span>
                    <strong className="text-foreground">Approche progressive</strong> — on vise 2-3 kg par mois,
                    durablement
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                Les résultats que vous pouvez attendre
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-3">
                Sur 3 à 6 mois avec le Programme AGP, nos clientes après 40 ans constatent :
              </p>
              <ul className="list-disc list-inside mb-4 text-lg text-muted-foreground space-y-1">
                <li>Une perte de poids progressive et stable (pas de yoyo)</li>
                <li>Une meilleure gestion des fringales et des envies de sucré</li>
                <li>Plus d'énergie au quotidien</li>
                <li>Un sommeil amélioré</li>
                <li>Une relation apaisée avec la nourriture</li>
                <li>Une silhouette qui se redessine (pas juste un chiffre sur la balance)</li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Important :</strong> Les résultats sont progressifs. Ce n'est pas
                spectaculaire en 2 semaines. Mais c'est durable. Et après 40 ans, c'est exactement ce dont votre corps a
                besoin.
              </p>
            </section>

            {/* Section 5 - Les 5 signes */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Vous reconnaissez-vous dans ces 5 signes ?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Vous êtes prête pour une approche adaptée à votre corps de 40+ ans si :
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <strong className="text-foreground">
                      Vous avez remarqué que les méthodes d'avant ne fonctionnent plus.
                    </strong>
                    <p className="text-muted-foreground">
                      Ce qui marchait à 30 ans ne fonctionne plus aujourd'hui. Il est temps d'une approche différente.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <strong className="text-foreground">Vous êtes fatiguée de vous battre contre votre corps.</strong>
                    <p className="text-muted-foreground">
                      Vous ne voulez plus lutter, compter, vous priver. Vous voulez travailler AVEC votre corps.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <strong className="text-foreground">Vous savez que le problème n'est pas juste alimentaire.</strong>
                    <p className="text-muted-foreground">
                      Stress, émotions, sommeil, hormones — vous comprenez que tout est lié.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <strong className="text-foreground">
                      Vous êtes prête à investir du temps (pas juste 2 semaines).
                    </strong>
                    <p className="text-muted-foreground">
                      Vous acceptez que les changements durables prennent 3 à 6 mois.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <strong className="text-foreground">Vous voulez être accompagnée dans cette transformation.</strong>
                    <p className="text-muted-foreground">
                      Vous savez qu'avec un métabolisme ralenti, vous avez besoin d'un accompagnement expert.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Si vous vous reconnaissez dans au moins 3 de ces points, le Programme AGP est fait pour vous.
              </p>
            </section>

            {/* Section 6 - Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Votre corps a changé. Votre approche doit changer aussi.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Pendant des années, on vous a fait croire que perdre du poids, c'était juste une question de volonté.
                Mangez moins, bougez plus, et ça marchera.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Après 40 ans, ce discours ne tient plus.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Votre corps a changé. Vos hormones ont changé. Votre métabolisme a changé. Votre vie a changé. Continuer
                à appliquer les mêmes recettes qu'à 30 ans, c'est vous condamner à l'échec et à la frustration.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Il est temps d'une approche différente.</strong> Une approche qui
                respecte votre corps tel qu'il est aujourd'hui. Qui travaille avec vos rythmes biologiques, pas contre
                eux. Qui intègre vos émotions, votre stress, votre sommeil. Qui vous accompagne semaine après semaine,
                avec bienveillance et expertise.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Cette approche existe. C'est le Programme AGP 30 Jours.</strong> Et
                elle a déjà aidé des centaines de femmes de plus de 40 ans à retrouver un poids stable, une énergie
                renouvelée, et une relation apaisée avec leur corps.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pour comprendre pourquoi{" "}
                <Link to="/blog/perdre-poids-sans-regime-bordeaux" className="text-primary hover:underline">
                  notre approche est différente des régimes classiques
                </Link>
                .
              </p>
            </section>

            {/* Inline CTA */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-8 md:p-10 rounded-2xl border border-primary/20 text-center">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  🎯 Prête à commencer une approche adaptée à votre corps de 40+ ans ?
                </h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                  Le Programme AGP 30 Jours : l'approche douce et durable pour perdre du poids après 40 ans, en
                  respectant votre métabolisme, vos hormones et votre vie.
                </p>
                <div className="bg-card p-6 rounded-xl mb-6 inline-block">
                  <p className="text-2xl font-bold text-primary mb-1">90€ au lieu de 149€</p>
                  <p className="text-sm text-muted-foreground">(offre de lancement)</p>
                </div>
                <ul className="text-left max-w-xl mx-auto mb-6 space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-1 shrink-0" size={16} />
                    Application guidée avec chronobiologie intégrée
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-1 shrink-0" size={16} />
                    Outils d'hypnose et EFT-H pour gérer les émotions
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-1 shrink-0" size={16} />
                    Coaching hebdomadaire personnalisé en visio (4 sessions)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-1 shrink-0" size={16} />
                    Approche progressive adaptée au métabolisme après 40 ans
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-1 shrink-0" size={16} />
                    Garantie satisfait ou remboursé 7 jours
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-1 shrink-0" size={16} />
                    Accessible partout en France
                  </li>
                </ul>
                <Button asChild size="lg" className="hover:scale-105 transition-transform">
                  <a
                    href="https://ericgata.thrivecart.com/httpsbuystripecom14a4gzetc8fu1qtekqc3m02/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Je rejoins le Programme AGP à 90€
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground mt-3">Inscription en 2 minutes • Paiement sécurisé</p>
              </div>
            </section>

            {/* Articles liés */}
            <section className="mb-12">
              <div className="p-6 bg-muted/20 rounded-xl border border-border space-y-3">
                <p className="text-sm text-muted-foreground mb-2">À lire aussi :</p>
                <Link
                  to="/blog/pourquoi-je-mange-mes-emotions-comprendre-pour-perdre-du-poids"
                  className="block text-lg font-semibold text-primary hover:underline"
                >
                  Pourquoi je mange mes émotions ? Comprendre pour perdre du poids →
                </Link>
                <Link
                  to="/blog/perdre-poids-sans-regime-bordeaux"
                  className="block text-lg font-semibold text-primary hover:underline"
                >
                  Perdre du Poids sans Régime à Bordeaux : La Méthode AGP Expliquée →
                </Link>
                <Link
                  to="/blog/programme-perte-de-poids-en-ligne-coaching-bordeaux"
                  className="block text-lg font-semibold text-primary hover:underline"
                >
                  Programme Perte de Poids en Ligne : Pourquoi l'Application Seule ne Suffit Pas →
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                FAQ : perte de poids après 40 ans
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    q: "Est-ce que le programme fonctionne vraiment après 40 ans ?",
                    a: "Oui, justement. Le Programme AGP a été conçu pour s'adapter aux réalités physiologiques des femmes après 40 ans : métabolisme ralenti, hormones en mouvement, stress élevé. La chronobiologie, l'hypnose et le coaching personnalisé permettent d'obtenir des résultats durables même quand les méthodes classiques échouent.",
                  },
                  {
                    q: "Je suis en périménopause / ménopause. Le programme convient-il ?",
                    a: "Absolument. Beaucoup de nos clientes sont en périménopause ou ménopause. Le programme intègre des outils spécifiques pour gérer les fringales hormonales, le stress, les troubles du sommeil et la prise de poids abdominale typiques de cette période.",
                  },
                  {
                    q: "Combien de kilos puis-je perdre après 40 ans ?",
                    a: "Après 40 ans, une perte progressive de 2 à 3 kg par mois est idéale. C'est moins spectaculaire qu'un régime drastique, mais infiniment plus durable. Sur 3 à 6 mois, nos clientes perdent généralement entre 6 et 15 kg, de façon stable et sans yoyo.",
                  },
                  {
                    q: "Je n'ai jamais fait d'hypnose. Est-ce que ça fonctionne à mon âge ?",
                    a: "L'hypnose thérapeutique fonctionne à tout âge. Ce sont des audios guidés qui vous aident à modifier vos automatismes alimentaires (grignotage, fringales, compulsions). Aucune expérience préalable n'est nécessaire. Et le coaching hebdomadaire est là pour répondre à toutes vos questions.",
                  },
                  {
                    q: "Je prends un traitement hormonal substitutif (THS). Puis-je suivre le programme ?",
                    a: "Si vous suivez un traitement médical, informez votre médecin avant de commencer. Le Programme AGP est un accompagnement bien-être qui se combine très bien avec un suivi médical, mais ne le remplace pas. Beaucoup de nos clientes sous THS suivent le programme avec succès.",
                  },
                  {
                    q: "Le programme est accessible où ?",
                    a: "100% en ligne. L'application fonctionne partout en France. Les sessions de coaching se font en visioconférence depuis le cabinet à Tresses (Gironde), accessible depuis n'importe où — Bordeaux, Paris, Lyon, ou ailleurs.",
                  },
                ].map((item, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left font-semibold text-foreground">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Partage social */}
            <section className="mb-12">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-sm text-muted-foreground">Partager cet article :</p>
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https://programme-agp.fr/blog/perdre-du-poids-apres-40-ans-pourquoi-cest-different"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Facebook
                </a>
                <a
                  href="https://twitter.com/intent/tweet?url=https://programme-agp.fr/blog/perdre-du-poids-apres-40-ans-pourquoi-cest-different&text=Perdre+du+poids+apr%C3%A8s+40+ans+%3A+pourquoi+c%27est+diff%C3%A9rent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Twitter
                </a>
                <a
                  href="https://www.linkedin.com/sharing/share-offsite/?url=https://programme-agp.fr/blog/perdre-du-poids-apres-40-ans-pourquoi-cest-different"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href="https://pinterest.com/pin/create/button/?url=https://programme-agp.fr/blog/perdre-du-poids-apres-40-ans-pourquoi-cest-different&description=Perdre+du+poids+apr%C3%A8s+40+ans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Pinterest
                </a>
              </div>
            </section>

            {/* Author Bio */}
            <section className="mb-12">
              <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-muted/20 rounded-xl border border-border">
                <img
                  src={ericPortrait}
                  alt="Éric Gata praticien spécialisé perte de poids femmes 40 ans Bordeaux"
                  className="w-24 h-24 rounded-full object-cover"
                  loading="lazy"
                />

                <div>
                  <h4 className="font-heading font-bold text-foreground text-lg mb-1">Éric Gata</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Praticien et créateur de la méthode AGP. Plus de 10 ans d'expérience dans l'accompagnement à la
                    perte de poids. Spécialisé dans l'accompagnement des femmes de plus de 40 ans. Cabinet à Tresses,
                    entre Bordeaux et Libourne (Gironde).
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Programme accessible en ligne depuis toute la France.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <div className="p-6 bg-muted/20 rounded-xl border border-border text-center">
                <h3 className="font-heading font-bold text-foreground text-lg mb-3">Contactez-nous</h3>
                <p className="text-muted-foreground">📍 9 Galerie Marchande, 33370 Tresses (Gironde)</p>
                <p className="text-muted-foreground">
                  📞{" "}
                  <a href="tel:+33782386621" className="text-primary hover:underline">
                    07 82 38 66 21
                  </a>
                </p>
                <p className="text-muted-foreground mt-2">
                  <Link to="/#contact" className="text-primary hover:underline">
                    Formulaire de contact
                  </Link>
                </p>
              </div>
            </section>

            {/* Disclaimer */}
            <section className="mb-8">
              <p className="text-xs text-muted-foreground/70 italic border-t border-border pt-4">
                Cet article est fourni à titre informatif et ne constitue pas un avis médical. La méthode AGP est un
                accompagnement bien-être destiné aux personnes en bonne santé. Si vous souffrez de troubles du
                comportement alimentaire ou suivez un traitement médical, consultez votre médecin avant de commencer
                tout programme.
              </p>
            </section>
          </div>
        </article>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Votre corps a changé. Votre méthode aussi doit changer.
            </h2>
            <p className="text-muted-foreground mb-4">
              Programme 30 Jours AGP — <strong>90€ au lieu de 149€</strong> — Garantie satisfait ou remboursé 7 jours.
            </p>
            <p className="text-muted-foreground mb-6">
              100% en ligne • Accessible depuis Bordeaux, Gironde et toute la France
            </p>
            <p className="text-muted-foreground mb-8">
              📞 Besoin de parler avant de vous lancer ?{" "}
              <a href="tel:+33782386621" className="text-primary hover:underline font-semibold">
                07 82 38 66 21
              </a>
            </p>
            <Button asChild size="lg" className="hover:scale-105 transition-transform">
              <a
                href="https://ericgata.thrivecart.com/httpsbuystripecom14a4gzetc8fu1qtekqc3m02/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Je rejoins le Programme AGP à 90€
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-3">Inscription en 2 minutes • Paiement sécurisé</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPertePoidsApres40Ans;
