import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Wrench, Clock, PhoneCall, Shield, CheckCircle, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Maintenance = () => {
  const features = [
    {
      icon: Clock,
      title: "Support 24/7 prioritaire",
      description: "Assistance technique disponible à tout moment pour vos urgences avec hotline dédiée et intervention sous 4h en Île-de-France"
    },
    {
      icon: PhoneCall,
      title: "Interventions rapides garanties",
      description: "Délai d'intervention garanti sous contrat (4h, 8h ou 24h) pour maintenir votre sécurité opérationnelle"
    },
    {
      icon: CheckCircle,
      title: "Maintenance préventive planifiée",
      description: "Contrôles réguliers semestriels ou annuels pour prévenir les pannes avec checklist exhaustive et rapport détaillé"
    },
    {
      icon: TrendingUp,
      title: "Mises à jour logicielles incluses",
      description: "Installation des dernières mises à jour firmware, patches de sécurité et nouvelles fonctionnalités incluses"
    },
    {
      icon: Shield,
      title: "Contrats sur mesure évolutifs",
      description: "Formules flexibles adaptées à vos besoins et budget avec extension de garantie jusqu'à 5 ans"
    },
    {
      icon: Wrench,
      title: "Réparations et pièces garanties",
      description: "Pièces détachées d'origine en stock et travaux garantis avec main d'œuvre incluse selon contrat"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Maintenance & Support Technique
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Service de maintenance préventive et support technique réactif pour tous vos équipements de sécurité. Contrats adaptés aux particuliers, PME et grandes entreprises avec intervention garantie.
              </p>
              <Link to="/">
                <Button size="lg" className="mr-4" onClick={() => {
                  setTimeout(() => {
                    const element = document.getElementById("quote");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}>
                  Demander un devis
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline" onClick={() => {
                  setTimeout(() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}>
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Nos Services de Maintenance
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contracts Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Nos Contrats de Maintenance
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="p-8 rounded-lg bg-card border">
                <h3 className="text-2xl font-bold mb-4">Essentiel</h3>
                <p className="text-muted-foreground mb-6">Pour les particuliers</p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Support téléphonique 9h-18h</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>1 visite annuelle préventive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Mise à jour logicielles incluses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Tarif préférentiel dépannage</span>
                  </li>
                </ul>
                <Link to="/">
                  <Button variant="outline" className="w-full" onClick={() => {
                    setTimeout(() => {
                      const element = document.getElementById("quote");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}>Choisir</Button>
                </Link>
              </div>

              <div className="p-8 rounded-lg bg-card border-2 border-primary relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Populaire
                </div>
                <h3 className="text-2xl font-bold mb-4">Premium</h3>
                <p className="text-muted-foreground mb-6">Pour les professionnels</p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Support 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>2 visites annuelles préventives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Dépannages illimités inclus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Pièces de rechange prioritaires</span>
                  </li>
                </ul>
                <Link to="/">
                  <Button className="w-full" onClick={() => {
                    setTimeout(() => {
                      const element = document.getElementById("quote");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}>Choisir</Button>
                </Link>
              </div>

              <div className="p-8 rounded-lg bg-card border">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <p className="text-muted-foreground mb-6">Sur mesure</p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Support dédié 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Maintenance préventive mensuelle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>SLA garanti avec pénalités</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Reporting et audits réguliers</span>
                  </li>
                </ul>
                <Link to="/">
                  <Button variant="outline" className="w-full" onClick={() => {
                    setTimeout(() => {
                      const element = document.getElementById("quote");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}>Nous contacter</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Assurez la pérennité de vos installations
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Souscrivez à un contrat de maintenance adapté à vos besoins avec premier mois offert
            </p>
            <Link to="/">
              <Button size="lg" onClick={() => {
                setTimeout(() => {
                  const element = document.getElementById("quote");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}>
                Demander un devis gratuit
              </Button>
            </Link>
          </div>
        </section>

        {/* Avantages maintenance */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Pourquoi un contrat de maintenance ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Conformité assurance</h3>
                <p className="text-muted-foreground">Maintenance obligatoire pour validité garantie et prise en charge par l'assurance</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Durée de vie +40%</h3>
                <p className="text-muted-foreground">Prolongez la durée de vie de vos équipements et évitez les pannes coûteuses</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Tarifs préférentiels</h3>
                <p className="text-muted-foreground">Économisez jusqu'à 30% sur les interventions et pièces avec contrat annuel</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Questions Fréquentes
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-lg font-bold mb-2">La maintenance est-elle obligatoire ?</h3>
                <p className="text-muted-foreground">Pour les ERP et certaines installations professionnelles, oui. Pour les particuliers, fortement recommandée pour la garantie et performance optimale.</p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-lg font-bold mb-2">Que comprend une visite de maintenance préventive ?</h3>
                <p className="text-muted-foreground">Test complet de tous les équipements, nettoyage, vérification connexions, mise à jour logiciels, test batterie de secours et rapport détaillé avec photos.</p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-lg font-bold mb-2">Puis-je souscrire pour une installation existante ?</h3>
                <p className="text-muted-foreground">Oui, après un audit technique initial (gratuit) pour évaluer l'état et définir le contrat adapté. Compatible toutes marques.</p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-lg font-bold mb-2">Que se passe-t-il en cas de panne hors heures ouvrées ?</h3>
                <p className="text-muted-foreground">Les contrats Premium et Enterprise incluent astreinte 24/7 avec intervention sous 4h même nuits et week-ends en Île-de-France.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Maintenance;
