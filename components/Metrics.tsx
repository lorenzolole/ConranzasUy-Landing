import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "Recuperación Promedio", value: "85%", sub: "en los primeros 30 días" },
  { label: "Ahorro de Tiempo", value: "15h", sub: "por semana/analista" },
  { label: "Tasa de Apertura", value: "98%", sub: "vía WhatsApp" },
  { label: "ROI Estimado", value: "10x", sub: "retorno sobre inversión" },
];

const Metrics: React.FC = () => {
  return (
    <section id="metrics" className="py-24 bg-background text-foreground relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest border border-primary/30 px-3 py-1 rounded-full bg-primary/10">
            Métricas de Impacto
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mt-6 tracking-tighter text-foreground">
            Rendimiento Puro
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-6 border-l border-white/10 hover:bg-white/5 transition-colors group"
            >
              <div className="text-5xl md:text-6xl font-bold mb-2 text-primary drop-shadow-lg">
                {stat.value}
              </div>
              <div className="text-xl font-medium text-foreground mb-1 group-hover:text-primary transition-colors">{stat.label}</div>
              <div className="text-sm text-neutral-400">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;