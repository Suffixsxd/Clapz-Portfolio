import React from 'react';
import { motion } from 'framer-motion';
import { Server, Shield, Crown } from 'lucide-react';

const experiences = [
  {
    name: "Cropied",
    role: "Staff Team",
    description: "Contributed to server management and event organization, ensuring a smooth experience for the player base.",
    icon: Server,
    color: "from-green-500/20 to-green-900/20"
  },
  {
    name: "FunMinesX",
    role: "Staff Member",
    description: "Helped moderate and create engaging events for the community. Active involvement in day-to-day operations.",
    icon: Crown,
    color: "from-yellow-500/20 to-yellow-900/20"
  },
  {
    name: "Mythonia",
    role: "Staff",
    description: "Part of the team maintaining order and facilitating big server events. Focused on player engagement.",
    icon: Shield,
    color: "from-purple-500/20 to-purple-900/20"
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full max-w-4xl mx-auto px-6 py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Experience & Projects</h2>
        <p className="text-zinc-400">
          I've dedicated years to staffing and creating events for various communities.
          Here are some of the major projects I've been a part of.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all duration-300"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            
            <div className="relative p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="p-4 rounded-2xl bg-zinc-800/50 border border-white/5 shrink-0">
                <exp.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.name}</h3>
                  <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-full bg-white/5 border border-white/10 text-zinc-400">
                    {exp.role}
                  </span>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                  {exp.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-16 p-8 rounded-3xl border border-dashed border-zinc-800 text-center"
      >
        <h3 className="text-lg font-medium text-zinc-300 mb-2">Want to collaborate?</h3>
        <p className="text-zinc-500 text-sm">
            I'm always looking for new opportunities to create amazing events.
        </p>
      </motion.div>
    </section>
  );
};