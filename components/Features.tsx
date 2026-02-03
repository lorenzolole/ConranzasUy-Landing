import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, ShieldCheck } from 'lucide-react';

const featureList = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "WhatsApp API",
    description: "Mensajes certificados y automatizados que llegan directo al bolsillo de tu cliente."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "IA de Negociación",
    description: "Bots entrenados para negociar fechas de pago y generar compromisos reales."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Dashboard Seguro",
    description: "Control total de tu cartera de deudores con reportes en tiempo real y seguridad bancaria."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">El Sistema</h2>
          <p className="text-neutral-400 text-xl max-w-2xl">
            No es magia, es tecnología. Nuestra plataforma ("La Fórmula") combina los ingredientes exactos para maximizar el retorno.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featureList.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group p-8 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">{feature.title}</h3>
              <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Features;