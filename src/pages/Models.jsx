
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Home, Users, Maximize, Calendar, ArrowRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import imgR from '../../assets/img/3.jpg';
import img1 from '../../assets/img/1.jpg';
import img2 from '../../assets/img/2.jpg';
import img3 from '../../assets/img/7.jpg';
import img4 from '../../assets/img/8.jpg';
import img5 from '../../assets/img/9.jpg';
import img6 from '../../assets/img/10.jpg';

const Models = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Todos los Modelos' },
    { id: 'family', label: 'Familiares' },
    { id: 'compact', label: 'Compactas' },
    { id: 'luxury', label: 'Premium' }
  ];

  const models = [
    {
      id: 1,
      name: "Casa Bosque",
      category: "family",
      price: "Desde $85.000 USD",
      area: "120 m²",
      bedrooms: 3,
      bathrooms: 2,
      buildTime: "8 semanas",
      description: "Diseño familiar con amplios espacios y conexión directa con la naturaleza",
      features: ["Terraza panorámica", "Cocina integrada", "Dormitorio principal en suite", "Calefacción radiante"],
      image: img1
    },
    {
      id: 2,
      name: "Cabaña Moderna",
      category: "compact",
      price: "Desde $55.000 USD",
      area: "80 m²",
      bedrooms: 2,
      bathrooms: 1,
      buildTime: "6 semanas",
      description: "Perfecta para parejas o como casa de fin de semana en entornos naturales",
      features: ["Diseño minimalista", "Ventanales panorámicos", "Loft opcional", "Deck exterior"],
      image: img2
    },
    {
      id: 3,
      name: "Villa Premium",
      category: "luxury",
      price: "Desde $150.000 USD",
      area: "200 m²",
      bedrooms: 4,
      bathrooms: 3,
      buildTime: "12 semanas",
      description: "Máximo lujo y confort con terminaciones premium y tecnología integrada",
      features: ["Domótica completa", "Piscina integrada", "Garage doble", "Bodega climatizada"],
      image: img3
    },
    {
      id: 4,
      name: "Estudio Compacto",
      category: "compact",
      price: "Desde $35.000 USD",
      area: "45 m²",
      bedrooms: 1,
      bathrooms: 1,
      buildTime: "4 semanas",
      description: "Solución ideal para jóvenes profesionales o como oficina independiente",
      features: ["Espacio multifuncional", "Cocina americana", "Altillo de almacenaje", "Terraza privada"],
      image: img4
    },
    {
      id: 5,
      name: "Casa Familiar Plus",
      category: "family",
      price: "Desde $110.000 USD",
      area: "160 m²",
      bedrooms: 4,
      bathrooms: 2,
      buildTime: "10 semanas",
      description: "Amplia casa familiar con espacios flexibles y gran área social",
      features: ["Sala de estar doble altura", "Cocina isla central", "Playroom", "Quincho cubierto"],
      image: img5
    },
    {
      id: 6,
      name: "Refugio Alpino",
      category: "luxury",
      price: "Desde $120.000 USD",
      area: "140 m²",
      bedrooms: 3,
      bathrooms: 2,
      buildTime: "9 semanas",
      description: "Inspirada en chalets alpinos con máximo aislamiento térmico",
      features: ["Chimenea central", "Sauna privada", "Balcón panorámico", "Aislamiento superior"],
      image: img6
    }
  ];

  const filteredModels = selectedCategory === 'all' 
    ? models 
    : models.filter(model => model.category === selectedCategory);

  const handleContactModel = (modelName) => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀",
      duration: 4000,
    });
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
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
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
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
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

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{model.name}</h3>
                  <p className="text-gray-600 mb-6">{model.description}</p>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Maximize size={16} className="text-amber-600" />
                      <span className="text-sm text-gray-600">{model.area}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Home size={16} className="text-amber-600" />
                      <span className="text-sm text-gray-600">{model.bedrooms} dorm.</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users size={16} className="text-amber-600" />
                      <span className="text-sm text-gray-600">{model.bathrooms} baños</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} className="text-amber-600" />
                      <span className="text-sm text-gray-600">{model.buildTime}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Características destacadas:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {model.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-#1e3448 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      onClick={() => handleContactModel(model.name)}
                      className="flex-1 bg-#1e3448 hover:from-amber-700 text-white rounded-xl"
                    >
                      Solicitar Info
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                    
                    <Button 
                      onClick={() => handleContactModel(model.name)}
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
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <span className="text-black-700">{item}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={() => handleContactModel('Personalización')}
                className="bg-#1e3448 text-white px-8 py-6 text-lg rounded-xl shadow-wood hover-lift"
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
      <section className="section-padding bg-#1e3448 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
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
