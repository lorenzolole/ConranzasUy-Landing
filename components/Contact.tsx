import React from 'react';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
        
        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold mb-6 tracking-tight">Empieza a recuperar hoy.</h2>
          <p className="text-xl text-neutral-400 mb-8">
            Agenda una demo de 15 minutos y descubre cuánto dinero estás dejando sobre la mesa.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <span className="font-bold">UY</span>
              </div>
              <div>
                <p className="font-semibold">Oficinas Centrales</p>
                <p className="text-sm text-neutral-500">Montevideo, Uruguay</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 w-full">
          <form className="bg-black border border-white/10 p-8 rounded-3xl shadow-2xl space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">Nombre de Empresa</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                placeholder="Ej. Logística Global S.A."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">Email Corporativo</label>
              <input 
                type="email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                placeholder="hola@empresa.com"
              />
            </div>
             <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">Mensaje (Opcional)</label>
              <textarea 
                rows={3}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                placeholder="¿Qué volumen de deuda manejan?"
              />
            </div>
            
            <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group">
              Solicitar Demo
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;