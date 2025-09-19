
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useParams, Navigate } from "react-router-dom";
import MouseGlow from "@/components/MouseGlow";
import LocalizedLayout from "@/components/LocalizedLayout";
import { Locale, locales, defaultLocale } from "@/i18n/config";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import DmcAdmin from "./pages/DmcAdmin";
import Management from "./pages/Management";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to wrap pages with localized layout
const LocalizedPage = ({ Component, defaultLocale: defaultLoc }: { Component: React.ComponentType; defaultLocale?: Locale }) => {
  const { locale } = useParams<{ locale?: string }>();
  const currentLocale = (locale && locales.includes(locale as Locale)) ? locale as Locale : (defaultLoc || defaultLocale);
  
  return (
    <LocalizedLayout locale={currentLocale}>
      <Component />
    </LocalizedLayout>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <MouseGlow />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Portuguese routes (default) */}
          <Route path="/" element={<LocalizedPage Component={Index} defaultLocale="pt" />} />
          <Route path="/blog" element={<LocalizedPage Component={Blog} defaultLocale="pt" />} />
          <Route path="/blog/:slug" element={<LocalizedPage Component={BlogPost} defaultLocale="pt" />} />
          <Route path="/dmc-admin" element={<LocalizedPage Component={DmcAdmin} defaultLocale="pt" />} />
          <Route path="/management" element={<LocalizedPage Component={Management} defaultLocale="pt" />} />
          
          {/* English routes */}
          <Route path="/en" element={<LocalizedPage Component={Index} defaultLocale="en" />} />
          <Route path="/en/blog" element={<LocalizedPage Component={Blog} defaultLocale="en" />} />
          <Route path="/en/blog/:slug" element={<LocalizedPage Component={BlogPost} defaultLocale="en" />} />
          <Route path="/en/dmc-admin" element={<LocalizedPage Component={DmcAdmin} defaultLocale="en" />} />
          <Route path="/en/management" element={<LocalizedPage Component={Management} defaultLocale="en" />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<LocalizedPage Component={NotFound} />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
