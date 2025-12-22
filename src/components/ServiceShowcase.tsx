import { motion } from "framer-motion";
import { Camera } from "lucide-react";

type ServiceShowcaseProps = {
  title?: string;
  description?: string;
  images: Array<{ src: string; alt: string }>;
};

const ServiceShowcase = ({
  title = "Aperçu de Nos Réalisations",
  description = "Découvrez nos installations professionnelles et le matériel de qualité que nous déployons.",
  images,
}: ServiceShowcaseProps) => {
  if (!images || images.length === 0) return null;

  return (
    <section className="section-padding bg-gradient-to-br from-secondary/40 via-background to-secondary/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <div className="badge-accent mb-4 inline-flex">
            <Camera className="w-4 h-4" />
            <span>Galerie</span>
          </div>
          <h2 className="section-title">{title}</h2>
          {description && (
            <p className="section-subtitle mt-3">{description}</p>
          )}
        </motion.div>

        {/* Dynamic grid based on number of images */}
        <div className={`grid gap-6 ${
          images.length === 1 
            ? 'grid-cols-1 max-w-2xl mx-auto' 
            : images.length === 2 
              ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {images.slice(0, 6).map((img, idx) => (
            <motion.figure
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group overflow-hidden rounded-2xl border bg-card shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-white font-medium text-sm drop-shadow-lg">{img.alt}</span>
                </div>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;