import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, Heart, User, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', mega: true },
    { name: 'Collections', mega: true },
    { name: 'Technology', path: '/technology' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'About', path: '/about' }
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500",
      isScrolled ? "bg-brand-stone/80 backdrop-blur-xl py-4 shadow-sm" : "bg-transparent py-8"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Mobile Menu Trigger */}
        <button 
          className="lg:hidden p-2 -ml-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <div 
              key={link.name}
              className="relative group py-2"
              onMouseEnter={() => link.mega && setActiveMegaMenu(link.name)}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <a 
                href={link.path || '#'} 
                className="text-[13px] font-medium uppercase tracking-[0.2em] text-brand-ink/70 hover:text-brand-ink transition-colors flex items-center gap-1"
              >
                {link.name}
                {link.mega && <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />}
              </a>
              
              {/* Mega Menu Indicator Bar */}
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-ink transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Brand Logo */}
        <a href="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center group">
          <h1 className="text-2xl font-serif italic tracking-tight text-brand-ink leading-none">Shoe Per Natural</h1>
          <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100 transition-opacity mt-1">Foundational Movement</span>
        </a>

        {/* Right Actions */}
        <div className="flex items-center space-x-6">
          <button className="hidden sm:block p-2 hover:bg-white/50 rounded-full transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="hidden sm:block p-2 hover:bg-white/50 rounded-full transition-colors relative">
            <Heart className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-white/50 rounded-full transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-white/50 rounded-full transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-brand-ink rounded-full border-2 border-brand-stone" />
          </button>
        </div>
      </div>

      {/* Mega Menus Overlay */}
      <AnimatePresence>
        {activeMegaMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-t border-brand-ink/5 shadow-2xl py-12"
            onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <div className="container mx-auto px-12 grid grid-cols-4 gap-12">
              <div className="space-y-6">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-brand-ink/40">Categories</h4>
                <ul className="space-y-4">
                  {['All Footwear', 'Sneakers', 'Running', 'Lounge', 'Boots'].map(item => (
                    <li key={item}><a href="/shop" className="text-lg font-serif hover:italic transition-all">{item}</a></li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-brand-ink/40">Featured</h4>
                <ul className="space-y-4">
                  {['New Arrivals', 'Best Sellers', 'Archived Series', 'Collaborations'].map(item => (
                    <li key={item}><a href="/shop" className="text-lg font-serif hover:italic transition-all">{item}</a></li>
                  ))}
                </ul>
              </div>
              <div className="col-span-2 grid grid-cols-2 gap-4">
                <div className="relative group overflow-hidden rounded-2xl aspect-[4/5] bg-brand-stone">
                  <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="New Arrival" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex flex-col justify-end p-6">
                    <span className="text-white text-xs uppercase tracking-widest mb-1">New Release</span>
                    <h5 className="text-white text-xl font-serif italic">The Terraform v1</h5>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl aspect-[4/5] bg-brand-stone">
                  <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Collection" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex flex-col justify-end p-6">
                    <span className="text-white text-xs uppercase tracking-widest mb-1">Lookbook</span>
                    <h5 className="text-white text-xl font-serif italic">Spring/Summer 26</h5>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-brand-stone z-[70] p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <h1 className="text-xl font-serif italic">Shoe Per Natural</h1>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <ul className="space-y-8 flex-grow">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.path || '/shop'} 
                      className="text-3xl font-serif italic flex items-center justify-between group"
                    >
                      {link.name}
                      < ChevronDown className="w-6 h-6 -rotate-90 opacity-20 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
              <div className="pt-12 border-t border-brand-ink/10 space-y-6">
                <div className="flex space-x-6 text-brand-ink/60">
                  <Heart className="w-6 h-6" />
                  <Search className="w-6 h-6" />
                  <User className="w-6 h-6" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-ink/40">
                  Free Shipping over $150
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
