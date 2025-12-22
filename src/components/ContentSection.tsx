import { ReactNode } from "react";
import AnimatedSection from "@/components/AnimatedSection";

interface ContentSectionProps {
  title: string;
  content: ReactNode;
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  backgroundColor?: "default" | "secondary";
  delay?: number;
  badge?: string;
  badgeIcon?: React.ReactNode;
}

const ContentSection = ({
  title,
  content,
  image,
  imageAlt,
  imagePosition = "right",
  backgroundColor = "default",
  delay = 0,
  badge,
  badgeIcon,
}: ContentSectionProps) => {
  const bgClass = backgroundColor === "secondary" ? "bg-secondary/30" : "";
  const isImageLeft = imagePosition === "left";

  return (
    <section className={`section-padding ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Image on left or right based on prop */}
          {isImageLeft && (
            <AnimatedSection animation="fade-right" delay={delay}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift transition-all duration-500 hover:shadow-3xl">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover aspect-square md:aspect-auto"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </AnimatedSection>
          )}

          {/* Text Content */}
          <AnimatedSection
            animation={isImageLeft ? "fade-left" : "fade-right"}
            delay={delay + 100}
          >
            <div>
              {badge && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-4">
                  {badgeIcon && <span className="text-primary">{badgeIcon}</span>}
                  <span className="text-sm font-semibold text-primary">{badge}</span>
                </div>
              )}
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                {title}
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                {content}
              </div>
            </div>
          </AnimatedSection>

          {/* Image on right */}
          {!isImageLeft && (
            <AnimatedSection animation="fade-left" delay={delay}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift transition-all duration-500 hover:shadow-3xl">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover aspect-square md:aspect-auto"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
