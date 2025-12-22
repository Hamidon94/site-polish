import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Lock, Fingerprint, CreditCard, History, Users, Key } from "lucide-react";
import { Link } from "react-router-dom";
import accessImage from "@/assets/service-access.jpg";

const ControleAcces = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Badge RFID & NFC",
      description: "Badges personnalisés MIFARE pour un accès simple et sécurisé avec cryptage 128 bits anti-clonage"
    },
    {
      icon: Fingerprint,
      title: "Biométrie avancée certifiée",
      description: "Reconnaissance d'empreinte digitale ou faciale avec précision 99,9% pour une sécurité maximale"
    },
    {
      icon: Key,
      title: "Code PIN sécurisé",
      description: "Contrôle d'accès par code personnalisé avec fonction anti-code forcé et temporisation programmable"
    },
    {
      icon: Users,
      title: "Gestion centralisée cloud",
      description: "Administration facile des droits d'accès depuis une interface web unique avec rapports détaillés"
    },
    {
      icon: History,
      title: "Historique complet certifié",
      description: "Traçabilité RGPD de tous les accès avec horodatage précis, photos et alertes d'anomalie"
    },
    {
      icon: Lock,
      title: "Sécurité multicouche avancée",
      description: "Combinaison de plusieurs méthodes d'authentification avec gestion des zones et horaires"
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
                  Contrôle d'Accès Intelligent
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Systèmes de contrôle d'accès par badge, code ou biométrie pour sécuriser vos locaux. Solutions évolutives de la serrure connectée au système multi-sites avec gestion de la pointeuse horaire.
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
                <img src={accessImage} alt="Contrôle d'Accès" className="w-full h-full object-cover" />
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
              Nos Solutions de Contrôle d'Accès
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-lg bg-card border">
                <h3 className="text-2xl font-bold mb-4">Pour Particuliers</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Serrures connectées intelligentes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Contrôle via smartphone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Gestion des accès temporaires</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Historique des entrées/sorties</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-lg bg-card border">
                <h3 className="text-2xl font-bold mb-4">Pour Professionnels</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Gestion multi-sites centralisée</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Intégration pointeuse horaire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Droits d'accès personnalisés par zone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Reporting et audit de sécurité</span>
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
              Sécurisez vos accès intelligemment
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Découvrez nos solutions de contrôle d'accès adaptées à vos besoins avec démonstration gratuite
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

        {/* Technologies */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Technologies & Compatibilité
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Standards RFID</h3>
                <p className="text-muted-foreground">Compatible MIFARE, EM, HID - Tous standards du marché avec migration possible</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Intégration complète</h3>
                <p className="text-muted-foreground">Compatible avec logiciels RH, ERP, et systèmes de gestion de temps existants</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Conformité RGPD</h3>
                <p className="text-muted-foreground">Solution 100% conforme RGPD avec hébergement données en France et chiffrement</p>
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
                <h3 className="text-lg font-bold mb-2">Puis-je gérer les accès temporaires (visiteurs, prestataires) ?</h3>
                <p className="text-muted-foreground">Oui, vous pouvez créer des badges temporaires avec date de validité limitée ou des codes PIN à usage unique via l'interface web ou mobile.</p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-lg font-bold mb-2">Le système peut-il gérer plusieurs bâtiments ?</h3>
                <p className="text-muted-foreground">Absolument, notre solution centralise la gestion de tous vos sites avec droits d'accès différenciés par bâtiment, étage ou zone.</p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-lg font-bold mb-2">Que se passe-t-il en cas de coupure internet ?</h3>
                <p className="text-muted-foreground">Le système fonctionne en mode autonome. Les contrôleurs stockent les droits localement et synchronisent automatiquement au retour de la connexion.</p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-lg font-bold mb-2">Puis-je intégrer la pointeuse horaire ?</h3>
                <p className="text-muted-foreground">Oui, nos systèmes incluent la gestion du temps de travail avec exports Excel/PDF pour la paie et conformité légale.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ControleAcces;
