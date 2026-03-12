import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo-agp.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Pages avec header transparent avec effet fondu
  const pagesWithTransparentHeader = ["/", "/blog", "/programme-30-jours"];
  const hasTransparentHeader = pagesWithTransparentHeader.includes(location.pathname);

  // Page Programme a besoin de texte foncé car l'image est claire en haut
  const shouldUseDarkText = location.pathname === "/programme-30-jours";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Le header est transparent sur les pages avec hero et au top de la page
  const shouldUseTransparentHeader = hasTransparentHeader && !isScrolled;

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navigateToAbout = () => {
    setIsMenuOpen(false);
    navigate("/a-propos");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const navigateToProgramme = () => {
    setIsMenuOpen(false);
    navigate("/programme-30-jours");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const navigateToBlog = () => {
    setIsMenuOpen(false);
    navigate("/blog");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const navigateToHome = () => {
    setIsMenuOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      shouldUseTransparentHeader
        ? "bg-transparent"
        : "bg-background/95 backdrop-blur-sm border-b border-border shadow-soft"
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={handleLogoClick}>
            <img
              src={logo}
              alt="Logo Programme AGP – Accompagnement Gestion du Poids"
              className="h-12 w-auto"
              width="48"
              height="48"
              loading="lazy"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={navigateToHome}
              className={`transition-colors font-medium ${
                shouldUseTransparentHeader
                  ? shouldUseDarkText
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-white/80"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Accueil
            </button>

            <button
              onClick={navigateToProgramme}
              className={`relative transition-colors font-medium ${
                shouldUseTransparentHeader
                  ? shouldUseDarkText
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-white/80"
                  : "text-foreground hover:text-primary"
              }`}
            >
              <span className="relative inline-flex items-center gap-2">
                Programme Perte de Poids
                <span className="bg-blue-500 text-white px-2 py-0.5 rounded-full animate-pulse text-xs whitespace-nowrap">
                  🔥 NOUVEAU
                </span>
              </span>
            </button>

            <button
              onClick={() => scrollToSection("formation")}
              className={`transition-colors font-medium ${
                shouldUseTransparentHeader
                  ? shouldUseDarkText
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-white/80"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Formation AGP
            </button>

            <button
              onClick={navigateToAbout}
              className={`transition-colors font-medium ${
                shouldUseTransparentHeader
                  ? shouldUseDarkText
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-white/80"
                  : "text-foreground hover:text-primary"
              }`}
            >
              À propos
            </button>

            <button
              onClick={navigateToBlog}
              className={`transition-colors font-medium ${
                shouldUseTransparentHeader
                  ? shouldUseDarkText
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-white/80"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Blog
            </button>

            <button
              onClick={() => window.open('https://appli.programme-agp.fr/', '_blank', 'noopener,noreferrer')}
              className={`transition-all font-medium px-3 py-1.5 rounded-lg ${
                shouldUseTransparentHeader
                  ? shouldUseDarkText
                    ? "text-foreground hover:text-primary border border-primary/30 hover:bg-primary/5"
                    : "text-white border border-white/30 hover:bg-white/10"
                  : "text-foreground hover:text-primary border border-primary/30 hover:bg-primary/5"
              }`}
            >
              Mon appli AGP
            </button>

            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-primary hover:shadow-strong transition-all hover:scale-105"
            >
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              shouldUseTransparentHeader
                ? shouldUseDarkText
                  ? "text-foreground"
                  : "text-white"
                : "text-foreground"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={`md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in rounded-lg p-4 ${
            shouldUseTransparentHeader ? "bg-black/30 backdrop-blur-md" : "bg-background/50"
          }`}>
            <button
              onClick={navigateToHome}
              className={`text-left transition-colors font-medium py-2 ${
                shouldUseTransparentHeader
                  ? "text-white hover:text-white/80"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Accueil
            </button>

            <button
              onClick={navigateToProgramme}
              className={`text-left transition-colors font-medium py-2 ${
                shouldUseTransparentHeader
                  ? "text-white hover:text-white/80"
                  : "text-foreground hover:text-primary"
              }`}
            >
              <span className="flex items-center gap-2">
                Programme Perte de Poids
                <span className="bg-blue-500 text-white px-2 py-0.5 rounded-full animate-pulse text-xs whitespace-nowrap">
                  🔥 NOUVEAU
                </span>
              </span>
            </button>

            <button
              onClick={() => scrollToSection("formation")}
              className={`text-left transition-colors font-medium py-2 ${
                shouldUseTransparentHeader
                  ? "text-white hover:text-white/80"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Formation AGP
            </button>

            <button
              onClick={navigateToAbout}
              className={`text-left transition-colors font-medium py-2 ${
                shouldUseTransparentHeader
                  ? "text-white hover:text-white/80"
                  : "text-foreground hover:text-primary"
              }`}
            >
              À propos
            </button>

            <button
              onClick={navigateToBlog}
              className={`text-left transition-colors font-medium py-2 ${
                shouldUseTransparentHeader
                  ? "text-white hover:text-white/80"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Blog
            </button>

            <button
              onClick={() => {
                window.open('https://appli.programme-agp.fr/', '_blank', 'noopener,noreferrer');
                setIsMenuOpen(false);
              }}
              className={`text-left transition-colors font-medium py-2 ${
                shouldUseTransparentHeader
                  ? "text-white hover:text-white/80"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Mon appli AGP
            </button>

            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-primary w-full hover:scale-105 transition-transform"
            >
              Contact
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
