import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Camera, Shield, Smartphone, Cloud, Eye, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import cameraImage from "@/assets/service-camera.jpg";

const Videosurveillance = () => {
  const features = [
    {
      icon: Camera,
      title: "Caméras HD et 4K",
      description: "Installation de caméras haute définition pour une surveillance optimale de vos locaux avec une résolution exceptionnelle"
    },
    {
      icon: Eye,
      title: "Vision nocturne avancée",
      description: "Surveillance 24h/24 grâce à la vision infrarouge jusqu'à 30 mètres, même dans l'obscurité totale"
    },
    {
      icon: Smartphone,
      title: "Accès mobile sécurisé",
      description: "Visualisez vos caméras en temps réel depuis votre smartphone, tablette ou ordinateur partout dans le monde"
    },
    {
      icon: Cloud,
      title: "Stockage hybride sécurisé",
      description: "Enregistrement continu avec stockage local (NVR) et cloud sécurisé pour une double protection de vos données"
    },
    {
      icon: Shield,
      title: "Analyse vidéo intelligente",
      description: "Détection de mouvement avancée, reconnaissance faciale, comptage de personnes et alertes intelligentes en temps réel"
    },
    {
      icon: Clock,
      title: "Enregistrement continu H24",
      description: "Archivage automatique de 30 à 90 jours avec historique consultable à tout moment et fonction de recherche rapide"
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
                  Vidéosurveillance IP Professionnelle
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Installation de caméras HD et 4K avec enregistrement continu et accès à distance pour une sécurité optimale de vos locaux. Solutions professionnelles adaptées aux particuliers, commerces et entreprises avec garantie 3 ans.
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
                <img src={cameraImage} alt="Vidéosurveillance IP" className="w-full h-full object-cover" />
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
              Nos Solutions Vidéosurveillance
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-lg bg-card border">
                <h3 className="text-2xl font-bold mb-4">Pour Particuliers</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Caméras intérieures et extérieures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Application mobile intuitive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Installation rapide et discrète</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Maintenance et support inclus</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-lg bg-card border">
                <h3 className="text-2xl font-bold mb-4">Pour Professionnels</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Systèmes multi-sites centralisés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Analyse vidéo intelligente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Intégration avec systèmes existants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Support technique 24/7</span>
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
              Prêt à sécuriser vos locaux ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez-nous pour une étude personnalisée et un devis gratuit sous 24h
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

        {/* Technologies & Garanties */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Technologies & Garanties
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Marques Premium</h3>
                <p className="text-muted-foreground">Hikvision, Dahua, Axis, Hanwha - Leaders mondiaux en vidéosurveillance</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Certification NF</h3>
                <p className="text-muted-foreground">Installateurs certifiés et conformes aux normes françaises et européennes</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Garantie 3 ans</h3>
                <p className="text-muted-foreground">Garantie constructeur + installation avec maintenance préventive incluse</p>
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
                <h3 className="text-lg font-bold mb-2">Combien de caméras faut-il pour mon local ?</h3>
                <p className="text-muted-foreground">Cela dépend de la surface et des zones à surveiller. Pour une maison de 100m², 3-4 caméras suffisent généralement. Pour un commerce, nous recommandons une étude sur site gratuite.</p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-lg font-bold mb-2">Puis-je consulter mes caméras depuis l'étranger ?</h3>
                <p className="text-muted-foreground">Oui, nos systèmes permettent un accès sécurisé depuis n'importe où dans le monde via application mobile ou navigateur web.</p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-lg font-bold mb-2">Combien de temps sont conservées les images ?</h3>
                <p className="text-muted-foreground">De 30 à 90 jours selon la capacité de stockage choisie. Nous dimensionnons le système selon vos besoins légaux et pratiques.</p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-lg font-bold mb-2">Le système fonctionne-t-il en cas de coupure internet ?</h3>
                <p className="text-muted-foreground">Oui, l'enregistrement continue en local. Vous retrouverez les notifications une fois la connexion rétablie.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Videosurveillance;
