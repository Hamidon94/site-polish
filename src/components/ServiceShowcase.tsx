import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Camera } from "lucide-react";

type ServiceShowcaseProps = {
  title?: string;
  description?: string;
  images: Array<{ src: string; alt: string; caption?: string }>;
  layout?: "grid" | "masonry" | "single";
};

type ShowcaseImage = { src: string; alt: string; caption?: string };

type ShowcaseCardProps = {
  img: ShowcaseImage;
  idx: number;
};

const ShowcaseCard = ({ img, idx }: ShowcaseCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Subtle scroll parallax (keeps it feeling “real”, not gimmicky)
  const y = useTransform(scrollYProgress, [0, 1], [16, -16]);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="group overflow-hidden rounded-2xl border bg-card shadow-lg hover:shadow-xl transition-all duration-500"
    >
      <div ref={containerRef} className="relative h-48 md:h-56 overflow-hidden">
        <motion.img
          src={img.src}
          alt={img.alt}
          loading="lazy"
          style={{ y }}
          className="h-[110%] w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
          <span className="text-white font-medium text-sm drop-shadow-lg">
            {img.alt}
          </span>
        </div>
      </div>
    </motion.figure>
  );
};

const ServiceShowcase = ({
  title = "Aperçu de Nos Réalisations",
  description = "Découvrez nos installations professionnelles et le matériel de qualité que nous déployons.",
  images,
  layout = "grid",
}: ServiceShowcaseProps) => {
  if (!images || images.length === 0) return null;

  // Single featured image layout
  if (layout === "single" && images.length > 0) {
    const featured = images[0];
    return (
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group overflow-hidden rounded-2xl border bg-card shadow-xl max-w-4xl mx-auto"
          >
            <FeaturedImage img={featured} />
          </motion.figure>
        </div>
      </section>
    );
  }

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
          {description && <p className="section-subtitle mt-3">{description}</p>}
        </motion.div>

        {/* Grid layout - horizontal on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.slice(0, 3).map((img, idx) => (
            <ShowcaseCard key={idx} img={img} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

type FeaturedImageProps = {
  img: ShowcaseImage;
};

const FeaturedImage = ({ img }: FeaturedImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [18, -18]);

  return (
    <div ref={containerRef} className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
      <motion.img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        style={{ y }}
        className="h-[110%] w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
      {img.caption && (
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <p className="text-foreground font-medium drop-shadow-lg">{img.caption}</p>
        </div>
      )}
    </div>
  );
};

export default ServiceShowcase;