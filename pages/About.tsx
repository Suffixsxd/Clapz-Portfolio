import React from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, MessageCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-3xl mx-auto px-6 py-24 min-h-[80vh] scroll-mt-20">
       <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative mb-16"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/20 to-transparent blur-3xl -z-10" />
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <div className="prose prose-invert prose-lg text-zinc-400">
            <p>
                Hi, I'm <span className="text-white font-medium">Silver</span>.
            </p>
            <p>
                I am a 17-year-old creative enthusiast with a passion for community management and event organization. 
                Since starting my journey, I have focused on building engaging environments for players and communities alike.
            </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-3xl bg-zinc-900/30 border border-white/5"
        >
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Event Specialist</h3>
            <p className="text-sm text-zinc-500">
                I specialize in both small-scale gatherings and large server-wide events. My goal is always to create something unique and memorable.
            </p>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-3xl bg-zinc-900/30 border border-white/5"
        >
             <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                <User className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Staff Veteran</h3>
            <p className="text-sm text-zinc-500">
                With years of experience on staff teams like Cropied and Mythonia, I understand the nuances of moderation and community leadership.
            </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-8 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
        <p className="text-zinc-400 mb-8 max-w-md mx-auto">
            I don't use many social media platforms. The best and only way to reach me is through Discord.
        </p>

        <a 
            href="https://discord.com/users/silverd2007" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-xl font-medium transition-colors"
        >
            <MessageCircle className="w-5 h-5" />
            Add me: silverd2007
        </a>
      </motion.div>
    </section>
  );
};