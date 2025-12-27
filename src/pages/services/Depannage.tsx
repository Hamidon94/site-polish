import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { Wrench, Clock, Phone, AlertTriangle, CheckCircle, Shield, Award, Zap, Users, MapPin, Truck, Home, Building2, Factory, Camera, Lock, Radio, Settings, PhoneCall, Calendar } from "lucide-react";
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
import heroDepannageImage from "@/assets/prestations-depannage.jpg";
import depannageTechUniqueImage from "@/assets/depannage-tech-unique.jpg";
import maintenanceDiagnosticImage from "@/assets/maintenance-diagnostic.jpg";

const Depannage = () => {
  const contactInfo = content.company.contact;

  useSEO({
    title: "Dépannage Sécurité Express 24/7 | Caméras, Alarmes | HD Connect",
    description: "Dépannage urgent de systèmes de sécurité 24h/24, 7j/7. Intervention sous 4h, diagnostic gratuit, techniciens certifiés. Caméras, alarmes, contrôle d'accès.",
    keywords: "dépannage sécurité, réparation alarme, panne caméra, dépannage vidéosurveillance, urgence sécurité, HD Connect",
    canonicalUrl: "https://hdconnect.fr/services/depannage",
  });

  const breadcrumbs = [
    { name: "Services", url: "/#services" },
    { name: "Dépannage", url: "/services/depannage" },
  ];

  const faqItems = [
    { 
      question: "Intervenez-vous la nuit et le week-end ?", 
      answer: "Oui, notre service de dépannage est disponible 24h/24, 7j/7, y compris les nuits, week-ends et jours fériés. En cas d'urgence, appelez notre numéro d'astreinte pour une intervention rapide." 
    },
    { 
      question: "Quel est le délai d'intervention en urgence ?", 
      answer: "En Île-de-France, nous intervenons sous 4h maximum en cas d'urgence. Pour les autres régions, le délai est généralement de 8h à 24h selon votre localisation et la disponibilité de nos équipes." 
    },
    { 
      question: "Le diagnostic est-il payant ?", 
      answer: "Non, le diagnostic téléphonique est toujours gratuit. Nous essayons d'abord de résoudre votre problème à distance. Si une intervention sur site est nécessaire, le diagnostic sur place est facturé mais déduit du montant de la réparation." 
    },
    { 
      question: "Réparez-vous les systèmes installés par d'autres ?", 
      answer: "Oui, nous intervenons sur tous les systèmes, quelle que soit la marque ou l'installateur d'origine. Notre équipe est formée sur les principales marques du marché (Hikvision, Dahua, Ajax, Honeywell, etc.)." 
    },
    { 
      question: "Comment être sûr que la panne ne reviendra pas ?", 
      answer: "Nous identifions la cause racine de chaque panne et ne nous contentons pas de traiter les symptômes. Après chaque intervention, nous vous remettons un rapport détaillé et des recommandations pour éviter les récidives." 
    },
    { 
      question: "Proposez-vous des contrats de maintenance préventive ?", 
      answer: "Oui, nous proposons des contrats de maintenance annuels qui incluent des visites préventives régulières, des mises à jour et une priorité d'intervention en cas de panne. Consultez notre page Maintenance pour plus de détails." 
    },
  ];

  const features = [
    { icon: Clock, title: "Intervention sous 4h", description: "Notre équipe se déplace rapidement en cas d'urgence. En Île-de-France, nous garantissons une intervention sous 4h maximum, 7j/7." },
    { icon: Phone, title: "Diagnostic Téléphonique Gratuit", description: "Appelez-nous pour décrire votre problème. Nos experts tentent d'abord de le résoudre à distance avant d'envoyer un technicien." },
    { icon: Wrench, title: "Techniciens Multi-Marques", description: "Nos techniciens sont formés sur toutes les marques : Hikvision, Dahua, Ajax, Honeywell, DSC, Paradox, Axis, et bien d'autres." },
    { icon: CheckCircle, title: "Pièces d'Origine Garanties", description: "Nous n'utilisons que des pièces d'origine constructeur pour garantir la fiabilité et la durabilité de vos réparations." },
  ];

  const processSteps = [
    { icon: PhoneCall, title: "1. Appel Urgence", description: "Appelez notre hotline disponible 24/7. Un expert évalue votre situation et tente un diagnostic à distance immédiat." },
    { icon: Truck, title: "2. Déplacement Express", description: "Si le problème ne peut être résolu à distance, un technicien est dépêché sur site dans les meilleurs délais." },
    { icon: Wrench, title: "3. Diagnostic et Réparation", description: "Le technicien identifie la cause de la panne, effectue la réparation et teste l'ensemble du système." },
    { icon: CheckCircle, title: "4. Rapport et Garantie", description: "Vous recevez un rapport d'intervention détaillé. La réparation est garantie 6 mois pièces et main d'œuvre." },
  ];

  const panneTypes = [
    { 
      icon: Camera, 
      title: "Pannes Vidéosurveillance", 
      description: "Caméra qui ne fonctionne plus, image noire ou floue, NVR/DVR en panne, perte d'accès distant, problème de réseau.",
      problems: ["Caméra HS", "Image noire/floue", "NVR en panne", "Pas d'accès mobile", "Stockage saturé"]
    },
    { 
      icon: Shield, 
      title: "Pannes Alarme", 
      description: "Centrale qui ne répond plus, détecteur défaillant, fausses alertes répétées, sirène muette, perte de connexion.",
      problems: ["Centrale HS", "Fausses alertes", "Sirène muette", "Détecteur défaillant", "Batterie faible"]
    },
    { 
      icon: Lock, 
      title: "Pannes Contrôle d'Accès", 
      description: "Badge non reconnu, interphone en panne, serrure bloquée, problème de gestion des accès.",
      problems: ["Badge refusé", "Interphone muet", "Serrure bloquée", "Clavier HS", "Gâche défaillante"]
    },
    { 
      icon: Radio, 
      title: "Pannes Réseau & Domotique", 
      description: "Perte de connexion, WiFi instable, switch en panne, problème d'automatisation.",
      problems: ["Perte WiFi", "Réseau lent", "Switch HS", "Domotique déconnectée", "VPN en panne"]
    },
  ];

  const advantages = [
    { icon: Award, title: "Disponibilité 24/7", description: "Service d'astreinte disponible nuit et jour, week-ends et jours fériés pour les urgences critiques." },
    { icon: Zap, title: "Réactivité Maximale", description: "Intervention sous 4h en Île-de-France. Prise en charge immédiate de votre demande par téléphone." },
    { icon: Shield, title: "Garantie 6 Mois", description: "Toutes nos réparations sont garanties 6 mois pièces et main d'œuvre. Pas de surprise." },
    { icon: Users, title: "Experts Certifiés", description: "Techniciens formés et certifiés par les plus grandes marques. Compétences mises à jour en continu." },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ServiceSchema
        serviceName="Dépannage Systèmes de Sécurité Express 24/7"
        serviceDescription="Dépannage urgent de systèmes de sécurité 24h/24, 7j/7. Intervention sous 4h en Île-de-France, diagnostic gratuit, techniciens certifiés multi-marques. Caméras, alarmes, contrôle d'accès."
        serviceUrl="/services/depannage"
        serviceImage="/assets/prestations-depannage.jpg"
        faqItems={faqItems}
        breadcrumbs={breadcrumbs}
      />
      <Header />
      <main className="pt-0">
        {/* SERVICE HERO */}
        <ServiceHero
          title="Dépannage Sécurité Express 24h/24, 7j/7"
          subtitle="Dépannage Urgent"
          description="Panne de caméra, alarme défaillante ou contrôle d'accès bloqué ? HD Connect intervient en urgence 24h/24 pour remettre votre système de sécurité en état de fonctionnement. Diagnostic gratuit par téléphone, intervention sous 4h."
          backgroundImage={heroDepannageImage}
          icon={<Wrench className="w-4 h-4" />}
          badgeText="Dépannage Urgent"
          phoneNumber={contactInfo.phoneMobile}
        />

        {/* SECTION DESCRIPTION */}
        <ContentSection
          title="Votre Sécurité Ne Peut Pas Attendre"
          badge="Intervention Express"
          badgeIcon={<AlertTriangle className="w-4 h-4" />}
          imagePosition="right"
          image={depannageTechUniqueImage}
          imageAlt="Technicien HD Connect en intervention de dépannage"
          content={
            <>
              <p>
                Une panne de votre système de sécurité vous laisse vulnérable. <strong>Chaque minute compte</strong> lorsque votre alarme est hors service ou que vos caméras ne fonctionnent plus. C'est pourquoi HD Connect a mis en place un service de dépannage express disponible 24h/24, 7j/7.
              </p>
              <p>
                Notre équipe de techniciens certifiés est formée pour intervenir sur tous les types de systèmes, quelle que soit la marque ou l'installateur d'origine. Nous diagnostiquons rapidement la cause de la panne et effectuons la réparation sur place dans la majorité des cas.
              </p>
              <p>
                Avant même le déplacement, nos experts tentent de <strong>résoudre votre problème par téléphone</strong>. Si une intervention sur site est nécessaire, nous vous communiquons un délai précis et un devis transparent avant toute intervention.
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
                Notre Service Dépannage
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
          image={maintenanceDiagnosticImage}
          alt="Technicien effectuant un diagnostic sur un système de sécurité"
          caption="Diagnostic complet et réparation rapide par nos experts certifiés"
        />

        {/* CTA INTERMÉDIAIRE */}
        <CTAIntermediate 
          title="Panne urgente ? Appelez maintenant !"
          subtitle="Notre équipe est disponible 24h/24, 7j/7 pour intervenir rapidement."
          phoneNumber={contactInfo.phoneMobile}
        />

        {/* SECTION TYPES DE PANNES */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-4">
                Types de Pannes que Nous Réparons
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Nos techniciens interviennent sur tous les types de systèmes de sécurité.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {panneTypes.map((panne, index) => {
                const Icon = panne.icon;
                return (
                  <AnimatedSection key={index} animation={index % 2 === 0 ? "fade-right" : "fade-left"} delay={index * 100}>
                    <Card className="p-6 hover-lift h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{panne.title}</CardTitle>
                      </div>
                      <p className="text-muted-foreground mb-4">{panne.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {panne.problems.map((problem, i) => (
                          <span key={i} className="text-xs px-3 py-1 bg-destructive/10 text-destructive rounded-full">
                            {problem}
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
                Pourquoi Choisir HD Connect pour Votre Dépannage ?
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
        <RegionCoverage serviceName="Dépannage" serviceSlug="depannage" />

        {/* PROCESSUS */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-12">
                Votre Dépannage en 4 Étapes
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
                Questions Fréquentes sur le Dépannage
              </h2>
            </AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>

        {/* LIENS SERVICES */}
        <ServiceLinks currentService="Dépannage" />
      </main>
      <Footer />
    </div>
  );
};

export default Depannage;
