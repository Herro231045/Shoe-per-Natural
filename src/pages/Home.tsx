import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Star, ShieldCheck, Truck, RefreshCw, Zap } from 'lucide-react';
import { products } from '../data';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="overflow-x-hidden">
      {/* Cinematic Hero */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-brand-ink">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover"
            alt="Shoe Per Natural Lifestyle"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-transparent to-black/20" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="text-white/60 text-[11px] font-bold uppercase tracking-[0.6em] mb-4 block">Spring Summer 2026</span>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif italic text-white leading-[0.8] mb-12 tracking-tighter">
              Movement <br /> Normalized.
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="/shop" className="luxury-button luxury-button-primary bg-white text-brand-ink hover:bg-white/90 px-12 group">
                Shop Collection
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="flex items-center gap-3 text-white group">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-brand-ink transition-all">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest">Brand Film</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
          <span className="text-white/40 text-[10px] uppercase tracking-widest">Scroll</span>
        </motion.div>
      </section>

      {/* Trust Badges Bar */}
      <section className="bg-white border-y border-brand-ink/5 py-12">
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: ShieldCheck, title: "Limited Lifetime Warranty", desc: "Built to endure the path ahead." },
            { icon: Truck, title: "Carbon Neutral Delivery", desc: "Complimentary on orders over $150." },
            { icon: RefreshCw, title: "30-Day Ritual Test", desc: "Your comfort is our prime directive." },
            { icon: Zap, title: "Ethical Lab Sourced", desc: "Materials chosen for natural longevity." }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <item.icon className="w-6 h-6 text-brand-ink/40" />
              <div>
                <h6 className="text-[11px] font-bold uppercase tracking-widest mb-1">{item.title}</h6>
                <p className="text-xs text-brand-ink/40">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-32 bg-brand-stone">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-2xl">
              <span className="text-brand-ink/40 text-[11px] font-bold uppercase tracking-widest mb-4 block">The Evolution</span>
              <h2 className="text-5xl md:text-6xl font-serif italic mb-6">Designed for Natural <br /> Human Progression.</h2>
              <p className="text-lg text-brand-ink/60">Our foundational collection strips away the unnecessary, leaving only what supports your natural biomechanics.</p>
            </div>
            <a href="/shop" className="group flex items-center gap-3 text-brand-ink font-bold text-[11px] uppercase tracking-widest mt-8 md:mt-0">
              View All Exhibits
              <div className="w-10 h-10 rounded-full border border-brand-ink/10 flex items-center justify-center group-hover:bg-brand-ink group-hover:text-white transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Shoe Per Natural - Immersive Split */}
      <section className="bg-brand-ink text-brand-stone grid grid-cols-1 lg:grid-cols-2">
        <div className="relative aspect-[4/5] lg:aspect-auto">
          <img 
            src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=2080" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
            alt="Sustainability"
          />
        </div>
        <div className="px-12 py-32 lg:px-24 flex flex-col justify-center">
          <span className="text-brand-stone/40 text-[11px] font-bold uppercase tracking-[0.4em] mb-12 block">Philosophy</span>
          <h2 className="text-5xl md:text-6xl font-serif italic mb-12 leading-tight">We build shoes that <br /> get out of your way.</h2>
          
          <div className="space-y-12 max-w-lg">
            <div className="space-y-4">
              <h4 className="text-xl font-serif">Anatomical Archetype</h4>
              <p className="text-brand-stone/60 leading-relaxed">Most shoes force your feet into shapes they weren't meant to hold. We do the opposite. Our wide toe-box allows for natural toe splay, the foundation of balance.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-serif">Zero-Drop Dynamics</h4>
              <p className="text-brand-stone/60 leading-relaxed">A flat sole from heel to toe promotes proper posture and strengthens the muscles of your feet and legs, just as nature intended.</p>
            </div>
          </div>

          <a href="/technology" className="luxury-button luxury-button-primary bg-brand-stone text-brand-ink mt-16 w-fit group">
            Explore the Tech
            <Zap className="w-5 h-5 ml-3" />
          </a>
        </div>
      </section>

      {/* Social Proof metrics */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <p className="text-6xl font-serif italic mb-2 tracking-tighter">1.2M+</p>
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-ink/40">Steps Logged Globally</p>
            </div>
            <div>
              <div className="flex justify-center items-center gap-1 mb-2">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-brand-ink" />)}
              </div>
              <p className="text-6xl font-serif italic mb-2 tracking-tighter">4.9/5</p>
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-ink/40">Verified Satisfaction</p>
            </div>
            <div>
              <p className="text-6xl font-serif italic mb-2 tracking-tighter">120K+</p>
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-ink/40">Movement Enthusiasts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Video Section (Mocked with Image) */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=2070" 
          className="w-full h-full object-cover"
          alt="Movement Lifestyle"
        />
        <div className="absolute inset-0 bg-brand-ink/30 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h2 className="text-5xl md:text-7xl font-serif italic mb-12 max-w-4xl mx-auto">Wherever the path leads, take the natural way.</h2>
            <button className="luxury-button luxury-button-primary bg-white text-brand-ink hover:scale-110">
              Join the Movement
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-brand-cream border-t border-brand-ink/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="text-brand-ink/40 text-[11px] font-bold uppercase tracking-[0.6em] mb-8 block">Exclusive Access</span>
          <h2 className="text-5xl md:text-6xl font-serif italic mb-8">Stay Grounded.</h2>
          <p className="text-xl text-brand-ink/60 mb-12">Receive insights on natural movement, early product drops, and exclusive community events.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="flex-grow bg-white border border-brand-ink/10 rounded-full px-8 py-4 outline-none focus:border-brand-ink transition-colors uppercase tracking-[0.2em] text-xs font-bold"
            />
            <button className="luxury-button luxury-button-primary whitespace-nowrap">Subscribe</button>
          </div>
          <p className="mt-8 text-[10px] text-brand-ink/40 uppercase tracking-widest">
            By subscribing, you agree to our Privacy Policy and Terms.
          </p>
        </div>
      </section>
    </div>
  );
}
