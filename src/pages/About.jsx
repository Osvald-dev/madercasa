
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Users, Target, Award, Globe, TreePine, Building } from 'lucide-react';
import imgD from '../../assets/img/1-a.jpg'
import img1 from "../../assets/img/2-b.jpg";
import img2 from "../../assets/img/2-a.jpg";
import img3 from "../../assets/img/3-b.jpg";
const About = () => {
  const values = [
    {
      icon: TreePine,
      title: "Sustentabilidad",
      description: "Comprometidos con el medio ambiente y la construcción responsable"
    },
    {
      icon: Award,
      title: "Calidad Premium",
      description: "Estándares alemanes de excelencia en cada proyecto"
    },
    {
      icon: Building,
      title: "Innovación",
      description: "Tecnología CLT de vanguardia para construcciones del futuro"
    },
    {
      icon: Users,
      title: "Compromiso",
      description: "Acompañamos cada proyecto desde la idea hasta la entrega"
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Fundación",
      description: "Nace Mader Casa con la visión de revolucionar la construcción en Argentina"
    },
    {
      year: "2021",
      title: "Tecnología CLT",
      description: "Incorporamos el sistema alemán Cross Laminated Timber"
    },
    {
      year: "2022",
      title: "Primeros Proyectos",
      description: "Completamos nuestras primeras viviendas modulares exitosamente"
    },
    {
      year: "2023",
      title: "Expansión",
      description: "Ampliamos nuestra capacidad y catálogo de modelos"
    },
    {
      year: "2024",
      title: "Liderazgo",
      description: "Nos consolidamos como pioneros en construcción CLT en Argentina"
    }
  ];

  return (
    <div className="pt-16 lg:pt-20 overflow-x-hidden">
      <Helmet>
        <title>Nosotros - Mader Casa | Pioneros en Construcción CLT</title>
        <meta name="description" content="Conoce la historia de Mader Casa, pioneros en Argentina en construcción con sistema CLT alemán. Nuestra misión, visión y compromiso con la innovación sustentable." />
      </Helmet>

      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative bg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-white-100 to-amber-100 text-white-800 rounded-full text-sm font-semibold">
                  🏡 Nuestra Historia
                </span>

                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gradient">Pioneros en</span>
                  <br />
                  <span className="text-white-800">Construcción CLT</span>
                </h1>

                <p className="text-xl text-white-600 leading-relaxed">
                  Somos la primera empresa en Argentina especializada en construcción con sistema CLT alemán.
                  Combinamos tradición europea con innovación local para crear hogares excepcionales.
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
                  alt="Equipo de Mader Casa trabajando en construcción CLT"
                  className="w-full h-[500px] object-cover"
                  src={imgD} />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom ">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-[#8b6032] rounded-xl flex items-center justify-center">
                  <Target size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gradient">Nuestra Misión</h2>
              </div>

              <p className="text-lg text-white-600 leading-relaxed">
                Revolucionar la industria de la construcción en Argentina mediante la implementación
                del sistema CLT alemán, ofreciendo viviendas sustentables, resistentes y de alta calidad
                que respeten el medio ambiente y mejoren la calidad de vida de nuestros clientes.
              </p>

              <div className="bg-gradient-to-r from-amber-100 to-white-100 p-6 rounded-xl">
                <h3 className="font-semibold text-amber-800 mb-2">Compromiso Ambiental</h3>
                <p className="text-amber-700">
                  Cada proyecto contribuye a la reducción de la huella de carbono y promueve
                  la construcción sustentable en Argentina.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-[#8b6032] to-amber-500 rounded-xl flex items-center justify-center">
                  <Globe size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gradient">Nuestra Visión</h2>
              </div>

              <p className="text-lg text-white-600 leading-relaxed">
                Ser la empresa líder en construcción CLT en Latinoamérica, reconocida por la
                excelencia en diseño, calidad constructiva y compromiso ambiental, estableciendo
                nuevos estándares en la industria de la construcción sustentable.
              </p>

              <div className="bg-gradient-to-r from-amber-100 to-white-100 p-6 rounded-xl">
                <h3 className="font-semibold text-amber-800 mb-2">Innovación Continua</h3>
                <p className="text-amber-700">
                  Investigamos y desarrollamos constantemente nuevas técnicas y materiales
                  para ofrecer las mejores soluciones constructivas.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-to-br from-white-50 to-amber-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient mb-6">
              Nuestros Valores
            </h2>
            <p className="text-xl text-white-600 max-w-3xl mx-auto">
              Los principios que guían cada decisión y proyecto en Mader Casa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 mx-auto mb-6 nature-gradient rounded-2xl flex items-center justify-center shadow-wood hover-lift group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white-800 mb-3">{value.title}</h3>
                  <p className="text-white-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    

      {/* Team Section */}
      <section className="section-padding bg-[#1e3448] relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-[#af823c] mb-6">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              En <strong>Mader Casa</strong> contamos con un equipo multidisciplinario de
              ingenieros, arquitectos y especialistas en construcción sustentable.
              Combinamos experiencia técnica, innovación y pasión por el diseño para
              crear viviendas eficientes, seguras y duraderas bajo el sistema{" "}
              <strong>CLT (Cross Laminated Timber)</strong>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                role: "Diseño Arquitectónico",
                specialty:
                  "Proyectos personalizados que maximizan la luz natural, el confort térmico y la integración con el entorno.",
                image: img1,
              },
              {
                role: "Ingeniería y Estructura",
                specialty:
                  "Cálculo estructural y eficiencia constructiva con tecnología CLT de última generación.",
                image: img2,
              },
              {
                role: "Gestión y Obra",
                specialty:
                  "Coordinación integral de obra y procesos industrializados que garantizan tiempos de ejecución óptimos.",
                image: img3,
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover-lift mb-6">
                  <img
                    alt={member.role}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    src={member.image}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {member.role}
                </h3>
                <p className="text-[#c49771] text-sm leading-relaxed px-4">
                  {member.specialty}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center max-w-4xl mx-auto text-white/80 leading-relaxed"
          >
            <p>
              Cada proyecto de <strong>Mader Casa</strong> es el resultado de un
              trabajo colaborativo, donde la precisión técnica se une al diseño
              consciente. Apostamos por una{" "}
              <strong>construcción sustentable</strong> que optimiza recursos,
              respeta el entorno y redefine la manera de habitar.
            </p>
          </motion.div>
        </div>

        {/* Efecto visual sutil de fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3448] via-[#2a3f4f] to-[#5e5345] opacity-90 z-0" />
      </section>
    </div>
  );
};

export default About;
