import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Monitor, Zap, Smartphone, Home, Sun, Thermometer } from "lucide-react";
import { Link } from "react-router-dom";

const Domotique = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Contrôle centralisé universel",
      description: "Pilotez tous vos équipements depuis une interface unique compatible Google Home, Alexa et Apple HomeKit"
    },
    {
      icon: Zap,
      title: "Automatisation intelligente IA",
      description: "Scénarios personnalisés auto-apprenants pour automatiser votre quotidien et économiser jusqu'à 30% d'énergie"
    },
    {
      icon: Sun,
      title: "Gestion éclairage avancée",
      description: "Contrôle intelligent RGB + blanc variable avec détection de présence et adaptation automatique à la luminosité"
    },
    {
      icon: Thermometer,
      title: "Contrôle climatique optimisé",
      description: "Optimisation chauffage/climatisation par zone avec apprentissage de vos habitudes et météo connectée"
    },
    {
      icon: Home,
      title: "Sécurité intégrée complète",
      description: "Synchronisation totale avec alarme, caméras, accès et simulation de présence pendant vos absences"
    },
    {
      icon: Monitor,
      title: "Compatible tous protocoles",
      description: "Intégration KNX, Z-Wave, Zigbee, Matter - Toutes les marques du marché avec évolutivité garantie"
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
                Solutions Domotique Intelligentes
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Intégration de systèmes domotiques pour une sécurité et un confort intelligents. De la maison connectée simple au Building Management System (BMS) industriel avec économies d'énergie garanties.
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
              Nos Solutions Domotique
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-lg bg-card border">
                <h3 className="text-2xl font-bold mb-4">Pour Particuliers</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Maison connectée complète</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Contrôle vocal (Alexa, Google Home)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Scénarios personnalisés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Économies d'énergie intelligentes</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-lg bg-card border">
                <h3 className="text-2xl font-bold mb-4">Pour Professionnels</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Building Management System (BMS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Gestion énergétique optimisée</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Intégration sécurité complète</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Supervision et reporting centralisés</span>
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
              Transformez votre habitat en maison intelligente
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Découvrez le confort et la sécurité d'une installation domotique professionnelle avec démonstration à domicile
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

        {/* Protocoles & Économies */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Protocoles & Économies d'Énergie
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Multi-protocoles</h3>
                <p className="text-muted-foreground">KNX, Z-Wave, Zigbee, Matter - Compatible avec 1000+ marques et évolutif</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Économies 20-35%</h3>
                <p className="text-muted-foreground">Réduction garantie de vos factures énergétiques avec ROI en 2-4 ans selon usage</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Contrôle vocal</h3>
                <p className="text-muted-foreground">Compatible Alexa, Google Assistant, Siri pour un contrôle mains-libres naturel</p>
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
                <h3 className="text-lg font-bold mb-2">Puis-je installer la domotique dans une maison existante ?</h3>
                <p className="text-muted-foreground">Oui, avec des solutions sans fil (Z-Wave, Zigbee) l'installation se fait sans travaux majeurs. Pour du neuf, nous recommandons du KNX filaire plus robuste.</p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-lg font-bold mb-2">Mes données sont-elles sécurisées ?</h3>
                <p className="text-muted-foreground">Oui, nous privilégions les solutions avec contrôle local (pas de cloud obligatoire) et chiffrement bout-en-bout. Vos données restent chez vous.</p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-lg font-bold mb-2">Que se passe-t-il en cas de panne internet ou électrique ?</h3>
                <p className="text-muted-foreground">Les automatisations locales continuent de fonctionner. Seul l'accès à distance est temporairement indisponible. Possibilité d'onduleur pour maintien total.</p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-lg font-bold mb-2">Combien de temps faut-il pour l'installation ?</h3>
                <p className="text-muted-foreground">Pour une maison de 100m², comptez 2-3 jours pour une installation complète avec formation incluse. Mise en service progressive possible.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Domotique;
