import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const navLinks = [
    { label: "Services", href: "/#services" },
    { label: "À Propos", href: "/#about" },
    { label: "Devis", href: "/#quote" },
    { label: "Contact", href: "/#contact" },
  ];
  const contactInfo = content.company.contact;

  const HEADER_HEIGHT = 80; // Hauteur du header en pixels (h-20)

  const performScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - HEADER_HEIGHT;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    
    if (location.pathname !== "/") {
      navigate("/#" + id);
      // Utiliser un timeout pour s'assurer que la navigation est terminée avant de scroller
      setTimeout(() => {
        performScroll(id);
      }, 100);
    } else {
      performScroll(id);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">HD</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">HD Connect</h1>
              <p className="text-xs text-muted-foreground">Sécurité & Technologie</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href.replace("/#", ""))}
                className="text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a href={`tel:${contactInfo.phoneMobile}`} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-semibold text-sm">{contactInfo.phoneMobile}</span>
              </a>
              <span className="text-muted-foreground">|</span>
              <a href={`tel:${contactInfo.phoneFixe}`} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-semibold text-sm">{contactInfo.phoneFixe}</span>
              </a>
            </div>
            <Button onClick={() => scrollToSection("quote")} className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Devis Gratuit
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href.replace("/#", ""))}
                  className="text-left text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a href={`tel:${contactInfo.phoneMobile}`} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.phoneMobile}</span>
              </a>
              <a href={`tel:${contactInfo.phoneFixe}`} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.phoneFixe}</span>
              </a>
              <Button onClick={() => scrollToSection("quote")} className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                Devis Gratuit
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
