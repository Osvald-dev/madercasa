
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const WhatsAppFloat = () => {
  const { toast } = useToast();

  const handleWhatsAppClick = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀",
      duration: 4000,
    });
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="whatsapp-float w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center pulse-green transition-all duration-300 hover:scale-110"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
    >
      <MessageCircle size={28} className="text-white" />
    </motion.button>
  );
};

export default WhatsAppFloat;
