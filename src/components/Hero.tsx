import { Button } from "@/components/ui/button";
import { ArrowRight, LayoutDashboard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBackground from "@/assets/hero-background.webp";

const Hero = () => {
  const navigate = useNavigate();

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Image */}
      <picture className="absolute inset-0">
        <source media="(max-width: 640px)" srcSet={heroBackground} type="image/webp" />
        <img
          src={heroBackground}
          alt="Cabinet bien-être Tresses près de Bordeaux"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        {/* Overlay pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background/90"></div>
      </picture>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 animate-fade-in">
          <h1 className="text-3xl md:text-6xl font-heading font-bold text-foreground leading-tight">
            Perdre du Poids Durable à Bordeaux, en Gironde et en France
          </h1>

          <h2 className="text-xl md:text-2xl font-heading font-semibold text-foreground/90">
            Programme 30 Jours AGP — créé à Bordeaux par un praticien local,
            accessible partout en France en visioconférence ou en cabinet à Tresses (33370).
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-4 md:pt-6">
            <Button
              size="lg"
              onClick={() => navigate("/programme-30-jours")}
              className="bg-gradient-primary hover:shadow-strong transition-all text-base md:text-lg px-6 md:px-8 py-5 md:py-6 group w-full sm:w-auto hover:scale-105"
            >
              Découvrir le Programme 30 Jours
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary/10 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto hover:scale-105 transition-transform"
              asChild
            >
              <a
                href="https://app.programme-agp.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LayoutDashboard className="mr-2" size={20} />
                Mon appli AGP
              </a>
            </Button>
          </div>

          <div className="pt-8 md:pt-12">
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-primary font-bold">V</div>
                <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-primary font-bold">M</div>
                <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-primary font-bold">C</div>
                <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-primary font-bold">A</div>
                <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-primary font-bold">S</div>
              </div>
              <div className="flex items-center gap-1 text-amber-500">
                <span className="text-2xl">★★★★★</span>
              </div>
            </div>
            <p className="text-center text-sm md:text-base text-muted-foreground mb-8">
              4.9/5 — 55 avis Google
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
              <div
                className="space-y-1 md:space-y-2 animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="text-2xl md:text-4xl font-bold text-primary">+1000</div>
                <div className="text-xs md:text-base text-muted-foreground">
                  Personnes accompagnées
                </div>
              </div>

              <div
                className="space-y-1 md:space-y-2 animate-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="text-2xl md:text-4xl font-bold text-primary">+450</div>
                <div className="text-xs md:text-base text-muted-foreground">
                  Praticiens formés
                </div>
              </div>

              <div
                className="space-y-1 md:space-y-2 animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="text-2xl md:text-4xl font-bold text-secondary">95%</div>
                <div className="text-xs md:text-base text-muted-foreground">
                  Taux de satisfaction
                </div>
              </div>

              <div
                className="space-y-1 md:space-y-2 animate-slide-up"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-2xl md:text-4xl font-bold text-primary">10+</div>
                <div className="text-xs md:text-base text-muted-foreground">
                  Années d&apos;expérience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
    </section>
  );
};

export default Hero;
