import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Index from "./pages/Index";
import Passbilder from "./pages/Passbilder";
import Bewerbungsfotos from "./pages/Bewerbungsfotos";
import PortraitFamilie from "./pages/PortraitFamilie";
import RahmenEinrahmung from "./pages/RahmenEinrahmung";
import Studio from "./pages/Studio";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/passbilder" element={<Passbilder />} />
            <Route path="/bewerbungsfotos" element={<Bewerbungsfotos />} />
            <Route path="/portrait-familie" element={<PortraitFamilie />} />
            <Route path="/rahmen-einrahmung" element={<RahmenEinrahmung />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
