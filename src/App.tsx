import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Research from "./pages/Research";
import ResearchDivisionPage from "./pages/ResearchDivisionPage";
import ResearchProjectPage from "./pages/ResearchProjectPage";
import About from "./pages/About";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import ParticipantPool from "./pages/ParticipantPool";
import ResearchPanel from "./pages/ResearchPanel";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/:divisionId" element={<ResearchDivisionPage />} />
          <Route path="/research/:divisionId/:projectId" element={<ResearchProjectPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/research-panel" element={<ResearchPanel />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/join" element={<ParticipantPool />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
