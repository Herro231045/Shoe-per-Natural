import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const shown = localStorage.getItem('newsletter_shown');
    if (!shown) {
      const timer = setTimeout(() => setIsVisible(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const close = () => {
    setIsVisible(false);
    localStorage.setItem('newsletter_shown', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-brand-ink/40 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-brand-stone rounded-[40px] overflow-hidden max-w-4xl w-full flex flex-col md:flex-row shadow-2xl relative"
          >
            <button 
              onClick={close}
              className="absolute top-6 right-6 w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="md:w-1/2 aspect-video md:aspect-auto">
              <img 
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600" 
                className="w-full h-full object-cover grayscale" 
                alt="Shoe Per Natural Newsletter"
              />
            </div>

            <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-brand-ink/40 text-[11px] font-bold uppercase tracking-[0.4em] mb-8 block">Exclusive Insight</span>
              <h2 className="text-4xl font-serif italic mb-6">Ground Yourself in the Community.</h2>
              <p className="text-brand-ink/60 mb-10 leading-relaxed uppercase text-xs tracking-widest font-medium">
                Subscribe to receive a foundational $20 credit towards your first acquisition and early access to archival drops.
              </p>
              
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="w-full bg-white border border-brand-ink/10 rounded-full px-8 py-5 outline-none focus:border-brand-ink transition-colors text-xs font-bold tracking-widest"
                />
                <button className="luxury-button luxury-button-primary w-full h-16 group">
                  Confirm Subscription
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <p className="mt-8 text-[9px] text-brand-ink/30 uppercase tracking-widest text-center">
                Strictly foundational emails. No spam. One-click unsubscribe.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
