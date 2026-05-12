import React from 'react';
import { motion } from 'motion/react';
import { Zap, Shield, Atom, Wind } from 'lucide-react';

export default function Technology() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-32">
        <div className="max-w-4xl">
          <span className="text-brand-ink/40 text-[11px] font-bold uppercase tracking-widest mb-8 block">Foundational Engineering</span>
          <h1 className="text-6xl md:text-8xl font-serif italic mb-12 tracking-tighter leading-[0.85]">Technology <br /> That Disappears.</h1>
          <p className="text-2xl text-brand-ink/60 leading-relaxed font-light">We spent three years in the lab to create footwear that doesn't feel like footwear. Our obsession is the junction where materials meet movement.</p>
        </div>
      </section>

      {/* Grid Features */}
      <section className="container mx-auto px-6 mb-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="aspect-square bg-white rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="" />
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl font-serif italic">AeroCloud™ Foam</h3>
              <p className="text-lg text-brand-ink/60 leading-relaxed">Most foams collapse under pressure. AeroCloud™ uses a proprietary bio-based lattice that retains 98% of its energy return over 1,000 miles of movement.</p>
            </div>
          </div>
          <div className="space-y-12 pt-24 md:pt-48">
            <div className="aspect-square bg-white rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="" />
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl font-serif italic">FlexFrame™ Architecture</h3>
              <p className="text-lg text-brand-ink/60 leading-relaxed">A shoe shouldn't be a box. FlexFrame™ mimics the ligaments of the foot, providing lateral stability only when your biomechanics require it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Proof */}
      <section className="bg-brand-ink text-brand-stone py-32 overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            <div className="space-y-4">
              <Wind className="w-12 h-12 text-brand-stone/20" />
              <h4 className="text-5xl font-serif italic">240g</h4>
              <p className="text-[11px] uppercase tracking-widest font-bold text-brand-stone/40">Average Artifact Weight</p>
            </div>
            <div className="space-y-4">
              <Zap className="w-12 h-12 text-brand-stone/20" />
              <h4 className="text-5xl font-serif italic">32%</h4>
              <p className="text-[11px] uppercase tracking-widest font-bold text-brand-stone/40">Increased Energy Return</p>
            </div>
            <div className="space-y-4">
              <Atom className="w-12 h-12 text-brand-stone/20" />
              <h4 className="text-5xl font-serif italic">0mm</h4>
              <p className="text-[11px] uppercase tracking-widest font-bold text-brand-stone/40">The Perfect Drop</p>
            </div>
            <div className="space-y-4">
              <Shield className="w-12 h-12 text-brand-stone/20" />
              <h4 className="text-5xl font-serif italic">100%</h4>
              <p className="text-[11px] uppercase tracking-widest font-bold text-brand-stone/40">Bio-Purtity Standard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-6 py-48 text-center">
        <h2 className="text-5xl md:text-7xl font-serif italic mb-12">Experience the <br /> Convergence.</h2>
        <a href="/shop" className="luxury-button luxury-button-primary px-16 h-20 text-lg">Shop Technology Collection</a>
      </section>
    </div>
  );
}
