import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Confidentialite = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Politique de Confidentialité - AGP Méthodes Douces Bordeaux";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Politique de confidentialité et protection des données personnelles (RGPD) du site AGP Méthodes Douces."
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Button>

          <article className="prose prose-lg max-w-4xl mx-auto">
            <h1>🔒 Politique de Confidentialité (RGPD)</h1>

            <section>
              <h2>1. Responsable du traitement</h2>
              <p>Le responsable du traitement des données personnelles est :</p>
              <div className="bg-muted p-4 rounded-lg my-4">
                <p className="mb-2"><strong>Eric GATA GUERRA – Auto-entrepreneur</strong></p>
                <p className="mb-2">9 Galerie Marchande – 33370 Tresses</p>
                <p>E-mail : eric.gata@gmail.com</p>
              </div>
            </section>

            <section>
              <h2>2. Données collectées</h2>
              <p>Les informations collectées via le site sont :</p>
              <ul>
                <li>Nom et prénom</li>
                <li>Adresse e-mail</li>
                <li>Numéro de téléphone</li>
                <li>Message ou motif de contact</li>
              </ul>
              <p>
                Ces données sont strictement nécessaires pour répondre aux demandes des utilisateurs (prise de contact, 
                demande d'information, rendez-vous).
              </p>
            </section>

            <section>
              <h2>3. Finalité du traitement</h2>
              <p>Les données sont collectées pour :</p>
              <ul>
                <li>assurer le suivi des demandes de contact,</li>
                <li>organiser les séances ou formations,</li>
                <li>informer sur les services proposés,</li>
                <li>et, le cas échéant, envoyer des informations utiles à la relation client.</li>
              </ul>
              <p>
                <strong>Aucune donnée n'est utilisée à des fins commerciales sans consentement explicite.</strong>
              </p>
            </section>

            <section>
              <h2>4. Cookies et statistiques</h2>
              <p>Le site peut utiliser des cookies destinés à :</p>
              <ul>
                <li>améliorer la navigation de l'utilisateur,</li>
                <li>analyser la fréquentation du site via Google Analytics ou outils équivalents.</li>
              </ul>
              <p>
                Le visiteur peut refuser les cookies en paramétrant son navigateur (Chrome, Firefox, Safari, Edge…). 
                Aucun cookie publicitaire n'est installé sans consentement préalable.
              </p>
            </section>

            <section>
              <h2>5. Conservation des données</h2>
              <p>
                Les données personnelles sont conservées pendant <strong>3 ans maximum</strong> après le dernier contact. 
                Elles sont ensuite supprimées ou anonymisées.
              </p>
            </section>

            <section>
              <h2>6. Droits des utilisateurs</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), chaque utilisateur dispose d'un droit :
              </p>
              <ul>
                <li>d'accès,</li>
                <li>de rectification,</li>
                <li>d'effacement,</li>
                <li>d'opposition,</li>
                <li>et de portabilité de ses données.</li>
              </ul>
              <p>
                Toute demande doit être adressée par e-mail à <a href="mailto:eric.gata@gmail.com">eric.gata@gmail.com</a>, 
                accompagnée d'une pièce d\'identité.
              </p>
            </section>

            <section>
              <h2>7. Sécurité</h2>
              <p>
                Le site est hébergé sur des serveurs sécurisés (Netlify / OVH). Les données échangées via le formulaire de contact 
                sont protégées par le protocole HTTPS.
              </p>
              <p>
                <strong>Aucune donnée sensible</strong> (santé, religion, opinions politiques, etc.) <strong>n'est collectée</strong>.
              </p>
            </section>

            <section>
              <h2>8. Liens externes</h2>
              <p>
                Le site peut contenir des liens vers d'autres sites. Le Prestataire décline toute responsabilité concernant le 
                contenu ou la politique de confidentialité de ces sites tiers.
              </p>
            </section>

            <section>
              <h2>9. Modifications</h2>
              <p>
                Le Prestataire se réserve le droit de modifier la présente politique à tout moment. Les utilisateurs sont invités 
                à la consulter régulièrement.
              </p>
            </section>

            <section>
              <h2>10. Contact</h2>
              <p>Pour toute question relative à la gestion des données personnelles :</p>
              <p>
                📧 <a href="mailto:eric.gata@gmail.com">eric.gata@gmail.com</a>
              </p>
              <p>📍 9 Galerie Marchande – 33370 Tresses</p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Confidentialite;
