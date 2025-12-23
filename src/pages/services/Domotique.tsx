import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { Home, Smartphone, Zap, Sun, Thermometer, Clock, CheckCircle, HardHat, Settings, MapPin, Lightbulb, Wifi, Lock, Users, Award, Phone, MessageSquare, Building, Store, Factory } from "lucide-react";
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
import heroDomotiqueImage from "@/assets/hero-domotique.jpg";
import domotiqueTabletImage from "@/assets/domotique-tablet.jpg";
import domotiqueLightSwitchImage from "@/assets/domotique-light-switch.jpg";
import domotiqueThermostatImage from "@/assets/domotique-thermostat.jpg";

const Domotique = () => {
  const { domotique } = content.pageServices;
  const contactInfo = content.company.contact;

  useSEO({
    title: "Domotique Maison Intelligente | KNX Z-Wave | HD Connect",
    description: "Installation domotique smart home : automatisation sécurité, éclairage, chauffage. KNX, Z-Wave, Zigbee. Devis gratuit, intervention France.",
    keywords: "domotique, maison intelligente, smart home, automatisation, KNX, Z-Wave, Zigbee, installation domotique, HD Connect",
    canonicalUrl: "https://hdconnect.fr/services/domotique",
  });

  const breadcrumbs = [
    { name: "Services", url: "/#services" },
    { name: "Domotique", url: "/services/domotique" },
  ];

  const features = [
    { icon: Smartphone, title: "Contrôle Centralisé 24/7", description: "Pilotez tous vos équipements (sécurité, éclairage, chauffage, volets) depuis une interface unique sur smartphone, tablette ou PC, même à distance." },
    { icon: Zap, title: "Scénarios Intelligents Automatisés", description: "Créez des automatisations pour simuler une présence, optimiser votre consommation d'énergie ou déclencher des actions en cascade (détection mouvement = lumière + alarme)." },
    { icon: Thermometer, title: "Gestion Énergétique Avancée", description: "Programmation intelligente du chauffage par zone, détection de présence pour l'éclairage, gestion des volets selon l'ensoleillement. Économies de 15 à 30% garanties." },
    { icon: Lock, title: "Sécurité Intégrée Totale", description: "Synchronisation complète avec vos systèmes d'alarme et de vidéosurveillance. Activation/désactivation automatique selon les scénarios de sécurité." },
  ];

  const processSteps = [
    { icon: MapPin, title: "1. Audit des Besoins", description: "Analyse de vos habitudes, de votre infrastructure existante et de vos objectifs pour définir le système domotique idéal (KNX filaire, Z-Wave, Zigbee ou hybride)." },
    { icon: HardHat, title: "2. Installation et Câblage", description: "Installation des modules, des capteurs, des actionneurs et du câblage nécessaire. Solutions filaires pour le neuf, sans fil pour la rénovation, ou hybride pour plus de flexibilité." },
    { icon: Settings, title: "3. Programmation des Scénarios", description: "Configuration complète des automatisations, des interfaces utilisateur intuitives et des accès à distance sécurisés. Test exhaustif de tous les scénarios avant mise en service." },
    { icon: CheckCircle, title: "4. Formation et Support", description: "Formation complète de vos équipes à l'utilisation du système. Support technique continu et mises à jour régulières pour garantir la pérennité de votre investissement." },
  ];

  const useCases = [
    { 
      icon: Home, 
      title: "Maisons Individuelles et Appartements", 
      description: "Transformez votre domicile en maison intelligente pour plus de confort, de sécurité et d'économies d'énergie. Contrôle du chauffage par pièce, scénarios de vie quotidiens, simulation de présence en cas d'absence.",
      features: ["Gestion chauffage par zone", "Scénarios matin/soir/absence", "Simulation de présence", "Économies d'énergie 15-30%"]
    },
    { 
      icon: Building, 
      title: "Bureaux et Immeubles Professionnels", 
      description: "Building Management System (BMS) pour l'optimisation énergétique, la gestion des accès et la supervision technique. Reporting centralisé, alertes automatiques et conformité énergétique RT2012/RE2020.",
      features: ["Optimisation CVC", "Supervision centralisée", "Reporting énergétique", "Intégration sécurité incendie"]
    },
    { 
      icon: Store, 
      title: "Commerces et Petits Locaux", 
      description: "Automatisation de l'éclairage selon l'occupation, gestion du chauffage adapté aux horaires d'ouverture, scénarios de fermeture sécurisée. Réduction des coûts énergétiques et amélioration du confort client.",
      features: ["Éclairage détection présence", "Chauffage programmé", "Fermeture sécurisée", "Économies énergétiques"]
    },
    { 
      icon: Factory, 
      title: "Sites Industriels et Logistiques", 
      description: "Supervision des installations techniques, gestion des accès sécurisée, monitoring énergétique des zones de production. Intégration avec les systèmes de sécurité incendie et les alarmes techniques.",
      features: ["Supervision technique", "Gestion accès multi-zones", "Monitoring énergétique", "Alertes techniques"]
    },
  ];

  const advantages = [
    { icon: Award, title: "Expertise Certifiée", description: "Techniciens certifiés KNX, Z-Wave et Zigbee avec plus de 10 ans d'expérience en domotique résidentielle et tertiaire." },
    { icon: Zap, title: "Solutions Évolutives", description: "Architectures modulaires qui évoluent avec vos besoins. Ajout de nouveaux équipements possible à tout moment sans refonte complète." },
    { icon: Lock, title: "Sécurité et Confidentialité", description: "Contrôle local de vos données (serveur domotique chez vous). Pas de dépendance cloud obligatoire. Chiffrement bout-en-bout pour les accès distants." },
    { icon: Users, title: "Support Dédié 24/7", description: "Interlocuteur unique du devis à la maintenance. Support technique réactif par téléphone, email ou intervention sur site pour toute question." },
  ];

  const faqItems = domotique.faq || [];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ServiceSchema
        serviceName="Installation Domotique et Maison Intelligente"
        serviceDescription="Expert en installation de systèmes domotiques KNX, Z-Wave et Zigbee. Maison intelligente, automatisation sécurité, gestion énergétique. Intervention sur toute la France."
        serviceUrl="/services/domotique"
        serviceImage="/assets/service-domotique.jpg"
        faqItems={faqItems}
        breadcrumbs={breadcrumbs}
      />
      <Header />
      <main className="pt-0">
        {/* SERVICE HERO WITH BACKGROUND IMAGE */}
        <ServiceHero
          title="Installation Domotique et Maison Intelligente"
          subtitle="Domotique Intelligente"
          description="Transformez votre maison ou vos locaux en espace intelligent et sécurisé. HD Connect intègre vos systèmes de sécurité avec la domotique (éclairage, chauffage, volets) pour une automatisation complète, accessible depuis votre smartphone, 24h/24."
          backgroundImage={heroDomotiqueImage}
          icon={<Home className="w-4 h-4" />}
          badgeText="Expert Domotique"
          phoneNumber={contactInfo.phoneMobile}
        />

        

        {/* SECTION DESCRIPTION EXPERTE - 50/50 */}
        <ContentSection
          title="Pourquoi Installer un Système Domotique ?"
          badge="Maison Intelligente"
          badgeIcon={<Smartphone className="w-4 h-4" />}
          imagePosition="right"
          image={domotiqueTabletImage}
          imageAlt="Contrôle domotique sur tablette dans un salon moderne connecté"
          content={
            <>
              <p>
                La domotique est devenue un élément incontournable du confort moderne. En France, plus de 40% des nouveaux logements intègrent au moins un système domotique, et cette tendance s'accélère avec les obligations réglementaires de performance énergétique (RT2012, RE2020). Un système domotique bien conçu peut réduire votre consommation énergétique de <strong>15 à 30%</strong>.
              </p>
              <p>
                Chez HD Connect, nous concevons des solutions domotiques sur mesure adaptées à chaque configuration. Nos systèmes combinent des technologies éprouvées (KNX filaire pour le neuf, Z-Wave et Zigbee sans fil pour la rénovation) avec une intégration complète de vos systèmes de sécurité existants.
              </p>
              <p>
                Notre approche privilégie le <strong>contrôle local de vos données</strong>. Contrairement aux solutions cloud propriétaires, nos systèmes fonctionnent avec un serveur domotique chez vous, garantissant votre indépendance et la pérennité de votre investissement.
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
                Technologies Domotiques pour Votre Confort et Sécurité
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
                Comment Fonctionne un Système Domotique Moderne ?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Un système domotique professionnel repose sur une architecture distribuée composée de plusieurs couches interconnectées. Au cœur du système se trouve un <strong>serveur domotique</strong> (ou contrôleur central) qui orchestre tous les équipements et exécute les scénarios programmés.
                </p>
                <p>
                  <strong>Les capteurs intelligents</strong> (détecteurs de mouvement, de luminosité, de température, d'humidité, de contact) collectent en permanence les données de votre environnement. Ces informations sont transmises au serveur via un protocole de communication (KNX, Z-Wave, Zigbee ou WiFi) qui assure une transmission fiable et sécurisée.
                </p>
                <p>
                  <strong>Les actionneurs</strong> (relais d'éclairage, vannes thermostatiques, moteurs de volets, serrures électriques) reçoivent les ordres du serveur et exécutent les actions programmées. Par exemple, si la température chute sous 18°C et que quelqu'un est détecté dans la pièce, le système augmente automatiquement le chauffage.
                </p>
                <p>
                  <strong>L'interface utilisateur</strong> (application mobile, écran tactile, commandes vocales) vous permet de visualiser l'état de votre maison, de créer des scénarios et de contrôler manuellement vos équipements. Les données sont chiffrées bout-en-bout pour garantir votre sécurité et votre confidentialité.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* SECTION CAS D'USAGE CONCRETS */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-4">
                Solutions Domotiques Adaptées à Chaque Environnement
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Que vous soyez particulier ou professionnel, HD Connect conçoit des systèmes domotiques adaptés à vos besoins spécifiques et à votre budget.
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
                Pourquoi Choisir HD Connect pour Votre Projet Domotique ?
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
                Installation Domotique sur Toute la France
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                HD Connect intervient sur l'ensemble du territoire national pour l'installation de vos solutions domotiques. Que vous soyez en <strong>Île-de-France</strong> (Paris, Versailles, Saint-Denis, Boulogne), dans le <strong>Nord</strong> (Lille, Valenciennes), le <strong>Sud</strong> (Marseille, Nice, Toulouse), l'<strong>Est</strong> (Lyon, Strasbourg) ou l'<strong>Ouest</strong> (Nantes, Bordeaux, Rennes), nos équipes se déplacent pour rendre votre habitat plus intelligent.
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
                Votre Projet Domotique en 4 Étapes
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

        <ServicePrestations serviceName="Domotique" />

        {/* GALERIE IMAGES */}
        <ServiceShowcase
          title="Nos Installations Domotiques"
          description="Découvrez nos réalisations smart home : interfaces tactiles, contrôle centralisé et équipements connectés."
          images={[
            { src: domotiqueLightSwitchImage, alt: "Interrupteur intelligent domotique" },
            { src: domotiqueTabletImage, alt: "Contrôle smart home tablette" },
            { src: domotiqueThermostatImage, alt: "Thermostat connecté" }
          ]}
        />

        {/* SECTION CTA DEVIS */}
        <section id="quote" className="section-padding bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection animation="scale-in" className="max-w-3xl mx-auto text-center">
              <h2 className="section-title text-center mb-6">
                Demandez Votre Étude Domotique Gratuite
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

        <ServiceLinks currentService="domotique" />

        {/* FAQ ACCORDÉON */}
        <FAQAccordion 
          title="Questions Fréquentes sur la Domotique"
          subtitle="Réponses à vos questions sur les systèmes KNX, Z-Wave et l'automatisation intelligente."
          items={faqItems}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Domotique;
