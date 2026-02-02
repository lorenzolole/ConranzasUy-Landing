import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, DollarSign, Send } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  // Phone transforms
  const phoneScale = useTransform(smoothScroll, [0, 0.4], [1, 1.2]);
  const phoneY = useTransform(smoothScroll, [0, 0.4], [0, 100]);
  const phoneOpacity = useTransform(smoothScroll, [0.4, 0.5], [1, 0]); // Fade out phone for explosion
  
  // Explosion transforms
  const explosionOpacity = useTransform(smoothScroll, [0.4, 0.5], [0, 1]);
  const explosionScale = useTransform(smoothScroll, [0.4, 0.8], [0.5, 2]);

  // Text parallax
  const textY = useTransform(smoothScroll, [0, 0.5], [0, -100]);
  const textOpacity = useTransform(smoothScroll, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="h-[250vh] relative bg-black">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">
        
        {/* Money Explosion Particles (Hidden initially) */}
        <motion.div 
          style={{ opacity: explosionOpacity, scale: explosionScale }}
          className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center"
        >
          {/* Generate array of money particles */}
          {Array.from({ length: 20 }).map((_, i) => {
            const angle = (i / 20) * 360;
            const radius = 300; // Final distance
            const x = Math.cos(angle * (Math.PI / 180)) * radius;
            const y = Math.sin(angle * (Math.PI / 180)) * radius;
            
            return (
              <motion.div
                key={i}
                className="absolute text-green-400"
                initial={{ x: 0, y: 0 }}
                animate={{ 
                  x: [0, x * (0.8 + Math.random() * 0.4)], 
                  y: [0, y * (0.8 + Math.random() * 0.4)],
                  rotate: Math.random() * 360 
                }}
                transition={{ duration: 0.5, delay: 0.1 }} // Animation handled by scroll transform on parent
              >
                <DollarSign size={20 + Math.random() * 30} />
              </motion.div>
            );
          })}
          {/* Central Burst Glow */}
          <div className="w-64 h-64 bg-green-500/20 blur-[100px] rounded-full absolute" />
        </motion.div>

        {/* Central Object: Phone */}
        <motion.div
          style={{ scale: phoneScale, y: phoneY, opacity: phoneOpacity }}
          className="relative z-20 w-[300px] h-[600px] md:w-[350px] md:h-[700px] bg-neutral-900 border-8 border-neutral-800 rounded-[3rem] shadow-2xl flex flex-col overflow-hidden"
        >
           {/* Phone Notch */}
           <div className="absolute top-0 w-full flex justify-center pt-4 z-20">
             <div className="w-32 h-6 bg-black rounded-full" />
           </div>

           {/* Phone Screen UI */}
           <div className="flex-1 bg-neutral-950 p-6 flex flex-col pt-16 relative">
              {/* Message Bubble */}
              <div className="bg-neutral-800 rounded-2xl p-4 rounded-tl-none mb-4 max-w-[80%] border border-neutral-700">
                <p className="text-xs text-neutral-400 mb-1">CobranzasUy • 10:42 AM</p>
                <p className="text-sm text-white">Hola! Recordamos que su factura vence hoy. Enlace de pago seguro aquí.</p>
              </div>

               {/* Simulated Payment Success */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 1, duration: 0.8 }}
                 className="mt-auto mb-10 bg-green-900/30 border border-green-500/50 rounded-xl p-4 flex items-center gap-3"
               >
                 <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-black">
                   <DollarSign size={20} />
                 </div>
                 <div>
                   <p className="text-sm font-bold text-white">Pago Recibido</p>
                   <p className="text-xs text-green-200">Recuperación exitosa</p>
                 </div>
               </motion.div>
           </div>
        </motion.div>

        {/* Hero Text Overlay */}
        <motion.div 
          style={{ y: textY, opacity: textOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none"
        >
          <div className="text-center px-4 md:px-0">
            <h2 className="text-xl md:text-2xl font-light tracking-[0.2em] text-neutral-400 uppercase mb-4">
              Recuperación Inteligente
            </h2>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">
              CobranzasUy
            </h1>
            <p className="max-w-xl mx-auto text-neutral-400 text-lg md:text-xl mb-10 leading-relaxed">
              Automatiza tu gestión de cobranzas por WhatsApp. 
              Convierte deudas en liquidez con nuestro sistema SaaS para PyMEs.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center pointer-events-auto">
              <button className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-neutral-200 transition-all flex items-center gap-2 group">
                Empezar Ahora
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all">
                Ver Demo
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          style={{ opacity: textOpacity }}
          className="absolute bottom-10 left-0 right-0 flex justify-center z-30"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;