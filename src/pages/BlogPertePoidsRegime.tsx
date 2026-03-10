import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
"@/components/ui/accordion";
import featuredImage from "@/assets/perte-poids-sans-regime-bordeaux.jpg";

const BlogPertePoidsRegime = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Perdre du Poids sans Régime à Bordeaux : La Méthode AGP Expliquée",
    description: "Découvrez comment perdre du poids durablement sans régime restrictif grâce à la méthode AGP. Programme 30 jours à 90€, accessible en visio depuis Bordeaux et toute la France.",
    image: "https://programme-agp.fr/og-agp-1200x630.jpg",
    author: { "@type": "Person", name: "Éric Gata" },
    publisher: {
      "@type": "Organization",
      name: "Méthodes Douces Bordeaux"
    },
    datePublished: "2025-02-16",
    dateModified: "2025-02-16",
    mainEntityOfPage: "https://programme-agp.fr/blog/perdre-poids-sans-regime-bordeaux"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
    {
      "@type": "Question",
      name: "Est-ce que le programme de perte de poids à Bordeaux marche vraiment ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. La méthode AGP existe depuis plus de 10 ans et a formé 450 praticiens. Créé à Bordeaux, ce programme produit des résultats durables car nous travaillons sur les causes (émotions, chronobiologie, automatismes) et non juste les symptômes."
      }
    },
    {
      "@type": "Question",
      name: "Combien de kilos vais-je perdre avec le programme AGP ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chaque personne est unique. En moyenne, nos clients perdent entre 5 et 15kg sur 3 à 6 mois, de manière progressive et durable."
      }
    },
    {
      "@type": "Question",
      name: "Est-ce que je dois me déplacer à Tresses pour suivre le programme ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. Le Programme 30 Jours est 100% en ligne. Le seul moment en direct est le coaching hebdomadaire en visioconférence. Vous pouvez suivre le programme depuis Bordeaux, la Gironde, Paris, Lyon, ou n'importe où en France."
      }
    },
    {
      "@type": "Question",
      name: "Quelle est la différence avec un régime classique ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un régime classique restreint les aliments, compte les calories et ignore les émotions (taux d'échec 95%). La méthode AGP, conçue à Bordeaux, n'interdit aucun aliment, respecte votre chronobiologie, travaille sur les émotions et vous accompagne chaque semaine."
      }
    },
    {
      "@type": "Question",
      name: "Et si j'ai déjà tout essayé pour perdre du poids ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "C'est justement pour vous que cette méthode existe. Si les régimes ne marchent pas, c'est normal : ils ne traitent pas la vraie cause. AGP s'adresse aux personnes en Gironde et partout en France qui veulent une solution durable."
      }
    },
    {
      "@type": "Question",
      name: "Y a-t-il une garantie satisfait ou remboursé ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Garantie satisfait ou remboursé 7 jours. Si après une semaine vous estimez que le programme ne vous convient pas, vous êtes remboursé intégralement, sans question."
      }
    },
    {
      "@type": "Question",
      name: "Le programme perte de poids est-il adapté aux hommes ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolument. Environ 30% de nos participants sont des hommes. La méthode AGP est basée sur la science (chronobiologie, neurosciences), pas sur des concepts genrés."
      }
    },
    {
      "@type": "Question",
      name: "Puis-je suivre le programme si j'ai un traitement médical ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si vous suivez un traitement médical ou un suivi pour une pathologie, vous devez en informer votre médecin avant de commencer. La méthode AGP n'est pas un traitement médical, c'est un accompagnement bien-être pour personnes en bonne santé."
      }
    }]

  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Perdre du Poids sans Régime à Bordeaux | Méthode AGP | Programme 30 Jours</title>
        <meta
          name="description"
          content="Découvrez comment perdre du poids durablement sans régime restrictif grâce à la méthode AGP. Programme 30 jours à 90€, accessible en visio depuis Bordeaux et toute la France." />

        <meta
          name="keywords"
          content="perte de poids Bordeaux, maigrir sans régime, hypnose perte de poids, programme minceur Gironde, chronobiologie, méthode AGP" />

        <link rel="canonical" href="https://programme-agp.fr/blog/perdre-poids-sans-regime-bordeaux" />
        <meta property="og:title" content="Perdre du Poids sans Régime à Bordeaux : La Méthode AGP Expliquée" />
        <meta property="og:description" content="Découvrez comment perdre du poids durablement sans régime restrictif grâce à la méthode AGP. Programme 30 jours à 90€." />
        <meta property="og:url" content="https://programme-agp.fr/blog/perdre-poids-sans-regime-bordeaux" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://programme-agp.fr/og-agp-1200x630.jpg" />
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
            { label: "Perdre du poids sans régime" }]
            } />

        </div>

        {/* Featured Image */}
        <section className="container mx-auto px-4 mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-warm">
              <img
                src={featuredImage}
                alt="Perdre du poids sans régime à Bordeaux - Méthode AGP programme 30 jours"
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500" />

            </div>
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

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">Perdre du poids sans régime à Bordeaux : la méthode AGP expliquée

            </h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
              <span className="flex items-center gap-1"><Calendar size={16} />Février 2026</span>
              <span className="flex items-center gap-1"><Clock size={16} /> 8 min de lecture</span>
              <span className="flex items-center gap-1"><User size={16} /> Éric Gata</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose-lg">

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                Et si vous arrêtiez de faire des régimes ?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Vous avez peut-être déjà essayé plusieurs régimes. Compté les calories. Supprimé des aliments. Perdu du poids, puis repris. Re-perdu, puis re-repris. Et au final, vous avez peut-être aussi perdu confiance dans votre capacité à changer.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Si c'est votre cas, sachez une chose : <strong className="text-foreground">ce n'est pas vous le problème.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Les régimes restrictifs ont un taux d'échec de <strong className="text-foreground">95% à long terme</strong>. Oui, vous avez bien lu : 95%. Ce qui signifie que pour 100 personnes qui font un régime, 95 reprennent le poids perdu (et souvent plus) dans les 3 à 5 ans.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Chez Méthodes Douces Bordeaux, nous avons fait le choix inverse : <strong className="text-foreground">abandonner les régimes pour embrasser une approche globale et durable</strong>. C'est la méthode AGP (Accompagnement Gestion du Poids), et elle transforme la vie de nos clients depuis plus de 10 ans.
              </p>
            </section>

            {/* Pourquoi les régimes échouent */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Pourquoi les régimes classiques échouent
              </h2>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">Le corps ne comprend pas les régimes</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Quand vous réduisez drastiquement vos calories, votre corps ne se dit pas "Ah super, on va perdre du poids !" Il se dit plutôt : "Attention, famine ! Il faut économiser l'énergie et stocker au maximum."
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-2">C'est un mécanisme de survie ancestral. Résultat :</p>
              <ul className="space-y-2 mb-6 text-lg text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Votre métabolisme ralentit</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Vous stockez plus facilement les graisses</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Vous ressentez une faim intense</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Vous pensez constamment à la nourriture</li>
              </ul>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">Les émotions ne disparaissent pas avec les calories</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-2">
                Combien de fois avez-vous mangé non pas parce que vous aviez faim, mais parce que vous étiez :
              </p>
              <ul className="space-y-2 mb-6 text-lg text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Stressé(e) après une journée difficile</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Fatigué(e) et en manque d'énergie</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Triste ou seul(e)</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Anxieux(se) avant un événement</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Simplement ennuyé(e)</li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Un régime qui compte les calories ignore complètement cette dimension émotionnelle. Pourtant, c'est souvent la cause principale de la prise de poids.
              </p>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">La restriction crée la frustration</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-2">
                Plus vous vous interdisez quelque chose, plus vous en avez envie. Les interdits alimentaires créent :
              </p>
              <ul className="space-y-2 mb-4 text-lg text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>De la culpabilité quand vous "craquez"</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Une relation malsaine avec la nourriture</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Un cycle infernal de restriction/compulsion</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Une perte d'estime de soi</li>
              </ul>
              <p className="text-lg font-semibold text-foreground">
                Et si la solution était de ne plus rien interdire ?
              </p>
            </section>

            {/* La méthode AGP */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                La méthode AGP : une approche différente de la perte de poids
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                La méthode AGP (Accompagnement Gestion du Poids) existe depuis plus de 10 ans. Elle a permis de former plus de 450 praticiens en France et d'accompagner des milliers de personnes vers une perte de poids durable.
              </p>

              <h3 className="text-xl font-heading font-bold text-foreground mb-4">Les principes fondamentaux</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                { title: "Aucun aliment interdit", desc: "Vous pouvez manger de tout. Nous travaillons sur le \"quand\" et le \"comment\", pas sur le \"quoi\"." },
                { title: "Respecter votre rythme biologique", desc: "Manger les bons aliments au bon moment change radicalement les résultats." },
                { title: "Travailler sur les causes", desc: "La nourriture n'est pas le problème. C'est votre relation aux émotions et aux automatismes." },
                { title: "Vous accompagner", desc: "Un suivi hebdomadaire vous permet d'ajuster, de comprendre, de progresser." }].
                map((item, i) =>
                <div key={i} className="p-4 rounded-lg border bg-card">
                    <h4 className="font-bold text-foreground mb-2">{i + 1}. {item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                )}
              </div>
            </section>

            {/* Les 4 piliers */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Les 4 piliers de la méthode AGP
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">1. La chronobiologie : manger au bon moment</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    La chronobiologie est la science des rythmes biologiques. Votre corps ne métabolise pas les aliments de la même façon le matin, le midi et le soir.
                  </p>
                  <div className="bg-muted/30 rounded-lg p-6 mb-4">
                    <p className="font-semibold text-foreground mb-3">Exemple concret :</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li><strong className="text-foreground">Le matin :</strong> Votre corps produit du cortisol. Moment idéal pour les protéines et bonnes graisses.</li>
                      <li><strong className="text-foreground">Le midi :</strong> Pic d'activité digestive. Vous pouvez manger plus copieux.</li>
                      <li><strong className="text-foreground">Le soir :</strong> Les glucides lents favorisent la sérotonine et facilitent l'endormissement.</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">2. L'hypnose et l'EFT-H : transformer vos automatismes et libérer les émotions</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Les techniques d'<Link to="/hypnose-eft-h" className="text-primary hover:underline">hypnose</Link> et d'<Link to="/hypnose-eft-h" className="text-primary hover:underline">EFT-H</Link> sont intégrées directement dans l'application sous forme d'audios et d'exercices guidés. Vous les pratiquez en autonomie, à votre rythme, selon vos besoins.
                  </p>
                  <ul className="space-y-2 mb-4 text-lg text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="text-primary mt-1 shrink-0" size={18} />Réduire les fringales impulsives</li>
                    <li className="flex items-start gap-2"><CheckCircle className="text-primary mt-1 shrink-0" size={18} />Transformer votre relation à la nourriture</li>
                    <li className="flex items-start gap-2"><CheckCircle className="text-primary mt-1 shrink-0" size={18} />Renforcer votre confiance en vous</li>
                    <li className="flex items-start gap-2"><CheckCircle className="text-primary mt-1 shrink-0" size={18} />Installer de nouveaux automatismes positifs</li>
                    <li className="flex items-start gap-2"><CheckCircle className="text-primary mt-1 shrink-0" size={18} />Libérer les émotions bloquées (stress chronique, manque de confiance)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">3. Le suivi personnalisé : ne jamais être seul(e)</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Contrairement à un régime que vous suivez seul(e), la méthode AGP vous accompagne activement avec un point hebdomadaire en visioconférence, des ajustements en fonction de votre progression, et un soutien bienveillant sans jugement. Ce suivi hebdomadaire est un coaching stratégique en visioconférence permettant d'ajuster votre progression, répondre à vos questions et maintenir votre engagement.
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    Vous n'êtes pas livré(e) à vous-même. Et c'est cette différence qui fait que cette fois-ci, ça marche.
                  </p>
                </div>
              </div>
            </section>

            {/* Le Programme 30 Jours */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Le Programme 30 Jours AGP : comment ça fonctionne ?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Nous avons créé une version accessible de la méthode AGP pour le grand public : le <strong className="text-foreground">Programme 30 Jours</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-lg border bg-card">
                  <p className="text-2xl mb-2">📱</p>
                  <h4 className="font-bold text-foreground mb-2">Application mobile dédiée</h4>
                  <p className="text-muted-foreground">Indications quotidiennes, conseils chronobiologie, exercices courts et suivi de progression.</p>
                </div>
                <div className="p-6 rounded-lg border bg-card">
                  <p className="text-2xl mb-2">🎧</p>
                  <h4 className="font-bold text-foreground mb-2">Techniques guidées intégrées dans l'application</h4>
                  <p className="text-muted-foreground">Les techniques sont accessibles directement dans l'application sous forme d'audios et d'exercices guidés. Elles peuvent être utilisées en autonomie pendant les 30 jours.</p>
                </div>
                <div className="p-6 rounded-lg border bg-card">
                  <p className="text-2xl mb-2">💬</p>
                  <h4 className="font-bold text-foreground mb-2">Suivi hebdomadaire personnalisé</h4>
                  <p className="text-muted-foreground">Point visio chaque semaine pour ajuster, encourager et maintenir l'élan. Ce suivi hebdomadaire est un coaching stratégique en visioconférence permettant d'ajuster votre progression, répondre à vos questions et maintenir votre engagement.</p>
                </div>
                <div className="p-6 rounded-lg border bg-card">
                  <p className="text-2xl mb-2">📚</p>
                  <h4 className="font-bold text-foreground mb-2">Ressources pédagogiques</h4>
                  <p className="text-muted-foreground">Comprendre les mécanismes de prise de poids et acquérir une autonomie durable.</p>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-6 mb-6 border border-border">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Important :</strong> Le programme 30 jours ne comprend pas de séances individuelles en cabinet. Si une séance spécifique en présentiel est souhaitée, elle fait l'objet d'un rendez-vous distinct.
                </p>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20 mb-6">
                <p className="text-xl font-bold text-foreground mb-2">💰 90€ au lieu de 149€ (offre de lancement)</p>
                <p className="text-muted-foreground">
                  Programme créé à Bordeaux par un praticien expérimenté. Coaching assuré depuis Tresses (Gironde – 33), accessible partout en France en visioconférence.
                  C'est moins cher que 2 mois de salle de sport, 2 consultations chez une diététicienne ou 3 mois de Weight Watchers.
                </p>
              </div>
            </section>

            {/* Pour qui */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Pour qui ça marche ? (et pour qui ça ne marche pas)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg border bg-card">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle className="text-primary" size={20} /> C'est fait pour vous si :
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>✅ Vous mangez souvent par stress, fatigue ou ennui</li>
                    <li>✅ Vous avez l'impression de "perdre le contrôle" devant certains aliments</li>
                    <li>✅ Vous avez déjà fait 3, 5, 10 régimes sans succès durable</li>
                    <li>✅ Vous voulez une solution douce mais efficace</li>
                    <li>✅ Vous habitez à Bordeaux, en Gironde, ou ailleurs en France</li>
                  </ul>
                </div>
                <div className="p-6 rounded-lg border bg-card">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <XCircle className="text-destructive" size={20} /> Ce n'est PAS fait pour vous si :
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>❌ Vous cherchez une pilule magique sans effort</li>
                    <li>❌ Vous voulez perdre 10kg en 1 semaine</li>
                    <li>❌ Vous n'êtes pas prêt(e) à remettre en question vos habitudes</li>
                    <li>❌ Vous souffrez de troubles alimentaires sévères</li>
                    <li>❌ Vous voulez juste un plan de repas à suivre aveuglément</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Témoignages */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Témoignages : ils ont transformé leur relation au poids
              </h2>
              <div className="space-y-6">
                {[
                { name: "Sophie, 42 ans, Bordeaux", text: "J'ai perdu 12kg en 3 mois avec la méthode AGP, mais ce n'est pas ça le plus important. J'ai retrouvé le plaisir de manger sans culpabilité. Les fringales du soir ont disparu grâce aux séances d'hypnose." },
                { name: "Marie, 35 ans, Libourne", text: "Pour 90€, j'ai reçu un accompagnement qui vaut 10 fois plus. Le suivi hebdomadaire avec Éric a été essentiel. J'ai perdu 8kg en 2 mois, et je continue à perdre naturellement." },
                { name: "Julien, 48 ans, Cenon", text: "L'approche AGP est scientifique, pas 'régime de filles'. J'ai appris à manger selon ma chronobiologie. -15kg en 4 mois, plus d'énergie, meilleur sommeil. Je recommande." }].
                map((t, i) =>
                <blockquote key={i} className="border-l-4 border-primary pl-6 py-4 bg-muted/20 rounded-r-lg">
                    <p className="text-lg text-muted-foreground italic mb-2">"{t.text}"</p>
                    <footer className="text-sm font-semibold text-foreground">— {t.name}</footer>
                  </blockquote>
                )}
              </div>
            </section>

            {/* Article lié */}
            <section className="mb-12">
              <div className="p-6 bg-muted/20 rounded-xl border border-border">
                <p className="text-sm text-muted-foreground mb-2">À lire aussi :</p>
                <Link
                  to="/blog/programme-perte-de-poids-en-ligne-coaching-bordeaux"
                  className="text-lg font-semibold text-primary hover:underline">

                  Programme Perte de Poids en Ligne : Pourquoi l'Application Seule ne Suffit Pas →
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                FAQ : vos questions sur la méthode AGP
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {[
                { q: "Est-ce que le programme de perte de poids à Bordeaux marche vraiment ?", a: "Oui. La méthode AGP existe depuis plus de 10 ans et a formé 450 praticiens. Créé à Bordeaux, ce programme produit des résultats durables car nous travaillons sur les causes (émotions, chronobiologie, automatismes) et non juste les symptômes." },
                { q: "Combien de kilos vais-je perdre avec le programme AGP ?", a: "Chaque personne est unique. En moyenne, nos clients perdent entre 5 et 15kg sur 3 à 6 mois, de manière progressive et durable." },
                { q: "Est-ce que je dois me déplacer à Tresses pour suivre le programme ?", a: "Non. Le Programme 30 Jours est 100% en ligne. Le seul moment en direct est le coaching hebdomadaire en visioconférence. Vous pouvez suivre le programme depuis Bordeaux, la Gironde, Paris, Lyon, ou n'importe où en France." },
                { q: "Quelle est la différence avec un régime classique ?", a: "Un régime classique restreint les aliments, compte les calories et ignore les émotions (taux d'échec 95%). La méthode AGP, conçue à Bordeaux, n'interdit aucun aliment, respecte votre chronobiologie, travaille sur les émotions et vous accompagne chaque semaine." },
                { q: "Et si j'ai déjà tout essayé pour perdre du poids ?", a: "C'est justement pour vous que cette méthode existe. Si les régimes ne marchent pas, c'est normal : ils ne traitent pas la vraie cause. AGP s'adresse aux personnes en Gironde et partout en France qui veulent une solution durable." },
                { q: "Y a-t-il une garantie ?", a: "Oui. Garantie satisfait ou remboursé 7 jours. Si après une semaine le programme ne vous convient pas, vous êtes remboursé intégralement." },
                { q: "Le programme est-il adapté aux hommes ?", a: "Absolument. Environ 30% de nos participants sont des hommes. La méthode est basée sur la science (chronobiologie, neurosciences), pas sur des concepts genrés." },
                { q: "Puis-je suivre le programme avec un traitement médical ?", a: "Vous devez en informer votre médecin avant de commencer. La méthode AGP n'est pas un traitement médical, c'est un accompagnement bien-être." }].
                map((item, i) =>
                <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left font-semibold text-foreground">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                )}
              </Accordion>
            </section>

          </div>
        </article>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Prêt(e) à perdre du poids durablement ?
            </h2>
            <p className="text-muted-foreground mb-4">
              Programme 30 Jours AGP — <strong>90€ au lieu de 149€</strong> — Garantie satisfait ou remboursé 7 jours.
            </p>
            <p className="text-muted-foreground mb-8">
              100% en ligne • Accessible depuis Bordeaux, Gironde et toute la France
            </p>
            <Button asChild size="lg" className="hover:scale-105 transition-transform">
              <a
                href="https://ericgata.thrivecart.com/httpsbuystripecom14a4gzetc8fu1qtekqc3m02/"
                target="_blank"
                rel="noopener noreferrer">

                Je réserve mon programme à 90€
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>);

};

export default BlogPertePoidsRegime;