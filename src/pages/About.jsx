
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Users, Target, Award, Globe, TreePine, Building } from 'lucide-react';

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
                 src="https://images.unsplash.com/photo-1696028917579-e2533e60e029" />
                
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
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-black-500 rounded-xl flex items-center justify-center">
                  <Target size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gradient">Nuestra Misión</h2>
              </div>
              
              <p className="text-lg text-white-600 leading-relaxed">
                Revolucionar la industria de la construcción en Argentina mediante la implementación 
                del sistema CLT alemán, ofreciendo viviendas sustentables, resistentes y de alta calidad 
                que respeten el medio ambiente y mejoren la calidad de vida de nuestros clientes.
              </p>
              
              <div className="bg-gradient-to-r from--mader-orange-light-100 to-amber-100 p-6 rounded-xl">
                <h3 className="font-semibold text-white-800 mb-2">Compromiso Ambiental</h3>
                <p className="text-white-700">
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
                <div className="w-12 h-12 bg-gradient-to-br from-white-500 to-amber-500 rounded-xl flex items-center justify-center">
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
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-white-500 rounded-2xl flex items-center justify-center shadow-wood hover-lift group-hover:scale-110 transition-transform duration-300">
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

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient mb-6">
              Nuestro Camino
            </h2>
            <p className="text-xl text-white-600 max-w-3xl mx-auto">
              La evolución de Mader Casa desde sus inicios hasta convertirse en pionera del CLT
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 to-white-500 rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="glass-effect p-6 rounded-xl shadow-wood hover-lift">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-amber-500 to--mader-blue-500 text-white rounded-full text-sm font-semibold mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-white-800 mb-2">{item.title}</h3>
                      <p className="text-white-600">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-white-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gradient-to-br from--mader-blue-50 to-amber-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient mb-6">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-white-600 max-w-3xl mx-auto">
              Profesionales especializados en construcción CLT y arquitectura sustentable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ing. Carlos Mendoza",
                role: "Director Técnico",
                specialty: "Especialista en sistemas CLT",
                image: "../../assets/img/2-b.jpg"
              },
              {
                name: "Arq. María González",
                role: "Directora de Diseño",
                specialty: "Arquitectura sustentable",
                image: "../../assets/img/2-a.jpg"
              },
              {
                name: "Ing. Roberto Silva",
                role: "Jefe de Obra",
                specialty: "Construcción modular",
                image: "../../assets/img/3-b.jpg"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-wood hover-lift mb-6">
                  <img  
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                   src={member.image} />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-bold text-white-800 mb-2">{member.name}</h3>
                <p className="text-amber-600 font-semibold mb-1">{member.role}</p>
                <p className="text-white-600 text-sm">{member.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
