import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Award, Shield, BadgeCheck, Star, Zap } from "lucide-react";

interface Partner {
  name: string;
  type: string;
  color: string;
}

interface PartnersSectionProps {
  title?: string;
  subtitle?: string;
  partners?: Partner[];
  variant?: "security" | "alarm" | "access" | "network" | "home" | "maintenance" | "antenna" | "gate" | "default";
}

// Composants SVG pour les logos des marques
const BrandLogos: Record<string, React.FC<{ className?: string }>> = {
  "Hikvision": ({ className }) => (
    <svg className={className} viewBox="0 0 120 40" fill="currentColor">
      <text x="5" y="28" fontFamily="Arial Black, sans-serif" fontSize="16" fontWeight="900" fill="#E31937">HIK</text>
      <text x="48" y="28" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="500" fill="#333">VISION</text>
    </svg>
  ),
  "Dahua": ({ className }) => (
    <svg className={className} viewBox="0 0 100 40" fill="currentColor">
      <text x="10" y="28" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="700" fill="#005BAC">dahua</text>
    </svg>
  ),
  "Axis": ({ className }) => (
    <svg className={className} viewBox="0 0 80 40" fill="currentColor">
      <text x="10" y="28" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900" fill="#FFB500">AXIS</text>
    </svg>
  ),
  "Hanwha Techwin": ({ className }) => (
    <svg className={className} viewBox="0 0 100 40" fill="currentColor">
      <text x="5" y="25" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="#E31837">HANWHA</text>
      <text x="5" y="36" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="400" fill="#666">TECHWIN</text>
    </svg>
  ),
  "Uniview": ({ className }) => (
    <svg className={className} viewBox="0 0 100 40" fill="currentColor">
      <circle cx="15" cy="20" r="10" fill="#00A0E9" />
      <text x="30" y="26" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="600" fill="#00A0E9">Uniview</text>
    </svg>
  ),
  "Ajax": ({ className }) => (
    <svg className={className} viewBox="0 0 80 40" fill="currentColor">
      <text x="10" y="28" fontFamily="Arial Black, sans-serif" fontSize="20" fontWeight="900" fill="#000">ajax</text>
    </svg>
  ),
  "Honeywell": ({ className }) => (
    <svg className={className} viewBox="0 0 120 40" fill="currentColor">
      <text x="5" y="28" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700" fill="#E31937">Honeywell</text>
    </svg>
  ),
  "Bosch": ({ className }) => (
    <svg className={className} viewBox="0 0 80 40" fill="currentColor">
      <text x="10" y="28" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900" fill="#E20015">BOSCH</text>
    </svg>
  ),
  "Somfy": ({ className }) => (
    <svg className={className} viewBox="0 0 80 40" fill="currentColor">
      <text x="10" y="28" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="700" fill="#E94E1B">Somfy</text>
    </svg>
  ),
  "Nice": ({ className }) => (
    <svg className={className} viewBox="0 0 80 40" fill="currentColor">
      <text x="15" y="28" fontFamily="Arial Black, sans-serif" fontSize="20" fontWeight="900" fill="#009FE3">Nice</text>
    </svg>
  ),
  "BFT": ({ className }) => (
    <svg className={className} viewBox="0 0 60 40" fill="currentColor">
      <text x="10" y="28" fontFamily="Arial Black, sans-serif" fontSize="20" fontWeight="900" fill="#00A651">BFT</text>
    </svg>
  ),
  "FAAC": ({ className }) => (
    <svg className={className} viewBox="0 0 80 40" fill="currentColor">
      <text x="10" y="28" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900" fill="#6D2C91">FAAC</text>
    </svg>
  ),
  "Came": ({ className }) => (
    <svg className={className} viewBox="0 0 80 40" fill="currentColor">
      <text x="10" y="28" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900" fill="#E31937">CAME</text>
    </svg>
  ),
  "Delta Dore": ({ className }) => (
    <svg className={className} viewBox="0 0 100 40" fill="currentColor">
      <text x="5" y="20" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="700" fill="#003D7A">DELTA</text>
      <text x="5" y="32" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="#00A0E9">DORE</text>
    </svg>
  ),
  "Legrand": ({ className }) => (
    <svg className={className} viewBox="0 0 100 40" fill="currentColor">
      <text x="10" y="28" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700" fill="#E63312">Legrand</text>
    </svg>
  ),
  "Schneider": ({ className }) => (
    <svg className={className} viewBox="0 0 100 40" fill="currentColor">
      <text x="5" y="26" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="#3DCD58">Schneider</text>
    </svg>
  ),
  "Hager": ({ className }) => (
    <svg className={className} viewBox="0 0 80 40" fill="currentColor">
      <text x="10" y="28" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900" fill="#003D7A">hager</text>
    </svg>
  ),
  "Philips Hue": ({ className }) => (
    <svg className={className} viewBox="0 0 100 40" fill="currentColor">
      <text x="5" y="20" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="400" fill="#0066CC">PHILIPS</text>
      <text x="5" y="34" fontFamily="Arial Black, sans-serif" fontSize="16" fontWeight="900" fill="#6C2BD9">hue</text>
    </svg>
  ),
  "Netatmo": ({ className }) => (
    <svg className={className} viewBox="0 0 100 40" fill="currentColor">
      <text x="10" y="28" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="600" fill="#00C4B3">netatmo</text>
    </svg>
  ),
  "Cisco": ({ className }) => (
    <svg className={className} viewBox="0 0 80 40" fill="currentColor">
      <rect x="10" y="8" width="3" height="8" fill="#049FD9" />
      <rect x="16" y="5" width="3" height="11" fill="#049FD9" />
      <rect x="22" y="3" width="3" height="13" fill="#049FD9" />
      <rect x="28" y="5" width="3" height="11" fill="#049FD9" />
      <rect x="34" y="8" width="3" height="8" fill="#049FD9" />
      <text x="10" y="32" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="#049FD9">CISCO</text>
    </svg>
  ),
  "Ubiquiti": ({ className }) => (
    <svg className={className} viewBox="0 0 100 40" fill="currentColor">
      <circle cx="15" cy="20" r="8" fill="none" stroke="#0559C9" strokeWidth="3" />
      <text x="28" y="26" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="600" fill="#0559C9">Ubiquiti</text>
    </svg>
  ),
  "TP-Link": ({ className }) => (
    <svg className={className} viewBox="0 0 100 40" fill="currentColor">
      <text x="10" y="28" fontFamily="Arial Black, sans-serif" fontSize="16" fontWeight="900" fill="#00A0A0">TP-Link</text>
    </svg>
  ),
  "Netgear": ({ className }) => (
    <svg className={className} viewBox="0 0 100 40" fill="currentColor">
      <text x="5" y="28" fontFamily="Arial Black, sans-serif" fontSize="14" fontWeight="900" fill="#6B2D99">NETGEAR</text>
    </svg>
  ),
  "Ruckus": ({ className }) => (
    <svg className={className} viewBox="0 0 80 40" fill="currentColor">
      <text x="10" y="28" fontFamily="Arial Black, sans-serif" fontSize="14" fontWeight="900" fill="#E94E1B">RUCKUS</text>
    </svg>
  ),
  "Triax": ({ className }) => (
    <svg className={className} viewBox="0 0 80 40" fill="currentColor">
      <text x="10" y="28" fontFamily="Arial Black, sans-serif" fontSize="16" fontWeight="900" fill="#003D7A">TRIAX</text>
    </svg>
  ),
  "Televes": ({ className }) => (
    <svg className={className} viewBox="0 0 80 40" fill="currentColor">
      <text x="5" y="28" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700" fill="#E31937">televés</text>
    </svg>
  ),
  "Fuba": ({ className }) => (
    <svg className={className} viewBox="0 0 60 40" fill="currentColor">
      <text x="10" y="28" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900" fill="#00A651">fuba</text>
    </svg>
  ),
  "Technisat": ({ className }) => (
    <svg className={className} viewBox="0 0 100 40" fill="currentColor">
      <text x="5" y="26" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="#003D7A">TechniSat</text>
    </svg>
  ),
  "APSAD": ({ className }) => (
    <svg className={className} viewBox="0 0 80 40" fill="currentColor">
      <rect x="10" y="10" width="60" height="20" rx="3" fill="none" stroke="#003D7A" strokeWidth="2" />
      <text x="20" y="26" fontFamily="Arial Black, sans-serif" fontSize="14" fontWeight="900" fill="#003D7A">APSAD</text>
    </svg>
  ),
  "NF&A2P": ({ className }) => (
    <svg className={className} viewBox="0 0 80 40" fill="currentColor">
      <circle cx="25" cy="20" r="14" fill="none" stroke="#00A651" strokeWidth="2" />
      <text x="17" y="24" fontFamily="Arial Black, sans-serif" fontSize="10" fontWeight="900" fill="#00A651">NF</text>
      <text x="45" y="26" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="#003D7A">A2P</text>
    </svg>
  ),
  "Qualifelec": ({ className }) => (
    <svg className={className} viewBox="0 0 100 40" fill="currentColor">
      <text x="5" y="26" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="#0066CC">Qualifelec</text>
    </svg>
  ),
};

