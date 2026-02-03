import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Carlos Méndez",
    role: "Director Financiero, LogísticaUy",
    text: "Antes pasábamos días llamando sin respuesta. Con CobranzasUy, el flujo de caja mejoró un 40% el primer mes."
  },
  {
    name: "Sofía Arrieta",
    role: "Dueña, Estética Premium",
    text: "La automatización es increíble. Mis clientes no se sienten acosados, sino recordados profesionalmente."
  },
  {
    name: "Fernando Ruiz",
    role: "CEO, TechSolutions",
    text: "La integración fue simple y el soporte es excelente. Una herramienta vital para cualquier PyME seria."
  }
];

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Lo que dicen nuestros socios</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/5 shadow-xl hover:border-primary/30 transition-all"
            >
              <div className="flex gap-1 mb-6 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-neutral-300 mb-6 italic text-lg">"{review.text}"</p>
              <div>
                <p className="font-bold text-foreground">{review.name}</p>
                <p className="text-sm text-neutral-500">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;