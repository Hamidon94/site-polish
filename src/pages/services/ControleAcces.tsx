import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { Lock, Fingerprint, CreditCard, History, Users, Key, CheckCircle, Zap, HardHat, Settings, MapPin, Building, Home, Factory, Shield, Phone, MessageSquare, Award, Clock, Scan, DoorOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
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
import ColoredStatsSection from "@/components/ColoredStatsSection";
import UseCasesSection from "@/components/UseCasesSection";
import heroAccesImage from "@/assets/hero-controle-acces.jpg";
import accessBiometricImage from "@/assets/acces-biometrie-porte.jpg";
import accessBadgeReaderImage from "@/assets/acces-badge-office.jpg";
import accessInterphoneImage from "@/assets/access-interphone.jpg";
import interphoneMaisonImage from "@/assets/interphone-video-maison.jpg";

const ControleAcces = () => {
  const { controleacces } = content.pageServices;
  const contactInfo = content.company.contact;
  const { scrollToSection } = useSmoothScroll();

  useSEO({
    title: "Qui entre dans vos locaux ? Contrôle d'accès badges & biométrie | HD Connect",
    description: "Sécurisez vos bureaux et locaux avec un contrôle d'accès professionnel : badges RFID, biométrie, digicodes. Traçabilité complète, gestion cloud. Devis gratuit.",
    keywords: "contrôle accès, badge RFID, biométrie, interphone vidéo, digicode, gestion accès, sécurité locaux, HD Connect",
    canonicalUrl: "https://hdconnect.fr/services/controle-acces",
  });

  const breadcrumbs = [
    { name: "Services", url: "/#services" },
    { name: "Contrôle d'Accès", url: "/services/controle-acces" },
  ];

  const faqItems = controleacces.faq || [];

  const features = [
    { icon: CreditCard, title: "Badges RFID/NFC Sécurisés", description: "Badges haute sécurité cryptés Mifare DESFire, personnalisables et traçables. Gestion centralisée des droits avec révocation instantanée en cas de perte." },
    { icon: Fingerprint, title: "Biométrie Multi-Modalités", description: "Reconnaissance d'empreinte digitale, faciale ou veineuse pour une identification sans contact, ultra-sécurisée et conforme RGPD." },
    { icon: Key, title: "Gestion Centralisée Cloud", description: "Interface web intuitive pour gérer tous vos sites, utilisateurs, horaires et zones depuis n'importe où. Rapports automatiques et alertes en temps réel." },
    { icon: History, title: "Traçabilité et Conformité", description: "Historique complet de tous les accès avec horodatage précis, exports pour audit et conformité aux obligations légales (Code du travail, RGPD)." },
  ];

  const processSteps = [
    { icon: MapPin, title: "1. Audit des Flux", description: "Analyse détaillée de vos flux de personnes, zones sensibles et contraintes organisationnelles pour définir l'architecture optimale." },
    { icon: HardHat, title: "2. Installation Matérielle", description: "Pose des lecteurs, contrôleurs, ventouses et gâches électriques. Câblage sécurisé et intégration avec votre infrastructure existante." },
    { icon: Settings, title: "3. Configuration Logicielle", description: "Paramétrage des droits par utilisateur, zone et horaire. Intégration avec vos systèmes RH, vidéosurveillance et alarme." },
    { icon: CheckCircle, title: "4. Formation et Déploiement", description: "Formation complète de vos équipes à l'administration du système. Remise de la documentation et support technique continu." },
  ];

  const useCases = [
    { 
      icon: Building, 
      title: "Bureaux et Sièges Sociaux", 
      description: "Sécurisez l'accès à vos locaux tout en fluidifiant le quotidien de vos collaborateurs. Gestion des visiteurs, badges temporaires et intégration avec la pointeuse horaire.",
      features: ["Badge unique accès + pointage", "Gestion des visiteurs", "Zones différenciées", "Reporting RH automatique"]
    },
    { 
      icon: Factory, 
      title: "Sites Industriels et Logistiques", 
      description: "Contrôlez les accès aux zones de production, stockage et expédition. Gestion des sous-traitants, traçabilité des mouvements et intégration avec la vidéosurveillance.",
      features: ["Accès par zone de travail", "Gestion des habilitations", "Anti-passback", "Évacuation/Comptage"]
    },
    { 
      icon: Home, 
      title: "Résidences et Copropriétés", 
      description: "Modernisez les accès de votre immeuble avec des solutions sans clé : interphones vidéo IP, badges résidents, codes temporaires pour les livreurs et gestion centralisée.",
      features: ["Vidéophone IP connecté", "Ouverture smartphone", "Codes livreurs temporaires", "Gestion par le syndic"]
    },
    { 
      icon: Shield, 
      title: "Établissements Sensibles", 
      description: "Sécurité renforcée pour les établissements de santé, laboratoires, data centers. Authentification multi-facteurs, sas d'accès et conformité aux normes sectorielles.",
      features: ["Biométrie + badge", "Sas anti-intrusion", "Journalisation certifiée", "Conformité HDS/ISO"]
    },
  ];

  const advantages = [
    { icon: Award, title: "Expertise Multi-Marques", description: "Partenaire certifié des leaders du marché : Intratone, CDVI, Salto, dormakaba. Solutions adaptées à chaque budget." },
    { icon: Zap, title: "Installation Express", description: "Mise en service rapide sans interruption de votre activité. Migration progressive depuis vos anciens systèmes." },
    { icon: Lock, title: "Conformité RGPD", description: "Accompagnement complet pour la mise en conformité de vos traitements biométriques. Documentation et registre inclus." },
    { icon: Clock, title: "Support Réactif 24/7", description: "Hotline dédiée et intervention sur site sous 4h en cas de blocage. Télémaintenance proactive." },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ServiceSchema
        serviceName="Installation Contrôle d'Accès Professionnel"
        serviceDescription="Expert en installation de systèmes de contrôle d'accès pour entreprises et résidences. Badges RFID, biométrie, interphones vidéo, gestion centralisée multi-sites. Intervention sur toute la France."
        serviceUrl="/services/controle-acces"
        serviceImage="/assets/service-access.jpg"
        faqItems={faqItems}
        breadcrumbs={breadcrumbs}
      />
      <Header />
      <main className="pt-0">
        {/* SERVICE HERO WITH BACKGROUND IMAGE */}
        <ServiceHero
          title="Contrôle d'Accès Biométrique et Badges Professionnels"
          subtitle="Expert Contrôle d'Accès"
          description="Gérez qui entre et sort de vos locaux avec précision et simplicité. HD Connect installe des systèmes de contrôle d'accès modernes : badges RFID, lecteurs biométriques, interphones vidéo IP et solutions cloud pour une gestion centralisée de tous vos sites."
          backgroundImage={heroAccesImage}
          icon={<Lock className="w-4 h-4" />}
          badgeText="Expert Contrôle d'Accès"
          accentColor="acces"
        />

        

        {/* SECTION DESCRIPTION EXPERTE - 50/50 */}
        <ContentSection
          title="Pourquoi Installer un Système de Contrôle d'Accès ?"
          badge="Sécurité Avancée"
          badgeIcon={<Lock className="w-4 h-4" />}
          imagePosition="right"
          image={accessBiometricImage}
          imageAlt="Lecteur biométrique d'empreinte digitale pour contrôle d'accès professionnel"
          content={
            <>
              <p>
                Le contrôle d'accès est devenu un pilier essentiel de la sécurité des entreprises et des résidences. Au-delà de la simple protection contre les intrusions, il permet de <strong>tracer les mouvements</strong>, de <strong>gérer les habilitations</strong> et de <strong>respecter les obligations légales</strong> en matière de sécurité au travail.
              </p>
              <p>
                Les solutions modernes de contrôle d'accès remplacent avantageusement les clés traditionnelles, sources de coûts cachés (reproduction, perte, risque de transmission à des tiers). Un badge perdu se désactive en quelques secondes depuis l'interface de gestion.
              </p>
              <p>
                Chez HD Connect, nous concevons des systèmes sur mesure qui s'intègrent parfaitement à votre organisation. Nos solutions sont <strong>évolutives</strong> : vous pouvez commencer avec quelques portes et étendre progressivement à l'ensemble de vos sites.
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
                Technologies d'Identification Avancées
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
                Comment Fonctionne le Contrôle d'Accès Moderne ?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Un système de contrôle d'accès professionnel repose sur une architecture intelligente composée de lecteurs, de contrôleurs et d'un logiciel de gestion centralisé.
                </p>
                <p>
                  <strong>Le lecteur est l'interface avec l'utilisateur</strong>. Qu'il s'agisse d'un lecteur de badges RFID, d'un terminal biométrique ou d'un digicode, son rôle est de capturer l'identifiant de la personne. Les lecteurs modernes utilisent des technologies sans contact (NFC/Bluetooth) permettant une ouverture via smartphone, offrant une expérience utilisateur fluide et moderne.
                </p>
                <p>
                  <strong>Le contrôleur est le cerveau local de la porte</strong>. Il contient la base de données des personnes autorisées et les plages horaires d'accès. Même en cas de coupure de la connexion avec le serveur central, le contrôleur continue de fonctionner de manière autonome, garantissant que vos accès restent opérationnels en toutes circonstances.
                </p>
                <p>
                  <strong>La gestion centralisée (Cloud ou On-premise)</strong> permet d'administrer l'ensemble du système. Vous pouvez créer des profils d'accès (ex: "Équipe Technique", "Direction", "Prestataires"), définir des calendriers (ex: accès autorisé du lundi au vendredi de 8h à 19h) et visualiser en temps réel qui se trouve sur votre site. En cas d'urgence, une fonction "ouverture totale" ou "confinement" peut être activée en un clic.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* IMAGE BREAK STRATÉGIQUE */}
        <ImageBreak 
          image={accessInterphoneImage}
          alt="Interphone vidéo IP installé par HD Connect"
          caption="Contrôlez les accès à distance avec nos solutions d'interphonie vidéo"
        />

        {/* CTA INTERMÉDIAIRE */}
        <CTAIntermediate 
          title="Sécurisez vos accès dès maintenant"
          subtitle="Obtenez une étude gratuite de vos besoins en contrôle d'accès par nos experts."
          phoneNumber={contactInfo.phoneMobile}
          variant="accent"
        />

        {/* SECTION CAS D'USAGE CONCRETS */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-4">
                Solutions d'Accès Adaptées à Votre Activité
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                HD Connect adapte la technologie de contrôle d'accès en fonction de vos flux et de votre niveau d'exigence sécuritaire.
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
                Pourquoi Choisir HD Connect pour Votre Contrôle d'Accès ?
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

        {/* SECTION COUVERTURE FRANCE PAR RÉGIONS */}
        <RegionCoverage serviceName="Contrôle d'Accès" serviceSlug="controle-acces" />

        {/* SECTION PROCESSUS D'INSTALLATION */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-12">
                Votre Projet de Contrôle d'Accès en 4 Étapes
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

        <ServicePrestations serviceName="Contrôle d'Accès" />

        {/* GALERIE IMAGES */}
        <ServiceShowcase
          title="Nos Installations de Contrôle d'Accès"
          description="Découvrez nos réalisations : lecteurs biométriques, badges RFID et systèmes de gestion centralisée."
          images={[
            { src: accessBadgeReaderImage, alt: "Lecteur badge RFID professionnel" },
            { src: accessBiometricImage, alt: "Contrôle d'accès biométrique" },
            { src: accessInterphoneImage, alt: "Interphone vidéo IP" }
          ]}
        />

        {/* SECTION CTA DEVIS */}
        <section id="quote" className="section-padding bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection animation="scale-in" className="max-w-3xl mx-auto text-center">
              <h2 className="section-title text-center mb-6">
                Demandez Votre Audit d'Accès Gratuit
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Recevez une proposition personnalisée sous 48h. Étude technique offerte, sans engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("quote", { mode: "quote" })}
                  className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Formulaire de Devis en Ligne
                </Button>
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
        <CTAFloating serviceName="locaux" />

        <ServiceLinks currentService="controle-acces" />

        {/* FAQ ACCORDÉON */}
        <FAQAccordion 
          title="Questions Fréquentes sur le Contrôle d'Accès"
          subtitle="Réponses à vos questions sur les badges, la biométrie et la gestion des accès."
          items={faqItems}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ControleAcces;
