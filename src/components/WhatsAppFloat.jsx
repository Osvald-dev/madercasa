import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const numbers = [
      "5493512122580", // WhatsApp Oficina
      "5493513728365"  // WhatsApp Asesor Técnico
    ];

    // Elige uno de los números al azar
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    const message = "¡Hola! Estoy interesado en recibir información.";
    const url = `https://wa.me/${randomNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center pulse-green transition-all duration-300 hover:scale-110"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      title="Contactar por WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </motion.button>
  );
};

export default WhatsAppFloat;
