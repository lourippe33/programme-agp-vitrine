import { Star, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    icon: Star,
    label: "Note Google",
    value: "5/5",
    sub: "55 avis clients",
  },
  {
    icon: Users,
    label: "Expertise",
    value: "10 ans",
    sub: "Méthode AGP",
  },
  {
    icon: GraduationCap,
    label: "Praticiens formés",
    value: "450+",
    sub: "à notre méthode",
  },
];

const WhyChooseUs = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            🌟 Une méthode éprouvée pour une perte de poids durable
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
            Le Programme AGP combine hypnose, chronobiologie et accompagnement personnalisé
            pour vous aider à retrouver un poids santé de manière naturelle et durable.
            Une approche holistique qui agit sur vos émotions, vos habitudes alimentaires
            et votre bien-être global.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-8 rounded-xl shadow-soft border border-border hover:shadow-warm transition-all"
                >
                  <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h3>
                  <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.sub}</p>
                </div>
              );
            })}
          </div>

          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-gradient-primary hover:shadow-strong transition-all hover:scale-105 text-lg px-8 py-6"
          >
            Prendre rendez-vous
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
