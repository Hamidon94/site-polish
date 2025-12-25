import { Button } from "@/components/ui/button";
import { Phone, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

interface CTAIntermediateProps {
  title?: string;
  subtitle?: string;
  phoneNumber?: string;
  variant?: "primary" | "secondary" | "accent";
}

const CTAIntermediate = ({
  title = "Besoin d'un devis personnalisé ?",
  subtitle = "Nos experts sont disponibles pour étudier votre projet et vous proposer une solution sur mesure.",
  phoneNumber = "06 61 51 64 30",
  variant = "primary"
}: CTAIntermediateProps) => {
  const bgClass = variant === "primary" 
    ? "bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10"
    : variant === "accent"
    ? "bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10"
    : "bg-secondary/50";

  return (
    <section className={`py-12 ${bgClass} relative overflow-hidden`}>
      <div className="absolute inset-0 pattern-dots opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              {title}
            </h3>
            <p className="text-muted-foreground mb-6 text-sm md:text-base">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/#quote">
                <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-shadow">
                  <FileText className="w-4 h-4" />
                  Demander un devis gratuit
                </Button>
              </Link>
              <a href={`tel:${phoneNumber.replace(/\s/g, '')}`}>
                <Button variant="outline" size="lg" className="gap-2 border-primary text-primary hover:bg-primary/10">
                  <Phone className="w-4 h-4" />
                  {phoneNumber}
                </Button>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTAIntermediate;
