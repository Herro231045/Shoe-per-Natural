import React from 'react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6 mb-32">
        <div className="max-w-4xl">
          <span className="text-brand-ink/40 text-[11px] font-bold uppercase tracking-widest mb-8 block">Our Origin</span>
          <h1 className="text-6xl md:text-8xl font-serif italic mb-12 tracking-tighter leading-[0.85]">The Foundation <br /> of Movement.</h1>
          <p className="text-2xl text-brand-ink/60 leading-relaxed font-light">Founded in 2023 by a collective of biomechanical engineers and footwear designers, Shoe Per Natural was born from a simple observation: the human foot is a masterpiece of engineering that modern footwear is systematically breaking.</p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="aspect-square bg-brand-stone">
          <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover grayscale" alt="" />
        </div>
        <div className="p-12 lg:p-24 flex flex-col justify-center space-y-12">
          <h2 className="text-5xl font-serif italic mb-6">Designed to be <br /> Forgotten.</h2>
          <p className="text-lg text-brand-ink/60 leading-relaxed">We believe the best technology is invisible. When you wear our artifacts, you shouldn't feel the shoe; you should feel the ground. You should feel the stability of your own arch, the power of your own stride, and the natural alignment of your spine.</p>
          <div className="pt-12 border-t border-brand-ink/10">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-brand-ink/40 mb-6">Our Core Tenets</h4>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="font-serif italic text-xl">01</span>
                <p className="text-sm font-medium uppercase tracking-widest">Anatomical Inclusion</p>
              </li>
              <li className="flex gap-4">
                <span className="font-serif italic text-xl">02</span>
                <p className="text-sm font-medium uppercase tracking-widest">Material Purity</p>
              </li>
              <li className="flex gap-4">
                <span className="font-serif italic text-xl">03</span>
                <p className="text-sm font-medium uppercase tracking-widest">Aesthetic Longevity</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Founders / Team Placeholder */}
      <section className="container mx-auto px-6 py-48 text-center">
        <h2 className="text-5xl font-serif italic mb-24">Crafted in New York. <br /> Distributed Globally.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[1,2,3].map(i => (
            <div key={i} className="space-y-6">
              <div className="aspect-[3/4] bg-white rounded-3xl overflow-hidden grayscale">
                <img src={`https://images.unsplash.com/photo-${1500000000000 + i * 100000000}?auto=format&fit=crop&q=80&w=400`} className="w-full h-full object-cover" alt="" />
              </div>
              <h4 className="text-xl font-serif italic">The Studio Team</h4>
              <p className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">Collaborative Design</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
