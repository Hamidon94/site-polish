import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, ChevronRight, Check, Camera, Shield, Lock, PhoneCall, Wifi, Wrench, HelpCircle, Sparkles } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

// Types
type ServiceType = 'camera' | 'alarm' | 'access' | 'intercom' | 'network' | 'maintenance' | 'other';
type RequestType = 'quote' | 'intervention';

const serviceOptions: { id: ServiceType; label: string; icon: typeof Camera }[] = [
  { id: 'camera', label: 'Installation de caméras', icon: Camera },
  { id: 'alarm', label: "Installation d'alarme", icon: Shield },
  { id: 'access', label: "Contrôle d'accès", icon: Lock },
  { id: 'intercom', label: 'Interphone / Visiophone', icon: PhoneCall },
  { id: 'network', label: 'Installation réseau & Wi-Fi', icon: Wifi },
  { id: 'maintenance', label: 'Maintenance / Dépannage', icon: Wrench },
  { id: 'other', label: 'Autre demande', icon: HelpCircle },
];

const interventionOptions: { id: string; label: string; icon: typeof Camera }[] = [
  { id: 'camera_fail', label: 'Caméra en panne', icon: Camera },
  { id: 'alarm_fail', label: 'Alarme qui bip / défaut', icon: Shield },
  { id: 'intercom_fail', label: 'Interphone ne fonctionne plus', icon: PhoneCall },
  { id: 'access_fail', label: "Problème contrôle d'accès", icon: Lock },
  { id: 'network_fail', label: 'Panne réseau / Wi-Fi', icon: Wifi },
  { id: 'material_replace', label: 'Remplacement matériel', icon: Wrench },
  { id: 'other_fail', label: 'Autre problème', icon: HelpCircle },
];

// Composant de bouton d'option
interface OptionButtonProps {
  icon: typeof Camera;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const OptionButton = ({ icon: Icon, label, isSelected, onClick }: OptionButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      "flex flex-col items-center justify-center p-4 text-center border-2 rounded-xl transition-all duration-200",
      "hover:border-primary hover:shadow-md hover:-translate-y-1",
      isSelected ? "border-primary bg-primary/10 shadow-lg" : "border-border bg-card"
    )}
  >
    <Icon className="w-8 h-8 mb-2 text-primary" />
    <span className="font-medium text-sm">{label}</span>
  </button>
);

