import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LocalIntro from "@/components/LocalIntro";
import SEOContent from "@/components/SEOContent";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Formation from "@/components/Formation";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import ZoneIntervention from "@/components/ZoneIntervention";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import WeightLossPopup from "@/components/WeightLossPopup";

const Index = () => {
    useEffect(() => {
          document.title = "Programme AGP – Perte de poids durable en France | Méthode AGP + Neurofeedback";
          const metaDescription = document.querySelector('meta[name="description"]');
          const descContent = "Programme AGP – Accompagnement Gestion du Poids. Programme 30 Jours combinant hypnose, chronobiologie et neurofeedback pour une perte de poids durable. Accessible partout en France en ligne ou en cabinet à Tresses (Bordeaux).";
          if (metaDescription) {
                  metaDescription.setAttribute("content", descContent);
          }

                  let metaKeywords = document.querySelector('meta[name="keywords"]');
          if (!metaKeywords) {
                  metaKeywords = document.createElement("meta");
                  metaKeywords.setAttribute("name", "keywords");
                  document.head.appendChild(metaKeywords);
          }
          metaKeywords.setAttribute("content", "programme AGP, perte de poids durable, accompagnement gestion du poids, méthode AGP, neurofeedback, hypnose perte de poids, programme 30 jours, bordeaux, france");

                  // Open Graph
                  const setOgMeta = (property: string, content: string) => {
                          let tag = document.querySelector(`meta[property="${property}"]`);
                          if (!tag) {
                                    tag = document.createElement("meta");
                                    tag.setAttribute("property", property);
                                    document.head.appendChild(tag);
                          }
                          tag.setAttribute("content", content);
                  };

                  setOgMeta("og:title", "Programme AGP – Perte de poids durable en France | Méthode AGP + Neurofeedback");
          setOgMeta("og:description", "Programme AGP – Accompagnement Gestion du Poids. Programme 30 Jours combinant hypnose, chronobiologie et neurofeedback pour une perte de poids durable. Accessible partout en France.");
          setOgMeta("og:type", "website");
          setOgMeta("og:url", "https://programme-agp.fr");

                  // Schema Markup LocalBusiness
                  const structuredData = document.createElement("script");
          structuredData.type = "application/ld+json";
          structuredData.setAttribute("data-homepage-schema", "true");
          structuredData.textContent = JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "LocalBusiness",
                  "@id": "https://programme-agp.fr/#business",
                  "name": "Programme AGP – Accompagnement Gestion du Poids",
                  "alternateName": "Eric Gata - Méthode AGP",
                  "description": "Programme AGP : perte de poids durable par hypnose, chronobiologie et neurofeedback. Cabinet à Tresses (Bordeaux), accessible partout en France en ligne.",
                  "url": "https://programme-agp.fr",
                  "telephone": "+33782386621",
                  "priceRange": "90€-690€",
                  "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "9 Galerie Marchande",
                            "addressLocality": "Tresses",
                            "postalCode": "33370",
                            "addressRegion": "Gironde",
                            "addressCountry": "FR"
                  },
                  "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "44.8386",
                            "longitude": "-0.4676"
                  },
                  "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                            "opens": "09:00",
                            "closes": "19:00"
                  },
                  "areaServed": [
                    { "@type": "Country", "name": "France" },
                    { "@type": "City", "name": "Bordeaux" },
                    { "@type": "City", "name": "Tresses" },
                    { "@type": "AdministrativeArea", "name": "Gironde" }
                          ],
                  "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "5",
                            "reviewCount": "55"
                  },
                  "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Programme AGP – Services",
                            "itemListElement": [
                              {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                            "@type": "Service",
                                                            "name": "Programme Perte de Poids 30 Jours AGP",
                                                            "price": "90",
                                                            "priceCurrency": "EUR"
                                            }
                              },
                              {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                            "@type": "Service",
                                                            "name": "Neurofeedback Dynamique"
                                            }
                              }
                                      ]
                  }
          });

                  // Remove old schema if present
                  const oldSchema = document.querySelector('script[data-homepage-schema]');
          if (oldSchema) oldSchema.remove();
          document.head.appendChild(structuredData);

                  return () => {
                          if (structuredData.parentNode) {
                                    structuredData.parentNode.removeChild(structuredData);
                          }
                  };
    }, []);

    return (
          <div className="min-h-screen">
                <Header />
                <main>
                        <Hero />
                        <LocalIntro />
                        <SEOContent />
                        <Services />
                        <WhyChooseUs />
                        <Formation />
                        <About />
                        <Reviews />
                        <Contact />
                        <ZoneIntervention />
                </main>main>
                <Footer />
                <ChatBot />
                <WeightLossPopup />
          </div>div>
        );
};

export default Index;</div>
