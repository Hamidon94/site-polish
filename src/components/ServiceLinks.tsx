import { Link } from "react-router-dom";
import { services } from "@/data/seoData";
import { ArrowRight } from "lucide-react";

interface ServiceLinksProps {
  currentService: string;
}

// Composant de maillage interne - liens vers autres services uniquement
// Conformité cahier des charges : pas de liens vers pages locales dynamiques
const ServiceLinks = ({ currentService }: ServiceLinksProps) => {
  const otherServices = services.filter(s => s.slug !== currentService);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          Découvrez nos autres services de sécurité
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {otherServices.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group text-center"
            >
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                {service.name}
              </span>
              <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>

        {/* Lien vers Hub Régions */}
        <div className="text-center mt-8">
          <Link
            to="/regions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition-all duration-300"
          >
            Voir nos zones d'intervention en France
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceLinks;