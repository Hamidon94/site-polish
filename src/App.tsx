import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import LegalPage from "./pages/LegalPage";
import ZonesIntervention from "./pages/ZonesIntervention";
import Videosurveillance from "./pages/services/Videosurveillance";
import Alarme from "./pages/services/Alarme";
import ControleAcces from "./pages/services/ControleAcces";
import Reseau from "./pages/services/Reseau";
import Domotique from "./pages/services/Domotique";
import Maintenance from "./pages/services/Maintenance";
import AntenneSatellite from "./pages/services/AntenneSatellite";
import PortailsParking from "./pages/services/PortailsParking";
import Installation from "./pages/services/Installation";
import Depannage from "./pages/services/Depannage";
import Location from "./pages/services/Location";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/zones-intervention" element={<ZonesIntervention />} />
          <Route path="/services/videosurveillance" element={<Videosurveillance />} />
          <Route path="/services/alarme" element={<Alarme />} />
          <Route path="/services/controle-acces" element={<ControleAcces />} />
          <Route path="/services/reseau" element={<Reseau />} />
          <Route path="/services/domotique" element={<Domotique />} />
          <Route path="/services/maintenance" element={<Maintenance />} />
          <Route path="/services/antenne-satellite" element={<AntenneSatellite />} />
          <Route path="/services/portails-parking" element={<PortailsParking />} />
          <Route path="/services/installation" element={<Installation />} />
          <Route path="/services/depannage" element={<Depannage />} />
          <Route path="/services/location" element={<Location />} />
          <Route path="/:type(mentions-legales|politique-confidentialite)" element={<LegalPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
