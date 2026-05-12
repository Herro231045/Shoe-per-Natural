import React from 'react';

export default function Sustainability() {
  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6 mb-32">
        <div className="max-w-4xl">
          <span className="text-brand-ink/40 text-[11px] font-bold uppercase tracking-widest mb-8 block">Ethics & Planet</span>
          <h1 className="text-6xl md:text-8xl font-serif italic mb-12 tracking-tighter leading-[0.85]">Recirculating <br /> Resources.</h1>
          <p className="text-2xl text-brand-ink/60 leading-relaxed font-light">Sustainability isn't a feature; it's our foundation. We believe in crafting products that can return to the earth without a trace, or be rebuilt for a second life.</p>
        </div>
      </section>

      {/* Pillars */}
      <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 mb-48">
        <div className="space-y-8">
          <div className="aspect-[4/5] bg-brand-moss/10 rounded-3xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1542601906970-34f970417ff2?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="" />
          </div>
          <h3 className="text-3xl font-serif italic">The Ritual Renewal</h3>
          <p className="text-sm text-brand-ink/60 leading-relaxed underline underline-offset-4 decoration-brand-ink/10">Learn about our upcycling program.</p>
        </div>
        <div className="space-y-8 pt-24">
          <div className="aspect-[4/5] bg-brand-moss/10 rounded-3xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1598339324545-0373e97072a3?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="" />
          </div>
          <h3 className="text-3xl font-serif italic">Biolattice Foam</h3>
          <p className="text-sm text-brand-ink/60 leading-relaxed underline underline-offset-4 decoration-brand-ink/10">100% Sugarcane derived chemistry.</p>
        </div>
        <div className="space-y-8">
          <div className="aspect-[4/5] bg-brand-moss/10 rounded-3xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="" />
          </div>
          <h3 className="text-3xl font-serif italic">Carbon Negative Logistics</h3>
          <p className="text-sm text-brand-ink/60 leading-relaxed underline underline-offset-4 decoration-brand-ink/10">Offsets are just the beginning.</p>
        </div>
      </section>

      {/* Large Image Callout */}
      <section className="relative h-[60vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover grayscale" alt="" />
        <div className="absolute inset-0 bg-brand-moss/20 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h2 className="text-5xl md:text-7xl font-serif italic mb-8">Earth First. <br /> Feet Second.</h2>
          </div>
        </div>
      </section>
    </div>
  );
}
