import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";

const ChoixAccompagnement = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choisissez votre accompagnement
            </h2>
            <p className="text-lg text-muted-foreground">
              Transparent, sans surprise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Programme 30 Jours - Recommandé */}
            <div className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Recommandé
                </span>
              </div>
              <div className="bg-card border-2 border-blue-500 rounded-xl p-8 shadow-lg h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Programme 30 Jours</h3>
                  <p className="text-muted-foreground">La transformation complète</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-blue-600">90€</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Accès illimité · Garantie 7 jours
                  </p>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Application mobile dédiée</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">4 séances coaching en visio</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Hypnose + EFT-H + Chronobiologie</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Suivi personnalisé 30 jours</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Accès depuis toute la France</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  asChild
                >
                  <a
                    href="https://ericgata.thrivecart.com/httpsbuystripecom14a4gzetc8fu1qtekqc3m02/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Je commence ma transformation
                  </a>
                </Button>
              </div>
            </div>

            {/* Séance Boost Coaching - Optionnel */}
            <div className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Optionnel
                </span>
              </div>
              <div className="bg-card border border-border rounded-xl p-8 shadow-md h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Séance Boost Coaching</h3>
                  <p className="text-muted-foreground">Quand vous en avez besoin</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-blue-600">25€</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Session de 30 min · En visioconférence
                  </p>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Relance de la motivation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Réponses à vos questions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Recadrage mental ciblé</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Déblocage émotionnel rapide</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Disponible pendant & après le programme</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                  asChild
                >
                  <a
                    href="https://calendly.com/eric-gata-agp/seance-boost-coaching"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Réserver une séance
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChoixAccompagnement;
