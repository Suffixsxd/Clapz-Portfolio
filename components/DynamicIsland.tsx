import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, MessageSquare } from 'lucide-react';
import { cn } from '../utils/cn';

interface DynamicIslandProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'about', label: 'About', icon: User },
];

export const DynamicIsland: React.FC<DynamicIslandProps> = ({ activeSection, onNavigate }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSelect = (id: string) => {
    onNavigate(id);
    setTimeout(() => setIsExpanded(false), 150);
  };

  // Determine label based on active section
  const currentItem = navItems.find(item => item.id === activeSection) || navItems[0];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        layout
        className={cn(
          "bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden cursor-pointer select-none",
          "flex items-center justify-center ring-1 ring-white/5"
        )}
        style={{ borderRadius: 32 }}
        initial={{ width: 130, height: 44 }}
        animate={{
          width: isExpanded ? 340 : 130,
          height: isExpanded ? 72 : 44,
          backgroundColor: isExpanded ? "rgba(0, 0, 0, 0.85)" : "rgba(0, 0, 0, 0.4)"
        }}
        transition={{ 
            type: "spring", 
            stiffness: 350, 
            damping: 30,
            mass: 0.8 
        }}
        onHoverStart={() => !isExpanded && setIsExpanded(true)}
        onClick={() => !isExpanded && setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <AnimatePresence mode="popLayout">
          {!isExpanded ? (
            <motion.div
              key="compact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.1 } }}
              className="flex items-center gap-3 px-4 w-full justify-center"
            >
              <div className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-xs font-medium text-white/90 tracking-wide uppercase">{currentItem.label}</span>
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5, transition: { duration: 0.1 } }}
              className="flex items-center justify-between w-full px-5 gap-1"
            >
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelect(item.id);
                    }}
                    className={cn(
                      "flex flex-col items-center justify-center p-2 rounded-2xl transition-all duration-200 group w-16",
                      isActive ? "bg-white/10 text-white shadow-inner" : "text-zinc-500 hover:text-zinc-200 hover:bg-white/5"
                    )}
                  >
                    <Icon size={18} strokeWidth={isActive ? 2.5 : 2} className={cn("transition-transform group-hover:scale-110", isActive && "text-white")} />
                    <span className="text-[9px] font-medium mt-1.5 opacity-80">{item.label}</span>
                  </button>
                );
              })}
              
              <div className="w-px h-8 bg-white/10 mx-2" />
              
               <a
                href="https://discord.com/users/silverd2007" 
                target="_blank" 
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col items-center justify-center p-2 rounded-2xl text-zinc-500 hover:text-[#5865F2] hover:bg-[#5865F2]/10 transition-colors w-16 group"
               >
                 <MessageSquare size={18} className="group-hover:scale-110 transition-transform" />
                 <span className="text-[9px] font-medium mt-1.5">Chat</span>
               </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};