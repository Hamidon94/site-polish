import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Shield, 
  Truck, 
  CheckCircle, 
  ArrowRight,
  Building2,
  Home,
  Factory,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

const ZonesIntervention = () => {
  useSEO({
    title: "Zones d'Intervention | HD Connect - Sécurité France Entière",
    description: "HD Connect intervient dans toute la France pour vos installations de sécurité : vidéosurveillance, alarme, contrôle d'accès. Paris, Île-de-France et grandes métropoles.",
    keywords: "zones intervention sécurité, installateur alarme France, vidéosurveillance Paris, dépannage sécurité Île-de-France",
    canonicalUrl: "https://hdconnect.fr/zones-intervention",
  });

  const breadcrumbItems = [
    { name: "Zones d'intervention", url: "/zones-intervention" },
  ];

  const regions = [
    {
      name: "Île-de-France",
      priority: true,
      description: "Notre zone d'intervention prioritaire avec des délais garantis sous 24h",
      departments: ["Paris (75)", "Hauts-de-Seine (92)", "Seine-Saint-Denis (93)", "Val-de-Marne (94)", "Seine-et-Marne (77)", "Yvelines (78)", "Essonne (91)", "Val-d'Oise (95)"],
      cities: ["Paris", "Boulogne-Billancourt", "Saint-Denis", "Montreuil", "Argenteuil", "Créteil", "Nanterre", "Versailles", "Vincennes", "Vitry-sur-Seine"]
    },
    {
      name: "Auvergne-Rhône-Alpes",
      priority: false,
      description: "Deuxième pôle économique français, nous couvrons l'ensemble de la région",
      departments: ["Rhône (69)", "Isère (38)", "Loire (42)", "Puy-de-Dôme (63)"],
      cities: ["Lyon", "Grenoble", "Saint-Étienne", "Villeurbanne", "Clermont-Ferrand"]
    },
    {
      name: "Provence-Alpes-Côte d'Azur",
      priority: false,
      description: "Interventions régulières sur l'ensemble du littoral méditerranéen",
      departments: ["Bouches-du-Rhône (13)", "Alpes-Maritimes (06)", "Var (83)", "Vaucluse (84)"],
      cities: ["Marseille", "Nice", "Toulon", "Aix-en-Provence", "Cannes"]
    },
    {
      name: "Nouvelle-Aquitaine",
      priority: false,
      description: "Couverture étendue de la façade atlantique",
      departments: ["Gironde (33)", "Charente-Maritime (17)", "Pyrénées-Atlantiques (64)"],
      cities: ["Bordeaux", "Limoges", "Poitiers", "La Rochelle", "Pau"]
    },
    {
      name: "Occitanie",
      priority: false,
      description: "Du littoral méditerranéen aux Pyrénées",
      departments: ["Haute-Garonne (31)", "Hérault (34)", "Gard (30)", "Pyrénées-Orientales (66)"],
      cities: ["Toulouse", "Montpellier", "Nîmes", "Perpignan", "Béziers"]
    },
    {
      name: "Grand Est",
      priority: false,
      description: "Interventions sur l'ensemble de la région frontalière",
      departments: ["Bas-Rhin (67)", "Marne (51)", "Moselle (57)", "Meurthe-et-Moselle (54)"],
      cities: ["Strasbourg", "Reims", "Metz", "Nancy", "Mulhouse"]
    },
    {
      name: "Hauts-de-France",
      priority: false,
      description: "Couverture du Nord de la France",
      departments: ["Nord (59)", "Pas-de-Calais (62)", "Somme (80)", "Oise (60)"],
      cities: ["Lille", "Amiens", "Roubaix", "Tourcoing", "Dunkerque"]
    },
    {
      name: "Pays de la Loire & Bretagne",
      priority: false,
      description: "Façade atlantique et péninsule bretonne",
      departments: ["Loire-Atlantique (44)", "Maine-et-Loire (49)", "Ille-et-Vilaine (35)", "Finistère (29)"],
      cities: ["Nantes", "Rennes", "Angers", "Le Mans", "Brest"]
    }
  ];

  const processSteps = [
    {
      icon: Phone,
      title: "1. Prise de contact",
      description: "Vous nous contactez par téléphone ou via notre formulaire en ligne. Notre équipe analyse votre demande et évalue la faisabilité d'intervention dans votre zone."
    },
    {
      icon: MapPin,
      title: "2. Étude de localisation",
      description: "Nous vérifions la disponibilité de nos techniciens dans votre secteur et planifions l'intervention selon les délais adaptés à votre région."
    },
    {
      icon: Truck,
      title: "3. Déplacement technicien",
      description: "Un technicien certifié se déplace avec tout le matériel nécessaire. Nos véhicules sont équipés pour intervenir sur tout type d'installation."
    },
    {
      icon: CheckCircle,
      title: "4. Intervention & Suivi",
      description: "Installation, dépannage ou maintenance réalisés dans les règles de l'art. Un rapport d'intervention vous est remis et un suivi SAV est assuré."
    }
  ];

  const clientTypes = [
    {
      icon: Home,
      title: "Particuliers",
      description: "Maisons, appartements, résidences secondaires. Protection de votre domicile et de vos proches avec des solutions adaptées à votre budget."
    },
    {
      icon: Building2,
      title: "Professionnels",
      description: "Commerces, bureaux, cabinets. Sécurisation de vos locaux professionnels avec des systèmes conformes aux exigences de votre assurance."
    },
    {
      icon: Factory,
      title: "Industriels",
      description: "Entrepôts, usines, sites logistiques. Solutions haute sécurité pour protéger vos installations industrielles et vos stocks."
    },
    {
      icon: Users,
      title: "Collectivités",
      description: "Mairies, écoles, équipements publics. Systèmes de vidéoprotection et contrôle d'accès conformes aux réglementations en vigueur."
    }
  ];

  const faqs = [
    {
      question: "Dans quelles zones HD Connect intervient-il en priorité ?",
      answer: "HD Connect intervient en priorité en Île-de-France, notamment à Paris et dans les départements 92, 93 et 94. Ces zones bénéficient d'interventions garanties sous 24 à 48 heures. Nous couvrons également l'ensemble des grandes métropoles françaises avec des délais adaptés."
    },
    {
      question: "Quels sont les délais d'intervention selon ma localisation ?",
      answer: "En Île-de-France : intervention sous 24 à 48h. Dans les grandes métropoles (Lyon, Marseille, Toulouse, etc.) : intervention sous 48 à 72h. Pour les autres zones : nous étudions chaque demande au cas par cas et vous communiquons un délai précis lors de votre prise de contact."
    },
    {
      question: "Y a-t-il des frais de déplacement supplémentaires ?",
      answer: "En Île-de-France, les frais de déplacement sont généralement inclus dans nos devis. Pour les interventions en province, un forfait déplacement peut s'appliquer selon la distance. Ce montant est toujours communiqué de manière transparente avant toute intervention."
    },
    {
      question: "HD Connect peut-il intervenir en urgence ?",
      answer: "Oui, nous proposons un service d'intervention d'urgence pour les pannes critiques de systèmes de sécurité. En Île-de-France, nous pouvons intervenir le jour même selon les disponibilités. Contactez-nous par téléphone pour les urgences."
    },
    {
      question: "Comment se passe la maintenance pour les clients éloignés ?",
      answer: "Nous proposons des contrats de maintenance préventive avec des passages planifiés. Pour les clients situés hors Île-de-France, nous optimisons les tournées de nos techniciens. De nombreuses vérifications peuvent également être effectuées à distance grâce à la télémaintenance."
    },
    {
      question: "Intervenez-vous pour les professionnels et les particuliers ?",
      answer: "Absolument. HD Connect accompagne aussi bien les particuliers souhaitant sécuriser leur domicile que les professionnels (commerces, bureaux, industries) et les collectivités. Nos solutions sont adaptées à chaque profil et chaque budget."
    }
  ];

  // JSON-LD pour la page Zones d'intervention
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "HD Connect - Sécurité et Domotique",
    "image": "https://hdconnect.fr/logo.png",
    "url": "https://hdconnect.fr",
    "telephone": "+33 6 27 13 53 04",
    "email": "contact@hdconnect.fr",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paris",
      "addressRegion": "Île-de-France",
      "addressCountry": "FR"
    },
    "areaServed": [
      { "@type": "Country", "name": "France" },
      { "@type": "State", "name": "Île-de-France" }
    ],
    "serviceType": [
      "Installation vidéosurveillance",
      "Installation alarme",
      "Contrôle d'accès",
      "Domotique",
      "Maintenance sécurité"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
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
              <span>Couverture Nationale</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Nos Zones d'Intervention
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              HD Connect assure l'installation, la maintenance et le dépannage de vos équipements de sécurité dans toute la France. Notre expertise s'étend de Paris aux grandes métropoles régionales, avec une réactivité adaptée à chaque zone géographique.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8"
                onClick={() => document.getElementById("regions")?.scrollIntoView({ behavior: "smooth" })}
              >
                Voir les régions couvertes
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8"
                asChild
              >
                <a href="tel:+33627135304">
                  <Phone className="mr-2 w-5 h-5" />
                  06 27 13 53 04
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Zone Prioritaire */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Zone Prioritaire</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Île-de-France : Notre Zone d'Expertise
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Basés en région parisienne, nous garantissons une <strong>intervention sous 24 à 48 heures</strong> sur l'ensemble de l'Île-de-France. Paris, la petite couronne (92, 93, 94) et la grande couronne (77, 78, 91, 95) bénéficient de notre réactivité maximale. Que vous soyez à Boulogne-Billancourt, Créteil, Versailles ou Saint-Denis, nos techniciens certifiés interviennent rapidement pour vos installations, dépannages et maintenances.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <Clock className="w-8 h-8 mx-auto mb-2" />
                <p className="font-bold text-xl">24-48h</p>
                <p className="text-white/80 text-sm">Délai intervention</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <p className="font-bold text-xl">8</p>
                <p className="text-white/80 text-sm">Départements couverts</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <Truck className="w-8 h-8 mx-auto mb-2" />
                <p className="font-bold text-xl">Inclus</p>
                <p className="text-white/80 text-sm">Frais déplacement</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <Shield className="w-8 h-8 mx-auto mb-2" />
                <p className="font-bold text-xl">Urgence</p>
                <p className="text-white/80 text-sm">Jour même possible</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Régions couvertes */}
      <section id="regions" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Toutes les Régions Couvertes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Au-delà de l'Île-de-France, HD Connect intervient dans les principales métropoles françaises. Nos équipes se déplacent pour des projets d'installation, de maintenance préventive ou de dépannage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region) => (
              <Card key={region.name} className={`border-border ${region.priority ? 'ring-2 ring-primary' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${region.priority ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{region.name}</h3>
                      {region.priority && (
                        <span className="text-xs text-primary font-medium">Zone prioritaire</span>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{region.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Départements :</p>
                    <p className="text-sm text-muted-foreground">{region.departments.join(", ")}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm font-medium text-foreground mb-2">Principales villes :</p>
                    <div className="flex flex-wrap gap-1">
                      {region.cities.slice(0, 5).map((city) => (
                        <span key={city} className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process d'intervention */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Notre Organisation Logistique
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une méthodologie éprouvée pour garantir des interventions de qualité, où que vous soyez en France. Découvrez comment nous organisons nos déplacements pour vous offrir le meilleur service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-border relative">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Types de clients */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nous Accompagnons Tous les Profils
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Particuliers, professionnels, industriels ou collectivités : HD Connect adapte ses solutions et ses modalités d'intervention à votre contexte spécifique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientTypes.map((type, index) => (
              <Card key={index} className="border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{type.title}</h3>
                  <p className="text-muted-foreground text-sm">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Questions Fréquentes sur nos Interventions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus courantes concernant notre couverture géographique et nos modalités d'intervention.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services liés */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos Services Disponibles Partout en France
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez l'ensemble de nos prestations de sécurité et domotique, disponibles sur toutes nos zones d'intervention.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/services/videosurveillance" className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Vidéosurveillance</h3>
              <p className="text-sm text-muted-foreground">Caméras HD, enregistrement, accès distant</p>
            </Link>
            <Link to="/services/alarme" className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Alarme</h3>
              <p className="text-sm text-muted-foreground">Systèmes anti-intrusion connectés</p>
            </Link>
            <Link to="/services/controle-acces" className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Contrôle d'accès</h3>
              <p className="text-sm text-muted-foreground">Badges, biométrie, interphonie</p>
            </Link>
            <Link to="/services/domotique" className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Domotique</h3>
              <p className="text-sm text-muted-foreground">Maison connectée et automatisation</p>
            </Link>
            <Link to="/services/reseau" className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Réseau</h3>
              <p className="text-sm text-muted-foreground">Infrastructure réseau et WiFi</p>
            </Link>
            <Link to="/services/maintenance" className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Maintenance</h3>
              <p className="text-sm text-muted-foreground">Contrats SAV et dépannage</p>
            </Link>
            <Link to="/services/antenne-satellite" className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Antenne & Satellite</h3>
              <p className="text-sm text-muted-foreground">Installation TNT et parabole</p>
            </Link>
            <Link to="/services/portails-parking" className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Portails & Parking</h3>
              <p className="text-sm text-muted-foreground">Motorisation et automatismes</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vérifiez Votre Éligibilité
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Contactez-nous pour confirmer notre disponibilité dans votre zone et obtenir un devis personnalisé adapté à votre projet de sécurité.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8"
                onClick={() => window.location.href = "/#quote"}
              >
                Demander un Devis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8"
                asChild
              >
                <a href="tel:+33627135304">
                  <Phone className="mr-2 w-5 h-5" />
                  06 27 13 53 04
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

export default ZonesIntervention;