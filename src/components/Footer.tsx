import { Link, useNavigate, useLocation } from "react-router-dom";
import { Phone, MapPin, ExternalLink } from "lucide-react";
import logo from "@/assets/logo-agp.png";

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (sectionId: string) => {
          if (location.pathname !== "/") {
                  navigate("/");
                  setTimeout(() => {
                            const element = document.getElementById(sectionId);
                            if (element) {
                                        element.scrollIntoView({ behavior: "smooth" });
                            }
                  }, 100);
          } else {
                  const element = document.getElementById(sectionId);
                  if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                  }
          }
    };

    return (
          <footer className="bg-foreground/5 border-t border-border py-12">
                <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                          {/* Logo & Description */}
                                  <div className="space-y-4">
                                              <img
                                                              src={logo}
                                                              alt="Programme AGP – Accompagnement Gestion du Poids"
                                                              className="h-16 w-auto"
                                                            />
                                              <p className="text-muted-foreground text-sm">
                                                            Programme AGP – Accompagnement Gestion du Poids. Perte de poids durable par hypnose, chronobiologie et neurofeedback, créé à Tresses (Bordeaux), accessible partout en France.
                                              </p>p>
                                              <p className="text-muted-foreground text-xs italic mt-2">
                                                            Ces méthodes visent au bien-être et ne remplacent pas un suivi médical si nécessaire.
                                              </p>p>
                                  </div>div>
                        
                          {/* NAP - Name, Address, Phone */}
                                  <div>
                                              <h3 className="font-semibold mb-4">Programme AGP – Accompagnement Gestion du Poids</h3>h3>
                                              <div className="space-y-3 text-muted-foreground text-sm">
                                                            <div className="flex items-start gap-2">
                                                                            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                                                                            <address className="not-italic">
                                                                                              9 Galerie Marchande<br />
                                                                                              33370 Tresses<br />
                                                                                              <span className="text-primary font-medium">Cabinet proche de Bordeaux</span>span>
                                                                            </address>address>
                                                            </div>div>
                                                            <div className="flex items-center gap-2">
                                                                            <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                                                                            <a
                                                                                                href="tel:+33782386621"
                                                                                                className="hover:text-primary transition-colors"
                                                                                              >
                                                                                              07 82 38 66 21
                                                                            </a>a>
                                                            </div>div>
                                                            <div className="flex items-center gap-2 mt-4">
                                                                            <MapPin className="h-4 w-4 flex-shrink-0 text-primary" />
                                                                            <a
                                                                                                href="https://www.google.com/maps/dir//9+Gal+Marchande,+33370+Tresses"
                                                                                                target="_blank"
                                                                                                rel="noopener noreferrer"
                                                                                                className="hover:text-primary transition-colors text-sm"
                                                                                              >
                                                                                              Itinéraire Google Maps
                                                                            </a>a>
                                                            </div>div>
                                                            <div className="flex items-center gap-2 mt-2">
                                                                            <ExternalLink className="h-4 w-4 flex-shrink-0 text-primary" />
                                                                            <a
                                                                                                href="https://share.google/Fplupp8bDIzNgaPJo"
                                                                                                target="_blank"
                                                                                                rel="noopener noreferrer"
                                                                                                className="hover:text-primary transition-colors text-sm"
                                                                                              >
                                                                                              Fiche Google Business
                                                                            </a>a>
                                                            </div>div>
                                              </div>div>
                                  </div>div>
                        
                          {/* Liens rapides */}
                                  <div>
                                              <h3 className="font-semibold mb-4">Liens rapides</h3>h3>
                                              <ul className="space-y-2 text-muted-foreground text-sm">
                                                            <li>
                                                                            <a
                                                                                                href="/#services"
                                                                                                onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}
                                                                                                className="hover:text-primary transition-colors"
                                                                                              >
                                                                                              Prestations
                                                                            </a>a>
                                                            </li>li>
                                                            <li>
                                                                            <a
                                                                                                href="https://formation.programme-agp.fr"
                                                                                                target="_blank"
                                                                                                rel="noopener noreferrer"
                                                                                                className="hover:text-primary transition-colors"
                                                                                              >
                                                                                              Formation pro
                                                                            </a>a>
                                                            </li>li>
                                                            <li>
                                                                            <a
                                                                                                href="https://app.programme-agp.fr"
                                                                                                target="_blank"
                                                                                                rel="noopener noreferrer"
                                                                                                className="hover:text-primary transition-colors"
                                                                                              >
                                                                                              Application
                                                                            </a>a>
                                                            </li>li>
                                                            <li>
                                                                            <a
                                                                                                href="/#about"
                                                                                                onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}
                                                                                                className="hover:text-primary transition-colors"
                                                                                              >
                                                                                              À propos
                                                                            </a>a>
                                                            </li>li>
                                                            <li>
                                                                            <a
                                                                                                href="/#contact"
                                                                                                onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
                                                                                                className="hover:text-primary transition-colors"
                                                                                              >
                                                                                              Contact
                                                                            </a>a>
                                                            </li>li>
                                              </ul>ul>
                                  </div>div>
                        
                          {/* Informations légales */}
                                  <div>
                                              <h3 className="font-semibold mb-4">Informations légales</h3>h3>
                                              <ul className="space-y-2 text-muted-foreground text-sm">
                                                            <li>
                                                                            <Link to="/mentions-legales" className="hover:text-primary transition-colors">
                                                                                              Mentions légales
                                                                            </Link>Link>
                                                            </li>li>
                                                            <li>
                                                                            <Link to="/cgv" className="hover:text-primary transition-colors">
                                                                                              CGV
                                                                            </Link>Link>
                                                            </li>li>
                                                            <li>
                                                                            <Link to="/confidentialite" className="hover:text-primary transition-colors">
                                                                                              Confidentialité
                                                                            </Link>Link>
                                                            </li>li>
                                              </ul>ul>
                                  </div>div>
                        </div>div>
                
                        <div className="border-t border-border pt-8">
                                  <p className="text-center text-muted-foreground text-sm">
                                              © {new Date().getFullYear()} Programme AGP – Accompagnement Gestion du Poids. Tous droits réservés.
                                  </p>p>
                                  <p className="text-center text-muted-foreground text-xs mt-2">
                                              Médiateur de la consommation : CNPM - MEDIATION - CONSOMMATION
                                  </p>p>
                        </div>div>
                </div>div>
          </footer>footer>
        );
};

export default Footer;</footer>
