import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { Wrench, Clock, PhoneCall, Shield, CheckCircle, TrendingUp, MapPin, HardHat, Settings, Zap, Users, Award, Phone, MessageSquare, Building, Store, Factory, Home as HomeIcon } from "lucide-react";
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
import heroMaintenanceImage from "@/assets/hero-maintenance.jpg";
import maintenanceTechImage from "@/assets/maintenance-tech.jpg";
import maintenanceDiagnosticImage from "@/assets/maintenance-diagnostic.jpg";
import maintenanceTeamImage from "@/assets/maintenance-team.jpg";

const Maintenance = () => {
  const { maintenance } = content.pageServices;
  const contactInfo = content.company.contact;

  useSEO({
    title: "Maintenance Sécurité & Dépannage | 24/7 Express | HD Connect",
    description: "Maintenance et dépannage systèmes sécurité : alarme, caméra, contrôle accès. Contrats préventifs, intervention 24/7. Devis gratuit, France.",
    keywords: "maintenance sécurité, dépannage alarme, réparation caméra, contrat maintenance, support 24/7, intervention express, HD Connect",
    canonicalUrl: "https://hdconnect.fr/services/maintenance",
  });

  const breadcrumbs = [
    { name: "Services", url: "/#services" },
    { name: "Maintenance", url: "/services/maintenance" },
  ];

  const faqItems = maintenance.faq || [];

  const features = [
    { icon: Clock, title: "Support 24/7 Prioritaire", description: "Assistance technique disponible à tout moment avec hotline dédiée, réponse immédiate et intervention rapide même les nuits, week-ends et jours fériés." },
    { icon: PhoneCall, title: "Intervention Garantie Express", description: "Délai d'intervention contractuel (4h, 8h ou 24h selon votre formule) pour maintenir votre sécurité opérationnelle sans interruption prolongée." },
    { icon: CheckCircle, title: "Maintenance Préventive Complète", description: "Contrôles réguliers exhaustifs pour prévenir les pannes : nettoyage, vérification des connexions, tests complets, rapport détaillé après chaque visite." },
    { icon: TrendingUp, title: "Mises à Jour Firmware Incluses", description: "Installation des dernières mises à jour firmware et patches de sécurité pour une performance optimale et une protection contre les vulnérabilités." },
  ];

  const processSteps = [
    { icon: MapPin, title: "1. Audit Technique Initial", description: "Évaluation complète de l'état de vos équipements, analyse des risques de panne et définition du contrat le plus adapté à vos besoins et budget." },
    { icon: HardHat, title: "2. Visites Préventives Planifiées", description: "Interventions régulières (annuelles, semestrielles ou mensuelles) pour nettoyage des optiques, vérification des connexions, tests complets et mise à jour des firmwares." },
    { icon: Settings, title: "3. Dépannage Express Prioritaire", description: "Intervention rapide et prioritaire en cas de panne, avec diagnostic technique complet, pièces de rechange d'origine et mise en service rapide." },
    { icon: CheckCircle, title: "4. Reporting et Suivi Continu", description: "Rapports détaillés après chaque intervention, suivi de l'état de santé de votre parc, alertes préventives et recommandations d'amélioration." },
  ];

  const useCases = [
    { 
      icon: HomeIcon, 
      title: "Résidences Privées", 
      description: "Contrats de maintenance pour vos systèmes de sécurité domestique. Visites annuelles, dépannage prioritaire et support technique dédié pour votre tranquillité d'esprit.",
      features: ["Visite annuelle incluse", "Dépannage prioritaire", "Pièces de rechange", "Support technique 24/7"]
    },
    { 
      icon: Building, 
      title: "Entreprises et Bureaux", 
      description: "Contrats de maintenance préventive pour les systèmes critiques. Visites régulières, monitoring proactif et intervention rapide en cas de problème.",
      features: ["Visites semestrielles", "Monitoring 24/7", "Intervention 4h garantie", "Rapports détaillés"]
    },
    { 
      icon: Store, 
      title: "Commerces et Retail", 
      description: "Maintenance adaptée aux horaires commerciaux. Interventions en dehors des heures d'ouverture, dépannage express et support prioritaire.",
      features: ["Interventions hors horaires", "Dépannage express", "Pièces en stock", "Contrats flexibles"]
    },
    { 
      icon: Factory, 
      title: "Sites Industriels et Critiques", 
      description: "Contrats SLA (Service Level Agreement) avec garanties de disponibilité. Équipes dédiées, pièces de rechange en stock et intervention immédiate.",
      features: ["SLA garantis", "Équipes dédiées", "Stock pièces", "Intervention immédiate"]
    },
  ];

  const advantages = [
    { icon: Award, title: "Techniciens Certifiés", description: "Tous nos techniciens sont certifiés par les constructeurs (Hikvision, Dahua, Axis, etc.) avec plus de 5 ans d'expérience en maintenance." },
    { icon: Zap, title: "Pièces d'Origine Garanties", description: "Utilisation exclusive de pièces d'origine avec garantie constructeur. Aucune pièce contrefaite ou de mauvaise qualité." },
    { icon: Shield, title: "Contrats Flexibles", description: "Contrats adaptés à votre budget et vos besoins : maintenance annuelle, semestrielle, mensuelle ou à la demande." },
    { icon: Clock, title: "Intervention Garantie", description: "Délai d'intervention contractuel (4h, 8h ou 24h) avec pénalité financière en cas de non-respect. Votre sécurité est notre priorité." },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ServiceSchema
        serviceName="Maintenance et Dépannage Systèmes de Sécurité"
        serviceDescription="Expert en maintenance préventive et dépannage de systèmes de sécurité : alarme, vidéosurveillance, contrôle d'accès. Support 24/7, intervention express, contrats SLA. Intervention sur toute la France."
        serviceUrl="/services/maintenance"
        serviceImage="/assets/service-maintenance.jpg"
        faqItems={faqItems}
        breadcrumbs={breadcrumbs}
      />
      <Header />
      <main className="pt-0">
        {/* SERVICE HERO WITH BACKGROUND IMAGE */}
        <ServiceHero
          title="Maintenance et Dépannage Systèmes de Sécurité"
          subtitle="Expert Maintenance 24/7"
          description="Assurez la continuité de votre sécurité avec nos contrats de maintenance préventive et dépannage express. HD Connect intervient 24h/24 pour maintenir vos systèmes en parfait état : alarme, vidéosurveillance, contrôle d'accès, réseau."
          backgroundImage={heroMaintenanceImage}
          icon={<Wrench className="w-4 h-4" />}
          badgeText="Expert Maintenance 24/7"
          phoneNumber={contactInfo.phoneMobile}
        />

        

        {/* SECTION DESCRIPTION EXPERTE - 50/50 */}
        <ContentSection
          title="Pourquoi Souscrire à un Contrat de Maintenance ?"
          badge="Support 24/7"
          badgeIcon={<Wrench className="w-4 h-4" />}
          imagePosition="right"
          image={maintenanceTechImage}
          imageAlt="Technicien effectuant la maintenance d'un système de sécurité"
          content={
            <>
              <p>
                La maintenance préventive des systèmes de sécurité est souvent négligée, jusqu'au jour où une panne survient. Or, une caméra défaillante ou une alarme non fonctionnelle peuvent coûter bien plus cher qu'un contrat de maintenance annuel. Selon les assureurs, une panne de sécurité peut entraîner <strong>une augmentation de prime de 20 à 50%</strong>.
              </p>
              <p>
                Chez HD Connect, nous proposons des contrats de maintenance adaptés à chaque profil : maintenance annuelle pour les résidences, contrats SLA pour les sites critiques, ou interventions à la demande. Notre approche privilégie la <strong>prévention plutôt que la réaction</strong>.
              </p>
              <p>
                Nous disposons d'un <strong>stock de pièces de rechange d'origine</strong> en permanence, permettant une intervention rapide en cas de défaillance. Aucune attente de commande, aucune perte de temps.
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
                Services de Maintenance Professionnels
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
                Comment Fonctionne Notre Maintenance Préventive ?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  La maintenance préventive repose sur un calendrier d'interventions régulières planifiées. Contrairement à la maintenance corrective (réparation après panne), la maintenance préventive anticipe les problèmes et les résout avant qu'ils n'impactent votre sécurité.
                </p>
                <p>
                  <strong>Lors de chaque visite, nos techniciens effectuent</strong> : nettoyage des optiques des caméras (accumulation de poussière = baisse de qualité), vérification des connexions réseau et électriques, test complet des fonctionnalités, mise à jour des firmwares, vérification des batteries de secours et rapport détaillé.
                </p>
                <p>
                  <strong>Le monitoring proactif complète la maintenance</strong>. Nos systèmes envoient des alertes automatiques en cas d'anomalie détectée (caméra déconnectée, alarme désarmée, batterie faible). Nous contactons immédiatement le client pour résoudre le problème avant qu'il ne devienne critique.
                </p>
                <p>
                  <strong>En cas de panne urgente</strong>, votre appel est traité en priorité. Nos techniciens interviennent dans le délai contractuel (4h, 8h ou 24h selon votre formule) avec diagnostic complet, pièces de rechange d'origine et mise en service rapide. Aucune attente, aucune improvisation.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* IMAGE BREAK STRATÉGIQUE */}
        <ImageBreak 
          image={maintenanceTeamImage}
          alt="Équipe de maintenance HD Connect en intervention"
          caption="Notre équipe intervient rapidement pour assurer la continuité de vos systèmes"
        />

        {/* SECTION CAS D'USAGE CONCRETS */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-4">
                Contrats de Maintenance Adaptés à Votre Profil
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                HD Connect propose des formules flexibles pour chaque type de client et chaque niveau de criticité.
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
                Pourquoi Choisir HD Connect pour Votre Maintenance ?
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
                Maintenance sur Toute la France
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                HD Connect intervient sur l'ensemble du territoire national pour la maintenance de vos systèmes de sécurité. Que vous soyez en <strong>Île-de-France</strong> (Paris, Versailles, Saint-Denis, Boulogne), dans le <strong>Nord</strong> (Lille, Valenciennes), le <strong>Sud</strong> (Marseille, Nice, Toulouse), l'<strong>Est</strong> (Lyon, Strasbourg) ou l'<strong>Ouest</strong> (Nantes, Bordeaux, Rennes), nos équipes se déplacent pour assurer la continuité de votre sécurité.
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
                Votre Contrat de Maintenance en 4 Étapes
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

        <ServicePrestations serviceName="Maintenance" />

        {/* GALERIE IMAGES */}
        <ServiceShowcase
          title="Notre Équipe Maintenance"
          description="Techniciens certifiés intervenant sur tous types de systèmes de sécurité."
          images={[
            { src: maintenanceDiagnosticImage, alt: "Diagnostic système de sécurité" },
            { src: maintenanceTechImage, alt: "Technicien maintenance" },
            { src: maintenanceTeamImage, alt: "Équipe maintenance HD Connect" }
          ]}
        />

        {/* SECTION CTA DEVIS */}
        <section id="quote" className="section-padding bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection animation="scale-in" className="max-w-3xl mx-auto text-center">
              <h2 className="section-title text-center mb-6">
                Demandez Votre Devis de Maintenance
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Recevez une proposition personnalisée sous 48h. Audit technique gratuit, sans engagement.
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

        <ServiceLinks currentService="maintenance" />

        {/* FAQ ACCORDÉON */}
        <FAQAccordion 
          title="Questions Fréquentes sur la Maintenance"
          subtitle="Réponses à vos questions sur les contrats de maintenance et le dépannage."
          items={faqItems}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Maintenance;