// Couleurs de fond pour chaque marque
const brandColors: Record<string, { bg: string; border: string }> = {
  "Hikvision": { bg: "bg-gradient-to-br from-red-50 to-white dark:from-red-950/20 dark:to-background", border: "border-red-200 dark:border-red-800/30" },
  "Dahua": { bg: "bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-background", border: "border-blue-200 dark:border-blue-800/30" },
  "Axis": { bg: "bg-gradient-to-br from-amber-50 to-white dark:from-amber-950/20 dark:to-background", border: "border-amber-200 dark:border-amber-800/30" },
  "Hanwha Techwin": { bg: "bg-gradient-to-br from-red-50 to-white dark:from-red-950/20 dark:to-background", border: "border-red-200 dark:border-red-800/30" },
  "Uniview": { bg: "bg-gradient-to-br from-cyan-50 to-white dark:from-cyan-950/20 dark:to-background", border: "border-cyan-200 dark:border-cyan-800/30" },
  "Ajax": { bg: "bg-gradient-to-br from-slate-50 to-white dark:from-slate-950/20 dark:to-background", border: "border-slate-200 dark:border-slate-800/30" },
  "Honeywell": { bg: "bg-gradient-to-br from-red-50 to-white dark:from-red-950/20 dark:to-background", border: "border-red-200 dark:border-red-800/30" },
  "Bosch": { bg: "bg-gradient-to-br from-red-50 to-white dark:from-red-950/20 dark:to-background", border: "border-red-200 dark:border-red-800/30" },
  "Somfy": { bg: "bg-gradient-to-br from-orange-50 to-white dark:from-orange-950/20 dark:to-background", border: "border-orange-200 dark:border-orange-800/30" },
  "Nice": { bg: "bg-gradient-to-br from-sky-50 to-white dark:from-sky-950/20 dark:to-background", border: "border-sky-200 dark:border-sky-800/30" },
  "BFT": { bg: "bg-gradient-to-br from-green-50 to-white dark:from-green-950/20 dark:to-background", border: "border-green-200 dark:border-green-800/30" },
  "FAAC": { bg: "bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-background", border: "border-purple-200 dark:border-purple-800/30" },
  "Came": { bg: "bg-gradient-to-br from-red-50 to-white dark:from-red-950/20 dark:to-background", border: "border-red-200 dark:border-red-800/30" },
  "Delta Dore": { bg: "bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-background", border: "border-blue-200 dark:border-blue-800/30" },
  "Legrand": { bg: "bg-gradient-to-br from-red-50 to-white dark:from-red-950/20 dark:to-background", border: "border-red-200 dark:border-red-800/30" },
  "Schneider": { bg: "bg-gradient-to-br from-green-50 to-white dark:from-green-950/20 dark:to-background", border: "border-green-200 dark:border-green-800/30" },
  "Hager": { bg: "bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-background", border: "border-blue-200 dark:border-blue-800/30" },
  "Philips Hue": { bg: "bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-background", border: "border-purple-200 dark:border-purple-800/30" },
  "Netatmo": { bg: "bg-gradient-to-br from-teal-50 to-white dark:from-teal-950/20 dark:to-background", border: "border-teal-200 dark:border-teal-800/30" },
  "Cisco": { bg: "bg-gradient-to-br from-cyan-50 to-white dark:from-cyan-950/20 dark:to-background", border: "border-cyan-200 dark:border-cyan-800/30" },
  "Ubiquiti": { bg: "bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-background", border: "border-blue-200 dark:border-blue-800/30" },
  "TP-Link": { bg: "bg-gradient-to-br from-teal-50 to-white dark:from-teal-950/20 dark:to-background", border: "border-teal-200 dark:border-teal-800/30" },
  "Netgear": { bg: "bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-background", border: "border-purple-200 dark:border-purple-800/30" },
  "Ruckus": { bg: "bg-gradient-to-br from-orange-50 to-white dark:from-orange-950/20 dark:to-background", border: "border-orange-200 dark:border-orange-800/30" },
  "Triax": { bg: "bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-background", border: "border-blue-200 dark:border-blue-800/30" },
  "Televes": { bg: "bg-gradient-to-br from-red-50 to-white dark:from-red-950/20 dark:to-background", border: "border-red-200 dark:border-red-800/30" },
  "Fuba": { bg: "bg-gradient-to-br from-green-50 to-white dark:from-green-950/20 dark:to-background", border: "border-green-200 dark:border-green-800/30" },
  "Technisat": { bg: "bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-background", border: "border-blue-200 dark:border-blue-800/30" },
  "APSAD": { bg: "bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-background", border: "border-blue-200 dark:border-blue-800/30" },
  "NF&A2P": { bg: "bg-gradient-to-br from-green-50 to-white dark:from-green-950/20 dark:to-background", border: "border-green-200 dark:border-green-800/30" },
  "Qualifelec": { bg: "bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-background", border: "border-blue-200 dark:border-blue-800/30" },
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

// Composant fallback pour les logos non définis
const FallbackLogo: React.FC<{ name: string; className?: string }> = ({ name, className }) => (
  <div className={`${className} flex items-center justify-center font-bold text-lg text-muted-foreground`}>
    {name.substring(0, 2).toUpperCase()}
  </div>
);

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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
          {displayPartners.map((partner, index) => {
            const LogoComponent = BrandLogos[partner.name];
            const colorStyle = brandColors[partner.name] || { 
              bg: "bg-gradient-to-br from-slate-50 to-white dark:from-slate-950/20 dark:to-background", 
              border: "border-slate-200 dark:border-slate-800/30" 
            };
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 400 }
                }}
                className="group"
              >
                <div className={`relative p-6 ${colorStyle.bg} backdrop-blur-sm border-2 ${colorStyle.border} rounded-2xl hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col items-center text-center h-full`}>
                  {/* Logo réel */}
                  <div className="w-full h-12 flex items-center justify-center mb-4">
                    {LogoComponent ? (
                      <LogoComponent className="w-full h-full object-contain" />
                    ) : (
                      <FallbackLogo name={partner.name} className="w-full h-full" />
                    )}
                  </div>
                  
                  {/* Partner type badge */}
                  <span className="text-xs font-medium text-muted-foreground bg-background/80 px-3 py-1.5 rounded-full border border-border/50">
                    {partner.type}
                  </span>

                  {/* Hover shine effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
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
