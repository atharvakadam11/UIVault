
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { ComponentProvider } from "@/lib/component-data";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ButtonsPage from "./pages/components/ButtonsPage";
import TogglesPage from "./pages/components/TogglesPage";
import CheckboxesPage from "./pages/components/CheckboxesPage";
import CardsPage from "./pages/components/CardsPage";
import FormsPage from "./pages/components/FormsPage";
import NavigationPage from "./pages/components/NavigationPage";
import LoadersPage from "./pages/components/LoadersPage";

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system">
      <ComponentProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/components/buttons" element={<ButtonsPage />} />
            <Route path="/components/buttons/:id" element={<ButtonsPage />} />
            <Route path="/components/toggles" element={<TogglesPage />} />
            <Route path="/components/toggles/:id" element={<TogglesPage />} />
            <Route path="/components/checkboxes" element={<CheckboxesPage />} />
            <Route path="/components/checkboxes/:id" element={<CheckboxesPage />} />
            <Route path="/components/cards" element={<CardsPage />} />
            <Route path="/components/cards/:id" element={<CardsPage />} />
            <Route path="/components/forms" element={<FormsPage />} />
            <Route path="/components/forms/:id" element={<FormsPage />} />
            <Route path="/components/navigation" element={<NavigationPage />} />
            <Route path="/components/navigation/:id" element={<NavigationPage />} />
            <Route path="/components/loaders" element={<LoadersPage />} />
            <Route path="/components/loaders/:id" element={<LoadersPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </ComponentProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
