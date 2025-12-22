import { Wrench, Settings, Package, Clock, Shield, ArrowRight, CheckCircle, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import serviceMaintenanceImage from "@/assets/service-maintenance.jpg";
import serviceAccessImage from "@/assets/service-access.jpg";

const services = [
  {
    icon: Settings,
    title: "Installation Professionnelle",
    description: "Nous installons vos systèmes de sécurité avec expertise et rigueur. Étude gratuite, installation discrète et mise en service complète.",
    features: [
      "Étude de site gratuite et personnalisée",
      "Installation rapide sous 48h",
      "Configuration et formation incluses",
      "Garantie 5 ans pièces et main d'œuvre"
    ],
    image: serviceMaintenanceImage,
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Wrench,
    title: "Dépannage Express 24/7",
    description: "Panne, dysfonctionnement ou urgence ? Notre équipe intervient rapidement pour remettre votre système en état de fonctionnement.",
    features: [
      "Intervention sous 4h en urgence",
      "Disponible 24h/24, 7j/7",
      "Diagnostic gratuit par téléphone",
      "Techniciens certifiés et équipés"
    ],
    image: serviceAccessImage,
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: Package,
    title: "Location d'Équipements",
    description: "Besoin temporaire de sécurité ? Nous proposons la location de matériel professionnel pour vos événements ou chantiers.",
    features: [
      "Caméras et alarmes portables",
      "Équipements de chantier sécurisés",
      "Événementiel et salons professionnels",
      "Installation et retrait inclus"
    ],
    image: serviceMaintenanceImage,
    color: "from-sky-500 to-cyan-500"
  }
];

const ServicesHighlight = () => {
  const scrollToQuote = () => {
    const element = document.getElementById("quote");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services-highlight" className="section-padding bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-to-br from-primary/5 to-transparent rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/3 bg-gradient-to-tl from-accent/5 to-transparent rounded-tl-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="badge-accent mb-3">
            <Truck className="w-4 h-4" />
            <span>Nos Prestations</span>
          </div>
          <h2 className="section-title text-center">
            Installation, Dépannage & Location
          </h2>
          <p className="section-subtitle text-center">
            HD Connect vous accompagne à chaque étape : de l'installation de vos équipements à leur maintenance, 
            en passant par la location de matériel pour vos besoins ponctuels.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover-lift overflow-hidden bg-card border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.title} - HD Connect services de sécurité`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                  
                  {/* Floating Icon */}
                  <div className={`absolute bottom-4 left-4 w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={scrollToQuote}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 group/btn"
                  >
                    <span>Demander un devis</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-center">
            <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl md:text-3xl font-bold text-gradient">4h</div>
            <div className="text-sm text-muted-foreground">Délai d'intervention urgence</div>
          </div>
          <div className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-center">
            <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl md:text-3xl font-bold text-gradient">5 ans</div>
            <div className="text-sm text-muted-foreground">Garantie équipements</div>
          </div>
          <div className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-center">
            <Settings className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl md:text-3xl font-bold text-gradient">48h</div>
            <div className="text-sm text-muted-foreground">Installation express</div>
          </div>
          <div className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-center">
            <Wrench className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl md:text-3xl font-bold text-gradient">24/7</div>
            <div className="text-sm text-muted-foreground">Support technique</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;
