import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TreePine, Shield, Zap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import img1 from '../../assets/img/1-c.jpg';
import img2 from '../../assets/img/ryp/m9.jpeg';
import img3 from '../../assets/img/ryp/m11.jpeg';
import img4 from '../../assets/img/ryp/m1.jpeg';


const Home = () => {
  const features = [
    {
      icon: TreePine,
      title: "Sistema constructivo eficiente",
      description: "Muros compuestos por estructura de madera, aislaciones térmicas y placas técnicas que garantizan resistencia, confort y durabilidad."
    },
    {
      icon: Shield,
      title: "Confort térmico y acústico",
      description: "Aislación con lana de vidrio y sistemas multicapa que mantienen una temperatura interior estable todo el año."
    },
    {
      icon: Zap,
      title: "Construcción en seco",
      description: "Obra más limpia, rápida y precisa, con menor desperdicio de materiales y mayor control de calidad."
    },
    {
      icon: Award,
      title: "Flexibilidad de terminaciones",
      description: "Diferentes líneas constructivas y revestimientos exteriores como placa cementicia, base coat, EPS u OSB, según el diseño elegido."
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="wood-texture w-full h-full"></div>
        </div>

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-4 py-2 bg-[#c49771]/30 text-[#c49771] backdrop-blur-sm rounded-full text-sm font-semibold"
                >
                  Construimos en todo el país
                </motion.span>

                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="text-[#af823c]">Casas prefabricadas</span>
                  <br />
                  <span className="text-black">con sistema Wood Frame</span>
                </h1>

                <p className="text-xl text-black/80 leading-relaxed">
                  Diseñamos y construimos viviendas prefabricadas en seco, utilizando el sistema Wood Frame.
                  Nuestros muros combinan estructura de madera, aislación térmica, placas interiores de yeso y revestimientos exteriores técnicos, logrando hogares sólidos, eficientes y confortables.
                </p>
              </div>
              <div className="bg-[#af823c]/10 border border-[#af823c]/40 rounded-2xl py-8 text-center my-10">
                <p className="text-2xl md:text-3xl text-[#af823c] font-medium">
                  El m² desde <span className="font-semibold">$250.000</span>
                </p>
                <p className="text-[#5e5345] text-lg mt-2">
                  Viviendas diseñadas para vivir mejor.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-[#af823c] hover:bg-[#8b6032] text-white px-8 py-6 text-lg rounded-xl shadow-wood hover-lift">
                  <Link to="/modelos">
                    Ver Modelos
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>

                <Button asChild variant="outline" className="border-2 border-[#af823c] text-[#af823c] hover:bg-[#af823c]/10 px-8 py-6 text-lg rounded-xl">
                  <Link to="/nosotros">
                    Conocer Más
                  </Link>
                </Button>
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
                  alt="Casa prefabricada con diseño minimalista"
                  className="w-full h-[500px] object-cover"
                  src={img1}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-effect rounded-lg p-4">
                    <h3 className="text-white font-semibold text-lg">Sistema Woodframe</h3>
                    <p className="text-white/90 text-sm">Construcción rápida, eficiente y económica.</p>
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-[#af823c] rounded-full flex items-center justify-center floating-animation"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
              >
                <TreePine size={32} className="text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-[#f6f3ef]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-[#af823c] mb-6">
              ¿Por qué elegir Mader Casa?
            </h2>
            <p className="text-xl text-[#5e5345] max-w-3xl mx-auto">
              Construimos viviendas con sistemas constructivos modernos, combinando madera estructural y materiales técnicos que mejoran el confort térmico, la durabilidad y los tiempos de obra.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-[#af823c] rounded-2xl flex items-center justify-center shadow-wood hover-lift group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-[#5e5345] mb-3">{feature.title}</h3>
                  <p className="text-[#5e5345]/90">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-[#af823c] mb-6">
              Nuestras Creaciones
            </h2>
            <p className="text-xl text-[#FFFF] max-w-3xl mx-auto">
              Cada proyecto es único, diseñado para adaptarse perfectamente a tu estilo de vida y entorno.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Casa Familiar Moderna",
                description: "Diseño contemporáneo con espacios amplios",
                image: img2
              },
              {
                title: "Cabaña de Montaña",
                description: "Perfecta integración con el entorno natural",
                image: img3
              },
              {
                title: "Vivienda Modular",
                description: "Flexibilidad y personalización total",
                image: img4
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-wood hover-lift">
                  <img
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    src={project.image} />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/90">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild className="bg-[#af823c] hover:bg-[#8b6032] text-white px-8 py-6 text-lg rounded-xl shadow-wood hover-lift">
              <Link to="/modelos">
                Ver Todos los Modelos
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#af823c] text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
              ¿Listo para construir tu hogar del futuro?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Construí tu casa con un sistema moderno, eficiente y confiable
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-[#af823c] hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-lg hover-lift">
                <Link to="/contacto">
                  Solicitar Cotización
                </Link>
              </Button>

              <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#af823c] px-8 py-6 text-lg rounded-xl">
                <Link to="/ventajas">
                  Conocer Ventajas
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;