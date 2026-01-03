import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { regionsData } from "@/data/regionsData";
import { 
  MapPin, 
  ArrowRight, 
  Building2, 
  Shield, 
  Phone,
  CheckCircle,
  Clock,
  Award,
  Users
} from "lucide-react";
import { content } from "@/data/content";

const RegionsHub = () => {
  const contactInfo = content.company.contact;

  useSEO({
    title: "Zones d'Intervention France | Installation Sécurité Nationale | HD Connect",
    description: "HD Connect intervient dans toute la France : Île-de-France, PACA, Auvergne-Rhône-Alpes, Occitanie... Installation vidéosurveillance, alarmes, contrôle d'accès. Devis gratuit.",
    keywords: "installation sécurité France, vidéosurveillance nationale, alarme toute France, HD Connect régions, intervention sécurité",
    canonicalUrl: "https://hdconnect.fr/regions",
  });

  const breadcrumbItems = [
    { name: "Régions", url: "/regions" },
  ];

  // JSON-LD pour la page hub régions
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HD Connect",
    "url": "https://hdconnect.fr",
    "areaServed": regionsData.map(region => ({
      "@type": "AdministrativeArea",
      "name": region.name
    })),
    "serviceType": [
      "Installation vidéosurveillance",
      "Installation alarme",
      "Contrôle d'accès",
      "Domotique",
      "Maintenance sécurité"
    ]
  };

  const stats = [
    { icon: MapPin, value: "13", label: "Régions couvertes" },
    { icon: Building2, value: "96", label: "Départements" },
    { icon: Users, value: "2000+", label: "Clients satisfaits" },
    { icon: Clock, value: "24-48h", label: "Délai d'intervention" }
  ];

  const services = [
    "Vidéosurveillance HD/4K",
    "Systèmes d'alarme certifiés",
    "Contrôle d'accès biométrique",
    "Domotique intelligente",
    "Réseau & câblage",
    "Maintenance 24/7"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Couverture Nationale</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Installation Sécurité <span className="text-primary">Partout en France</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              HD Connect intervient dans l'ensemble des régions métropolitaines françaises pour l'installation, 
              la maintenance et le dépannage de vos systèmes de sécurité électronique.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8"
                asChild
              >
                <Link to="/#contact">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8"
                asChild
              >
                <a href={`tel:${contactInfo.phoneMobile}`}>
                  <Phone className="mr-2 w-5 h-5" />
                  {contactInfo.phoneMobile}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                <div className="text-center p-4">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nos Régions d'Intervention
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Sélectionnez votre région pour découvrir nos services et obtenir un devis personnalisé.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionsData.map((region, index) => (
              <AnimatedSection key={region.slug} animation="scale-in" delay={index * 50}>
                <Link to={`/regions/${region.slug}`}>
                  <Card className="hover-lift h-full border-border group cursor-pointer transition-all duration-300 hover:border-primary/50">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      
                      <h3 className="font-bold text-foreground text-xl mb-2 group-hover:text-primary transition-colors">
                        {region.name}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {region.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {region.mainCities.slice(0, 3).map((city) => (
                          <span 
                            key={city}
                            className="text-xs px-2 py-1 bg-secondary rounded-full text-muted-foreground"
                          >
                            {city}
                          </span>
                        ))}
                        {region.mainCities.length > 3 && (
                          <span className="text-xs px-2 py-1 bg-secondary rounded-full text-primary font-medium">
                            +{region.mainCities.length - 3} villes
                          </span>
                        )}
                      </div>
                      
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">{region.departments.length}</span> départements couverts
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Des Services Uniformes sur Tout le Territoire
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Où que vous soyez en France, bénéficiez de la même qualité de service et d'expertise HD Connect.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-2 text-left">
                  <CheckCircle className="w-5 h-5 text-white/80 flex-shrink-0" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Vous ne trouvez pas votre ville ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Notre réseau s'étend chaque jour. Contactez-nous pour vérifier notre disponibilité 
              dans votre secteur et obtenir un devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8"
                asChild
              >
                <Link to="/#contact">
                  Nous contacter
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8"
                asChild
              >
                <a href={`tel:${contactInfo.phoneMobile}`}>
                  <Phone className="mr-2 w-5 h-5" />
                  Appeler maintenant
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RegionsHub;
