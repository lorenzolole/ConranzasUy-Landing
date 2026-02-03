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
  // Phone transforms
  const phoneScale = useTransform(smoothScroll, [0, 0.4], [1, 0.8]);
  const phoneOpacity = useTransform(smoothScroll, [0.4, 0.5], [1, 0]); // Fade out phone for explosion
  const phoneRotate = useTransform(smoothScroll, [0, 0.5], [0, -10]);
  const phoneY = useTransform(smoothScroll, [0, 0.5], [0, 100]);

  // Explosion transforms
  const explosionOpacity = useTransform(smoothScroll, [0.4, 0.5], [0, 1]);
  const explosionScale = useTransform(smoothScroll, [0.4, 0.8], [0.5, 2]);

  // Text parallax
  const textY = useTransform(smoothScroll, [0, 0.5], [0, -100]);
  const textOpacity = useTransform(smoothScroll, [0, 0.2], [1, 0]);
  // The phoneOpacity is defined above, no need to redefine.

  return (
    <div ref={containerRef} className="h-[250vh] relative bg-background">
      {/* SVG Filters for Electric Border */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <filter id="turbulent-displace" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="1" />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
              <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="1" />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
              <animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="2" />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">
              <animate attributeName="dx" values="490; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="2" />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">
              <animate attributeName="dx" values="0; -490" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
            <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
            <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />

            <feDisplacementMap in="SourceGraphic" in2="combinedNoise" scale="30" xChannelSelector="R" yChannelSelector="B" />
          </filter>
        </defs>
      </svg>

      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center gap-8 md:gap-12 scale-[0.70] md:scale-[0.80] lg:scale-90 xl:scale-100 transition-transform duration-300">

        {/* Money Explosion Particles (Restored) */}
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
                className="absolute text-primary"
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
          <div className="w-64 h-64 bg-primary/20 blur-[100px] rounded-full absolute" />
        </motion.div>

        {/* Hero Text Section (Placed ABOVE Phone for clean separation) */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="relative z-30 flex flex-col items-center text-center px-4 md:px-0 mt-10 md:mt-0 bg-transparent"
        >
          <h2 className="text-xl md:text-2xl font-light tracking-[0.2em] text-primary uppercase mb-4">
            Recuperación Inteligente
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-foreground drop-shadow-2xl">
            Cobranzas<span className="text-primary italic">Uy</span>
          </h1>
          <p className="max-w-xl mx-auto text-neutral-300 text-lg md:text-xl mb-8 leading-relaxed font-light">
            Automatiza tu gestión de cobranzas por WhatsApp.
            Convierte deudas en liquidez con nuestro sistema SaaS para PyMEs.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center pointer-events-auto">
            <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-secondary transition-all flex items-center gap-2 group shadow-lg shadow-primary/25">
              Empezar Ahora
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all hover:border-primary/50">
              Ver Demo
            </button>
          </div>
        </motion.div>

        {/* Central Object: Phone with Electric Border */}
        <motion.div
          style={{ scale: phoneScale, y: phoneY, opacity: phoneOpacity, rotateX: phoneRotate }}
          className="relative z-20"
        >
          {/* Electric Border Effect Wrapper */}
          <div className="absolute inset-0 -z-10 scale-105">
            <div className="card-container-effect w-full h-full">
              <div className="inner-container w-full h-full">
                <div className="border-outer"></div>
                <div className="main-card-effect"></div>
                <div className="glow-layer-1"></div>
                <div className="glow-layer-2"></div>
              </div>
              <div className="background-glow"></div>
            </div>
          </div>

          <div className="w-[300px] h-[600px] md:w-[350px] md:h-[700px] bg-background border-8 border-neutral-800 rounded-[3rem] shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/10">
            {/* Phone Notch */}
            <div className="absolute top-0 w-full flex justify-center pt-4 z-20">
              <div className="w-32 h-6 bg-black rounded-full" />
            </div>

            {/* Phone Screen UI (Restored) */}
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
          </div>
        </motion.div>



        <motion.div
          style={{ opacity: textOpacity }}
          className="absolute bottom-10 left-0 right-0 flex justify-center z-30"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;