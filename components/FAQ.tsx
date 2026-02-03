import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "¿Cómo se integra con mi sistema actual?",
    a: "CobranzasUy ofrece una API flexible y conectores directos para los ERPs y hojas de cálculo más populares (Excel, Google Sheets). La importación de deudores es cuestión de segundos."
  },
  {
    q: "¿Es seguro enviar datos financieros?",
    a: "Absolutamente. Utilizamos encriptación de grado bancario (AES-256) y cumplimos con todas las normativas de protección de datos vigentes."
  },
  {
    q: "¿Puedo personalizar los mensajes?",
    a: "Sí. Tienes control total sobre el tono, la frecuencia y el contenido de los mensajes. Puedes elegir entre plantillas 'Amigables', 'Formales' o 'Urgentes'."
  },
  {
    q: "¿Qué pasa si un cliente responde?",
    a: "Nuestro bot de IA maneja las respuestas básicas y negociaciones de fecha. Si el caso es complejo, se deriva inmediatamente a tu panel de control para intervención humana."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-background border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Preguntas Frecuentes</h2>

        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="border-b border-white/10">
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className="text-xl font-medium text-foreground group-hover:text-primary transition-colors">{item.q}</span>
                <span className="text-white/50 ml-4 group-hover:text-primary transition-colors">
                  {activeIndex === idx ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-neutral-400 leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;