import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  icon: React.ReactNode;
  badgeText: string;
  phoneNumber?: string;
  ctaText?: string;
  ctaLink?: string;
}

const ServiceHero = ({
  title,
  subtitle,
  description,
  backgroundImage,
  icon,
  badgeText,
  ctaText = "Demander un devis gratuit",
  ctaLink = "/#quote",
}: ServiceHeroProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center pt-24 md:pt-28 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-100"
          style={{ transform: `scale(1.1) translateY(${scrollY * 0.15}px)` }}
          loading="eager"
        />
        {/* Gradient overlays for better text readability - stronger on mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40 md:from-background/80 md:via-background/50 md:to-background/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent md:from-background/60 md:via-transparent"></div>
      </div>

      {/* Decorative Blobs with Parallax */}
      <div
        className="absolute top-1/4 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow hidden lg:block"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse-slow hidden lg:block"
        style={{ transform: `translateY(${scrollY * 0.2}px)`, animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="max-w-3xl bg-background/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 md:bg-transparent md:backdrop-blur-none md:rounded-none">
          {/* Badge with entrance animation */}
          <div
            className={`badge-primary mb-6 transition-all duration-700 inline-flex ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {icon}
            <span>{badgeText}</span>
          </div>

          {/* Main Heading with staggered animation */}
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-[1.1] transition-all duration-700 delay-100 drop-shadow-sm ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p
            className={`text-base md:text-lg lg:text-xl text-foreground/90 mb-8 leading-relaxed max-w-2xl transition-all duration-700 delay-200 drop-shadow-sm ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {description}
          </p>

          {/* CTA Button */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link to={ctaLink}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-base md:text-lg h-12 md:h-14 px-6 md:px-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                {ctaText}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator with bounce animation */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground">Découvrir</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
