import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Home, Users, Maximize, Calendar, ArrowRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import imgR from '../../assets/img//3.jpg';
import img1 from '../../assets/img/ryp/m1.jpeg';
import plan1 from '../../assets/img/ryp/plan1.pdf';
import img2 from '../../assets/img/ryp/m2.jpeg';
import plan2 from '../../assets/img/ryp/plan2.pdf';
import img3 from '../../assets/img/ryp/m4.jpeg';
import plan3 from '../../assets/img/ryp/plan4.pdf';
import img4 from '../../assets/img/ryp/m5.jpeg';
import plan4 from '../../assets/img/ryp/plan5.pdf';
import img5 from '../../assets/img/ryp/m6.jpeg';
import plan5 from '../../assets/img/ryp/plan6.pdf';
import img6 from '../../assets/img/ryp/m7.jpeg';
import plan6 from '../../assets/img/ryp/plan7.pdf';
import img7 from '../../assets/img/ryp/m8.jpeg';
import plan7 from '../../assets/img/ryp/plan8.pdf';
import img8 from '../../assets/img/ryp/m9.jpeg';
import plan8 from '../../assets/img/ryp/plan9.pdf';
import img9 from '../../assets/img/ryp/m10.jpeg';
import plan9 from '../../assets/img/ryp/plan10.pdf';
import img10 from '../../assets/img/ryp/m11.jpeg';
import plan10 from '../../assets/img/ryp/plan11.pdf';
import img11 from '../../assets/img/ryp/m12.jpeg';
import plan11 from '../../assets/img/ryp/plan12.pdf';
import img12 from '../../assets/img/ryp/H1.jpeg';
import plan12 from '../../assets/img/ryp/H1.pdf';
import img13 from '../../assets/img/ryp/H2.jpg';
import plan13 from '../../assets/img/ryp/H2.pdf';
import img14 from '../../assets/img/ryp/H3.jpeg';
import plan14 from '../../assets/img/ryp/H3.pdf';
import img15 from '../../assets/img/ryp/H4.jpeg';
import plan15 from '../../assets/img/ryp/H4.pdf';



