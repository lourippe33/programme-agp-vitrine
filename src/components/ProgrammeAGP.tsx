import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Target, Smartphone, Users, MapPin, CheckCircle2, X } from "lucide-react";
import logoProgramme from "@/assets/logo-programme-30-jours.jpg";

const ProgrammeAGP = () => {
  return (
    <section id="programme" className="py-24 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
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

          {/* Programme Logo */}
          <div className="mb-8 text-center">
            <img
              src={logoProgramme}
              alt="Logo Programme AGP 30 Jours – Perte de Poids Bordeaux"
              className="w-48 h-48 mx-auto rounded-full shadow-lg object-cover"
            />
          </div>

          {/* Introduction Card */}
          <Card className="border-0 shadow-soft overflow-hidden bg-card/80 backdrop-blur-sm mb-8">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span>🌿</span> Défi minceur 30 jours
              </h3>
              <p className="text-foreground/80">
                Vous avez peut-être déjà essayé plusieurs régimes, compté les calories, supprimé des aliments, repris, re-perdu, puis reperdu confiance dans votre capacité à changer. Si c'est le cas, sachez une chose : <strong>ce n'est pas vous le problème.</strong>
              </p>
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                <p className="font-semibold text-foreground flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-primary" /> Vous habitez Bordeaux, Tresses, Libourne ou la Gironde ?
                </p>
                <p className="text-foreground/80">
                  Ce programme est 100% accessible en ligne avec un suivi personnalisé hebdomadaire en visio depuis mon cabinet à Tresses (33370).
                </p>
              </div>
              <p className="text-foreground/80">
                Le programme AGP a été conçu pour vous permettre de sortir de cette bataille intérieure, sans régime, sans frustration, et sans culpabilité.
              </p>
            </CardContent>
          </Card>

          {/* Features Grid */}
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

          {/* How it works */}
          <Card className="border-0 shadow-soft overflow-hidden bg-card/80 backdrop-blur-sm mb-8">
            <CardContent className="p-8 space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span>🧭</span> Comment Fonctionne le Programme ?
              </h3>
              <p className="text-foreground/80">
                Pendant 30 jours, vous êtes accompagné(e) étape par étape via :
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span>📱</span> Une application dédiée
                  </h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Chaque jour, des indications claires</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Des conseils alimentaires basés sur la chronobiologie</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Des exercices courts pour intégrer de nouveaux comportements</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span>🎧</span> Des techniques guidées : hypnose, PNE, bulle 3p...
                  </h4>
                  <p className="text-foreground/80 mb-2">Pour :</p>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Apaiser les envies impulsives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Diminuer le stress</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Relâcher le besoin de compenser avec la nourriture</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span>💬</span> Un suivi hebdomadaire personnalisé pendant 30 jours
                  </h4>
                  <p className="text-foreground/80 mb-2">
                    Vous n'êtes pas seul(e). Chaque semaine, nous faisons un point ensemble, en visio, pour :
                  </p>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Ajuster</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Soutenir</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Encourager</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Maintenir l'élan</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                <p className="font-semibold text-foreground flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-primary" /> Suivi depuis Tresses, et accessible partout
                </p>
                <p className="text-foreground/80">
                  Que vous soyez à Bordeaux centre, Libourne, Cenon ou ailleurs en Gironde, vous bénéficiez du même accompagnement de qualité en visio.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* What it's NOT */}
          <Card className="border-0 shadow-soft overflow-hidden bg-card/80 backdrop-blur-sm mb-8">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span>💛</span> Une Alternative aux Régimes : Méthode Douce et Durable
              </h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Ce n'est pas un régime</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Ce n'est pas du contrôle par la force</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Ce n'est pas de la restriction</span>
                </li>
              </ul>
              <p className="text-foreground/80 font-medium">
                Le but n'est pas que vous vous battiez avec vous-même. Le but est que vous retrouviez votre pouvoir, naturellement.
              </p>
            </CardContent>
          </Card>

          {/* Who is it for */}
          <Card className="border-0 shadow-soft overflow-hidden bg-card/80 backdrop-blur-sm mb-8">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span>🎯</span> Pour Qui ? Habitants de Bordeaux, Tresses, Libourne et Gironde
              </h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Si vous mangez par stress, fatigue, ennui ou vide</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Si vous avez l'impression de "perdre le contrôle"</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Si vous cherchez une solution douce mais durable</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Si vous voulez vous sentir fière, stable, alignée</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Si vous cherchez un accompagnement perte de poids à Bordeaux ou en Gironde</span>
                </li>
              </ul>
              <p className="text-lg font-semibold text-primary">Alors ce programme est pour vous.</p>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="border-0 shadow-soft overflow-hidden bg-card/80 backdrop-blur-sm mb-8">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span>🧡</span> Les Bénéfices : Retrouvez une Relation Saine avec la Nourriture
              </h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>La sensation de vous choisir</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Le plaisir de manger sans culpabilité</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Une relation plus douce avec votre corps</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Une capacité à dire stop, calmement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Et surtout : de la fierté</span>
                </li>
              </ul>
              <div className="space-y-2 text-lg font-semibold text-primary pt-4">
                <p>Cette fois-ci, vous ne serez pas seul(e).</p>
                <p>Cette fois-ci, vous avancez accompagné(e).</p>
                <p>Cette fois-ci… vous vous choisissez.</p>
              </div>
            </CardContent>
          </Card>

          {/* Price and CTA */}
          <Card className="border-2 border-primary/20 shadow-strong overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
            <CardContent className="p-8 text-center space-y-6">
              <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
                <span>🚀</span> Offre de Lancement
              </h3>
              <div>
                <p className="text-5xl font-bold text-primary mb-2">90€</p>
                <p className="text-lg text-muted-foreground line-through">au lieu de 149€</p>
              </div>
              <p className="text-foreground/80">
                Je propose actuellement ce programme à tarif réduit, pour donner un coup de boost à votre perte de poids.
              </p>
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-strong transition-all text-lg px-8 py-6 hover:scale-105"
                asChild
              >
                <a href="https://ericgata.thrivecart.com/httpsbuystripecom14a4gzetc8fu1qtekqc3m02/" target="_blank" rel="noopener noreferrer">
                  Je commence ma transformation à 90€
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgrammeAGP;
