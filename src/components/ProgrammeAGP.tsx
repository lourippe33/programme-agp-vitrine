import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Target, Smartphone, Users } from "lucide-react";
import logoProgramme from "@/assets/logo-programme-30-jours.jpg";

const ProgrammeAGP = () => {
  return (
    <section id="programme" className="py-24 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <div className="inline-block p-3 bg-gradient-primary rounded-2xl mb-4">
              <Target className="text-white" size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Programme Perte de Poids 30 Jours
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Vous cherchez une solution pour perdre du poids durablement ? Découvrez notre programme AGP 30 jours !
            </p>
          </div>

          {/* Main Card */}
          <Card className="border-0 shadow-strong overflow-hidden bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-heading">Programme complet et accessible</CardTitle>
              <CardDescription className="text-base font-light">
                30 jours d'accompagnement personnalisé avec hypnose, chronobiologie et coaching
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <Calendar className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">30 jours de programme</h4>
                    <p className="text-sm text-muted-foreground">Structuré et progressif, à votre rythme</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <Users className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">4 séances de coaching en visio</h4>
                    <p className="text-sm text-muted-foreground">Suivi personnalisé hebdomadaire</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <Smartphone className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Application mobile dédiée</h4>
                    <p className="text-sm text-muted-foreground">Audios d'hypnose et protocoles EFT-H</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <Target className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Accès depuis toute la France</h4>
                    <p className="text-sm text-muted-foreground">100% en ligne avec suivi en visio</p>
                  </div>
                </div>
              </div>

              {/* Programme Image */}
              <div className="rounded-xl overflow-hidden shadow-soft">
                <img
                  src={logoProgramme}
                  alt="Programme AGP 30 Jours – Perte de Poids Durable"
                  className="w-full h-auto object-cover"
                  width="1200"
                  height="800"
                  loading="lazy"
                />
              </div>

              {/* Benefits List */}
              <div className="bg-gradient-to-r from-secondary/5 to-primary/5 p-6 rounded-xl">
                <h4 className="font-semibold text-lg mb-4 text-left">Ce que comprend le programme :</h4>
                <div className="space-y-4 text-left">
                  <p>
                    <strong>Application mobile dédiée</strong> – Chaque jour, des indications claires, des conseils alimentaires basés sur la chronobiologie, et des exercices courts pour intégrer de nouveaux comportements.
                  </p>
                  <p>
                    <strong>Techniques guidées</strong> – Audios d'hypnose, PNE, bulle 3p pour apaiser les envies impulsives, diminuer le stress et relâcher le besoin de compenser avec la nourriture.
                  </p>
                  <p>
                    <strong>Suivi hebdomadaire personnalisé</strong> – 4 séances en visio pendant 30 jours pour ajuster, soutenir, encourager et maintenir l'élan.
                  </p>
                  <p>
                    <strong>Communauté WhatsApp</strong> – Échanges entre participants et réponses à vos questions tout au long du programme.
                  </p>
                  <p>
                    <strong>Sans régime ni frustration</strong> – Ce n'est pas un régime. Le but est que vous retrouviez votre pouvoir, naturellement, en changeant votre relation avec la nourriture.
                  </p>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-xl text-center">
                <p className="text-3xl font-bold text-primary mb-2">
                  90€
                </p>
                <p className="text-sm text-muted-foreground mb-4">Offre de lancement au lieu de 149€</p>
              </div>

              {/* CTA */}
              <div className="text-center pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:shadow-strong transition-all text-lg px-8 py-6 hover:scale-105"
                  asChild
                >
                  <a href="https://ericgata.thrivecart.com/httpsbuystripecom14a4gzetc8fu1qtekqc3m02/" target="_blank" rel="noopener noreferrer">
                    Je commence ma transformation à 90€
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgrammeAGP;
