import { Button } from "@/components/ui/button";
import { Phone, FileText, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

interface CTAIntermediateProps {
  title?: string;
  subtitle?: string;
  phoneNumber?: string;
  variant?: "primary" | "secondary" | "accent" | "gradient";
  accentColor?: "primary" | "video" | "alarme" | "acces" | "domotique" | "reseau" | "maintenance" | "antenne" | "portail";
}

const accentGradients = {
  primary: "from-primary via-accent to-primary",
  video: "from-blue-500 via-blue-600 to-blue-700",
  alarme: "from-red-500 via-red-600 to-red-700",
  acces: "from-green-500 via-green-600 to-green-700",
  domotique: "from-amber-400 via-amber-500 to-amber-600",
  reseau: "from-cyan-500 via-cyan-600 to-cyan-700",
  maintenance: "from-violet-500 via-violet-600 to-violet-700",
  antenne: "from-orange-500 via-orange-600 to-orange-700",
  portail: "from-pink-500 via-pink-600 to-pink-700",
};

const CTAIntermediate = ({
  title = "Besoin d'un devis personnalisé ?",
  subtitle = "Nos experts sont disponibles pour étudier votre projet et vous proposer une solution sur mesure.",
  phoneNumber = "06 61 51 64 30",
  variant = "primary",
  accentColor = "primary"
}: CTAIntermediateProps) => {
  const gradientClass = accentGradients[accentColor] || accentGradients.primary;
  
  const bgClass = variant === "gradient" 
    ? `bg-gradient-to-r ${gradientClass} text-white`
    : variant === "primary" 
    ? "bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10"
    : variant === "accent"
    ? "bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10"
    : "bg-secondary/50";

  const isGradient = variant === "gradient";

  return (
    <section className={`py-12 md:py-16 ${bgClass} relative overflow-hidden`}>
      {/* Background decorations */}
      <div className="absolute inset-0 pattern-dots opacity-20"></div>
      <motion.div 
        className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.1, 0.15]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="max-w-3xl mx-auto text-center">
            {/* Decorative icon */}
            <motion.div 
              className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${isGradient ? 'bg-white/20' : 'bg-primary/10'}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <Sparkles className={`w-6 h-6 ${isGradient ? 'text-white' : 'text-primary'}`} />
            </motion.div>
            
            <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${isGradient ? 'text-white' : 'text-foreground'}`}>
              {title}
            </h3>
            <p className={`mb-8 text-base md:text-lg max-w-xl mx-auto ${isGradient ? 'text-white/90' : 'text-muted-foreground'}`}>
              {subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/#quote">
                <Button 
                  size="lg" 
                  className={`gap-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group ${
                    isGradient 
                      ? 'bg-white text-primary hover:bg-white/90' 
                      : 'bg-gradient-to-r from-primary to-accent text-white'
                  }`}
                >
                  <FileText className="w-5 h-5" />
                  Demander un devis gratuit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href={`tel:${phoneNumber.replace(/\s/g, '')}`}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className={`gap-2 transition-all duration-300 hover:scale-105 ${
                    isGradient 
                      ? 'border-white/50 text-white hover:bg-white/10' 
                      : 'border-primary text-primary hover:bg-primary/10'
                  }`}
                >
                  <Phone className="w-5 h-5" />
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
