import { TrendingDown, Frown, UserX } from "lucide-react";

const FailedDietsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Vous en avez assez des régimes sans résultats ?
          </h2>
          <p className="text-lg md:text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Vous n'êtes pas seul(e). Comme des milliers de personnes, vous méritez une approche qui fonctionne vraiment.
          </p>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-soft transition-all text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <TrendingDown className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Régimes yoyo</h3>
              <p className="text-muted-foreground">
                Perdre du poids... pour le reprendre quelques semaines plus tard. Un cycle épuisant qui sape la motivation.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-soft transition-all text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Frown className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Frustration et privations</h3>
              <p className="text-muted-foreground">
                Interdit de ci, obligé de ça. Les régimes traditionnels créent une relation anxieuse avec la nourriture.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-soft transition-all text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <UserX className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Perte de confiance en soi</h3>
              <p className="text-muted-foreground">
                Chaque échec renforce la croyance que "je n'y arriverai jamais". Nous allons changer cette histoire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FailedDietsSection;
