import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Target, Smartphone, Users } from "lucide-react";
import { Link } from "react-router-dom";
import logoProgramme from "@/assets/logo-programme-30-jours.jpg";

const ProgrammeAGP = () => {
  return (
    <section id="programme" className="py-24 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4 animate-pulse">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm font-semibold text-primary">Nouveau Programme</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Programme Perte de Poids 30 Jours
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              30 jours pour reprendre le contrôle en douceur, naturellement.
            </p>
          </div>

          <div className="mb-8 text-center">
            <img
              src={logoProgramme}
              alt="Logo Programme AGP 30 Jours – Perte de Poids Bordeaux"
              className="w-48 h-48 mx-auto rounded-full shadow-lg object-cover"
            />
          </div>

          <Card className="border-0 shadow-soft overflow-hidden bg-card/80 backdrop-blur-sm mb-8">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span>🌿</span> Défi minceur 30 jours
              </h3>
              <p className="text-foreground/80">
                Le programme AGP a été conçu pour vous permettre de sortir de cette bataille intérieure, sans régime, sans frustration, et sans culpabilité.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3 p-4 bg-card rounded-lg shadow-soft">
              <Calendar className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold mb-1">30 jours de programme</h4>
                <p className="text-sm text-muted-foreground">Structuré et progressif, à votre rythme</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-card rounded-lg shadow-soft">
              <Users className="text-secondary flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold mb-1">4 séances de coaching en visio</h4>
                <p className="text-sm text-muted-foreground">Suivi personnalisé hebdomadaire</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-card rounded-lg shadow-soft">
              <Smartphone className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold mb-1">Application mobile dédiée</h4>
                <p className="text-sm text-muted-foreground">Audios d'hypnose et protocoles EFT-H</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-card rounded-lg shadow-soft">
              <Target className="text-secondary flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold mb-1">Accès depuis toute la France</h4>
                <p className="text-sm text-muted-foreground">100% en ligne avec suivi en visio</p>
              </div>
            </div>
          </div>

          <Card className="border-2 border-primary/20 shadow-strong overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
            <CardContent className="p-8 text-center space-y-6">
              <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
                <span>🚀</span> Offre de Lancement
              </h3>
              <div>
                <p className="text-5xl font-bold text-primary mb-2">90€</p>
                <p className="text-lg text-muted-foreground line-through">au lieu de 149€</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:shadow-strong transition-all text-lg px-8 py-6 hover:scale-105"
                  asChild
                >
                  <a href="https://ericgata.thrivecart.com/httpsbuystripecom14a4gzetc8fu1qtekqc3m02/" target="_blank" rel="noopener noreferrer">
                    Je commence ma transformation
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 hover:scale-105 transition-all"
                  asChild
                >
                  <Link to="/programme-30-jours">
                    En savoir plus
                  </Link>
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
