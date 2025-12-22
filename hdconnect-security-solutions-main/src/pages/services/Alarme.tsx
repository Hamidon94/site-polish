import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShieldAlert, Bell, Smartphone, Radio, Home, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import alarmImage from "@/assets/service-alarm.jpg";

const Alarme = () => {
  const features = [
    {
      icon: ShieldAlert,
      title: "Détection intelligente multi-zones",
      description: "Capteurs de mouvement PIR et d'ouverture magnétiques avec détection avancée pour éviter 99% des fausses alarmes"
    },
    {
      icon: Bell,
      title: "Sirènes intérieures/extérieures",
      description: "Alarmes sonores puissantes 110dB certifiées pour dissuader les intrus avec protection anti-sabotage"
    },
    {
      icon: Smartphone,
      title: "Notifications instantanées push",
      description: "Alertes en temps réel sur votre smartphone avec photos en cas d'intrusion, où que vous soyez"
    },
    {
      icon: Radio,
      title: "Télésurveillance professionnelle",
      description: "Connexion directe avec un centre de télésurveillance agréé APSAD 24/7 avec intervention rapide"
    },
    {
      icon: Home,
      title: "Protection périmétrique complète",
      description: "Sécurisation intérieure et extérieure avec détecteurs de présence, d'ouverture et de bris de vitre"
    },
    {
      icon: Building2,
      title: "Contrôle centralisé intelligent",
      description: "Gestion simple via clavier tactile, badge RFID, code PIN ou application mobile avec historique complet"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Systèmes d'Alarme Anti-Intrusion
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Alarmes connectées avec détection intelligente pour protéger vos locaux contre les intrusions. Systèmes sans fil ou filaires certifiés NF&A2P avec télésurveillance optionnelle 24/7.
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
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img src={alarmImage} alt="Systèmes d'Alarme" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Caractéristiques et Avantages
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

        {/* Solutions Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Nos Solutions d'Alarme
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-lg bg-card border">
                <h3 className="text-2xl font-bold mb-4">Pour Particuliers</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Alarme sans fil facile à installer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Application mobile gratuite</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Détecteurs de mouvement intelligents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Option télésurveillance disponible</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-lg bg-card border">
                <h3 className="text-2xl font-bold mb-4">Pour Professionnels</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Systèmes multi-zones personnalisables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Télésurveillance professionnelle 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Intégration avec contrôle d'accès</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Maintenance préventive incluse</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Protégez votre propriété dès maintenant
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Demandez une évaluation gratuite de vos besoins en sécurité avec visite sur site
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

        {/* Certifications */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Certifications & Conformité
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Norme NF&A2P</h3>
                <p className="text-muted-foreground">Systèmes certifiés pour une reconnaissance par les assurances et réductions de prime</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Grade 2 & 3</h3>
                <p className="text-muted-foreground">Protection adaptée selon le niveau de risque : résidentiel, commercial ou industriel</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Installation certifiée</h3>
                <p className="text-muted-foreground">Techniciens qualifiés avec attestation de conformité pour votre assurance</p>
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
                <h3 className="text-lg font-bold mb-2">Mon alarme peut-elle être reliée à mon assurance ?</h3>
                <p className="text-muted-foreground">Oui, nos systèmes certifiés NF&A2P sont reconnus par les assureurs et peuvent vous faire bénéficier d'une réduction de prime allant jusqu'à 10%.</p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-lg font-bold mb-2">Comment éviter les fausses alarmes ?</h3>
                <p className="text-muted-foreground">Nos détecteurs de nouvelle génération analysent le type de mouvement et éliminent 99% des fausses alarmes (animaux domestiques, courants d'air, etc.).</p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-lg font-bold mb-2">L'alarme fonctionne-t-elle en cas de coupure de courant ?</h3>
                <p className="text-muted-foreground">Oui, toutes nos centrales intègrent une batterie de secours permettant un fonctionnement de 12 à 48h en autonomie complète.</p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-lg font-bold mb-2">Puis-je armer/désarmer à distance ?</h3>
                <p className="text-muted-foreground">Absolument, via l'application mobile vous contrôlez votre alarme de n'importe où et recevez l'historique de tous les événements.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Alarme;
