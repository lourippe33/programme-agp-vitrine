import { Brain, Clock, Smartphone, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FourPillars = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Les 4 Piliers de la Méthode AGP
          </h2>
          <p className="text-lg md:text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Une approche intégrative unique qui agit sur toutes les dimensions de votre rapport au poids.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-soft transition-all">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                  <Brain className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    Hypnose & Coaching : Le Déclic Profond
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Changez enfin votre regard sur l'alimentation. Grâce à l'hypnose et nos 4 suivis en direct, nous agissons au cœur de vos comportements pour ancrer de nouvelles habitudes sans effort ni frustration.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-soft transition-all">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    Chronobiologie : L'Alliance avec votre Corps
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Arrêtez les privations inutiles. En synchronisant vos repas avec vos besoins naturels, vous réveillez votre métabolisme. Retrouvez votre poids de forme simplement, en respectant votre horloge interne.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-soft transition-all">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                  <Smartphone className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    Application Dédiée : Votre Allié 24h/24
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ne soyez jamais seul face à vos envies. Audios d'hypnose, protocoles EFT-H et exercices guidés sont accessibles en un clic, dès que vous en avez besoin. Votre transformation ne s'arrête jamais.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-soft transition-all">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    Suivi Personnalisé : Le Partenariat Réussite
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Parce que votre quotidien ne ressemble à aucun autre, je vous guide pas à pas. Profitez d'un accompagnement bienveillant et 100% sur-mesure pour atteindre vos objectifs à votre rythme, sans pression.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={() => navigate("/programme-30-jours")}
              className="bg-gradient-primary hover:shadow-strong text-lg px-8 py-6 hover:scale-105 transition-transform"
            >
              Découvrir la méthode complète
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourPillars;
