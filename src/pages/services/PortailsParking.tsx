import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { DoorOpen, Car, Phone, Key, Smartphone, MapPin, HardHat, Settings, CheckCircle, Building2, Home, Zap, Users, Award, MessageSquare, Building, Store, Factory } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ServicePrestations from "@/components/ServicePrestations";
import ServiceSchema from "@/components/SEO/ServiceSchema";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import ServiceLinks from "@/components/ServiceLinks";
import { useSEO } from "@/hooks/useSEO";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceHero from "@/components/ServiceHero";
import ContentSection from "@/components/ContentSection";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceShowcase from "@/components/ServiceShowcase";
import ImageBreak from "@/components/ImageBreak";
import RegionCoverage from "@/components/RegionCoverage";
import CTAIntermediate from "@/components/CTAIntermediate";
import CTAFloating from "@/components/CTAFloating";
import heroPortailsImage from "@/assets/hero-portails.jpg";
import portailAutoImage from "@/assets/portail-auto.jpg";
import garageMotorisImage from "@/assets/garage-motorise.jpg";
import barriereLevantImage from "@/assets/barriere-levante.jpg";
import barriereParkingImage from "@/assets/barriere-parking.jpg";

const PortailsParking = () => {
  const { portailsParking } = content.pageServices;
  const contactInfo = content.company.contact;

  useSEO({
    title: "Portail difficile à ouvrir ? Motorisation portails & barrières | HD Connect",
    description: "Simplifiez votre quotidien avec un portail automatique. Motorisation portails, portes garage, barrières parking. Ouverture par smartphone. Devis gratuit.",
    keywords: "portail automatique, motorisation portail, barrière parking, porte garage, interphone, vidéophone, HD Connect",
    canonicalUrl: "https://hdconnect.fr/services/portails-parking",
  });

  const breadcrumbs = [
    { name: "Services", url: "/#services" },
    { name: "Portails & Parking", url: "/services/portails-parking" },
  ];

  const faqItems = portailsParking.faq || [];

  const features = [
    { icon: DoorOpen, title: "Portails Automatiques Motorisés", description: "Motorisation de portails coulissants et battants avec télécommandes, digicodes, badges et contrôle à distance via smartphone pour un accès sécurisé." },
    { icon: Car, title: "Portes de Garage Motorisées", description: "Installation et motorisation de portes sectionnelles, basculantes et enroulables avec ouverture/fermeture automatique et sécurité anti-pincement." },
    { icon: Key, title: "Systèmes de Contrôle d'Accès", description: "Gestion complète des accès par badges, télécommandes, codes PIN ou reconnaissance faciale. Historique des passages et gestion multi-utilisateurs." },
    { icon: Phone, title: "Interphones et Vidéophones", description: "Solutions audio et vidéo pour immeubles et résidences, avec ouverture à distance sécurisée, enregistrement des appels et notifications push." },
  ];

  const processSteps = [
    { icon: MapPin, title: "1. Visite Technique Gratuite", description: "Évaluation sur site de vos besoins, mesures précises, analyse de la structure et choix de la solution adaptée à votre configuration." },
    { icon: HardHat, title: "2. Installation Professionnelle", description: "Pose du système de motorisation, interphone ou barrière par nos techniciens qualifiés. Travaux réalisés en minimisant les perturbations." },
    { icon: Settings, title: "3. Programmation et Configuration", description: "Configuration complète des télécommandes, badges, codes PIN et applications mobiles. Formation des utilisateurs à l'utilisation du système." },
    { icon: CheckCircle, title: "4. Garantie et Maintenance", description: "Garantie constructeur sur les équipements, dépannage rapide et contrats de maintenance pour une tranquillité d'esprit durable." },
  ];

  const useCases = [
    { 
      icon: Home, 
      title: "Résidences Individuelles", 
      description: "Motorisation de portails et portes de garage pour plus de confort et de sécurité. Accès par télécommande, code PIN ou smartphone avec historique des passages.",
      features: ["Portail coulissant/battant", "Porte garage motorisée", "Télécommande", "Accès smartphone"]
    },
    { 
      icon: Building2, 
      title: "Immeubles et Copropriétés", 
      description: "Interphones vidéo pour chaque appartement, portail collectif motorisé et gestion centralisée des accès. Ouverture à distance sécurisée.",
      features: ["Interphone vidéo", "Portail motorisé", "Gestion centralisée", "Ouverture à distance"]
    },
    { 
      icon: Store, 
      title: "Commerces et Entreprises", 
      description: "Portails et barrières de parking motorisés avec gestion des accès par badge ou code. Comptage des véhicules et historique des passages.",
      features: ["Barrière parking", "Gestion badges", "Comptage véhicules", "Historique accès"]
    },
    { 
      icon: Factory, 
      title: "Sites Industriels et Sécurisés", 
      description: "Systèmes de contrôle d'accès robustes pour zones sensibles. Intégration avec systèmes d'alarme et vidéosurveillance pour une sécurité maximale.",
      features: ["Contrôle d'accès avancé", "Intégration alarme", "Reconnaissance faciale", "Audit trail complet"]
    },
  ];

  const advantages = [
    { icon: Award, title: "Expertise Reconnue", description: "Partenaires certifiés des plus grandes marques (Somfy, Nice, BFT, Came). Installation conforme aux normes de sécurité." },
    { icon: Zap, title: "Installation Rapide", description: "Intervention professionnelle avec minimal de perturbations. Mise en service complète en 1 à 2 jours." },
    { icon: Key, title: "Sécurité Renforcée", description: "Systèmes sécurisés avec chiffrement des codes, historique des passages et alertes en temps réel." },
    { icon: Users, title: "Support Dédié", description: "Hotline technique disponible, dépannage rapide et contrats de maintenance pour une tranquillité d'esprit." },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ServiceSchema
        serviceName="Installation Portails Automatiques et Barrières Parking"
        serviceDescription="Expert en motorisation de portails, portes de garage, barrières de parking et interphones. Installation professionnelle, contrôle d'accès sécurisé. Intervention sur toute la France."
        serviceUrl="/services/portails-parking"
        serviceImage="/assets/service-portail.jpg"
        faqItems={faqItems}
        breadcrumbs={breadcrumbs}
      />
      <Header />
      <main className="pt-0">
        {/* SERVICE HERO WITH BACKGROUND IMAGE */}
        <ServiceHero
          title="Motorisation Portails, Portes de Garage et Barrières Parking"
          subtitle="Expert Portails & Parking"
          description="Automatisez vos accès pour plus de confort et de sécurité. HD Connect motorise vos portails, portes de garage et barrières de parking avec contrôle par télécommande, code PIN ou smartphone."
          backgroundImage={heroPortailsImage}
          icon={<DoorOpen className="w-4 h-4" />}
          badgeText="Expert Portails & Parking"
          phoneNumber={contactInfo.phoneMobile}
          accentColor="portail"
        />

        

        {/* SECTION DESCRIPTION EXPERTE - 50/50 */}
        <ContentSection
          title="Pourquoi Motoriser Votre Portail ou Porte de Garage ?"
          badge="Confort & Sécurité"
          badgeIcon={<DoorOpen className="w-4 h-4" />}
          imagePosition="right"
          image={portailAutoImage}
          imageAlt="Portail automatique motorisé d'une belle résidence au crépuscule"
          content={
            <>
              <p>
                La motorisation des portails et portes de garage offre bien plus que du confort : c'est aussi une question de <strong>sécurité</strong> et de <strong>praticité</strong>. Ouvrir manuellement un portail par mauvais temps, la nuit ou avec les mains pleines est inconfortable et potentiellement dangereux.
              </p>
              <p>
                Chez HD Connect, nous installons des systèmes de motorisation certifiés et conformes aux normes de sécurité en vigueur. Nos solutions intègrent des <strong>capteurs de sécurité</strong> (détecteurs de présence, photo-cellules) qui arrêtent immédiatement le portail en cas d'obstacle.
              </p>
              <p>
                Nos systèmes offrent une <strong>gestion centralisée des accès</strong> : télécommandes, digicodes, badges RFID ou reconnaissance faciale. Pour les immeubles collectifs, un interphone vidéo IP permet aux résidents d'ouvrir le portail à distance.
              </p>
            </>
          }
          delay={0}
        />

        {/* SECTION FONCTIONNALITÉS */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-12">
                Solutions de Motorisation Complètes
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                    <Card className="hover-lift h-full">
                      <CardHeader className="flex flex-row items-center space-x-4">
                        <div className="icon-container-sm flex-shrink-0">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION FONCTIONNEMENT DÉTAILLÉ */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                Comment Fonctionne un Système de Motorisation Sécurisé ?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Un système de motorisation professionnel repose sur plusieurs composants interdépendants : le moteur, la carte de commande, les capteurs de sécurité et les interfaces de contrôle.
                </p>
                <p>
                  <strong>Le moteur est le cœur du système</strong>. Nous utilisons exclusivement des moteurs certifiés CE, conçus pour fonctionner 24h/24 en toutes conditions météorologiques. Le moteur est équipé d'un système de freinage automatique qui maintient le portail fermé même en cas de coupure de courant.
                </p>
                <p>
                  <strong>La carte de commande gère l'ensemble du système</strong>. Elle reçoit les ordres (télécommande, code PIN, badge, smartphone) et commande l'ouverture/fermeture du portail. Elle monitore en permanence les capteurs de sécurité et arrête immédiatement le portail en cas de détection d'obstacle.
                </p>
                <p>
                  <strong>Les capteurs de sécurité sont obligatoires</strong>. Les photo-cellules détectent tout obstacle dans la trajectoire du portail. Les détecteurs de présence évitent l'ouverture du portail si quelqu'un se tient trop près. Ces capteurs sont testés régulièrement pour garantir leur bon fonctionnement.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA INTERMÉDIAIRE */}
        <CTAIntermediate 
          title="Automatisez vos accès"
          subtitle="Devis gratuit pour la motorisation de votre portail ou porte de garage."
          phoneNumber={contactInfo.phoneMobile}
          variant="accent"
        />

        {/* SECTION CAS D'USAGE CONCRETS */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-4">
                Solutions Adaptées à Chaque Type d'Accès
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                HD Connect propose des solutions de motorisation pour tous les types de portails, portes de garage et barrières.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <AnimatedSection key={index} animation={index % 2 === 0 ? "fade-right" : "fade-left"} delay={index * 100}>
                    <Card className="p-6 hover-lift h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{useCase.title}</CardTitle>
                      </div>
                      <p className="text-muted-foreground mb-4">{useCase.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {useCase.features.map((feature, i) => (
                          <span key={i} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION AVANTAGES HD CONNECT */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-12">
                Pourquoi Choisir HD Connect pour Votre Motorisation ?
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                    <div className="text-center p-6 rounded-2xl bg-card border hover-lift h-full">
                      <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{advantage.title}</h3>
                      <p className="text-muted-foreground text-sm">{advantage.description}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION ZONE GÉOGRAPHIQUE DYNAMIQUE */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Installation Portails & Parking sur Toute la France
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                HD Connect intervient sur l'ensemble du territoire national pour la motorisation de vos portails et barrières de parking. Que vous soyez en <strong>Île-de-France</strong> (Paris, Versailles, Saint-Denis, Boulogne), dans le <strong>Nord</strong> (Lille, Valenciennes), le <strong>Sud</strong> (Marseille, Nice, Toulouse), l'<strong>Est</strong> (Lyon, Strasbourg) ou l'<strong>Ouest</strong> (Nantes, Bordeaux, Rennes), nos équipes se déplacent pour automatiser vos accès.
              </p>
              <div className="mt-6">
                <Link to="/zones-intervention">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Voir toutes nos zones d'intervention
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* SECTION PROCESSUS D'INSTALLATION */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-12">
                Votre Projet de Motorisation en 4 Étapes
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
                    <div className="text-center p-6 border rounded-2xl bg-card shadow-sm hover-lift h-full">
                      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        <ServicePrestations serviceName="Portails & Parking" />

        {/* SECTION CTA DEVIS */}
        <section id="quote" className="section-padding bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="scale-in" className="max-w-3xl mx-auto text-center">
              <h2 className="section-title text-center mb-6">
                Demandez Votre Devis de Motorisation
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Recevez une proposition personnalisée sous 48h. Visite technique gratuite, sans engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#quote">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Formulaire de Devis en Ligne
                  </Button>
                </Link>
                <a href={`tel:${contactInfo.phoneMobile.replace(/\s/g, '')}`}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10">
                    <Phone className="w-4 h-4 mr-2" />
                    {contactInfo.phoneMobile}
                  </Button>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA FLOATING CONVERSION */}
        <CTAFloating serviceName="accès" />

        <ServiceLinks currentService="portails-parking" />

        {/* IMAGE BREAK */}
        <ImageBreak 
          image={garageMotorisImage} 
          alt="Porte de garage motorisée HD Connect"
          caption="Automatisez vos accès pour plus de confort et de sécurité au quotidien"
        />

        {/* SEO RÉGIONS FRANCE */}
        <RegionCoverage 
          serviceName="Portails & Parking"
          serviceSlug="portails-parking"
        />

        {/* GALERIE RÉALISATIONS */}
        <ServiceShowcase
          title="Nos Réalisations Portails & Motorisation"
          description="Découvrez nos installations de portails automatiques et barrières de parking"
          images={[
            { src: heroPortailsImage, alt: "Portail automatique motorisé luxe" },
            { src: portailAutoImage, alt: "Portail motorisé avec éclairage" },
            { src: barriereLevantImage, alt: "Barrière de parking professionnelle" }
          ]}
        />

        {/* SECTION FAQ EXPERTE ACCORDÉON */}
        <FAQAccordion 
          items={faqItems}
          title="Questions Fréquentes sur les Portails"
        />
      </main>
      <Footer />
    </div>
  );
};

export default PortailsParking;
