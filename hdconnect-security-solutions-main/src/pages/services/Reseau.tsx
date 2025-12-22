import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Wifi, Cable, Shield, Server, Network, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Reseau = () => {
  const features = [
    {
      icon: Wifi,
      title: "Réseau WiFi professionnel mesh",
      description: "Installation de bornes WiFi 6E haute performance pour une couverture optimale sans zone morte jusqu'à 500m²"
    },
    {
      icon: Cable,
      title: "Câblage structuré certifié",
      description: "Infrastructure réseau Cat 6A/7 certifiée pour une fiabilité maximale avec garantie 25 ans sur câblage"
    },
    {
      icon: Shield,
      title: "VPN sécurisé d'entreprise",
      description: "Configuration de réseaux privés virtuels chiffrés pour vos connexions à distance et télétravail sécurisé"
    },
    {
      icon: Server,
      title: "Firewall avancé nouvelle génération",
      description: "Protection réseau contre les intrusions et menaces externes avec filtrage URL et antivirus intégré"
    },
    {
      icon: Network,
      title: "Architecture réseau évolutive",
      description: "Conception et déploiement d'architectures VLAN segmentées pour PME et grandes entreprises"
    },
    {
      icon: Settings,
      title: "Maintenance réseau proactive",
      description: "Support technique et maintenance préventive 24/7 avec monitoring temps réel de votre infrastructure"
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
                Réseau & Connectivité
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Installation de réseaux sécurisés pour vos équipements connectés professionnels et résidentiels. Du WiFi mesh domestique aux infrastructures d'entreprise avec fibre optique et supervision.
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
              Nos Solutions Réseau
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-lg bg-card border">
                <h3 className="text-2xl font-bold mb-4">Pour Particuliers</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>WiFi mesh pour toute la maison</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Sécurisation réseau domestique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Installation box et équipements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Support et dépannage rapide</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-lg bg-card border">
                <h3 className="text-2xl font-bold mb-4">Pour Professionnels</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Infrastructure réseau entreprise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Sécurité avancée et pare-feu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>VPN pour télétravail sécurisé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Maintenance et monitoring 24/7</span>
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
              Optimisez votre infrastructure réseau
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Bénéficiez d'un réseau performant et sécurisé adapté à vos besoins avec audit gratuit
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

        {/* Standards & Performance */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Standards & Performance
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">WiFi 6E & 7</h3>
                <p className="text-muted-foreground">Dernière génération pour des débits jusqu'à 10 Gbps avec latence ultra-faible</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Certification ISO</h3>
                <p className="text-muted-foreground">Câblage certifié ISO/IEC 11801 avec tests Fluke Networks et garantie constructeur</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">SLA 99,9%</h3>
                <p className="text-muted-foreground">Garantie de disponibilité réseau avec support 24/7 et pièces en stock</p>
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
                <h3 className="text-lg font-bold mb-2">Combien de bornes WiFi faut-il pour mon local ?</h3>
                <p className="text-muted-foreground">1 borne couvre environ 100-150m² selon les obstacles. Pour un bureau de 300m², comptez 2-3 bornes avec système mesh pour un roaming transparent.</p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-lg font-bold mb-2">Puis-je avoir plusieurs réseaux WiFi séparés ?</h3>
                <p className="text-muted-foreground">Oui, nous configurons des SSID multiples (visiteurs, employés, IoT) avec isolation et niveaux de sécurité différents sur la même infrastructure.</p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-lg font-bold mb-2">Le câblage est-il vraiment nécessaire avec le WiFi ?</h3>
                <p className="text-muted-foreground">Pour les postes fixes, serveurs et caméras IP, le câblage offre plus de stabilité, sécurité et débit. Nous recommandons une solution hybride.</p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-lg font-bold mb-2">Comment protéger mon réseau des cyberattaques ?</h3>
                <p className="text-muted-foreground">Firewall nouvelle génération, segmentation VLAN, VPN chiffré, filtrage web et mises à jour automatiques. Nous incluons une formation sécurité.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Reseau;
