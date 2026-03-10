import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, CircleCheck as CheckCircle, Circle as XCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
"@/components/ui/accordion";
import visioImage from "@/assets/seance-visio-coaching-agp.jpg";

const BlogProgrammePertePoidsEnLigne = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqItems = [
  {
    question: "En quoi ce programme de perte de poids en ligne est-il différent d'une application classique ?",
    answer: "Une application classique est entièrement automatisée. Elle ne vous connaît pas et ne peut pas s'adapter à ce que vous vivez réellement semaine après semaine. Le Programme AGP combine une application structurée avec un coaching humain hebdomadaire en visio — c'est cette combinaison qui permet des résultats durables."
  },
  {
    question: "En quoi est-il différent de séances avec un hypnothérapeute ?",
    answer: "Les séances classiques sont ponctuelles, sans structure quotidienne entre les rendez-vous. Le Programme AGP vous accompagne chaque jour via l'application ET chaque semaine via le coaching. C'est un système continu sur 30 jours, pas des rendez-vous isolés."
  },
  {
    question: "Je ne suis pas à Bordeaux, puis-je quand même suivre le programme perte de poids ?",
    answer: "Absolument. Le programme a été conçu pour être accessible depuis n'importe où en France. L'application fonctionne partout. Les sessions de coaching se font en visioconférence. Votre localisation n'a aucune importance."
  },
  {
    question: "Combien de temps dois-je consacrer au programme chaque jour ?",
    answer: "Entre 15 et 30 minutes par jour pour les exercices et audios de l'application, plus la session de coaching hebdomadaire d'environ 30 à 45 minutes. Le programme a été conçu pour s'intégrer dans une vie active."
  },
  {
    question: "Que se passe-t-il si je ne vois pas de résultats après 7 jours ?",
    answer: "Vous êtes remboursé(e) intégralement, sans question. La garantie satisfait ou remboursé 7 jours est inconditionnelle."
  },
  {
    question: "Le programme convient-il aux personnes qui n'ont jamais fait d'hypnose ou d'EFT en Gironde ?",
    answer: "Oui, totalement. Les audios et exercices sont accessibles à tous les niveaux, y compris pour les débutants complets. Aucune expérience préalable n'est nécessaire."
  }];


  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Programme Perte de Poids en Ligne : Pourquoi l'Application Seule ne Suffit Pas",
    description: "Ni une app froide, ni des séances isolées. Le Programme AGP 30 jours combine application guidée et coaching hebdomadaire humain. Créé à Bordeaux, accessible partout en France.",
    image: "https://programme-agp.fr/assets/seance-visio-coaching-agp.jpg",
    author: {
      "@type": "Person",
      name: "Eric Gata",
      url: "https://programme-agp.fr/a-propos"
    },
    publisher: {
      "@type": "Organization",
      name: "Méthodes Douces Bordeaux",
      logo: {
        "@type": "ImageObject",
        url: "https://programme-agp.fr/logo-agp.png"
      }
    },
    datePublished: "2026-02-17",
    dateModified: "2026-02-17",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://programme-agp.fr/blog/programme-perte-de-poids-en-ligne-coaching-bordeaux"
    },
    keywords: "programme perte de poids en ligne France, coaching perte de poids visio, application perte de poids avec suivi humain, méthode AGP Bordeaux"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Perte de Poids en Ligne + Coaching Humain | Méthode AGP Bordeaux</title>
        <meta name="description" content="Ni une app froide, ni des séances isolées. Le Programme AGP 30 jours combine application guidée et coaching hebdomadaire humain. Créé à Bordeaux, accessible partout en France." />
        <meta name="keywords" content="programme perte de poids en ligne France, coaching perte de poids visio, application perte de poids avec suivi humain, méthode AGP Bordeaux, perdre du poids sans se déplacer, programme minceur 30 jours accessible en ligne" />
        <link rel="canonical" href="https://programme-agp.fr/blog/programme-perte-de-poids-en-ligne-coaching-bordeaux" />
        <meta property="og:title" content="Perte de Poids en Ligne + Coaching Humain | Méthode AGP Bordeaux" />
        <meta property="og:description" content="Le Programme AGP 30 jours combine application guidée et coaching hebdomadaire humain. Créé à Bordeaux, accessible partout en France." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://programme-agp.fr/blog/programme-perte-de-poids-en-ligne-coaching-bordeaux" />
        <meta property="og:image" content="https://programme-agp.fr/assets/seance-visio-coaching-agp.jpg" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-24">
          <div className="container mx-auto px-4 py-8">
            <Breadcrumbs
              items={[
              { label: "Accueil", path: "/" },
              { label: "Blog", path: "/blog" },
              { label: "Perte de poids", path: "/blog/agp" },
              { label: "Programme en ligne + coaching" }]
              } />

          </div>

          {/* Hero Section */}
          <section className="container mx-auto px-4 pb-12">
            <div className="max-w-4xl mx-auto">
              <Button variant="ghost" asChild className="mb-6 hover:bg-primary/10">
                <Link to="/blog/agp">
                  <ArrowLeft className="mr-2" size={16} />
                  Retour aux articles perte de poids
                </Link>
              </Button>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>Février 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>10 min de lecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>Eric Gata</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">Programme perte de poids en ligne : pourquoi l'application seule ne suffit pas

              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Application sans humain. Séances sans structure. Et si la vraie solution était ailleurs ?
              </p>
            </div>
          </section>

          {/* Featured Image */}
          <section className="container mx-auto px-4 pb-12">
            <div className="max-w-4xl mx-auto">
              <img
                src={visioImage}
                alt="Coaching perte de poids en visioconférence - Programme AGP Bordeaux avec application mobile et suivi humain"
                className="w-full h-auto rounded-xl shadow-lg"
                width={800}
                height={533}
                loading="eager" />

            </div>
          </section>

          {/* Article Content */}
          <article className="container mx-auto px-4 pb-16">
            <div className="max-w-4xl mx-auto prose prose-lg prose-slate dark:prose-invert">

              {/* Intro */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                En 2026, perdre du poids n'a jamais semblé aussi "facile" sur le papier. Il y a des applications partout. Des programmes en ligne à la pelle. Des coachs sur Instagram. Des méthodes en PDF à télécharger. Des régimes clés en main livrés chez vous.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Et pourtant… les résultats durables restent rares.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pourquoi ? Parce que la plupart de ces solutions souffrent du même problème : <strong>elles choisissent leur camp</strong>. Soit elles misent tout sur la technologie (une app, des algorithmes, zéro humain). Soit elles proposent des séances ponctuelles avec un praticien, sans structure quotidienne entre les rendez-vous.
              </p>
              <p className="text-lg text-foreground font-medium">
                Le Programme AGP 30 Jours a été conçu pour dépasser cette limite. C'est un modèle hybride — application guidée + coaching humain hebdomadaire — créé à Bordeaux, et accessible depuis n'importe où en France.
              </p>

              {/* Section 1 */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Le problème des solutions actuelles : deux extrêmes qui ne fonctionnent pas
              </h2>

              <h3 className="text-xl font-heading font-bold text-foreground mt-8 mb-4">
                Les applications sans humain : efficaces au début, insuffisantes sur la durée
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Les apps de perte de poids ont un vrai mérite : elles sont disponibles à toute heure, structurées et pratiques. Vous pouvez les utiliser depuis votre canapé à Bordeaux, depuis un train entre Paris et Lyon, ou depuis n'importe quel coin de France.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mais elles ont une limite fondamentale : <strong>elles ne vous connaissent pas.</strong> Quand vous bloquez en semaine 2 parce que vous traversez une période de stress intense, l'application ne le sait pas. Elle continue à vous envoyer ses notifications. Elle ne peut pas adapter le programme à ce que vous vivez réellement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Résultat : vous décrochez. Comme des millions d'utilisateurs avant vous.
              </p>

              <h3 className="text-xl font-heading font-bold text-foreground mt-8 mb-4">
                Les séances ponctuelles sans structure : profondes mais discontinues
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                À l'opposé, les séances avec un praticien — hypnothérapeute, coach, sophrologue — ont une vraie valeur. Le travail en profondeur est réel. La relation humaine est irremplaçable.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mais que se passe-t-il entre deux séances ? Vous rentrez chez vous avec de bonnes intentions. Puis le quotidien reprend ses droits. Les automatismes reviennent. Sans structure quotidienne pour ancrer les changements, les effets d'une séance s'estompent progressivement.
              </p>
              <p className="text-muted-foreground leading-relaxed font-medium">
                Ce n'est pas un manque de volonté. C'est un manque de continuité.
              </p>

              <h3 className="text-xl font-heading font-bold text-foreground mt-8 mb-4">
                La vraie question
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ce que la recherche en sciences comportementales nous apprend, c'est que <strong>le changement durable nécessite deux choses simultanément</strong> :
              </p>
              <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                <li>Une <strong>structure quotidienne</strong> pour créer de nouveaux automatismes</li>
                <li>Un <strong>accompagnement humain régulier</strong> pour ajuster, soutenir et maintenir le cap</li>
              </ol>
              <p className="text-muted-foreground leading-relaxed">
                Aucune application seule ne peut donner les deux. Aucune séance ponctuelle non plus. C'est exactement le vide que le Programme AGP 30 Jours comble.
              </p>

              {/* Section 2 */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Le modèle hybride AGP : la combinaison qui change tout
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le Programme AGP 30 Jours repose sur un principe simple : <strong>faire travailler la technologie ET l'humain ensemble</strong>, chacun là où il est le plus efficace.
              </p>

              <h3 className="text-xl font-heading font-bold text-foreground mt-8 mb-4">
                Ce que fait l'application (là où la technologie excelle)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>La structure quotidienne</strong> que vous n'avez pas à créer vous-même. Chaque jour pendant 30 jours, vous savez exactement quoi faire :
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>Des <strong>audios d'<Link to="/hypnose-eft-h" className="text-primary hover:underline">hypnose</Link> et d'<Link to="/hypnose-eft-h" className="text-primary hover:underline">EFT-H</Link></strong> accessibles à n'importe quelle heure selon vos besoins du moment</li>
                <li>Des <strong>exercices courts</strong> (5 à 15 minutes) pour ancrer progressivement de nouveaux comportements alimentaires</li>
                <li>Des <strong>conseils chronobiologiques</strong> adaptés à votre journée — pas des règles génériques, mais des indications qui respectent votre rythme biologique</li>
                <li>Un <strong>fil rouge quotidien</strong> qui maintient la cohérence sur 30 jours</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Vous pouvez travailler depuis Bordeaux, depuis Lille, depuis la Réunion. L'application ne dort jamais. <strong>C'est la structure. Chaque jour. Sans exception.</strong>
              </p>

              <h3 className="text-xl font-heading font-bold text-foreground mt-8 mb-4">
                Ce que fait le coaching humain (là où l'humain est irremplaçable)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>L'adaptation en temps réel</strong> que aucun algorithme ne peut faire. Chaque semaine, un point de 30 à 45 minutes en visioconférence avec Éric Gata, depuis son cabinet à Tresses en Gironde. Peu importe où vous êtes en France — la connexion est là.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ce coaching hebdomadaire n'est pas une séance thérapeutique classique. C'est un <strong>temps stratégique</strong> dédié à :
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong>Analyser votre semaine</strong> : ce qui a fonctionné, ce qui a bloqué, pourquoi</li>
                <li><strong>Ajuster le programme</strong> en fonction de votre réalité du moment</li>
                <li><strong>Travailler les résistances</strong> qui apparaissent au fil des semaines</li>
                <li><strong>Maintenir la motivation</strong> sur la durée, pas seulement en début de programme</li>
                <li><strong>Anticiper</strong> les situations à risque de la semaine suivante</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Ce que ce coaching fait, aucune application ne peut le faire. Parce qu'il s'adapte à VOUS, à ce que vous vivez, maintenant.
              </p>

              <h3 className="text-xl font-heading font-bold text-foreground mt-8 mb-4">
                La synergie : 1 + 1 = 3
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ce qui rend le modèle hybride puissant, ce n'est pas juste la somme des deux composantes. C'est leur <strong>interaction</strong>. L'application prépare le terrain chaque jour. Le coaching hebdomadaire exploite ce terrain pour aller plus loin. Et ce que vous travaillez en coaching s'ancre plus facilement grâce à la pratique quotidienne via l'application.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Un cercle vertueux. Semaine après semaine. Sur 30 jours.
              </p>

              {/* Section 3 */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Créé à Bordeaux, conçu pour toute la France
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le Programme AGP a été développé à Tresses, en Gironde, à quelques kilomètres de Bordeaux. C'est là qu'Éric Gata a construit et affiné cette méthode pendant plus de 10 ans, au contact direct de ses clients.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Mais dès le départ, la méthode a été pensée pour dépasser les frontières locales.</strong> Les problèmes que le programme adresse — la relation émotionnelle à la nourriture, les automatismes alimentaires, le stress qui pousse à manger — ne sont pas des problèmes bordelais. Ce sont des problèmes humains. Universels.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Aujourd'hui, les participants au Programme AGP viennent de toute la France. Certains sont locaux — Bordeaux, Tresses, Libourne, Cenon, Floirac, Mérignac, Pessac, toute la Gironde. D'autres sont à Paris, Lyon, Nantes, Toulouse, ou dans des villes plus petites.
              </p>
              <p className="text-muted-foreground leading-relaxed font-medium">
                Le programme s'adapte à votre vie. Pas l'inverse.
              </p>

              {/* Section 4 : Semaine par semaine */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Ce que vous vivez concrètement : semaine par semaine
              </h2>

              <h3 className="text-xl font-heading font-bold text-foreground mt-8 mb-4">
                Semaine 1 : Poser les bases
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Vous accédez à l'application et découvrez votre premier module. L'objectif n'est pas de "tout changer" — c'est de <strong>comprendre votre fonctionnement</strong> : vos rythmes biologiques, vos déclencheurs émotionnels, vos automatismes alimentaires. Premier coaching en visio en fin de semaine pour définir vos objectifs réels.
              </p>

              <h3 className="text-xl font-heading font-bold text-foreground mt-8 mb-4">
                Semaine 2 : Premiers ajustements
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                L'application vous guide sur vos premiers changements alimentaires — basés sur la chronobiologie, pas sur des interdits. Vous commencez à utiliser les audios d'hypnose et d'EFT-H. Deuxième coaching : on analyse, on ajuste. C'est souvent cette semaine que les premières résistances apparaissent — et c'est exactement pour ça que le coaching est là.
              </p>

              <h3 className="text-xl font-heading font-bold text-foreground mt-8 mb-4">
                Semaine 3 : Le cap difficile
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                La troisième semaine est souvent la plus délicate. L'enthousiasme du début s'estompe. Le corps teste les nouvelles habitudes. Sans accompagnement, c'est là que la plupart des gens abandonnent. <strong>Avec le coaching hebdomadaire, c'est là que les vrais changements s'ancrent.</strong>
              </p>

              <h3 className="text-xl font-heading font-bold text-foreground mt-8 mb-4">
                Semaine 4 : La consolidation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Les nouveaux comportements commencent à s'automatiser. Manger selon votre chronobiologie devient plus naturel. Les fringales émotionnelles ont diminué. Dernier coaching : on fait le bilan, on identifie ce qui est ancré, on prépare la suite.
              </p>

              <h3 className="text-xl font-heading font-bold text-foreground mt-8 mb-4">
                Après les 30 jours
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Vous gardez l'accès à l'application. Les changements que vous avez installés continuent à travailler. Et si vous souhaitez poursuivre l'accompagnement, des formules de suivi sont disponibles.
              </p>

              {/* Pour qui */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Pour qui est fait ce programme ?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Ce programme est fait pour vous si vous cherchez <strong>une méthode moderne, structurée et humaine</strong> — et non une solution miracle ou une privation supplémentaire.
              </p>

              <div className="my-8 space-y-4">
                <div className="space-y-3">
                  {[
                  "Vous avez une vie chargée et avez besoin d'un programme qui s'adapte à vous",
                  "Vous avez déjà essayé des applications sans obtenir de résultats durables",
                  "Vous avez déjà fait des séances ponctuelles mais manquiez de structure au quotidien",
                  "Vous voulez travailler sur vos émotions ET sur votre alimentation en même temps",
                  "Vous préférez une approche progressive et douce plutôt qu'un régime drastique",
                  "Vous habitez n'importe où en France et voulez un accompagnement de qualité"].
                  map((item, i) =>
                  <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-3 mt-6">
                  {[
                  "Vous cherchez un plan alimentaire strict à suivre sans réflexion",
                  "Vous souhaitez des résultats en quelques jours",
                  "Vous souffrez de troubles alimentaires sévères nécessitant un suivi médical spécialisé"].
                  map((item, i) =>
                  <div key={i} className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Ce que vous obtenez */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                En pratique : ce que vous obtenez pour 90€
              </h2>

              <div className="bg-primary/5 rounded-xl p-6 my-8 border border-primary/10">
                <h3 className="text-lg font-heading font-bold text-foreground mb-4">Le Programme 30 Jours AGP comprend :</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>✅ Accès complet à l'application pendant 30 jours</li>
                  <li>✅ Modules quotidiens guidés (chronobiologie, comportements alimentaires)</li>
                  <li>✅ Audios d'hypnose et exercices EFT-H intégrés</li>
                  <li>✅ 4 sessions de coaching individuel en visioconférence (une par semaine)</li>
                  <li>✅ Ressources pédagogiques pour comprendre les mécanismes en jeu</li>
                  <li>✅ Garantie satisfait ou remboursé 7 jours</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4 italic">
                  Le programme se déroule entièrement en ligne. Les sessions de coaching se font en visioconférence depuis le cabinet d'Éric Gata à Tresses (Gironde). Aucun déplacement n'est nécessaire.
                </p>
                <p className="text-lg font-bold text-foreground mt-4">
                  Tarif de lancement : 90€ <span className="text-sm font-normal text-muted-foreground line-through">149€</span>
                </p>
              </div>

              {/* CTA */}
              <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-xl text-center">
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  🎯 Démarrez votre Programme 30 Jours
                </h3>
                <p className="text-muted-foreground mb-6">
                  Accès immédiat après inscription. Garantie satisfait ou remboursé 7 jours.
                </p>
                <Button asChild size="lg" className="hover:scale-105 transition-transform">
                  <a href="https://ericgata.thrivecart.com/httpsbuystripecom14a4gzetc8fu1qtekqc3m02/" target="_blank" rel="noopener noreferrer">
                    Je rejoins le Programme AGP à 90€
                  </a>
                </Button>
              </div>

              {/* Article lié */}
              <div className="p-6 bg-muted/20 rounded-xl border border-border my-8">
                <p className="text-sm text-muted-foreground mb-2">À lire aussi :</p>
                <Link
                  to="/blog/perdre-poids-sans-regime-bordeaux"
                  className="text-lg font-semibold text-primary hover:underline">

                  Perdre du Poids sans Régime à Bordeaux : La Méthode AGP Expliquée →
                </Link>
              </div>

              {/* FAQ */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6">
                Questions fréquentes
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) =>
                <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left text-foreground font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                )}
              </Accordion>

              {/* Contact */}
              <div className="mt-12 p-6 bg-muted/30 rounded-xl border border-border">
                <h3 className="text-lg font-heading font-bold text-foreground mb-3">Contactez-nous</h3>
                <p className="text-muted-foreground">
                  <strong>Cabinet Méthodes Douces Bordeaux — Éric Gata</strong><br />
                  📍 9 Galerie Marchande, 33370 Tresses (Gironde)<br />
                  📞 07 82 38 66 21
                </p>
                <p className="text-sm text-muted-foreground mt-3">
                  Coaching en visioconférence — accessible depuis toute la France.
                </p>
              </div>

              {/* Disclaimer */}
              <p className="text-sm text-muted-foreground italic mt-8 pt-6 border-t border-border">
                Éric Gata, praticien et créateur de la méthode AGP. Plus de 10 ans d'expérience, 450 praticiens formés à la méthode. Cabinet à Tresses, entre Bordeaux et Libourne. Ces méthodes visent au bien-être et ne remplacent pas un suivi médical si nécessaire.
              </p>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>);

};

export default BlogProgrammePertePoidsEnLigne;