const Models = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlan, setSelectedPlan] = useState(null);

  const categories = [
    { id: 'all', label: 'Todos los Modelos' },
    { id: 'family', label: 'Familiares' },
    { id: 'compact', label: 'Compactas' },
    { id: 'luxury', label: 'Premium' }
  ];

  const models = [
    {
      id: 1,
      name: "Modulos habitacionales",
      category: "compact",
      price: "Desde $8.000 USD",
      area: "18 m²",
      bedrooms: 1,
      bathrooms: 1,
      buildTime: "3 semanas (Obra gris)",
      description: "Diseño modular moderno",
      features: ["Luminosa", "Cocina integrada", "Mono ambiente", "Confort"],
      image: img1,
      plan: plan1
    },
    {
      id: 2,
      name: "Cabaña Moderna",
      category: "compact",
      price: "Desde $18.000 USD",
      area: "40.5 m²",
      bedrooms: 1,
      bathrooms: 1,
      buildTime: "3 semanas (Obra gris)",
      description: "Perfecta para parejas o como casa de fin de semana en entornos naturales",
      features: ["Diseño minimalista", "Ventanales panorámicos", "Loft opcional", "Deck exterior"],
      image: img2,
      plan: plan2
    },
    {
      id: 3,
      name: "Mader Casa 4",
      category: "family",
      price: "Desde $41.000 USD",
      area: "93 m²",
      bedrooms: 2,
      bathrooms: 1,
      buildTime: "4 semanas (Obra gris)",
      description: "Máximo lujo y confort con terminaciones premium y tecnología integrada",
      features: ["Confort", "Espacios amplios", "Garage para coche"],
      image: img3,
      plan: plan3
    },
    {
      id: 4,
      name: "MC 2",
      category: "family",
      price: "Desde $30.000 USD",
      area: "68.5 m²",
      bedrooms: 2,
      bathrooms: 1,
      buildTime: "4 semanas (Obra gris)",
      description: "Construcción ideal para familias pequeñas",
      features: ["Espacio multifuncional", "Cocina americana", "Iluminación natural"],
      image: img4,
      plan: plan4
    },
    {
      id: 5,
      name: "Casa Familiar Plus",
      category: "family",
      price: "Desde $27.000 USD",
      area: "68 m²",
      bedrooms: 2,
      bathrooms: 1,
      buildTime: "4 semanas (Obra gris)",
      description: "Casa familiar ultra moderna con espacios flexibles y gran área social",
      features: ["Sala de estar doble altura", "Cocina isla central", ],
      image: img5,
      plan: plan5
    },
    {
      id: 6,
      name: "Refugio Alpino",
      category: "luxury",
      price: "Desde $50.000 USD",
      area: "117 m²",
      bedrooms: 2,
      bathrooms: 1,
      buildTime: "5 semanas",
      description: "Inspirada en chalets alpinos con máximo aislamiento térmico",
      features: ["Cocina comedor amplio", "vestidor en habitación", "Galería", "Aislamiento superior"],
      image: img6,
      plan: plan6
    },
    {
      id: 7,
      name: "Mader Casa 3",
      category: "family",
      price: "Desde $35.000 USD",
      area: "82.5 m²",
      bedrooms: 2,
      bathrooms: 1,
      buildTime: "4 semanas",
      description: "Inspirada en viviendas americanas",
      features: ["Cocina comedor con desayunador isla", "Diseño americano", "Aislamiento superior"],
      image: img7,
      plan: plan7
    },
    {
      id: 8,
      name: "Mader Casa F",
      category: "family",
      price: "Desde $50.000 USD",
      area: "117 m²",
      bedrooms: 2,
      bathrooms: 1,
      buildTime: "5 semanas",
      description: "Vivienda familiar minimalista y moderna",
      features: ["Cocina comedor amplio", "vestidor en habitación", "Galería para coche", "Aislamiento superior"],
      image: img8,
      plan: plan8
    },
    {
      id: 9,
      name: "Refugio Alpino",
      category: "luxury",
      price: "Desde $50.000 USD",
      area: "117 m²",
      bedrooms: 2,
      bathrooms: 1,
      buildTime: "5 semanas",
      description: "Inspirada en chalets alpinos con máximo aislamiento térmico",
      features: ["Cocina comedor amplio", "vestidor en habitación", "Galería", "Aislamiento superior"],
      image: img9,
      plan: plan9
    },
    {
      id: 10,
      name: "Refugio Alpino",
      category: "luxury",
      price: "Desde $50.000 USD",
      area: "39.5 m²",
      bedrooms: 2,
      bathrooms: 1,
      buildTime: "5 semanas",
      description: "Inspirada en chalets alpinos con máximo aislamiento térmico",
      features: ["Cocina comedor amplio", "vestidor en habitación", "Galería", "Aislamiento superior"],
      image: img10,
      plan: plan10
    },
    {
      id: 11,
      name: "Complejo habitacional",
      category: "compact",
      price: "Desde $12.000 USD",
      area: "27 m²",
      bedrooms: 1,
      bathrooms: 1,
      buildTime: "3 semanas",
      description: "Modulos habitacionales, totalmente funcionales y confortables",
      features: ["Cocina comedor ", "Aislamiento superior", "iluminación ambiental"],
      image: img11,
      plan: plan11
    },
    {
      id: 12,
      name: "H1 Mader Casa",
      category: "family",
      price: "Desde $60.000 USD",
      area: "125.5 m²",
      bedrooms: 3,
      bathrooms: 2,
      buildTime: "9 semanas",
      description: "Vivienda familiar, totalmente funcional y confortable, minimalista",
      features: ["Aislamiento superior", "iluminación ambiental", "Vestidor en habitación", "Cocina - Comedor amplio"],
      image: img12,
      plan: plan12
    },
    {
      id: 13,
      name: "H2 Mader Casa",
      category: "luxury",
      price: "Desde $68.000 USD",
      area: "139.5 m²",
      bedrooms: 3,
      bathrooms: 2,
      buildTime: "9 semanas",
      description: "Vivienda familiar, totalmente funcional y confortable",
      features: ["Aislamiento superior", "iluminación ambiental", "Vestidor en habitación", "Cocina - Comedor amplio"],
      image: img13,
      plan: plan13
    },
    {
      id: 14,
      name: "H3 Mader Casa",
      category: "luxury",
      price: "Desde $69.000 USD",
      area: "140.5 m²",
      bedrooms: 3,
      bathrooms: 2,
      buildTime: "10 semanas",
      description: "Hermosa vivienda, totalmente funcional y confortable",
      features: ["Aislamiento superior", "iluminación ambiental", "Vestidor en habitación", "Cocina - Comedor amplio"],
      image: img14,
      plan: plan14
    },
    {
      id: 15,
      name: "H4 Mader Casa",
      category: "family",
      price: "Desde $62.000 USD",
      area: "128 m²",
      bedrooms: 3,
      bathrooms: 2,
      buildTime: "9 semanas",
      description: "Hermosa vivienda, totalmente funcional y confortable",
      features: ["Aislamiento superior", "iluminación ambiental", "Vestidor en habitación", "Cocina - Comedor amplio"],
      image: img15,
      plan: plan15
    }
  ];

  const filteredModels = selectedCategory === 'all'
    ? models
    : models.filter(model => model.category === selectedCategory);

  // WhatsApp
  const handleContactModel = (modelName) => {
    const phoneNumber = "5493513728365"; // tu número con código de país sin + ni espacios
    const message = `¡Hola! Estoy interesado en recibir información sobre el modelo: ${modelName}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // Ver Planos
  const handleViewPlan = (planImage) => {
    setSelectedPlan(planImage);
  };

  const handleClosePlan = () => {
    setSelectedPlan(null);
  };

  return (
    <div className="pt-16 lg:pt-20 overflow-x-hidden">
      <Helmet>
        <title>Modelos - Mader Casa | Viviendas CLT Personalizadas</title>
        <meta name="description" content="Descubre nuestros modelos de casas CLT: familiares, compactas y premium. Viviendas modulares con sistema alemán, desde 45m² hasta 200m². Construcción rápida y sustentable." />
      </Helmet>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#C3453]/30 text-white-800 rounded-full text-sm font-semibold mb-6">
              🏠 Nuestros Modelos
            </span>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gradient">Viviendas CLT</span>
              <br />
              <span className="text-gray-800">Personalizadas</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde estudios compactos hasta villas premium. Cada modelo puede personalizarse
              completamente para adaptarse a tus necesidades y estilo de vida.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedCategory === category.id
                    ? 'bg-[#1e3448] text-white shadow-wood'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
              >
                <Filter size={16} className="inline mr-2" />
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {filteredModels.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-2xl overflow-hidden shadow-wood hover-lift group"
              >
                <div className="relative">
                  <img
                    alt={model.name}
                    className="w-full h-64 object-cover text-white group-hover:scale-110 transition-transform duration-500"
                    src={model.image} />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-#1e3448 text-white rounded-full text-sm font-semibold">
                      {model.category === 'family' ? 'Familiar' :
                        model.category === 'compact' ? 'Compacta' : 'Premium'}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/70 text-white rounded-full text-sm font-semibold">
                      {model.price}
                    </span>
                  </div>
                </div>

                <div className="p-8 bg-[#f0f8ff]">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{model.name}</h3>
                  <p className="text-white-600 mb-6">{model.description}</p>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Maximize size={16} className="tex-blue-600" />
                      <span className="text-sm text-white-600">{model.area}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Home size={16} className="text-blue-600" />
                      <span className="text-sm text-white-600">{model.bedrooms} dorm.</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users size={16} className="text-blue-600" />
                      <span className="text-sm text-white-600">{model.bathrooms} baños</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} className="text-blue-600" />
                      <span className="text-sm text-white-600">{model.buildTime}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text--black mb-3">Características destacadas:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {model.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-#1e3448 rounded-full"></div>
                          <span className="text-sm text-black-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={() => handleContactModel(model.name)}
                      className="flex-1 bg-[#1e3448] hover:bg-[#af823c] text-white rounded-xl"
                    >
                      Solicitar Info
                      <ArrowRight size={16} className="ml-2" />
                    </Button>

                    <Button
                      onClick={() => handleViewPlan(model.plan)}
                      variant="outline"
                      className="flex-1 border-amber-600 text-amber-700 hover:bg-amber-50 rounded-xl"
                    >
                      Ver Planos
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Planos */}
      {selectedPlan && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={handleClosePlan}
        >
          <div
            className="relative bg-white rounded-2xl shadow-lg max-w-3xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClosePlan}
              className="absolute top-3 right-3 bg-gray-100 hover:bg-gray-200 rounded-full p-2"
            >
              ✕
            </button>
            <embed
              src={selectedPlan}
              type="application/pdf"
              className="w-full h-[80vh] rounded-xl"
            />
          </div>
        </motion.div>
      )}

      {/* Customization Section */}
      <section className="section-padding bg-#1e3448">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gradient">
                Personalización Total
              </h2>

              <p className="text-lg text-gray-600">
                Todos nuestros modelos son completamente personalizables. Podemos adaptar
                dimensiones, distribución, terminaciones y características especiales según
                tus necesidades específicas.
              </p>

              <div className="space-y-4">
                {[
                  "Modificación de dimensiones y distribución",
                  "Elección de terminaciones interiores y exteriores",
                  "Integración de tecnología domótica",
                  "Adaptación a terrenos con pendiente",
                  "Sistemas de energía renovable",
                  "Espacios adicionales (garage, quincho, etc.)"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-#1e3448 rounded-full flex items-center justify-center">
                      <span className="text--black text-xs">✓</span>
                    </div>
                    <span className="text--black-700">{item}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => handleContactModel('Personalización')}
                className="bg-#1e3448 text-black px-8 py-6 text-lg rounded-xl shadow-wood hover-lift"
              >
                Solicitar Personalización
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-wood hover-lift">
                <img
                  alt="Proceso de personalización de casa CLT con planos y muestras"
                  className="w-full h-[400px] object-cover"
                  src={imgR} />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-effect rounded-lg p-4">
                    <h3 className="text-white font-semibold text-lg">Diseño a Medida</h3>
                    <p className="text-white/90 text-sm">Cada detalle pensado para ti</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-#1e3448 text-black">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl text-black lg:text-4xl font-bold mb-6">
              ¿No encuentras el modelo perfecto?
            </h2>
            <p className="text-black text-xl mb-8 opacity-90">
              Creamos diseños únicos desde cero. Cuéntanos tu visión y la haremos realidad
              con la calidad y sustentabilidad del sistema CLT.
            </p>

            <Button
              onClick={() => handleContactModel('Diseño Personalizado')}
              className="bg-white text-amber-700 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-lg hover-lift"
            >
              Solicitar Diseño Personalizado
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Models;
