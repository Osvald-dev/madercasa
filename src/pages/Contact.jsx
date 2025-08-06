
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, Send, 
  User, Building, Calculator, Calendar 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import imgH from '../../assets/img/1-a.jpg';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      info: "+54 9351 4567-8900",
      description: "Lunes a Viernes 9:00 - 18:00"
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@madercasa.com.ar",
      description: "Respuesta en 24 horas"
    },
    {
      icon: MapPin,
      title: "Oficina",
      info: "Av. Goyeneche, CBA",
      description: "Showroom y oficina técnica"
    },
    {
      icon: Clock,
      title: "Horarios",
      info: "Lun - Vie: 9:00 - 18:00",
      description: "Sáb: 9:00 - 13:00"
    }
  ];

  const projectTypes = [
    "Casa Familiar",
    "Cabaña de Fin de Semana",
    "Vivienda de Montaña",
    "Oficina/Estudio",
    "Complejo Turístico",
    "Otro"
  ];

  const budgetRanges = [
    "Hasta $50.000 USD",
    "$50.000 - $100.000 USD",
    "$100.000 - $200.000 USD",
    "Más de $200.000 USD"
  ];

  const timelineOptions = [
    "Menos de 6 meses",
    "6 - 12 meses",
    "1 - 2 años",
    "Más de 2 años"
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀",
      duration: 4000,
    });
  };

  const handleWhatsApp = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀",
      duration: 4000,
    });
  };

  return (
    <div className="pt-16 lg:pt-20 overflow-x-hidden">
      <Helmet>
        <title>Contacto - Mader Casa | Consulta tu Proyecto CLT</title>
        <meta name="description" content="Contacta con Mader Casa para tu proyecto CLT. Oficina en CABA, consultas técnicas gratuitas. Teléfono, email y formulario de contacto disponibles." />
      </Helmet>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black-50 to-amber-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-black-100 to-amber-100 text-white-800 rounded-full text-sm font-semibold mb-6">
              📞 Hablemos de tu Proyecto
            </span>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gradient">Contactanos</span>
              <br />
              <span className="text-gray-800">Hoy Mismo</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos aquí para hacer realidad tu proyecto CLT. Consulta técnica gratuita, 
              asesoramiento personalizado y presupuestos sin compromiso.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl shadow-wood hover-lift text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-black-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  
                  <h3 className="font-semibold text-gray-800 mb-2">{info.title}</h3>
                  <p className="text-lg font-bold text-gradient mb-1">{info.info}</p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gradient mb-4">
                  Solicita tu Consulta Gratuita
                </h2>
                <p className="text-gray-600">
                  Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas 
                  para discutir tu proyecto CLT.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <User size={16} className="inline mr-2" />
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Mail size={16} className="inline mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Phone size={16} className="inline mr-2" />
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="+54 11 1234-5678"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Building size={16} className="inline mr-2" />
                      Tipo de Proyecto
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    >
                      <option value="">Seleccionar</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Calculator size={16} className="inline mr-2" />
                      Presupuesto
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    >
                      <option value="">Seleccionar</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Calendar size={16} className="inline mr-2" />
                      Cronograma
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    >
                      <option value="">Seleccionar</option>
                      {timelineOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MessageCircle size={16} className="inline mr-2" />
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                    placeholder="Cuéntanos sobre tu proyecto, ubicación, necesidades específicas..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit"
                    className="flex-1 bg[#0000] to-gray-600 hover:from-amber-700 hover:to-black-700 text-black px-8 py-6 text-lg rounded-xl shadow-wood hover-lift"
                  >
                    Enviar Consulta
                    <Send className="ml-2" size={20} />
                  </Button>
                  
                  <Button 
                    type="button"
                    onClick={handleWhatsApp}
                    className="bg-black-500 hover:bg-black-600 text-blacjk px-8 py-6 text-lg rounded-xl shadow-wood hover-lift"
                  >
                    <MessageCircle className="mr-2" size={20} />
                    WhatsApp
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="relative rounded-2xl overflow-hidden shadow-wood hover-lift">
                <img  
                  alt="Ubicación oficina Mader Casa en Buenos Aires"
                  className="w-full h-[300px] object-cover"
                 src={imgH}/>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className=" rounded-lg p-4">
                    <h3 className="text-white font-semibold text-lg">Nuestra Oficina</h3>
                    <p className="text-white/90 text-sm">Av. Corrientes 1234, CABA</p>
                  </div>
                </div>
              </div>

              {/* Additional Services */}
              <div className=" p-8 rounded-2xl shadow-wood">
                <h3 className="text-2xl font-bold text-gradient mb-6">
                  Servicios Incluidos
                </h3>
                
                <div className="space-y-4">
                  {[
                    "Consulta técnica gratuita",
                    "Estudio de factibilidad del terreno",
                    "Diseño arquitectónico personalizado",
                    "Cálculo estructural certificado",
                    "Gestión de permisos municipales",
                    "Supervisión de obra completa",
                    "Garantía de 10 años en estructura",
                    "Servicio post-venta especializado"
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-black-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Quick */}
              <div className=" p-8 rounded-2xl shadow-wood">
                <h3 className="text-2xl font-bold text-gradient mb-6">
                  Preguntas Frecuentes
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white-800 mb-2">¿Cuánto tiempo toma un proyecto?</h4>
                    <p className="text-gray-600 text-sm">Desde el diseño hasta la entrega: 3-6 meses dependiendo del tamaño y complejidad.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white-800 mb-2">¿Incluyen los permisos?</h4>
                    <p className="text-gray-600 text-sm">Sí, gestionamos todos los permisos municipales y documentación técnica necesaria.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white-800 mb-2">¿Qué garantía ofrecen?</h4>
                    <p className="text-gray-600 text-sm">10 años en estructura CLT, 2 años en terminaciones y 1 año en instalaciones.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#c49771]/30 text-black">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Preferís una llamada directa?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Nuestro equipo técnico está disponible para responder todas tus consultas 
              sobre construcción CLT de lunes a viernes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.href = 'tel:+541145678900'}
                className="bg-white text-amber-700 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-lg hover-lift"
              >
                <Phone className="mr-2" size={20} />
                Llamar Ahora
              </Button>
              
              <Button 
                onClick={() => window.location.href = 'mailto:info@madercasa.com.ar'}
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-amber-700 px-8 py-6 text-lg rounded-xl"
              >
                <Mail className="mr-2" size={20} />
                Enviar Email
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
