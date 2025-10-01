
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import {
  TreePine, Shield, Zap, Thermometer, Clock, Recycle,
  Home, Award, Leaf, Building, CheckCircle, ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import imgE from '../../assets/img/5.jpg';
import imgF from '../../assets/img/1-c.jpg';

const Advantages = () => {
  const { toast } = useToast();

  const advantages = [
    {
      icon: TreePine,
      title: "100% Sustentable",
      description: "Madera certificada FSC de bosques gestionados responsablemente",
      details: [
        "Captura de CO2 durante toda la vida útil",
        "Material renovable y biodegradable",
        "Menor huella de carbono vs construcción tradicional",
        "Certificaciones ambientales internacionales"
      ]
    },
    {
      icon: Shield,
      title: "Resistencia Superior",
      description: "Estructura más resistente que el hormigón armado",
      details: [
        "Resistencia sísmica excepcional",
        "Comportamiento superior ante incendios",
        "Durabilidad de más de 100 años",
        "Resistencia a vientos extremos"
      ]
    },
    {
      icon: Thermometer,
      title: "Aislamiento Térmico",
      description: "Eficiencia energética hasta 5 veces superior",
      details: [
        "Reducción del 80% en costos de climatización",
        "Confort térmico constante todo el año",
        "Eliminación de puentes térmicos",
        "Certificación Passivhaus disponible"
      ]
    },
    {
      icon: Clock,
      title: "Construcción Rápida",
      description: "Tiempos de construcción reducidos hasta 70%",
      details: [
        "Fabricación en taller controlado",
        "Montaje en obra en pocas semanas",
        "Menor dependencia del clima",
        "Planificación precisa de tiempos"
      ]
    },
    {
      icon: Zap,
      title: "Flexibilidad Estructural",
      description: "Adaptabilidad y modificaciones futuras",
      details: [
        "Espacios diáfanos sin columnas",
        "Facilidad para ampliaciones",
        "Modificaciones interiores simples",
        "Adaptación a terrenos complejos"
      ]
    },
    {
      icon: Recycle,
      title: "Economía Circular",
      description: "Material reutilizable al final de su vida útil",
      details: [
        "100% reciclable y reutilizable",
        "Desmontaje limpio y ordenado",
        "Valor residual del material",
        "Contribución a la economía circular"
      ]
    }
  ];

  const comparisons = [
    {
      aspect: "Tiempo de construcción",
      traditional: "6-12 meses",
      clt: "4-8 semanas",
      improvement: "70% más rápido"
    },
    {
      aspect: "Eficiencia energética",
      traditional: "Estándar",
      clt: "Passivhaus",
      improvement: "80% menos consumo"
    },
    {
      aspect: "Huella de carbono",
      traditional: "Alta emisión",
      clt: "Captura CO2",
      improvement: "Carbono negativo"
    },
    {
      aspect: "Resistencia sísmica",
      traditional: "Buena",
      clt: "Excepcional",
      improvement: "3x más flexible"
    },
    {
      aspect: "Aislamiento acústico",
      traditional: "Requiere adicionales",
      clt: "Integrado",
      improvement: "Superior natural"
    }
  ];

  const certifications = [
    {
      name: "FSC Certified",
      description: "Madera de bosques gestionados responsablemente",
      icon: TreePine
    },
    {
      name: "Passivhaus",
      description: "Estándar de eficiencia energética",
      icon: Home
    },
    {
      name: "LEED Compatible",
      description: "Contribuye a certificación LEED",
      icon: Award
    },
    {
      name: "ISO 14001",
      description: "Gestión ambiental certificada",
      icon: Leaf
    }
  ];

  const handleLearnMore = () => {
    const phoneNumber = "5493513728365"; // número con código de país (sin + ni espacios)
    const message = "¡Hola! Estoy interesado en recibir información técnica.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

  };

  return (
    <div className="pt-16 lg:pt-20 overflow-x-hidden">
      <Helmet>
        <title>Ventajas CLT - Mader Casa | Sistema Alemán Cross Laminated Timber</title>
        <meta name="description" content="Descubre las ventajas del sistema CLT: 100% sustentable, resistencia superior, aislamiento térmico excepcional y construcción 70% más rápida. Tecnología alemana en Argentina." />
      </Helmet>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from--mader-orange-50 to-amber-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="inline-block px-4 py-2 bg-[#af823c] hover:bg-[#8b6032] text-white-800 rounded-full text-sm font-semibold">
                  🌲 Tecnología CLT
                </span>

                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gradient">Ventajas del</span>
                  <br />
                  <span className="text-gray-800">Sistema CLT</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  El Cross Laminated Timber representa la evolución de la construcción en madera.
                  Descubre por qué es la elección del futuro para construcción sustentable.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-wood hover-lift">
                <img
                  alt="Estructura CLT mostrando capas de madera laminada cruzada"
                  className="w-full h-[500px] object-cover"
                  src={imgF} />

                <div className="absolute inset-0 bg-[#C3453]/30"></div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-effect rounded-lg p-4">
                    <h3 className="text-white font-semibold text-lg">Cross Laminated Timber</h3>
                    <p className="text-white/90 text-sm">Tecnología alemana de vanguardia</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Advantages */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient mb-6">
              ¿Por qué elegir CLT?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seis razones fundamentales que hacen del CLT la mejor opción para tu próximo proyecto
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect p-8 rounded-2xl shadow-wood hover-lift group"
                >
                  <div className="w-16 h-16 bg-[#af823c] hover:bg-[#8b6032] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3">{advantage.title}</h3>
                  <p className="text-gray-600 mb-4">{advantage.description}</p>

                  <div className="space-y-2">
                    {advantage.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle size={16} className="text-white-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-gradient-to-br from-white-50 to-amber-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient mb-6">
              CLT vs Construcción Tradicional
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comparación directa que demuestra la superioridad del sistema CLT
            </p>
          </motion.div>

          <div className="glass-effect rounded-2xl overflow-hidden shadow-wood">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#af823c] hover:bg-[#8b6032] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Aspecto</th>
                    <th className="px-6 py-4 text-center font-semibold">Construcción Tradicional</th>
                    <th className="px-6 py-4 text-center font-semibold">Sistema CLT</th>
                    <th className="px-6 py-4 text-center font-semibold">Mejora</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((comparison, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-gray-200 hover:bg-white/50 transition-colors"
                    >
                      <td className="px-6 py-4 font-semibold text-gray-800">{comparison.aspect}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{comparison.traditional}</td>
                      <td className="px-6 py-4 text-center text-white-700 font-semibold">{comparison.clt}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="px-3 py-1 bg-[#af823c] hover:bg-[#8b6032] text-white rounded-full text-sm font-semibold">
                          {comparison.improvement}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gradient">
                Tecnología Alemana Probada
              </h2>

              <p className="text-lg text-gray-600">
                El sistema CLT fue desarrollado en Austria y Alemania en los años 90.
                Hoy es el estándar de construcción sustentable en Europa, con más de
                30 años de experiencia y miles de proyectos exitosos.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#af823c] hover:bg-[#8b6032] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Building size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Estructura Multicapa</h3>
                    <p className="text-gray-600">Capas de madera encoladas en direcciones perpendiculares para máxima resistencia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#af823c] hover:bg-[#8b6032] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Precisión Milimétrica</h3>
                    <p className="text-gray-600">Fabricación CNC con tolerancias de ±1mm para ensamblaje perfecto</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#af823c] hover:bg-[#8b6032] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Calidad Controlada</h3>
                    <p className="text-gray-600">Cada panel es inspeccionado y certificado antes del envío</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-wood hover-lift">
                <img
                  alt="Proceso de fabricación CLT con maquinaria CNC de precisión"
                  className="w-full h-[400px] object-cover"
                  src={imgE} />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-effect rounded-lg p-4">
                    <h3 className="text-white font-semibold text-lg">Fabricación CNC</h3>
                    <p className="text-white/90 text-sm">Precisión alemana en cada corte</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-gradient-to-br from--mader-orange-50 to-amber-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient mb-6">
              Certificaciones y Estándares
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestros proyectos CLT cumplen con los más altos estándares internacionales
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-[#af823c] hover:bg-[#8b6032] rounded-2xl flex items-center justify-center shadow-wood hover-lift group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-2">{cert.name}</h3>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#000000]/30 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-black text-3xl lg:text-4xl font-bold mb-6">
              ¿Convencido de las ventajas del CLT?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Descubre cómo podemos aplicar todas estas ventajas en tu próximo proyecto.
              Solicita una consulta técnica personalizada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleLearnMore}
                className="bg-white text-amber-700 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-lg hover-lift"
              >
                Consulta Técnica Gratuita
                <ArrowRight className="ml-2" size={20} />
              </Button>

              {/* <Button 
                onClick={handleLearnMore}
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-amber-700 px-8 py-6 text-lg rounded-xl"
              >
                Descargar Catálogo Técnico
              </Button> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Advantages;
