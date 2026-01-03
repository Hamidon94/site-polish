import { Link } from "react-router-dom";
import { services } from "@/data/seoData";
import { regionsData } from "@/data/regionsData";
import { ArrowRight, MapPin, Building2 } from "lucide-react";

interface ServiceLinksProps {
  currentService: string;
}

// Composant de maillage interne complet
// Architecture SEO : liens services + régions stratégiques + villes principales
const ServiceLinks = ({ currentService }: ServiceLinksProps) => {
  const otherServices = services.filter(s => s.slug !== currentService);
  
  // 5 régions prioritaires pour le maillage
  const priorityRegions = regionsData.slice(0, 5);

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Maillage Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Découvrez nos autres services de sécurité
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {otherServices.slice(0, 8).map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group text-center"
              >
                <span className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">
                  {service.name}
                </span>
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>

        {/* Maillage Régions */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-foreground mb-4 text-center flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Nos zones d'intervention
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {priorityRegions.map((region) => (
              <Link
                key={region.slug}
                to={`/regions/${region.slug}`}
                className="px-4 py-2 rounded-full bg-card border border-border hover:border-primary/30 hover:bg-primary/5 transition-all text-sm font-medium text-foreground hover:text-primary"
              >
                {region.name}
              </Link>
            ))}
            <Link
              to="/regions"
              className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm hover:bg-primary/20 transition-all"
            >
              Toutes les régions →
            </Link>
          </div>
        </div>

        {/* CTA Hub Régions */}
        <div className="text-center">
          <Link
            to="/regions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition-all duration-300"
          >
            <Building2 className="w-5 h-5" />
            Explorer toutes nos zones d'intervention
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceLinks;
