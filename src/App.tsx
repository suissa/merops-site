
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import PeptidaseNameIndex from "./pages/peptidase/PeptidaseNameIndex";
import PeptidaseIdIndex from "./pages/peptidase/PeptidaseIdIndex";
import PeptidaseGeneIndex from "./pages/peptidase/PeptidaseGeneIndex";
import PeptidaseOrganismIndex from "./pages/peptidase/PeptidaseOrganismIndex";
import SubstrateMenu from "./pages/peptidase/SubstrateMenu";
import FamilyIndex from "./pages/FamilyIndex";
import ClanIndex from "./pages/ClanIndex";
import Search from "./pages/Search";
import BlastMerops from "./pages/BlastMerops";
import Submissions from "./pages/Submissions";
import WhatsNew from "./pages/info/WhatsNew";
import About from "./pages/info/About";
import ImageGallery from "./pages/info/ImageGallery";
import EstIndex from "./pages/info/EstIndex";
import UnseqPepIndex from "./pages/info/UnseqPepIndex";
import CompgenIndex from "./pages/info/CompgenIndex";
import StatisticsIndex from "./pages/info/StatisticsIndex";
import DistributionIndex from "./pages/info/DistributionIndex";
import PeplistIndex from "./pages/info/PeplistIndex";
import DownloadList from "./pages/info/DownloadList";
import Community from "./pages/info/Community";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Peptidase Routes */}
            <Route path="/peptidase/name-index" element={<PeptidaseNameIndex />} />
            <Route path="/peptidase/id-index" element={<PeptidaseIdIndex />} />
            <Route path="/peptidase/gene-index" element={<PeptidaseGeneIndex />} />
            <Route path="/peptidase/organism-index" element={<PeptidaseOrganismIndex />} />
            <Route path="/peptidase/substrate-menu" element={<SubstrateMenu />} />
            
            {/* Family and Clan Routes */}
            <Route path="/family-index" element={<FamilyIndex />} />
            <Route path="/clan-index" element={<ClanIndex />} />
            
            {/* Main Tools */}
            <Route path="/search" element={<Search />} />
            <Route path="/blast-merops" element={<BlastMerops />} />
            <Route path="/submissions" element={<Submissions />} />
            
            {/* Information Pages */}
            <Route path="/info/whats-new" element={<WhatsNew />} />
            <Route path="/info/about" element={<About />} />
            <Route path="/info/image-gallery" element={<ImageGallery />} />
            <Route path="/info/est-index" element={<EstIndex />} />
            <Route path="/info/unseq-pep-index" element={<UnseqPepIndex />} />
            <Route path="/info/compgen-index" element={<CompgenIndex />} />
            <Route path="/info/statistics-index" element={<StatisticsIndex />} />
            <Route path="/info/distribution-index" element={<DistributionIndex />} />
            <Route path="/info/peplist-index" element={<PeplistIndex />} />
            <Route path="/info/download-list" element={<DownloadList />} />
            <Route path="/info/community" element={<Community />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
