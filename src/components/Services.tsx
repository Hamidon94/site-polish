import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Shield, Lock, Wifi, Home, Wrench, ArrowRight, Sparkles, Radio, DoorOpen } from "lucide-react";
import { content } from "@/data/content";
import { Link } from "react-router-dom";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useParallax";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import cameraImage from "@/assets/service-camera.jpg";
import alarmImage from "@/assets/service-alarm.jpg";
import accessImage from "@/assets/service-access.jpg";
import maintenanceImage from "@/assets/service-maintenance.jpg";
import reseauImage from "@/assets/service-reseau.jpg";
import domotiqueImage from "@/assets/service-domotique.jpg";
import antenneImage from "@/assets/service-antenne.jpg";
import portailImage from "@/assets/service-portail.jpg";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Camera,
  Shield,
  Lock,
  Wifi,
  Home,
  Wrench,
  Radio,
  DoorOpen,
};

const imageMap: Record<string, string> = {
  "Vidéosurveillance": cameraImage,
  "Systèmes d'Alarme": alarmImage,
  "Contrôle d'Accès": accessImage,
  "Maintenance & Dépannage": maintenanceImage,
  "Réseau & Câblage": reseauImage,
  "Domotique Sécurité": domotiqueImage,
  "Antennes & Satellite": antenneImage,
  "Portails & Parking": portailImage,
};

const colorMap: Record<string, string> = {
  "Vidéosurveillance": "from-blue-500 to-cyan-500",
  "Systèmes d'Alarme": "from-blue-600 to-blue-400",
  "Contrôle d'Accès": "from-sky-500 to-cyan-500",
  "Maintenance & Dépannage": "from-indigo-500 to-blue-500",
  "Réseau & Câblage": "from-blue-700 to-blue-500",
  "Domotique Sécurité": "from-cyan-500 to-sky-500",
  "Antennes & Satellite": "from-blue-500 to-indigo-500",
  "Portails & Parking": "from-sky-600 to-blue-500",
};

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, visibleItems } = useStaggeredAnimation(content.services.items.length, 100);
  const { scrollToSection } = useSmoothScroll();

  return (
    <section id="services" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with animation */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-10 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="badge-accent mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Solutions Complètes</span>
          </div>
          <h2 className="section-title text-center">
            {content.services.title}
          </h2>
          <p className="section-subtitle text-center">
            {content.services.subtitle}
          </p>
        </div>

        {/* Services Grid with staggered animation */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {content.services.items.map((service, index) => {
            const Icon = iconMap[service.icon] || Camera;
            const image = imageMap[service.title];
            const colorClass = colorMap[service.title] || "from-primary to-accent";
            
            return (
              <Card 
                key={index} 
                className={`group hover-lift overflow-hidden bg-card border-border/50 hover:border-primary/30 transition-all duration-500 flex flex-col h-full ${visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image with parallax hover effect */}
                <div className="relative h-44 overflow-hidden flex-shrink-0">
                  <img 
                    src={image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                  
                  {/* Floating Icon with bounce on hover */}
                  <div className={`absolute bottom-4 left-4 w-14 h-14 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                <CardHeader className="pt-4 flex-grow">
                  <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0 mt-auto">
                  <Link to={service.link} className="w-full block">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-center gap-2 group/btn hover:bg-primary/5 hover:text-primary transition-all duration-300"
                    >
                      <span>En savoir plus</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-muted-foreground mb-4">
            Vous ne trouvez pas ce que vous cherchez ?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection("quote", { mode: "quote" })}
            className="border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105"
          >
            Contactez-nous pour un projet sur mesure
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;