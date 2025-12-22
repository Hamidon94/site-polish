import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { content } from "@/data/content";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, FileText, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const LegalPage = () => {
  const { type } = useParams<{ type: 'mentions-legales' | 'politique-confidentialite' }>();
  
  const isMentions = type === 'mentions-legales';
  const legalData = isMentions ? content.legal.mentions : content.legal.privacy;
  const Icon = isMentions ? FileText : Shield;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="badge-primary mb-6 justify-center">
                <Icon className="w-5 h-5" />
                <span>Informations Légales</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {legalData.title}
              </h1>
              <Link to="/">
                <Button variant="outline" className="border-primary/30 hover:border-primary">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour à l'accueil
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-card rounded-2xl border border-border p-8 md:p-12 shadow-lg">
              <div className="prose prose-lg max-w-none">
                {legalData.content.split('\n\n').map((paragraph, index) => {
                  // Check if it's a title (line that ends with numbers or specific patterns)
                  const isTitle = /^\d+\./.test(paragraph) || 
                                  paragraph.startsWith('Éditeur') ||
                                  paragraph.startsWith('Directeur') ||
                                  paragraph.startsWith('Hébergement') ||
                                  paragraph.startsWith('Propriété') ||
                                  paragraph.startsWith('Limitation') ||
                                  paragraph.startsWith('Liens') ||
                                  paragraph.startsWith('Crédits') ||
                                  paragraph.startsWith('Dernière');
                  
                  if (isTitle) {
                    return (
                      <h2 key={index} className="text-xl font-bold text-foreground mt-8 mb-4 first:mt-0">
                        {paragraph}
                      </h2>
                    );
                  }
                  
                  return (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Navigation between legal pages */}
            <div className="max-w-4xl mx-auto mt-8 flex justify-center gap-4">
              <Link to="/mentions-legales">
                <Button 
                  variant={isMentions ? "default" : "outline"}
                  className={!isMentions ? "border-primary/30 hover:border-primary" : ""}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Mentions Légales
                </Button>
              </Link>
              <Link to="/politique-confidentialite">
                <Button 
                  variant={!isMentions ? "default" : "outline"}
                  className={isMentions ? "border-primary/30 hover:border-primary" : ""}
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Politique de Confidentialité
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPage;
