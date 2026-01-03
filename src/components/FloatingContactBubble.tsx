import { useState } from "react";
import { Phone, X, FileText } from "lucide-react";
import { content } from "@/data/content";
import { useNavigate, useLocation } from "react-router-dom";

const FloatingContactBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const contactInfo = content.company.contact;

  const HEADER_HEIGHT = 80;

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

  const scrollToQuote = () => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/#quote");
      setTimeout(() => {
        performScroll("quote");
      }, 100);
    } else {
      performScroll("quote");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Menu déroulant */}
      {isOpen && (
        <div className="bg-background border border-border rounded-2xl shadow-2xl p-4 mb-2 animate-in slide-in-from-bottom-4 fade-in duration-300">
          <div className="flex flex-col gap-3 min-w-[200px]">
            {/* Bouton Devis */}
            <button
              onClick={scrollToQuote}
              className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl hover:opacity-90 transition-all font-semibold"
            >
              <FileText className="w-5 h-5" />
              <span>Devis Gratuit</span>
            </button>

            {/* Numéro Mobile */}
            <a
              href={`tel:${contactInfo.phoneMobile}`}
              className="flex items-center gap-3 px-4 py-3 bg-muted hover:bg-muted/80 rounded-xl transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Mobile</p>
                <p className="font-semibold text-foreground">{contactInfo.phoneMobile}</p>
              </div>
            </a>

            {/* Numéro Fixe */}
            <a
              href={`tel:${contactInfo.phoneFixe}`}
              className="flex items-center gap-3 px-4 py-3 bg-muted hover:bg-muted/80 rounded-xl transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Fixe</p>
                <p className="font-semibold text-foreground">{contactInfo.phoneFixe}</p>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Bouton principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? "bg-muted-foreground rotate-0" 
            : "bg-gradient-to-br from-primary to-accent hover:scale-110 animate-pulse"
        }`}
        aria-label={isOpen ? "Fermer le menu contact" : "Ouvrir le menu contact"}
      >
        {isOpen ? (
          <X className="w-7 h-7 text-background" />
        ) : (
          <Phone className="w-7 h-7 text-primary-foreground" />
        )}
      </button>

      {/* Badge indicateur */}
      {!isOpen && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center animate-bounce">
          <span className="text-[10px] font-bold text-accent-foreground">2</span>
        </span>
      )}
    </div>
  );
};

export default FloatingContactBubble;
