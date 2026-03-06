import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const CGV = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Conditions Générales de Vente - AGP Méthodes Douces Bordeaux";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Conditions générales de vente des prestations d'hypnose, EFT-H et neurofeedback dynamique à Tresses près de Bordeaux."
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
            <h1>🧾 Conditions Générales de Vente (CGV)</h1>

            <section>
              <h2>1. Présentation</h2>
              <p>
                Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre :
              </p>
              <div className="bg-muted p-4 rounded-lg my-4">
                <p className="mb-2"><strong>Eric GATA GUERRA</strong></p>
                <p className="mb-2">Auto-entrepreneur – SIRET : 813 904 729 00015</p>
                <p className="mb-2">Siège social : 9 Galerie Marchande – 33370 Tresses</p>
                <p className="mb-2">E-mail : eric.gata@gmail.com</p>
                <p>Téléphone : 06 52 21 77 45</p>
              </div>
              <p>
                Ci-après dénommé <strong>le Prestataire</strong>, et toute personne physique ou morale souhaitant bénéficier 
                d'un accompagnement ou d'une formation, ci-après dénommée <strong>le Client</strong>.
              </p>
              <p>
                Le site internet accessible à l'adresse <strong>https://www.methodes-douces-bordeaux.fr</strong> présente 
                l'activité du Prestataire et permet la prise de contact ou de rendez-vous.
              </p>
            </section>

            <section>
              <h2>2. Prestations proposées</h2>
              <p>Le Prestataire propose les services suivants :</p>
              <ul>
                <li>Séances d'hypnose,</li>
                <li>Séances d'EFT-H (Emotional Freedom Techniques – Hypnose),</li>
                <li>Séances de neurofeedback dynamique,</li>
                <li>Formations et accompagnements professionnels dans le domaine du bien-être.</li>
              </ul>
              <p>
                Les séances peuvent être réalisées en présentiel au cabinet de Tresses ou, dans certains cas, à distance (visioconférence).
              </p>
              <p>
                Ces accompagnements relèvent du bien-être et du développement personnel et <strong>ne se substituent à aucun suivi 
                médical ou psychologique</strong>.
              </p>
            </section>

            <section>
              <h2>3. Prise de rendez-vous et commande</h2>
              <p>Les rendez-vous peuvent être pris :</p>
              <ul>
                <li>via le formulaire de contact du site,</li>
                <li>par téléphone,</li>
                <li>ou par e-mail.</li>
              </ul>
              <p>
                Toute demande de rendez-vous implique l'acceptation pleine et entière des présentes conditions générales.
              </p>
            </section>

            <section>
              <h2>4. Tarifs et modalités de paiement</h2>
              <p>
                Les tarifs sont indiqués en euros, toutes taxes comprises (TTC). Le paiement s'effectue directement au cabinet 
                (espèces, chèque, virement, ou paiement en ligne si disponible).
              </p>
              <p>
                Le Prestataire se réserve le droit de modifier ses tarifs à tout moment, mais les prestations sont facturées 
                sur la base du tarif en vigueur au moment de la réservation.
              </p>
            </section>

            <section>
              <h2>5. Annulation et report</h2>
              <p>
                Toute séance annulée ou reportée par le Client doit l'être <strong>au moins 24 heures à l'avance</strong>. 
                Passé ce délai, la séance pourra être considérée comme due sauf cas de force majeure.
              </p>
              <p>
                Le Prestataire se réserve également le droit d'annuler ou reporter une séance en cas d'imprévu ou de force majeure, 
                sans indemnisation autre que le remboursement ou le report du rendez-vous.
              </p>
            </section>

            <section>
              <h2>6. Responsabilité</h2>
              <p>
                Les accompagnements proposés par le Prestataire sont des méthodes d'aide et de soutien dans le cadre du bien-être. 
                Ils ne constituent ni un traitement médical, ni un acte de kinésithérapie, de psychologie ou de psychothérapie.
              </p>
              <p>
                Le Client reste entièrement responsable de son état de santé et de toute décision personnelle prise à la suite d'une séance.
              </p>
            </section>

            <section>
              <h2>7. Données personnelles</h2>
              <p>
                Les informations personnelles collectées (nom, prénom, e-mail, téléphone, etc.) sont utilisées uniquement dans le 
                cadre de la relation client et ne sont jamais vendues ni transmises à des tiers.
              </p>
              <p>
                Pour plus de détails, se reporter à la <a href="/confidentialite">Politique de confidentialité</a>.
              </p>
            </section>

            <section>
              <h2>8. Propriété intellectuelle</h2>
              <p>
                L'ensemble des éléments présents sur le site (textes, logos, visuels, contenus de formation) reste la propriété 
                exclusive d'Eric GATA GUERRA. Toute reproduction ou diffusion sans autorisation préalable est strictement interdite.
              </p>
            </section>

            <section>
              <h2>9. Litiges et droit applicable</h2>
              <p>
                Les présentes conditions sont soumises au droit français. En cas de litige, les parties rechercheront une solution amiable. 
                À défaut, la juridiction compétente sera celle du tribunal de Bordeaux.
              </p>
            </section>

            <section>
              <h2>10. Acceptation</h2>
              <p>
                Le fait de réserver une séance ou de suivre une formation implique l'adhésion pleine et entière aux présentes 
                conditions générales de vente.
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CGV;
