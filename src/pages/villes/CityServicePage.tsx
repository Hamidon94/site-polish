import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceLinks from "@/components/ServiceLinks";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Camera,
  ShieldAlert,
  Lock,
  Home,
  Wifi,
  Wrench,
  Award,
  Zap,
  Users,
  Building2
} from "lucide-react";
import { Link } from "react-router-dom";
import { content } from "@/data/content";

interface CityData {
  name: string;
  slug: string;
  department: string;
  departmentCode: string;
  region: string;
  population: string;
  description: string;
  neighborhoods?: string[];
  nearbyTowns?: string[];
}

interface CityServicePageProps {
  city: CityData;
}

const CityServicePage = ({ city }: CityServicePageProps) => {
  const contactInfo = content.company.contact;

  useSEO({
    title: `Installation Sécurité ${city.name} (${city.departmentCode}) | Vidéosurveillance, Alarme | HD Connect`,
    description: `Expert en installation de systèmes de sécurité à ${city.name} : vidéosurveillance, alarmes, contrôle d'accès, domotique. Intervention rapide ${city.department}. Devis gratuit.`,
    keywords: `sécurité ${city.name}, vidéosurveillance ${city.name}, alarme ${city.name}, installation caméra ${city.departmentCode}, HD Connect ${city.region}`,
    canonicalUrl: `https://hdconnect.fr/villes/${city.slug}`,
  });

  const breadcrumbItems = [
    { name: "Zones d'intervention", url: "/zones-intervention" },
    { name: city.name, url: `/villes/${city.slug}` },
  ];

  const services = [
    {
      icon: Camera,
      title: "Vidéosurveillance",
      description: `Installation de caméras HD et 4K à ${city.name}. Surveillance intérieure et extérieure, accès mobile 24/7.`,
      link: "/services/videosurveillance"
    },
    {
      icon: ShieldAlert,
      title: "Systèmes d'Alarme",
      description: `Alarmes anti-intrusion certifiées NF&A2P à ${city.name}. Télésurveillance 24/7 et intervention rapide.`,
      link: "/services/alarme"
    },
    {
      icon: Lock,
      title: "Contrôle d'Accès",
      description: `Solutions de contrôle d'accès professionnelles à ${city.name}. Badges, biométrie, interphones vidéo.`,
      link: "/services/controle-acces"
    },
    {
      icon: Home,
      title: "Domotique",
      description: `Maison intelligente à ${city.name}. Automatisation sécurité, éclairage, chauffage. Contrôle smartphone.`,
      link: "/services/domotique"
    },
    {
      icon: Wifi,
      title: "Réseau & Câblage",
      description: `Infrastructure réseau professionnelle à ${city.name}. WiFi 6E, câblage Cat 6A, Firewall.`,
      link: "/services/reseau"
    },
    {
      icon: Wrench,
      title: "Maintenance 24/7",
      description: `Maintenance et dépannage express à ${city.name}. Contrats préventifs, intervention rapide.`,
      link: "/services/maintenance"
    }
  ];

  const advantages = [
    { icon: Clock, title: "Intervention Rapide", description: `Nos techniciens interviennent sous 24 à 48h à ${city.name} et dans tout le ${city.department}.` },
    { icon: Award, title: "Expertise Certifiée", description: "Techniciens formés et certifiés par les plus grandes marques du secteur de la sécurité." },
    { icon: Zap, title: "Devis Gratuit", description: `Étude personnalisée et devis détaillé sous 24h pour votre projet à ${city.name}.` },
    { icon: Users, title: "Support Dédié", description: "Interlocuteur unique et support technique disponible 24/7 par téléphone." }
  ];

  const faqItems = [
    {
      question: `HD Connect intervient-il à ${city.name} ?`,
      answer: `Oui, HD Connect intervient régulièrement à ${city.name} et dans l'ensemble du ${city.department}. Nos techniciens se déplacent pour l'installation, la maintenance et le dépannage de tous vos systèmes de sécurité.`
    },
    {
      question: `Quel est le délai d'intervention à ${city.name} ?`,
      answer: `Nos délais d'intervention à ${city.name} sont généralement de 24 à 48 heures pour les installations et maintenances programmées. Pour les urgences, nous pouvons intervenir le jour même selon les disponibilités.`
    },
    {
      question: `Les frais de déplacement sont-ils inclus pour ${city.name} ?`,
      answer: `Les frais de déplacement pour ${city.name} sont généralement inclus dans nos devis. Pour les projets importants, le déplacement est toujours gratuit. Nous vous communiquons un devis transparent avant toute intervention.`
    },
    {
      question: `Quels quartiers de ${city.name} couvrez-vous ?`,
      answer: `Nous intervenons dans tous les quartiers de ${city.name}${city.neighborhoods ? ` : ${city.neighborhoods.slice(0, 5).join(", ")}...` : "."} ainsi que dans les communes environnantes${city.nearbyTowns ? ` comme ${city.nearbyTowns.slice(0, 3).join(", ")}.` : "."}`
    },
    {
      question: `Proposez-vous des contrats de maintenance à ${city.name} ?`,
      answer: `Oui, nous proposons des contrats de maintenance annuels pour les clients de ${city.name}. Ces contrats incluent des visites préventives régulières, un support prioritaire et des tarifs préférentiels sur les interventions.`
    }
  ];

  // JSON-LD pour la page ville
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `HD Connect - Sécurité ${city.name}`,
    "image": "https://hdconnect.fr/logo.png",
    "url": `https://hdconnect.fr/villes/${city.slug}`,
    "telephone": "+33 6 27 13 53 04",
    "email": "contact@hdconnect.fr",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": city.region,
      "addressCountry": "FR"
    },
    "areaServed": {
      "@type": "City",
      "name": city.name
    },
    "serviceType": [
      "Installation vidéosurveillance",
      "Installation alarme",
      "Contrôle d'accès",
      "Domotique",
      "Maintenance sécurité"
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
              <MapPin className="w-4 h-4" />
              <span>{city.department} ({city.departmentCode})</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Installation Sécurité à {city.name}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {city.description}
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

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nos Services de Sécurité à {city.name}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                HD Connect propose une gamme complète de solutions de sécurité pour les particuliers et professionnels de {city.name}.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                <Card className="hover-lift h-full border-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-lg mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                    <Link 
                      to={service.link}
                      className="text-primary font-medium text-sm hover:underline inline-flex items-center gap-1"
                    >
                      En savoir plus
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pourquoi Choisir HD Connect à {city.name} ?
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {advantages.map((advantage, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                <div className="text-center p-6 rounded-2xl bg-card border hover-lift h-full">
                  <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                    <advantage.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground text-sm">{advantage.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Zone Coverage */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Couverture Complète à {city.name} et Environs
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Nos techniciens interviennent dans toute la ville de {city.name} ainsi que dans les communes environnantes
              {city.nearbyTowns && city.nearbyTowns.length > 0 && (
                <span> : <strong>{city.nearbyTowns.join(", ")}</strong></span>
              )}. 
              Que vous soyez un particulier ou un professionnel, nous adaptons nos solutions à vos besoins spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8"
                asChild
              >
                <a href={`tel:${contactInfo.phoneMobile}`}>
                  <Phone className="mr-2 w-5 h-5" />
                  Appeler maintenant
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/zones-intervention">
                  Voir toutes les zones
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Questions Fréquentes - {city.name}
              </h2>
            </div>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Prêt à Sécuriser Votre Propriété à {city.name} ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contactez-nous dès maintenant pour une étude personnalisée et un devis gratuit. 
              Nos experts sont à votre disposition pour répondre à toutes vos questions.
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
            </div>
          </div>
        </div>
      </section>

      <ServiceLinks currentService={`Sécurité ${city.name}`} />
      <Footer />
    </div>
  );
};

export default CityServicePage;
