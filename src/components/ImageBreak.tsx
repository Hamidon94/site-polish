import { motion } from "framer-motion";

interface ImageBreakProps {
  image: string;
  alt: string;
  caption?: string;
  className?: string;
}

const ImageBreak = ({ image, alt, caption, className = "" }: ImageBreakProps) => {
  return (
    <motion.section 
      className={`py-8 md:py-12 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/30 group">
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none"></div>
          
          {caption && (
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <p className="text-foreground font-medium text-sm md:text-base drop-shadow-lg">
                {caption}
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default ImageBreak;
