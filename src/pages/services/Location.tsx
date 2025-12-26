import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { Package, Clock, Calendar, CheckCircle, Shield, Award, Zap, Users, MapPin, Truck, Building2, PartyPopper, HardHat, Camera, Lock, Settings, Phone, FileText, ArrowRight } from "lucide-react";
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
import ServiceLinks from "@/components/ServiceLinks";
import heroLocationImage from "@/assets/prestations-location.jpg";
import controlRoomImage from "@/assets/control-room.jpg";
import serviceAccessImage from "@/assets/service-access.jpg";

const Location = () => {
  const contactInfo = content.company.contact;

  useSEO({
    title: "Location Équipements Sécurité | Caméras, Alarmes Temporaires | HD Connect",
    description: "Location de matériel de sécurité pour événements, chantiers et besoins temporaires. Caméras portables, alarmes, contrôle d'accès. Installation et retrait inclus.",
    keywords: "location caméra surveillance, location alarme chantier, sécurité événementiel, location vidéosurveillance, HD Connect",
    canonicalUrl: "https://hdconnect.fr/services/location",
  });

  const breadcrumbs = [
    { name: "Services", url: "/#services" },
    { name: "Location", url: "/services/location" },
  ];

  const faqItems = [
    { 
      question: "Quelle est la durée minimale de location ?", 
      answer: "La durée minimale est d'une journée pour les événements ponctuels. Pour les chantiers, nous proposons des forfaits à la semaine ou au mois avec des tarifs dégressifs. La durée est flexible et adaptable à vos besoins." 
    },
    { 
      question: "L'installation et le retrait sont-ils inclus ?", 
      answer: "Oui, nos techniciens assurent l'installation, la configuration et le retrait du matériel. Le prix de location inclut ces prestations ainsi que le support technique pendant toute la durée de la location." 
    },
    { 
      question: "Le matériel est-il assuré en cas de vol ou dégradation ?", 
      answer: "Oui, notre matériel est couvert par une assurance tous risques. En cas de vol ou dégradation, une franchise raisonnable s'applique. Nous pouvons également vous proposer une assurance complémentaire sans franchise." 
    },
    { 
      question: "Puis-je surveiller le site à distance pendant la location ?", 
      answer: "Absolument ! Tous nos systèmes de vidéosurveillance en location sont configurés pour un accès distant via application mobile ou navigateur web. Vous surveillez votre site en temps réel depuis n'importe où." 
    },
    { 
      question: "Proposez-vous la location longue durée avec option d'achat ?", 
      answer: "Oui, nous proposons des formules de location avec option d'achat (LOA). À la fin de la période de location, vous pouvez acquérir le matériel à prix réduit. Idéal pour tester un système avant de l'adopter définitivement." 
    },
    { 
      question: "Quels types d'équipements proposez-vous à la location ?", 
      answer: "Nous louons des caméras de surveillance (fixes, dômes, PTZ), des systèmes d'alarme portables, des kits de contrôle d'accès, des barrières et bornes escamotables, ainsi que des solutions de vidéoprotection autonomes pour chantiers." 
    },
  ];

  const features = [
    { icon: Package, title: "Équipement Premium", description: "Matériel professionnel de dernière génération : caméras 4K, alarmes Grade 2, systèmes autonomes avec panneau solaire et batterie longue durée." },
    { icon: Truck, title: "Installation Incluse", description: "Nos techniciens livrent, installent, configurent et forment vos équipes. À la fin de la location, nous récupérons le matériel sans frais supplémentaires." },
    { icon: Calendar, title: "Durée Flexible", description: "De quelques jours à plusieurs mois, nous adaptons la durée de location à votre projet. Tarifs dégressifs pour les locations longue durée." },
    { icon: Shield, title: "Support Technique 24/7", description: "Pendant toute la durée de la location, notre équipe technique reste disponible 24h/24 pour toute question ou intervention d'urgence." },
  ];

  const processSteps = [
    { icon: Phone, title: "1. Évaluation des Besoins", description: "Décrivez-nous votre projet, la durée et le type de protection souhaités. Nous évaluons vos besoins et proposons la solution adaptée." },
    { icon: FileText, title: "2. Devis Personnalisé", description: "Recevez un devis détaillé incluant le matériel, l'installation, la durée et le support. Prix transparent, tout compris." },
    { icon: HardHat, title: "3. Installation Express", description: "Nos techniciens installent et configurent le système sur votre site. Formation rapide de vos équipes incluse." },
    { icon: CheckCircle, title: "4. Surveillance Active", description: "Votre site est protégé ! Accès distant, alertes en temps réel et support technique disponible pendant toute la durée." },
  ];

  const useCases = [
    { 
      icon: HardHat, 
      title: "Chantiers BTP", 
      description: "Protection temporaire de vos chantiers de construction contre le vol de matériaux et d'engins. Systèmes autonomes avec panneau solaire, parfaits pour les sites sans électricité.",
      features: ["Caméras autonomes solaires", "Alarme périmétrique", "Accès distant chantier", "Sirène puissante 110dB"],
      duration: "1 semaine à 24 mois"
    },
    { 
      icon: PartyPopper, 
      title: "Événements & Salons", 
      description: "Sécurisation de vos événements professionnels ou privés : salons, concerts, mariages, inaugurations. Contrôle d'accès et vidéosurveillance temporaires.",
      features: ["Contrôle accès badges", "Vidéosurveillance HD", "Comptage visiteurs", "Installation rapide"],
      duration: "1 jour à 1 semaine"
    },
    { 
      icon: Building2, 
      title: "Locaux Vacants", 
      description: "Protection de vos locaux commerciaux ou industriels en attente de vente, rénovation ou relocation. Évitez les squats et dégradations.",
      features: ["Alarme anti-intrusion", "Ronde vidéo à distance", "Alerte temps réel", "Intervention possible"],
      duration: "1 mois à 12 mois"
    },
    { 
      icon: Camera, 
      title: "Test Avant Achat", 
      description: "Testez un système de vidéosurveillance ou d'alarme avant de vous engager. Découvrez les fonctionnalités et validez l'adaptation à vos besoins.",
      features: ["Matériel haut de gamme", "Configuration complète", "Support dédié", "Option d'achat -30%"],
      duration: "1 à 3 mois"
    },
  ];

  const advantages = [
    { icon: Award, title: "Matériel Professionnel", description: "Équipements de marques reconnues, entretenus et mis à jour régulièrement. Qualité garantie pour une protection optimale." },
    { icon: Zap, title: "Déploiement Rapide", description: "Installation en quelques heures, même sur des sites complexes. Intervention express possible sous 24h en Île-de-France." },
    { icon: Calendar, title: "Sans Engagement Long", description: "Pas d'investissement initial lourd. Payez uniquement pour la durée dont vous avez besoin. Résiliation flexible." },
    { icon: Users, title: "Accompagnement Complet", description: "De la conception à la récupération du matériel, nous gérons tout. Vous vous concentrez sur votre activité." },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ServiceSchema
        serviceName="Location Équipements de Sécurité"
        serviceDescription="Location de matériel de sécurité professionnel pour événements, chantiers et besoins temporaires. Caméras de surveillance, alarmes, contrôle d'accès. Installation, configuration et retrait inclus."
        serviceUrl="/services/location"
        serviceImage="/assets/prestations-location.jpg"
        faqItems={faqItems}
        breadcrumbs={breadcrumbs}
      />
      <Header />
      <main className="pt-0">
        {/* SERVICE HERO */}
        <ServiceHero
          title="Location d'Équipements de Sécurité Professionnels"
          subtitle="Location Temporaire"
          description="Besoin d'une sécurité temporaire pour un chantier, un événement ou des locaux vacants ? HD Connect propose la location de matériel de sécurité professionnel avec installation et support inclus. Protégez vos sites sans investissement lourd."
          backgroundImage={heroLocationImage}
          icon={<Package className="w-4 h-4" />}
          badgeText="Location Temporaire"
          phoneNumber={contactInfo.phoneMobile}
        />

        {/* SECTION DESCRIPTION */}
        <ContentSection
          title="La Sécurité Temporaire Sans Compromis"
          badge="Flexibilité Totale"
          badgeIcon={<Package className="w-4 h-4" />}
          imagePosition="right"
          image={controlRoomImage}
          imageAlt="Centre de surveillance avec équipements de sécurité HD Connect"
          content={
            <>
              <p>
                Tous les sites n'ont pas besoin d'une sécurité permanente. <strong>Chantiers, événements, locaux en transition</strong> : ces situations nécessitent une protection efficace mais temporaire. La location de matériel de sécurité est la solution idéale.
              </p>
              <p>
                HD Connect met à votre disposition du <strong>matériel professionnel de dernière génération</strong> : caméras 4K autonomes avec panneau solaire, alarmes Grade 2 portables, systèmes de contrôle d'accès temporaires. Tout est préconfiguré et opérationnel en quelques heures.
              </p>
              <p>
                Notre offre de location est <strong>tout compris</strong> : livraison, installation, configuration, formation, support technique 24/7 et récupération du matériel. Vous n'avez qu'à surveiller votre site depuis votre smartphone, nous gérons le reste.
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
                Les Avantages de la Location
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
          image={serviceAccessImage}
          alt="Système de contrôle d'accès professionnel disponible en location"
          caption="Équipements professionnels disponibles pour location courte ou longue durée"
        />

        {/* CTA INTERMÉDIAIRE */}
        <CTAIntermediate 
          title="Un projet de sécurité temporaire ?"
          subtitle="Demandez un devis personnalisé pour votre location de matériel."
          phoneNumber={contactInfo.phoneMobile}
        />

        {/* SECTION CAS D'USAGE */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-4">
                Situations Idéales pour la Location
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                HD Connect répond à tous vos besoins de sécurité temporaire.
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
                        <div>
                          <CardTitle className="text-xl">{useCase.title}</CardTitle>
                          <span className="text-xs text-accent font-medium">{useCase.duration}</span>
                        </div>
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

        {/* SECTION AVANTAGES */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-12">
                Pourquoi Louer avec HD Connect ?
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
        <RegionCoverage serviceName="Location" serviceSlug="location" />

        {/* PROCESSUS */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-12">
                Votre Location en 4 Étapes
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
                Questions Fréquentes sur la Location
              </h2>
            </AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>

        {/* LIENS SERVICES */}
        <ServiceLinks currentService="Location" />
      </main>
      <Footer />
    </div>
  );
};

export default Location;
