import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Award, Shield, BadgeCheck, Star, Zap } from "lucide-react";

interface Partner {
  name: string;
  type: string;
  logo?: string;
  color: string;
}

interface PartnersSectionProps {
  title?: string;
  subtitle?: string;
  partners?: Partner[];
  variant?: "security" | "alarm" | "access" | "network" | "home" | "maintenance" | "antenna" | "gate" | "default";
}

// Logos stylisés pour chaque marque (représentation graphique moderne)
const brandLogos: Record<string, { icon: string; gradient: string }> = {
  "Hikvision": { icon: "HK", gradient: "from-red-500 to-red-700" },
  "Dahua": { icon: "DH", gradient: "from-blue-600 to-blue-800" },
  "Axis": { icon: "AX", gradient: "from-yellow-500 to-orange-500" },
  "Hanwha Techwin": { icon: "HT", gradient: "from-indigo-500 to-purple-600" },
  "Uniview": { icon: "UV", gradient: "from-cyan-500 to-teal-600" },
  "Ajax": { icon: "AJ", gradient: "from-emerald-500 to-green-600" },
  "Honeywell": { icon: "HW", gradient: "from-red-600 to-rose-700" },
  "Bosch": { icon: "BO", gradient: "from-blue-500 to-indigo-600" },
  "Somfy": { icon: "SM", gradient: "from-orange-500 to-amber-600" },
  "Nice": { icon: "NI", gradient: "from-blue-400 to-cyan-500" },
  "BFT": { icon: "BF", gradient: "from-green-500 to-emerald-600" },
  "FAAC": { icon: "FA", gradient: "from-purple-500 to-violet-600" },
  "Came": { icon: "CA", gradient: "from-red-500 to-pink-600" },
  "Delta Dore": { icon: "DD", gradient: "from-blue-500 to-sky-600" },
  "Legrand": { icon: "LG", gradient: "from-red-600 to-orange-500" },
  "Schneider": { icon: "SE", gradient: "from-green-600 to-emerald-700" },
  "Hager": { icon: "HG", gradient: "from-blue-600 to-indigo-700" },
  "Philips Hue": { icon: "PH", gradient: "from-purple-500 to-pink-500" },
  "Netatmo": { icon: "NT", gradient: "from-cyan-500 to-blue-500" },
  "Cisco": { icon: "CS", gradient: "from-blue-600 to-cyan-600" },
  "Ubiquiti": { icon: "UB", gradient: "from-blue-500 to-indigo-500" },
  "TP-Link": { icon: "TP", gradient: "from-teal-500 to-cyan-600" },
  "Netgear": { icon: "NG", gradient: "from-purple-600 to-indigo-600" },
  "Ruckus": { icon: "RK", gradient: "from-orange-500 to-red-500" },
  "Triax": { icon: "TX", gradient: "from-blue-500 to-indigo-600" },
  "Televes": { icon: "TV", gradient: "from-red-500 to-orange-500" },
  "Fuba": { icon: "FB", gradient: "from-green-500 to-teal-500" },
  "Technisat": { icon: "TS", gradient: "from-blue-600 to-purple-600" },
  "APSAD": { icon: "AP", gradient: "from-blue-700 to-indigo-800" },
  "NF&A2P": { icon: "NF", gradient: "from-green-600 to-emerald-700" },
  "Qualifelec": { icon: "QF", gradient: "from-blue-500 to-cyan-600" },
};

