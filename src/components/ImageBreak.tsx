import { motion } from "framer-motion";

interface ImageBreakProps {
  image: string;
  alt: string;
  caption?: string;
  className?: string;
  accentColor?: "primary" | "video" | "alarme" | "acces" | "domotique" | "reseau" | "maintenance" | "antenne" | "portail";
}

const accentGradients = {
  primary: "from-primary/60 to-accent/60",
  video: "from-blue-600/60 to-blue-800/60",
  alarme: "from-red-600/60 to-red-800/60",
  acces: "from-green-600/60 to-green-800/60",
  domotique: "from-amber-500/60 to-amber-700/60",
  reseau: "from-cyan-600/60 to-cyan-800/60",
  maintenance: "from-violet-600/60 to-violet-800/60",
  antenne: "from-orange-600/60 to-orange-800/60",
  portail: "from-pink-600/60 to-pink-800/60",
};

const ImageBreak = ({ 
  image, 
  alt, 
  caption, 
  className = "",
  accentColor = "primary" 
}: ImageBreakProps) => {
  const gradientClass = accentGradients[accentColor] || accentGradients.primary;
  
  return (
    <motion.section 
      className={`py-8 md:py-12 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/30 group">
          {/* Decorative corner accents */}
          <div className={`absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br ${gradientClass} rounded-full opacity-30 blur-2xl pointer-events-none z-10`}></div>
          <div className={`absolute -bottom-4 -right-4 w-40 h-40 bg-gradient-to-br ${gradientClass} rounded-full opacity-30 blur-2xl pointer-events-none z-10`}></div>
          
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="w-full h-72 md:h-96 lg:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${gradientClass} opacity-40 pointer-events-none`}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none"></div>
          
          {/* Inner border glow */}
          <div className="absolute inset-0 rounded-3xl ring-2 ring-inset ring-white/10 pointer-events-none"></div>
          
          {caption && (
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="bg-background/80 backdrop-blur-sm rounded-xl px-4 py-3 inline-block border border-border/50">
                <p className="text-foreground font-semibold text-sm md:text-base">
                  {caption}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default ImageBreak;
