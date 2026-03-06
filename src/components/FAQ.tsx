import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Tout ce que vous devez savoir sur la méthode AGP
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                La méthode AGP est-elle un régime ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Non, la méthode AGP n'est pas un régime. C'est une approche globale qui combine hypnose, coaching, chronobiologie et accompagnement personnalisé. L'objectif n'est pas de vous priver, mais de vous aider à retrouver une relation saine et apaisée avec la nourriture, en respectant les besoins naturels de votre corps.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                Combien de temps dure le programme ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Le Programme 30 Jours AGP est structuré sur 30 jours avec un suivi hebdomadaire personnalisé en visioconférence. Vous bénéficiez également d'un accès à l'application dédiée avec des ressources disponibles 24h/24. Après ces 30 jours, vous pouvez continuer à utiliser les outils et techniques appris pour maintenir vos résultats sur le long terme.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                Est-ce que le programme fonctionne si je n'habite pas à Bordeaux ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Absolument ! Le Programme 30 Jours AGP est 100% accessible en ligne, où que vous soyez en France ou ailleurs. Les séances de suivi se font en visioconférence depuis mon cabinet à Tresses (33370), ce qui vous permet de bénéficier du même accompagnement de qualité sans vous déplacer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                Quel est le tarif du programme ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Le Programme 30 Jours AGP est actuellement proposé en offre de lancement à 90€ au lieu de 149€. Ce tarif inclut : l'accès à l'application mobile dédiée, 4 séances de coaching en visio, des audios d'hypnose et protocoles EFT-H, un suivi personnalisé pendant 30 jours, et l'accès à la communauté WhatsApp.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                Quels résultats puis-je espérer ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Les résultats varient d'une personne à l'autre, car chaque parcours est unique. Cependant, nos participants rapportent généralement une perte de poids progressive et durable, une meilleure relation avec la nourriture, moins de compulsions alimentaires, une confiance en soi renforcée, et surtout : une transformation qui perdure sans effet yoyo. L'objectif est un changement durable, pas une solution temporaire.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                Ai-je besoin d'un équipement particulier ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Vous avez simplement besoin d'un smartphone ou d'une tablette pour accéder à l'application AGP, et d'une connexion internet pour les séances de suivi en visioconférence. Aucun matériel spécifique n'est nécessaire. Tout est conçu pour être simple et accessible.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                Le programme est-il adapté à ma situation personnelle ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                La méthode AGP est conçue pour s'adapter à votre situation personnelle. Lors du premier suivi, nous évaluons ensemble votre profil, vos objectifs et vos contraintes. L'application vous guide en fonction de votre rythme, et si vous faites face à des difficultés émotionnelles plus profondes (trauma, anxiété intense), je vous orienterai vers un accompagnement complémentaire adapté. Vous n'êtes jamais seul(e).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
