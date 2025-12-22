import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, ShieldAlert, Lock, Wifi, Monitor, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import cameraImage from "@/assets/service-camera.jpg";
import alarmImage from "@/assets/service-alarm.jpg";
import accessImage from "@/assets/service-access.jpg";

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Vidéosurveillance IP",
      description: "Installation de caméras HD et 4K avec enregistrement continu et accès à distance",
      image: cameraImage,
      features: ["Caméras intérieur/extérieur", "Vision nocturne", "Application mobile", "Stockage cloud"],
      link: "/services/videosurveillance"
    },
    {
      icon: ShieldAlert,
      title: "Systèmes d'Alarme",
      description: "Alarmes anti-intrusion connectées avec détection intelligente",
      image: alarmImage,
      features: ["Détecteurs de mouvement", "Sirènes intégrées", "Notification instantanée", "Télésurveillance"],
      link: "/services/alarme"
    },
    {
      icon: Lock,
      title: "Contrôle d'Accès",
      description: "Systèmes de contrôle d'accès par badge, code ou biométrie",
      image: accessImage,
      features: ["Badge RFID", "Empreinte digitale", "Gestion centralisée", "Historique d'accès"],
      link: "/services/controle-acces"
    },
    {
      icon: Wifi,
      title: "Réseau & Connectivité",
      description: "Installation de réseaux sécurisés pour vos équipements connectés",
      features: ["Réseau filaire/WiFi", "Configuration VPN", "Firewall sécurisé", "Maintenance réseau"],
      link: "/services/reseau"
    },
    {
      icon: Monitor,
      title: "Solutions Domotique",
      description: "Intégration de systèmes domotiques pour une sécurité intelligente",
      features: ["Automatisation", "Contrôle centralisé", "Scénarios personnalisés", "Compatible tous systèmes"],
      link: "/services/domotique"
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Service de maintenance préventive et support technique réactif",
      features: ["Support 24/7", "Interventions rapides", "Contrats de maintenance", "Mise à jour systèmes"],
      link: "/services/maintenance"
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Nos Services de Sécurité
          </h2>
          <p className="text-xl text-muted-foreground text-center">
            Des solutions complètes pour protéger vos locaux professionnels et résidentiels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {service.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={service.link}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      En savoir plus
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
