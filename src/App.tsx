import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';
import { PropertyModal } from './components/PropertyModal';
import { ConsultationModal } from './components/ConsultationModal';
import { HomePage } from './pages/HomePage';
import { PropertiesPage } from './pages/PropertiesPage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { Property } from './types';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function AppContent() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationPropertyTitle, setConsultationPropertyTitle] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (propertyTitle?: string) => {
    setConsultationPropertyTitle(propertyTitle);
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
    setConsultationPropertyTitle(undefined);
  };

  return (
    <div className="min-h-screen bg-flow-cream text-flow-dark font-sans selection:bg-flow-emerald selection:text-white flex flex-col">
      <ScrollToTop />

      {/* Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Routes with Page Transition */}
      <div className="flex-grow">
        <PageTransition>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onSelectProperty={(prop) => setSelectedProperty(prop)}
                  onOpenConsultation={() => handleOpenConsultation()}
                />
              }
            />
            <Route
              path="/properties"
              element={
                <PropertiesPage
                  onSelectProperty={(prop) => setSelectedProperty(prop)}
                />
              }
            />
            <Route
              path="/about"
              element={
                <AboutPage
                  onOpenConsultation={() => handleOpenConsultation()}
                />
              }
            />
            <Route
              path="/services"
              element={
                <ServicesPage
                  onOpenConsultation={() => handleOpenConsultation()}
                />
              }
            />
            <Route
              path="/contact"
              element={<ContactPage />}
            />
          </Routes>
        </PageTransition>
      </div>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onOpenConsultationWithProperty={(title) => handleOpenConsultation(title)}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        initialPropertyTitle={consultationPropertyTitle}
      />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
