
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from './components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Models from '@/pages/Models';
import Advantages from '@/pages/Advantages';
import Contact from '@/pages/Contact';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ScrollToTop from "../src/lib/ScrollToTop";


function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <div className="min-h-screen">
        <Helmet>
          <title>Mader Casa | Casas prefabricadas con sistema Wood Frame</title>
          <meta name="description" content="Diseñamos y construimos viviendas con sistema Wood Frame. Construcción en seco, eficiente y de alta calidad, con materiales técnicos y alcance en toda Argentina." />
          <meta name="keywords" content="casas prefabricadas, construcción en seco, sistema wood frame, viviendas modernas, casas industrializadas, construcción rápida, Argentina" />
          <meta property="og:title" content="Mader Casa | Construcción en seco con sistema Wood Frame" />
          <meta property="og:description" content="Viviendas prefabricadas diseñadas con sistema Wood Frame. Calidad constructiva, eficiencia y tiempos de obra optimizados en toda Argentina." />
          <meta property="og:type" content="website" />
        </Helmet>
        
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/modelos" element={<Models />} />
          <Route path="/ventajas" element={<Advantages />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
        
        <WhatsAppFloat />
        <Toaster />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
