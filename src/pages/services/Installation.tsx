import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { Settings, HardHat, CheckCircle, Clock, Shield, Award, Zap, Users, MapPin, FileText, Home, Building2, Factory, Store, Wrench, Phone, Camera, Lock, Radio, Wifi } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ServiceSchema from "@/components/SEO/ServiceSchema";
import { useSEO } from "@/hooks/useSEO";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceHero from "@/components/ServiceHero";
import ContentSection from "@/components/ContentSection";
import FAQAccordion from "@/components/FAQAccordion";
import ImageBreak from "@/components/ImageBreak";
import RegionCoverage from "@/components/RegionCoverage";
import CTAIntermediate from "@/components/CTAIntermediate";
import CTAFloating from "@/components/CTAFloating";
import ServiceLinks from "@/components/ServiceLinks";
import ColoredStatsSection from "@/components/ColoredStatsSection";
import heroInstallationImage from "@/assets/hero-installation-unique.jpg";
import technicianWorkImage from "@/assets/installation-outdoor-work.jpg";
import installCameraUniqueImage from "@/assets/installation-alarm-config.jpg";

const Installation = () => {
  const contactInfo = content.company.contact;

  useSEO({
    title: "Besoin d'un installateur sécurité pro ? Installation sous 48h | HD Connect",
    description: "Installation professionnelle garantie 5 ans : vidéosurveillance, alarmes, contrôle d'accès. Étude de site gratuite, intervention sous 48h. Techniciens certifiés.",
    keywords: "installation sécurité, installateur caméra, installation alarme, contrôle d'accès, HD Connect, technicien certifié",
    canonicalUrl: "https://hdconnect.fr/services/installation",
  });

  const breadcrumbs = [
    { name: "Services", url: "/#services" },
    { name: "Installation", url: "/services/installation" },
  ];

  const faqItems = [
    { 
      question: "Combien de temps dure une installation ?", 
      answer: "La durée varie selon la complexité du projet : 2-4h pour une maison standard (4-6 caméras ou alarme), 1-2 jours pour des locaux professionnels. Nous planifions l'intervention pour minimiser la perturbation de votre activité." 
    },
    { 
      question: "L'étude de site est-elle vraiment gratuite ?", 
      answer: "Oui, l'étude de site est 100% gratuite et sans engagement. Nos techniciens se déplacent pour évaluer vos besoins, identifier les points de vulnérabilité et vous proposer une solution personnalisée avec devis détaillé." 
    },
    { 
      question: "Quels types de systèmes installez-vous ?", 
      answer: "Nous installons tous les systèmes de sécurité électronique : vidéosurveillance (IP, HD, 4K), alarmes anti-intrusion (filaires et sans fil), contrôle d'accès (badges, biométrie, interphones), domotique, réseaux et câblage structuré." 
    },
    { 
      question: "Proposez-vous une garantie sur l'installation ?", 
      answer: "Oui, nos installations sont garanties 5 ans pièces et main d'œuvre. Cette garantie couvre les défauts de fabrication et les problèmes liés à l'installation. Les contrats de maintenance prolongent cette couverture." 
    },
    { 
      question: "Intervenez-vous dans ma région ?", 
      answer: "HD Connect intervient sur toute la France métropolitaine. Nous avons des équipes basées en Île-de-France, et dans les principales métropoles (Lyon, Marseille, Bordeaux, etc.) pour une intervention rapide." 
    },
    { 
      question: "Fournissez-vous les équipements ou dois-je les acheter ?", 
      answer: "Nous fournissons et installons les équipements de marques reconnues (Hikvision, Dahua, Ajax, Honeywell, etc.). Le devis inclut le matériel, l'installation, la configuration et la formation à l'utilisation." 
    },
  ];

  const features = [
    { icon: FileText, title: "Étude de Site Gratuite", description: "Analyse complète de vos besoins par un expert : audit de sécurité, identification des vulnérabilités, recommandations personnalisées et devis détaillé sans engagement." },
    { icon: HardHat, title: "Techniciens Certifiés", description: "Tous nos installateurs sont formés et certifiés par les plus grandes marques du secteur. Installation propre et soignée, dans le respect des normes en vigueur." },
    { icon: Settings, title: "Configuration Complète", description: "Paramétrage personnalisé de tous vos équipements : zones de détection, accès distants, alertes, scénarios automatisés. Tout est prêt à l'emploi." },
    { icon: Users, title: "Formation Incluse", description: "Formation complète des utilisateurs à la prise en main du système. Documentation remise et support téléphonique pour toute question après l'installation." },
  ];

  const processSteps = [
    { icon: Phone, title: "1. Prise de Contact", description: "Appelez-nous ou remplissez le formulaire en ligne. Un conseiller évalue vos besoins et planifie une visite technique gratuite dans les 48h." },
    { icon: MapPin, title: "2. Étude de Site", description: "Notre technicien se déplace gratuitement pour auditer votre site, identifier les points de vulnérabilité et vous conseiller sur la solution optimale." },
    { icon: FileText, title: "3. Devis Détaillé", description: "Vous recevez un devis transparent et détaillé sous 24h après la visite. Le prix est ferme et définitif, sans surprise ni frais cachés." },
    { icon: HardHat, title: "4. Installation Express", description: "Une fois le devis validé, nos techniciens interviennent sous 48h. Installation propre, configuration complète et formation à l'utilisation." },
  ];

  const systemTypes = [
    { 
      icon: Camera, 
      title: "Vidéosurveillance", 
      description: "Installation de systèmes de vidéosurveillance HD et 4K pour particuliers et professionnels. Caméras intérieures, extérieures, dômes, PTZ.",
      features: ["Caméras IP HD/4K", "NVR/DVR haute capacité", "Accès mobile sécurisé", "Analyse vidéo IA"],
      link: "/services/videosurveillance"
    },
    { 
      icon: Shield, 
      title: "Alarmes Anti-Intrusion", 
      description: "Systèmes d'alarme certifiés NF&A2P pour une protection optimale. Détecteurs de mouvement, sirènes, télésurveillance 24/7.",
      features: ["Certification NF&A2P", "Détecteurs double technologie", "Contrôle smartphone", "Télésurveillance 24/7"],
      link: "/services/alarme"
    },
    { 
      icon: Lock, 
      title: "Contrôle d'Accès", 
      description: "Solutions de contrôle d'accès pour sécuriser vos entrées : badges, biométrie, interphones vidéo, digicodes.",
      features: ["Lecteurs badges RFID", "Biométrie avancée", "Interphones IP", "Gestion multi-sites"],
      link: "/services/controle-acces"
    },
    { 
      icon: Wifi, 
      title: "Réseau & Domotique", 
      description: "Infrastructure réseau professionnelle et intégration domotique pour centraliser la gestion de votre sécurité.",
      features: ["Câblage RJ45/fibre", "WiFi professionnel", "Domotique sécurité", "Automatisation"],
      link: "/services/reseau"
    },
  ];

  const advantages = [
    { icon: Award, title: "10+ Ans d'Expertise", description: "Plus d'une décennie d'expérience dans l'installation de systèmes de sécurité pour particuliers et professionnels." },
    { icon: Zap, title: "Installation sous 48h", description: "De la validation du devis à la mise en service en moins de 48h. Intervention express le jour même possible." },
    { icon: Shield, title: "Garantie 5 Ans", description: "Tous nos équipements et installations sont couverts par une garantie de 5 ans pièces et main d'œuvre." },
    { icon: Clock, title: "Support 24/7", description: "Assistance technique disponible 24h/24, 7j/7 par téléphone. Intervention sur site rapide en cas de problème." },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ServiceSchema
        serviceName="Installation Systèmes de Sécurité Professionnelle"
        serviceDescription="Expert en installation de systèmes de sécurité : vidéosurveillance, alarmes anti-intrusion, contrôle d'accès, domotique. Étude gratuite, installation sous 48h, garantie 5 ans. Intervention sur toute la France."
        serviceUrl="/services/installation"
        serviceImage="/assets/prestations-installation.jpg"
        faqItems={faqItems}
        breadcrumbs={breadcrumbs}
      />
      <Header />
      <main className="pt-0">
        {/* SERVICE HERO */}
        <ServiceHero
          title="Installation Professionnelle de Systèmes de Sécurité"
          subtitle="Installation Expert"
          description="HD Connect installe vos systèmes de sécurité avec expertise et rigueur. Étude de site gratuite, installation rapide sous 48h, configuration complète et garantie 5 ans. Confiez votre sécurité à des professionnels certifiés."
          backgroundImage={heroInstallationImage}
          icon={<Settings className="w-4 h-4" />}
          badgeText="Installation Expert"
          phoneNumber={contactInfo.phoneMobile}
          accentColor="installation"
        />

        {/* SECTION DESCRIPTION */}
        <ContentSection
          title="L'Installation Professionnelle : La Clé d'une Sécurité Fiable"
          badge="Expertise Métier"
          badgeIcon={<Settings className="w-4 h-4" />}
          imagePosition="right"
          image={technicianWorkImage}
          imageAlt="Technicien HD Connect installant un système de sécurité"
          content={
            <>
              <p>
                Un système de sécurité n'est efficace que s'il est correctement installé et configuré. <strong>80% des pannes et dysfonctionnements</strong> sont dus à une installation défaillante ou un paramétrage incorrect. C'est pourquoi HD Connect fait de l'installation professionnelle sa priorité absolue.
              </p>
              <p>
                Nos techniciens sont formés et certifiés par les plus grandes marques du secteur (Hikvision, Dahua, Ajax, Honeywell). Ils maîtrisent l'installation de tous les types de systèmes : vidéosurveillance, alarmes, contrôle d'accès, domotique et réseaux.
              </p>
              <p>
                Chaque installation commence par une <strong>étude de site gratuite</strong> pour comprendre vos besoins spécifiques et identifier les points de vulnérabilité. Nous vous proposons ensuite une solution sur mesure, adaptée à votre budget et à vos contraintes.
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
                Notre Engagement Qualité
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

        {/* IMAGE BREAK */}
        <ImageBreak 
          image={installCameraUniqueImage}
          alt="Installation professionnelle de système de vidéosurveillance par HD Connect"
          caption="Nos techniciens certifiés assurent une installation propre et professionnelle"
        />

        {/* CTA INTERMÉDIAIRE */}
        <CTAIntermediate 
          title="Besoin d'une installation professionnelle ?"
          subtitle="Demandez une étude de site gratuite et un devis personnalisé sous 24h."
          phoneNumber={contactInfo.phoneMobile}
          variant="gradient"
          accentColor="installation"
          showBenefits={true}
          urgencyText="Installation sous 48h garantie"
        />

        {/* STATISTIQUES CLÉS */}
        <ColoredStatsSection
          title="Notre Expertise Installation en Chiffres"
          stats={[
            { value: "5 ans", label: "Garantie", description: "pièces et main d'œuvre" },
            { value: "48h", label: "Installation", description: "délai d'intervention" },
            { value: "2000+", label: "Projets", description: "réalisés depuis 2014" },
            { value: "98%", label: "Satisfaction", description: "clients recommandent" },
          ]}
          variant="installation"
        />

        {/* SECTION TYPES DE SYSTÈMES */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-4">
                Systèmes que Nous Installons
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                HD Connect installe tous les types de systèmes de sécurité électronique.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {systemTypes.map((system, index) => {
                const Icon = system.icon;
                return (
                  <AnimatedSection key={index} animation={index % 2 === 0 ? "fade-right" : "fade-left"} delay={index * 100}>
                    <Card className="p-6 hover-lift h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{system.title}</CardTitle>
                      </div>
                      <p className="text-muted-foreground mb-4">{system.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {system.features.map((feature, i) => (
                          <span key={i} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Link to={system.link}>
                        <Button variant="outline" className="w-full">
                          En savoir plus
                        </Button>
                      </Link>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION AVANTAGES */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-12">
                Pourquoi Choisir HD Connect pour Votre Installation ?
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

        {/* COUVERTURE RÉGIONALE */}
        <RegionCoverage serviceName="Installation" serviceSlug="installation" />

        {/* PROCESSUS */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-12">
                Votre Installation en 4 Étapes
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

        {/* FAQ */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-12">
                Questions Fréquentes sur l'Installation
              </h2>
            </AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>

        {/* CTA FLOATING CONVERSION */}
        <CTAFloating serviceName="projet" />

        {/* LIENS SERVICES */}
        <ServiceLinks currentService="Installation" />
      </main>
      <Footer />
    </div>
  );
};

export default Installation;