const QuoteFunnelSimple = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [requestType, setRequestType] = useState<RequestType>('quote');
  const [selectedService, setSelectedService] = useState('');
  const [selectedProblem, setSelectedProblem] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    timeline: '',
    budget: '',
    description: '',
    urgency: '',
    message: '',
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      
      // Validation simple
      if (!formData.name || !formData.phone || !formData.email || !formData.address) {
        toast({
          title: "Erreur",
          description: "Veuillez remplir tous les champs obligatoires.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Préparer le message détaillé
      let detailedMessage = `Type de demande: ${requestType === 'quote' ? 'Devis' : 'Intervention'}\n\n`;
      
      if (requestType === 'quote') {
        detailedMessage += `Service demandé: ${serviceOptions.find(s => s.id === selectedService)?.label || selectedService}\n`;
        detailedMessage += `Période souhaitée: ${formData.timeline}\n`;
        if (formData.budget) detailedMessage += `Budget estimé: ${formData.budget}\n`;
        if (formData.description) detailedMessage += `\nDescription du projet:\n${formData.description}\n`;
      } else {
        detailedMessage += `Type de problème: ${interventionOptions.find(o => o.id === selectedProblem)?.label || selectedProblem}\n`;
        detailedMessage += `Urgence: ${formData.urgency}\n`;
        detailedMessage += `\nDescription du problème:\n${formData.description}\n`;
      }
      
      detailedMessage += `\nAdresse: ${formData.address}`;
      if (formData.message) detailedMessage += `\n\nMessage supplémentaire:\n${formData.message}`;

      // Envoi vers Supabase
      const { supabaseClient } = await import("@/lib/supabase");
      
      const { error: insertError } = await supabaseClient
        .from('customer_requests')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: detailedMessage,
            request_type: requestType === 'intervention' ? 'emergency' : 'quote',
            status: 'new',
          }
        ]);

      if (insertError) {
        console.error('Erreur Supabase lors de l\'insertion:', insertError);
        throw new Error('Erreur lors de l\'enregistrement de la demande.');
      }

      // Envoi de l'email de confirmation via edge function
      try {
        await supabaseClient.functions.invoke('send-quote-email', {
          body: {
            confirmationOnly: true,
            clientName: formData.name,
            clientEmail: formData.email,
            requestType: requestType === 'quote' ? 'Devis' : 'Intervention',
          }
        });
      } catch (emailError) {
        console.error('Erreur envoi email:', emailError);
      }

      toast({
        title: "Demande envoyée !",
        description: "Nous vous recontacterons rapidement.",
      });

      // Réinitialiser
      setTimeout(() => {
        setStep(1);
        setSelectedService('');
        setSelectedProblem('');
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          timeline: '',
          budget: '',
          description: '',
          urgency: '',
          message: '',
        });
      }, 1000);

    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
      toast({
        title: "Erreur",
        description: error instanceof Error ? error.message : "Une erreur s'est produite lors de l'envoi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    // Étape 1 - Sélection du service (Devis) ou Type de problème (Intervention)
    if (step === 1) {
      if (requestType === 'quote') {
        return (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {serviceOptions.map(option => (
              <OptionButton
                key={option.id}
                icon={option.icon}
                label={option.label}
                isSelected={selectedService === option.id}
                onClick={() => {
                  setSelectedService(option.id);
                  nextStep();
                }}
              />
            ))}
          </div>
        );
      } else {
        return (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interventionOptions.map(option => (
              <OptionButton
                key={option.id}
                icon={option.icon}
                label={option.label}
                isSelected={selectedProblem === option.id}
                onClick={() => {
                  setSelectedProblem(option.id);
                  nextStep();
                }}
              />
            ))}
          </div>
        );
      }
    }

    // Étape 2 - Détails du projet (Devis) ou Détails du problème (Intervention)
    if (step === 2) {
      if (requestType === 'quote') {
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-center md:text-left">Détails de votre projet</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Période souhaitée *</label>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={formData.timeline}
                  onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                >
                  <option value="">Sélectionner...</option>
                  <option value="urgent">Urgent (Moins de 1 mois)</option>
                  <option value="court">Court terme (1 à 3 mois)</option>
                  <option value="moyen">Moyen terme (3 à 6 mois)</option>
                  <option value="long">Long terme (Plus de 6 mois)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Budget estimé (Optionnel)</label>
                <Input
                  type="text"
                  placeholder="Ex: 5000€ - 10000€"
                  value={formData.budget}
                  onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Description de votre besoin</label>
              <Textarea
                placeholder="Décrivez brièvement votre projet..."
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              />
            </div>

            <div className="flex justify-between pt-4">
              <Button type="button" variant="outline" onClick={prevStep}>
                <ChevronLeft className="w-4 h-4 mr-2" /> Précédent
              </Button>
              <Button 
                type="button" 
                onClick={() => formData.timeline ? nextStep() : toast({ title: "Veuillez sélectionner une période", variant: "destructive" })}
              >
                Étape suivante <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        );
      } else {
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-center md:text-left">Détails du problème</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Description détaillée du problème *</label>
              <Textarea
                placeholder="Ex: La caméra n°3 ne s'allume plus depuis hier..."
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Urgence de l'intervention *</label>
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={formData.urgency}
                onChange={(e) => setFormData(prev => ({ ...prev, urgency: e.target.value }))}
              >
                <option value="">Sélectionner...</option>
                <option value="critique">Critique (Intervention immédiate)</option>
                <option value="haute">Haute (Sous 48h)</option>
                <option value="normale">Normale (Sous 1 semaine)</option>
              </select>
            </div>

            <div className="flex justify-between pt-4">
              <Button type="button" variant="outline" onClick={prevStep}>
                <ChevronLeft className="w-4 h-4 mr-2" /> Précédent
              </Button>
              <Button 
                type="button" 
                onClick={() => (formData.description && formData.urgency) ? nextStep() : toast({ title: "Veuillez remplir tous les champs requis", variant: "destructive" })}
              >
                Étape suivante <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        );
      }
    }

    // Étape 3 - Informations Client
    if (step === 3) {
      return (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-center md:text-left">Vos coordonnées</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Nom complet *</label>
              <Input
                placeholder="Votre nom et prénom"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Téléphone *</label>
              <Input
                placeholder="Ex: 06 12 34 56 78"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email *</label>
            <Input
              type="email"
              placeholder="votre.email@exemple.com"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Adresse (Ville/CP) *</label>
            <Input
              placeholder="Ex: Paris, 75001"
              value={formData.address}
              onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Message (Optionnel)</label>
            <Textarea
              placeholder="Des informations supplémentaires ?"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            />
          </div>

          <div className="flex justify-between pt-4">
            <Button type="button" variant="outline" onClick={prevStep}>
              <ChevronLeft className="w-4 h-4 mr-2" /> Précédent
            </Button>
            <Button type="button" onClick={handleSubmit} disabled={isSubmitting}>
              <Check className="w-4 h-4 mr-2" /> 
              {isSubmitting ? "Envoi..." : "Valider ma demande"}
            </Button>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section id="quote" className="section-padding bg-gradient-to-br from-primary/5 via-secondary/30 to-accent/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4 animate-pulse">
            <Sparkles className="w-4 h-4" />
            <span>Devis Gratuit en 2 minutes</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Obtenez votre <span className="text-primary">devis personnalisé</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Répondez à quelques questions pour recevoir une estimation adaptée à vos besoins.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-2xl border-0 bg-card/80 backdrop-blur-sm overflow-hidden">
          {/* Gradient top bar */}
          <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-primary"></div>
          
          <CardHeader className="pb-6 pt-8">
            {/* Request Type Selector */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button 
                data-quote-btn
                size="lg"
                variant={requestType === 'quote' ? 'default' : 'outline'}
                onClick={() => { setRequestType('quote'); setStep(1); }}
                className={cn(
                  "w-full sm:w-auto text-sm sm:text-base px-6 h-12 transition-all duration-300",
                  requestType === 'quote' 
                    ? 'bg-gradient-to-r from-primary to-accent shadow-lg hover:shadow-xl scale-105' 
                    : 'hover:border-primary/50'
                )}
              >
                📋 Demande de Devis
              </Button>
              <Button 
                data-intervention-btn
                size="lg"
                variant={requestType === 'intervention' ? 'default' : 'outline'}
                onClick={() => { setRequestType('intervention'); setStep(1); }}
                className={cn(
                  "w-full sm:w-auto text-sm sm:text-base px-6 h-12 transition-all duration-300",
                  requestType === 'intervention' 
                    ? 'bg-gradient-to-r from-primary to-accent shadow-lg hover:shadow-xl scale-105' 
                    : 'hover:border-primary/50'
                )}
              >
                🔧 Demande d'Intervention
              </Button>
            </div>
            
            {/* Progress Indicator */}
            <div className="flex items-center justify-center gap-3 mt-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div 
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300",
                      step >= s 
                        ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg" 
                        : "bg-border/50 text-muted-foreground"
                    )}
                  >
                    {step > s ? <Check className="w-5 h-5" /> : s}
                  </div>
                  {s < 3 && (
                    <div className={cn(
                      "w-12 sm:w-20 h-1 mx-1 rounded-full transition-all duration-300",
                      step > s ? "bg-primary" : "bg-border/50"
                    )} />
                  )}
                </div>
              ))}
            </div>
          </CardHeader>
          <CardContent className="pt-0 pb-8 px-4 sm:px-8">
            {renderStep()}
          </CardContent>
        </Card>
        
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            <span>Sans engagement</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            <span>Réponse sous 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            <span>Techniciens certifiés</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteFunnelSimple;
