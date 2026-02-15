import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Sparkles, Server } from 'lucide-react';

interface HomeProps {
  scrollToSection: (id: string) => void;
}

export const Home: React.FC<HomeProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen w-full max-w-4xl mx-auto px-6 text-center py-20">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-400 mb-8"
      >
        <Sparkles size={12} className="text-yellow-100" />
        <span>Creative Event Creator</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-6"
      >
        I'm Silver.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed"
      >
        A 17-year-old creative mind crafting memorable experiences. 
        Specializing in small and big events with years of staff expertise.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <button
          onClick={() => scrollToSection('projects')}
          className="group relative px-6 py-3 bg-white text-black rounded-full font-medium transition-transform hover:scale-105 active:scale-95"
        >
          View Projects
          <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
        <button
          onClick={() => scrollToSection('about')}
          className="px-6 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-full font-medium transition-all hover:bg-zinc-800 hover:border-zinc-700 active:scale-95"
        >
          About Me
        </button>
      </motion.div>

      {/* Feature Grid Mini */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-24 w-full"
      >
        {[
          { icon: Star, title: "Creative Mind", desc: "Unique event concepts" },
          { icon: Server, title: "Staff Experience", desc: "Cropied, FunMinesX, Mythonia" },
          { icon: Sparkles, title: "Passion", desc: "Dedicated to community" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 transition-colors">
            <item.icon className="w-6 h-6 text-zinc-300 mb-3" />
            <h3 className="text-sm font-semibold text-zinc-200">{item.title}</h3>
            <p className="text-xs text-zinc-500 mt-1">{item.desc}</p>
          </div>
        ))}
      </motion.div>

    </section>
  );
};