// Partenaires par défaut pour chaque variante
const defaultPartners: Record<string, Partner[]> = {
  security: [
    { name: "Hikvision", type: "Partenaire Platine", color: "red" },
    { name: "Dahua", type: "Partenaire Certifié", color: "blue" },
    { name: "Axis", type: "Intégrateur", color: "yellow" },
    { name: "Ajax", type: "Partenaire Gold", color: "emerald" },
    { name: "Hanwha Techwin", type: "Partenaire", color: "purple" },
    { name: "Uniview", type: "Distributeur", color: "cyan" },
  ],
  alarm: [
    { name: "Ajax", type: "Partenaire Platine", color: "emerald" },
    { name: "Honeywell", type: "Partenaire Certifié", color: "red" },
    { name: "Bosch", type: "Intégrateur", color: "blue" },
    { name: "Hikvision", type: "Partenaire", color: "red" },
    { name: "Dahua", type: "Partenaire", color: "blue" },
    { name: "NF&A2P", type: "Certification", color: "green" },
  ],
  access: [
    { name: "Hikvision", type: "Partenaire Platine", color: "red" },
    { name: "Dahua", type: "Partenaire Certifié", color: "blue" },
    { name: "Bosch", type: "Intégrateur", color: "blue" },
    { name: "Honeywell", type: "Partenaire", color: "red" },
    { name: "Ajax", type: "Partenaire", color: "emerald" },
  ],
  network: [
    { name: "Cisco", type: "Partenaire Premium", color: "blue" },
    { name: "Ubiquiti", type: "Partenaire Certifié", color: "indigo" },
    { name: "TP-Link", type: "Distributeur", color: "teal" },
    { name: "Netgear", type: "Partenaire", color: "purple" },
    { name: "Ruckus", type: "Intégrateur", color: "orange" },
  ],
  home: [
    { name: "Delta Dore", type: "Partenaire Platine", color: "blue" },
    { name: "Legrand", type: "Partenaire Certifié", color: "red" },
    { name: "Schneider", type: "Intégrateur", color: "green" },
    { name: "Somfy", type: "Partenaire", color: "orange" },
    { name: "Philips Hue", type: "Partenaire", color: "purple" },
    { name: "Netatmo", type: "Partenaire", color: "cyan" },
  ],
  maintenance: [
    { name: "APSAD", type: "Certification", color: "blue" },
    { name: "NF&A2P", type: "Certification", color: "green" },
    { name: "Qualifelec", type: "Certification", color: "blue" },
    { name: "Hikvision", type: "Formateur Agréé", color: "red" },
    { name: "Ajax", type: "Centre Technique", color: "emerald" },
  ],
  antenna: [
    { name: "Triax", type: "Partenaire Premium", color: "blue" },
    { name: "Televes", type: "Partenaire Certifié", color: "red" },
    { name: "Fuba", type: "Distributeur", color: "green" },
    { name: "Technisat", type: "Partenaire", color: "purple" },
  ],
  gate: [
    { name: "Somfy", type: "Partenaire Expert", color: "orange" },
    { name: "Nice", type: "Partenaire Certifié", color: "cyan" },
    { name: "BFT", type: "Intégrateur", color: "green" },
    { name: "FAAC", type: "Partenaire", color: "purple" },
    { name: "Came", type: "Partenaire", color: "red" },
  ],
  default: [
    { name: "Hikvision", type: "Partenaire", color: "red" },
    { name: "Dahua", type: "Partenaire", color: "blue" },
    { name: "Ajax", type: "Partenaire", color: "emerald" },
    { name: "Honeywell", type: "Partenaire", color: "red" },
  ],
};

const PartnersSection = ({ 
  title = "Nos Partenaires Technologiques",
  subtitle = "Matériel certifié des plus grandes marques mondiales",
  partners,
  variant = "default"
}: PartnersSectionProps) => {
  const displayPartners = partners || defaultPartners[variant] || defaultPartners.default;

  return (
    <section className="py-16 bg-gradient-to-br from-secondary/30 via-background to-secondary/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Partenaires Officiels</span>
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{title}</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          </div>
        </AnimatedSection>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {displayPartners.map((partner, index) => {
            const brandInfo = brandLogos[partner.name] || { icon: partner.name.substring(0, 2).toUpperCase(), gradient: "from-gray-500 to-gray-700" };
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400 }
                }}
                className="group"
              >
                <div className="relative p-5 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col items-center text-center h-full">
                  {/* Logo stylisé */}
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${brandInfo.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}
                    whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.3 } }}
                  >
                    <span className="text-white font-bold text-xl tracking-tight">{brandInfo.icon}</span>
                  </motion.div>
                  
                  {/* Brand name */}
                  <h4 className="font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">
                    {partner.name}
                  </h4>
                  
                  {/* Partner type badge */}
                  <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded-full">
                    {partner.type}
                  </span>

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${brandInfo.gradient} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust indicators */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-border/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm">Matériel Garanti</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <BadgeCheck className="w-5 h-5 text-primary" />
            <span className="text-sm">Techniciens Certifiés</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Star className="w-5 h-5 text-primary" />
            <span className="text-sm">SAV Constructeur</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-sm">Formation Continue</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
