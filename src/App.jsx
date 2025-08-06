
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Models from '@/pages/Models';
import Advantages from '@/pages/Advantages';
import Contact from '@/pages/Contact';
import WhatsAppFloat from '@/components/WhatsAppFloat';

function App() {
  return (
    <Router basename="/madercasa">
      <div className="min-h-screen">
        <Helmet>
          <title>Mader Casa - Construcción CLT Innovadora en Argentina</title>
          <meta name="description" content="Pioneros en Argentina en construcción con CLT (Cross Laminated Timber). Viviendas modulares, familiares y personalizadas con sistema alemán de muros entramados macizos." />
          <meta name="keywords" content="CLT, Cross Laminated Timber, construcción madera, viviendas modulares, Argentina, sistema alemán, casas ecológicas" />
          <meta property="og:title" content="Mader Casa - Construcción CLT Innovadora" />
          <meta property="og:description" content="Viviendas modulares con sistema CLT alemán. Resistentes, aislantes y sustentables." />
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
      </div>
    </Router>
  );
}

export default App;
