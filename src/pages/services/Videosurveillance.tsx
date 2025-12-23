import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { Camera, Shield, Smartphone, Cloud, Eye, Clock, CheckCircle, Zap, HardHat, Settings, MapPin, Building, Home as HomeIcon, Factory, Store, Video, Server, Wifi, Lock, Users, Award, Phone, MessageSquare } from "lucide-react";
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
import heroVideoImage from "@/assets/hero-videosurveillance.jpg";
import videoInstallImage from "@/assets/video-installation.jpg";
import vsMonitoringImage from "@/assets/vs-monitoring-room.jpg";
import vsInstallOutdoorImage from "@/assets/vs-installation-outdoor.jpg";

const Videosurveillance = () => {
  const { videosurveillance } = content.pageServices;
  const contactInfo = content.company.contact;

  useSEO({
    title: "Vidéosurveillance Pro | Caméras HD & 4K | HD Connect",
    description: "Expert installation caméras vidéosurveillance HD/4K en France. Accès mobile, analyse IA, conformité RGPD. Devis gratuit, intervention 24h/24.",
    keywords: "vidéosurveillance, caméra surveillance, installation caméra, CCTV, caméra IP, NVR, DVR, HD Connect, sécurité vidéo",
    canonicalUrl: "https://hdconnect.fr/services/videosurveillance",
  });

  const breadcrumbs = [
    { name: "Services", url: "/#services" },
    { name: "Vidéosurveillance", url: "/services/videosurveillance" },
  ];

  const faqItems = videosurveillance.faq || [];

  const features = [
    { icon: Camera, title: "Caméras IP et 4K Ultra HD", description: "Résolution exceptionnelle jusqu'à 8 mégapixels pour une identification précise des visages et plaques d'immatriculation, même en conditions de faible luminosité avec technologie Starlight." },
    { icon: Eye, title: "Analyse Vidéo Intelligente (IA)", description: "Détection de mouvement avancée, franchissement de ligne virtuelle, comptage de personnes et reconnaissance faciale pour des alertes proactives et une sécurité renforcée." },
    { icon: Smartphone, title: "Accès Mobile Sécurisé 24/7", description: "Consultez vos flux en direct et enregistrements depuis votre smartphone iOS/Android ou navigateur web, où que vous soyez dans le monde, avec notifications push instantanées." },
    { icon: Cloud, title: "Stockage Hybride Redondant", description: "Enregistrement local NVR/DVR haute capacité avec sauvegarde cloud optionnelle. Conservation des images de 15 à 90 jours selon vos besoins réglementaires." },
  ];

  const processSteps = [
    { icon: MapPin, title: "1. Étude de Site Gratuite", description: "Nos experts se déplacent gratuitement pour évaluer vos besoins spécifiques, analyser les points de vulnérabilité et définir le positionnement optimal des caméras." },
    { icon: HardHat, title: "2. Installation Professionnelle", description: "Installation rapide et soignée par nos techniciens certifiés. Câblage discret, configuration réseau sécurisée et mise en service complète sans perturber votre activité." },
    { icon: Settings, title: "3. Configuration et Formation", description: "Paramétrage personnalisé de votre système (zones de détection, alertes, accès distants) et formation complète de vos équipes à l'utilisation de l'interface." },
    { icon: CheckCircle, title: "4. Maintenance et Support 24/7", description: "Contrat de maintenance préventive annuelle et support technique disponible 24h/24, 7j/7 pour une tranquillité d'esprit totale et une durabilité maximale." },
  ];

  const useCases = [
    { 
      icon: HomeIcon, 
      title: "Maisons et Appartements", 
      description: "Protection de votre domicile contre les cambriolages avec caméras extérieures dissuasives et intérieures discrètes. Surveillance de vos enfants, personnes âgées ou animaux à distance.",
      features: ["Caméras WiFi sans fil", "Vision nocturne couleur", "Détection de colis", "Alertes sur smartphone"]
    },
    { 
      icon: Building, 
      title: "Bureaux et Entreprises", 
      description: "Sécurisation de vos locaux professionnels, salles serveurs et espaces sensibles. Contrôle des accès employés et visiteurs, surveillance des parkings et zones de stockage.",
      features: ["Multi-sites centralisés", "Analyse comportementale", "Intégration contrôle d'accès", "Exports pour la justice"]
    },
    { 
      icon: Store, 
      title: "Commerces et Retail", 
      description: "Protection contre le vol à l'étalage, surveillance des caisses et des réserves. Comptage de fréquentation et analyse des flux clients pour optimiser votre agencement.",
      features: ["Caméras anti-vol HD", "Comptage clients", "Heat mapping", "Enregistrement audio"]
    },
    { 
      icon: Factory, 
      title: "Sites Industriels et Logistiques", 
      description: "Surveillance périmétrique de grandes superficies avec caméras PTZ longue portée. Contrôle des zones de chargement et détection d'intrusion périmétrique.",
      features: ["Caméras thermiques", "Détection périmétrique", "Supervision 24/7", "Intégration télésurveillance"]
    },
  ];

  const advantages = [
    { icon: Award, title: "Expertise Certifiée", description: "Plus de 10 ans d'expérience et techniciens certifiés par les plus grandes marques (Hikvision, Dahua, Axis, Hanwha)." },
    { icon: Zap, title: "Intervention Rapide", description: "Étude gratuite sous 48h et installation express. Dépannage d'urgence disponible 24h/24 en Île-de-France." },
    { icon: Lock, title: "Conformité Garantie", description: "Accompagnement complet pour la mise en conformité RGPD et CNIL : panneaux d'information, registres, durées de conservation." },
    { icon: Users, title: "Support Dédié", description: "Interlocuteur unique du devis à la maintenance. Support technique réactif par téléphone, email ou intervention sur site." },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ServiceSchema
        serviceName="Installation Vidéosurveillance Professionnelle"
        serviceDescription="Expert en installation de systèmes de vidéosurveillance HD et 4K pour particuliers et professionnels. Caméras IP, NVR, accès mobile, analyse vidéo intelligente. Intervention sur toute la France."
        serviceUrl="/services/videosurveillance"
        serviceImage="/assets/service-camera.jpg"
        faqItems={faqItems}
        breadcrumbs={breadcrumbs}
      />
      <Header />
      <main className="pt-0">
        {/* SERVICE HERO WITH BACKGROUND IMAGE */}
        <ServiceHero
          title="Installation Vidéosurveillance Professionnelle HD & 4K"
          subtitle="Expert Vidéosurveillance"
          description="Protégez vos biens et vos proches avec des systèmes de vidéosurveillance haute définition. HD Connect installe, configure et maintient vos caméras de sécurité pour une surveillance efficace 24h/24, accessible depuis votre smartphone."
          backgroundImage={heroVideoImage}
          icon={<Camera className="w-4 h-4" />}
          badgeText="Expert Vidéosurveillance"
          phoneNumber={contactInfo.phoneMobile}
        />

        

        {/* SECTION DESCRIPTION EXPERTE - 50/50 */}
        <ContentSection
          title="Pourquoi Investir dans une Vidéosurveillance Professionnelle ?"
          badge="Expertise Métier"
          badgeIcon={<Camera className="w-4 h-4" />}
          imagePosition="right"
          image={videoInstallImage}
          imageAlt="Technicien installant une caméra de vidéosurveillance professionnelle"
          content={
            <>
              <p>
                La vidéosurveillance est devenue un élément essentiel de la sécurité moderne. Selon les statistiques, <strong>les cambriolages diminuent de 60% dans les zones équipées de caméras visibles</strong>. Au-delà de la dissuasion, une vidéosurveillance professionnelle offre une preuve irréfutable en cas d'incident.
              </p>
              <p>
                Chez HD Connect, nous installons des systèmes de vidéosurveillance dernière génération : caméras 4K ultra haute définition, analyse vidéo intelligente (IA), accès mobile sécurisé et stockage redondant. Chaque système est dimensionné selon vos besoins spécifiques et configuré pour la conformité RGPD/CNIL.
              </p>
              <p>
                Notre approche privilégie la <strong>prévention et la dissuasion</strong>. Une caméra visible décourage les malfaiteurs. Une caméra discrète capture les preuves. Nous combinons les deux stratégies pour une sécurité maximale.
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
                Technologies Vidéosurveillance de Pointe
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

        {/* SECTION FONCTIONNEMENT DÉTAILLÉ - 50/50 */}
        <ContentSection
          title="Comment Fonctionne une Vidéosurveillance Intelligente ?"
          imagePosition="left"
          image={vsMonitoringImage}
          imageAlt="Système vidéosurveillance avec analyse IA"
          backgroundColor="default"
          badge="Technologie IA"
          badgeIcon={<Eye className="w-4 h-4" />}
          content={
            <>
              <p>
                Un système de vidéosurveillance moderne repose sur plusieurs composants interconnectés : les caméras IP, le NVR (Network Video Recorder), le stockage et l'interface de consultation.
              </p>
              <p>
                <strong>Les caméras IP capturent le flux vidéo</strong> en haute résolution (jusqu'à 8 mégapixels en 4K). Chaque caméra est équipée d'un processeur qui analyse le flux en temps réel : détection de mouvement, franchissement de ligne virtuelle, reconnaissance faciale. Les alertes sont envoyées instantanément à votre smartphone.
              </p>
              <p>
                <strong>Le NVR enregistre et stocke les vidéos</strong> en local, garantissant la disponibilité même en cas de coupure internet. Nous proposons des capacités de stockage de 15 à 90 jours selon vos besoins réglementaires (RGPD, CNIL).
              </p>
            </>
          }
          delay={0}
        />

        {/* SECTION CAS D'USAGE CONCRETS */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-4">
                Solutions Vidéosurveillance Adaptées à Votre Secteur
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                HD Connect conçoit des systèmes optimisés pour chaque type d'environnement.
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
                Pourquoi Choisir HD Connect pour Votre Vidéosurveillance ?
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
                Installation Vidéosurveillance sur Toute la France
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                HD Connect intervient sur l'ensemble du territoire national pour l'installation de vos systèmes de vidéosurveillance. Que vous soyez en <strong>Île-de-France</strong> (Paris, Versailles, Saint-Denis, Boulogne), dans le <strong>Nord</strong> (Lille, Valenciennes), le <strong>Sud</strong> (Marseille, Nice, Toulouse), l'<strong>Est</strong> (Lyon, Strasbourg) ou l'<strong>Ouest</strong> (Nantes, Bordeaux, Rennes), nos équipes se déplacent pour sécuriser vos biens.
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
                Votre Projet Vidéosurveillance en 4 Étapes
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

        <ServicePrestations serviceName="Vidéosurveillance" />

        {/* GALERIE IMAGES */}
        <ServiceShowcase
          title="Nos Installations Vidéosurveillance"
          description="Découvrez la qualité de nos réalisations : caméras dôme, salles de contrôle et systèmes professionnels."
          images={[
            { src: vsMonitoringImage, alt: "Salle de contrôle vidéosurveillance HD Connect" },
            { src: vsInstallOutdoorImage, alt: "Installation caméra extérieure professionnelle" },
            { src: videoInstallImage, alt: "Installation vidéosurveillance intérieure" }
          ]}
        />

        {/* SECTION CTA DEVIS */}
        <section id="quote" className="section-padding bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection animation="scale-in" className="max-w-3xl mx-auto text-center">
              <h2 className="section-title text-center mb-6">
                Demandez Votre Étude Gratuite
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Recevez une proposition personnalisée sous 48h. Étude technique offerte, sans engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#quote">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg hover:shadow-xl transition-all">
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

        <ServiceLinks currentService="videosurveillance" />

        {/* FAQ ACCORDÉON */}
        <FAQAccordion 
          title="Questions Fréquentes sur la Vidéosurveillance"
          subtitle="Toutes les réponses à vos questions sur l'installation et la maintenance de systèmes de vidéosurveillance."
          items={faqItems}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Videosurveillance;
