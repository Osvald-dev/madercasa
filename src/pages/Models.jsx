import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import {
  Filter,
  Maximize,
  Home,
  Users,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { Button } from '@/components/ui/button';
import imgR from '../../assets/img//3.jpg';
import img1 from '../../assets/img/ryp/m1.jpeg';
import plan1 from '../../assets/img/ryp/plan1.webp';
import img2 from '../../assets/img/ryp/m2.jpeg';
import plan2 from '../../assets/img/ryp/plan2.webp';
import img3 from '../../assets/img/ryp/m4.jpeg';
import plan3 from '../../assets/img/ryp/plan4.webp';
import img4 from '../../assets/img/ryp/m5.jpeg';
import plan4 from '../../assets/img/ryp/plan5.webp';
import img5 from '../../assets/img/ryp/m6.jpeg';
import plan5 from '../../assets/img/ryp/plan6.webp';
import img6 from '../../assets/img/ryp/m7.jpeg';
import plan6 from '../../assets/img/ryp/plan7.webp';
import img7 from '../../assets/img/ryp/m8.jpeg';
import plan7 from '../../assets/img/ryp/plan8.webp';
import img8 from '../../assets/img/ryp/m9.jpeg';
import plan8 from '../../assets/img/ryp/plan9.webp';
import img9 from '../../assets/img/ryp/m10.jpeg';
import plan9 from '../../assets/img/ryp/plan10.webp';
import img10 from '../../assets/img/ryp/m11.jpeg';
import plan10 from '../../assets/img/ryp/plan11.webp';
import img11 from '../../assets/img/ryp/m12.jpeg';
import plan11 from '../../assets/img/ryp/plan12.webp';
import img12 from '../../assets/img/ryp/H1.jpeg';
import plan12 from '../../assets/img/ryp/H1.webp';
import img13 from '../../assets/img/ryp/H2.jpg';
import plan13 from '../../assets/img/ryp/H2.webp';
import img14 from '../../assets/img/ryp/H3.jpeg';
import plan14 from '../../assets/img/ryp/H3.webp';
import img15 from '../../assets/img/ryp/H4.jpeg';
import plan15 from '../../assets/img/ryp/H4.webp';



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
    name: "MC1",
    category: "compact",
    area: "18 m²",
    bedrooms: 1,
    bathrooms: 1,
    buildTime: "3 semanas (Obra gris)",
    description:
      "Espacio compacto y funcional que redefine la comodidad moderna. Ideal para un estilo de vida simple, eficiente y conectado con el entorno.",
    features: ["Diseño moderno", "Cocina integrada", "Monoambiente luminoso", "Confort térmico"],
    image: img1,
    plan: plan1
  },
  {
    id: 2,
    name: "MC2",
    category: "compact",
    area: "40.5 m²",
    bedrooms: 1,
    bathrooms: 1,
    buildTime: "3 semanas (Obra gris)",
    description:
      "Cabaña contemporánea pensada para disfrutar de la naturaleza con estilo. Perfecta para escapadas, alquiler turístico o como primera vivienda.",
    features: ["Diseño minimalista", "Ventanales panorámicos", "Deck exterior", "Ambiente cálido y natural"],
    image: img2,
    plan: plan2
  },
  {
    id: 3,
    name: "MC3",
    category: "family",
    area: "93 m²",
    bedrooms: 2,
    bathrooms: 1,
    buildTime: "4 semanas (Obra gris)",
    description:
      "Vivienda moderna que combina calidez, amplitud y diseño. Espacios pensados para disfrutar cada momento en familia.",
    features: ["Ambientes amplios", "Espacios conectados", "Garage funcional", "Estilo contemporáneo"],
    image: img3,
    plan: plan3
  },
  {
    id: 4,
    name: "MC4",
    category: "family",
    area: "68.5 m²",
    bedrooms: 2,
    bathrooms: 1,
    buildTime: "4 semanas (Obra gris)",
    description:
      "Diseño funcional y acogedor que optimiza cada metro cuadrado. Ideal para familias jóvenes que buscan independencia y confort.",
    features: ["Espacio multifuncional", "Cocina americana", "Gran iluminación natural", "Ambiente cálido"],
    image: img4,
    plan: plan4
  },
  {
    id: 5,
    name: "MC5",
    category: "family",
    area: "68 m²",
    bedrooms: 2,
    bathrooms: 1,
    buildTime: "4 semanas (Obra gris)",
    description:
      "Una vivienda familiar moderna con espacios versátiles y una amplia zona social que invita a compartir y disfrutar.",
    features: ["Sala de estar doble altura", "Cocina con isla central", "Diseño flexible", "Ambientes luminosos"],
    image: img5,
    plan: plan5
  },
  {
    id: 6,
    name: "LX1",
    category: "luxury",
    area: "117 m²",
    bedrooms: 2,
    bathrooms: 1,
    buildTime: "5 semanas",
    description:
      "Inspirada en los chalets alpinos, combina diseño, confort y eficiencia térmica. Un refugio elegante para disfrutar todo el año.",
    features: ["Cocina comedor amplio", "Vestidor en habitación", "Galería exterior", "Aislamiento superior"],
    image: img6,
    plan: plan6
  },
  {
    id: 7,
    name: "MC6",
    category: "family",
    area: "82.5 m²",
    bedrooms: 2,
    bathrooms: 1,
    buildTime: "4 semanas",
    description:
      "Inspirada en las viviendas americanas, combina amplitud, calidez y estilo. Ideal para quienes valoran la vida en familia.",
    features: ["Cocina con desayunador isla", "Diseño americano", "Excelente aislación", "Espacios integrados"],
    image: img7,
    plan: plan7
  },
  {
    id: 8,
    name: "MC7",
    category: "family",
    area: "117 m²",
    bedrooms: 2,
    bathrooms: 1,
    buildTime: "5 semanas",
    description:
      "Vivienda moderna y minimalista que equilibra estética y funcionalidad. Pensada para disfrutar de la vida familiar con estilo.",
    features: ["Cocina comedor amplio", "Vestidor principal", "Galería para coche", "Aislamiento superior"],
    image: img8,
    plan: plan8
  },
  {
    id: 9,
    name: "LX2",
    category: "luxury",
    area: "87.5 m²",
    bedrooms: 2,
    bathrooms: 2,
    buildTime: "5 semanas",
    description:
      "Refugio moderno que combina materiales nobles y diseño sustentable. Elegancia y confort en un entorno natural.",
    features: ["Cocina comedor amplio", "Vestidor", "Galería exterior", "Eficiencia térmica superior"],
    image: img9,
    plan: plan9
  },
  {
    id: 10,
    name: "MC8",
    category: "luxury",
    area: "39.5 m²",
    bedrooms: 1,
    bathrooms: 1,
    buildTime: "5 semanas",
    description:
      "Diseño compacto con espíritu premium. Ideal como segunda vivienda o refugio moderno en entornos naturales.",
    features: ["Cocina integrada", "Vestidor en suite", "Espacios cálidos", "Aislamiento superior"],
    image: img10,
    plan: plan10
  },
  {
    id: 11,
    name: "MC9",
    category: "compact",
    area: "27 m²",
    bedrooms: 1,
    bathrooms: 1,
    buildTime: "3 semanas",
    description:
      "Módulo funcional y confortable que se adapta a distintos usos: vivienda, oficina o proyecto turístico.",
    features: ["Cocina comedor integrada", "Excelente aislamiento", "Iluminación ambiental", "Diseño flexible"],
    image: img11,
    plan: plan11
  },
  {
    id: 12,
    name: "H1",
    category: "family",
    area: "125.5 m²",
    bedrooms: 3,
    bathrooms: 2,
    buildTime: "9 semanas",
    description:
      "Vivienda familiar amplia, elegante y funcional. Espacios diseñados para disfrutar el confort y la calidez del hogar.",
    features: ["Aislamiento superior", "Iluminación natural", "Vestidor principal", "Cocina - Comedor amplio"],
    image: img12,
    plan: plan12
  },
  {
    id: 13,
    name: "H2",
    category: "luxury",
    area: "139.5 m²",
    bedrooms: 3,
    bathrooms: 2,
    buildTime: "9 semanas",
    description:
      "Vivienda de alta gama con diseño contemporáneo y materiales nobles. Cada espacio está pensado para el bienestar.",
    features: ["Aislamiento superior", "Luz natural", "Vestidor en habitación", "Cocina - Comedor amplio"],
    image: img13,
    plan: plan13
  },
  {
    id: 14,
    name: "H3",
    category: "luxury",
    area: "140.5 m²",
    bedrooms: 3,
    bathrooms: 2,
    buildTime: "10 semanas",
    description:
      "Arquitectura moderna, espacios amplios y una estética sobria. Una casa que combina diseño, confort y naturaleza.",
    features: ["Aislamiento superior", "Iluminación ambiental", "Vestidor en habitación", "Cocina - Comedor amplio"],
    image: img14,
    plan: plan14
  },
  {
    id: 15,
    name: "H4",
    category: "family",
    area: "128 m²",
    bedrooms: 3,
    bathrooms: 2,
    buildTime: "9 semanas",
    description:
      "Hogar contemporáneo y cálido, donde cada ambiente refleja equilibrio, diseño y confort.",
    features: ["Aislamiento térmico", "Ambientes luminosos", "Vestidor en habitación", "Cocina - Comedor amplio"],
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
        <title>Modelos - Mader Casa | Viviendas Personalizadas</title>
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
              <span className="text-gradient">Viviendas industrializadas</span>
              <br />
              <span className="text-gray-800">Personalizadas</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde estudios compactos hasta complejos turísticos. Cada modelo puede personalizarse
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

                  {/* <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/70 text-white rounded-full text-sm font-semibold">
                      {model.price}
                    </span>
                  </div> */}
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
            className="relative bg-white rounded-2xl shadow-lg max-w-3xl w-[90%] max-h-[90vh] overflow-y-auto p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClosePlan}
              className="absolute top-3 right-3 bg-gray-100 hover:bg-gray-200 rounded-full p-2"
            >
              ✕
            </button>
            <img
              src={selectedPlan}
              alt="Plano del modelo"
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
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
                    <p className="text-white/90 text-sm">Cada detalle pensado para tu comodidad</p>
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
              con la calidad y sustentabilidad del sistema WoodFrame.
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
