import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContentProvider } from "./content";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Research from "./pages/Research";
import Blog from "./pages/Blog";
import About from "./pages/About";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ResearchDetailPage from "./pages/ResearchDetailPage";
import BlogDetailPage from "./pages/BlogDetailPage";
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
        <ContentProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/:slug" element={<ResearchDetailPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/research-panel" element={<ResearchPanel />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/join" element={<ParticipantPool />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </ContentProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
