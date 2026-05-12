import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, ShoppingBag, Star, Share2, Ruler, ShieldCheck, Truck, RefreshCw, ChevronDown, Plus, Minus } from 'lucide-react';
import { products } from '../data';
import { cn } from '../lib/utils';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0];
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const recommendedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-24">
      {/* Product Main Section */}
      <section className="container mx-auto px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-white relative group">
              <img 
                src={product.images[activeImage]} 
                className="w-full h-full object-cover" 
                alt={product.name}
              />
              <button className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "aspect-square rounded-2xl overflow-hidden border-2 transition-all",
                    activeImage === i ? "border-brand-ink" : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </button>
              ))}
            </div>
          </div>

          {/* Details Column */}
          <div className="flex flex-col">
            <div className="mb-12">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-brand-ink/40 mb-4">
                <span className="hover:text-brand-ink cursor-pointer">Shop</span>
                <span>/</span>
                <span className="hover:text-brand-ink cursor-pointer">{product.category}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif italic mb-6">{product.name}</h1>
              <div className="flex items-center gap-6">
                <p className="text-3xl tracking-tighter font-medium">${product.price}</p>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className={cn("w-4 h-4", i <= 4 ? "fill-brand-ink" : "fill-brand-ink/10")} />)}
                  </div>
                  <span className="text-sm font-bold underline underline-offset-4">{product.reviewsCount} Reviews</span>
                </div>
              </div>
            </div>

            <p className="text-lg text-brand-ink/60 leading-relaxed mb-12">
              {product.description}
            </p>

            {/* Variants */}
            <div className="mb-12">
              <h4 className="text-[11px] font-bold uppercase tracking-widest mb-6">Color: <span className="text-brand-ink/40">{selectedVariant.color}</span></h4>
              <div className="flex gap-4">
                {product.variants.map((v) => (
                  <button 
                    key={v.color}
                    onClick={() => setSelectedVariant(v)}
                    className={cn(
                      "w-12 h-12 rounded-full border-2 p-1 transition-all",
                      selectedVariant.color === v.color ? "border-brand-ink" : "border-transparent"
                    )}
                  >
                    <div 
                      className="w-full h-full rounded-full" 
                      style={{ backgroundColor: v.color.toLowerCase() === 'bone' ? '#E5E4E2' : v.color.toLowerCase() === 'obsidian' ? '#1B1B1B' : '#C2B280' }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-[11px] font-bold uppercase tracking-widest">Select Size: <span className="text-brand-ink/40">{selectedSize ? `US ${selectedSize}` : 'Pick one'}</span></h4>
                <button className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-brand-ink/40 hover:text-brand-ink">
                  <Ruler className="w-3 h-3" />
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-6 gap-3">
                {selectedVariant.sizes.map((size) => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "h-14 rounded-xl border text-sm font-bold transition-all",
                      selectedSize === size 
                        ? "bg-brand-ink text-white border-brand-ink" 
                        : "bg-white text-brand-ink border-brand-ink/10 hover:border-brand-ink"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Qty & Add to cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center border border-brand-ink/10 rounded-full h-16 px-6">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 text-brand-ink/40 hover:text-brand-ink transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-bold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2 text-brand-ink/40 hover:text-brand-ink transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button 
                className={cn(
                  "flex-grow luxury-button luxury-button-primary h-16 group relative overflow-hidden",
                  !selectedSize && "opacity-50 cursor-not-allowed"
                )}
                disabled={!selectedSize}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <ShoppingBag className="w-5 h-5" />
                  {selectedSize ? `Add to Bag — $${product.price * quantity}` : 'Select a size'}
                </span>
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-t border-brand-ink/5">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-brand-ink/40" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/60">Free Shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCw className="w-5 h-5 text-brand-ink/40" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/60">Easy Returns</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-ink/40" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/60">Lifetime Support</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8 divide-y divide-brand-ink/5 border-t border-brand-ink/5">
              <Accordion title="Materials & Craftsmanship">
                <div className="py-6 space-y-4">
                  <p className="text-sm text-brand-ink/60 leading-relaxed">
                    Every element is chosen for lifespan. Our upper is constructed from 60% organic cotton breathable knit.
                  </p>
                  <ul className="space-y-2">
                    {product.materials.map(m => (
                      <li key={m.name} className="flex justify-between items-center text-xs">
                        <span className="font-bold uppercase tracking-widest">{m.name}</span>
                        <span className="text-brand-ink/40">{m.percentage}%</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Accordion>
              <Accordion title="Delivery & Ritual Returns">
                <div className="py-6">
                  <p className="text-sm text-brand-ink/60 leading-relaxed">
                    Standard shipping is always carbon-neutral. We offer a 30-day "Ritual Test"—if you don't feel the natural progression in your movement, return them, worn or not.
                  </p>
                </div>
              </Accordion>
              <Accordion title="Maintenance Guide">
                <div className="py-6">
                  <p className="text-sm text-brand-ink/60 leading-relaxed">
                    Hand wash cold with our pH-balanced cleaner. Avoid direct sunlight. Let the natural fibers breathe.
                  </p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="bg-brand-ink py-32 text-brand-stone">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <h2 className="text-5xl font-serif italic mb-8">Anatomy of the {product.name}</h2>
            <p className="text-brand-stone/40">Engineered to support the human foot's complex architecture through 26 bones and 33 joints.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {product.features.map((feature, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 rounded-full border border-brand-stone/10 flex items-center justify-center mx-auto mb-8 bg-brand-stone/5 group-hover:bg-brand-stone group-hover:text-brand-ink transition-all duration-500">
                  <span className="font-serif italic text-2xl">0{i+1}</span>
                </div>
                <h4 className="text-xl font-serif mb-4 italic">{feature}</h4>
                <p className="text-sm text-brand-stone/40 leading-relaxed uppercase tracking-widest font-medium">Core Integration System</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="container mx-auto px-6 py-32">
        <div className="flex items-end justify-between mb-20">
          <h2 className="text-5xl font-serif italic">Complete the Ritual</h2>
          <a href="/shop" className="text-[11px] font-bold uppercase tracking-widest border-b border-brand-ink py-1">View Entire Collection</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommendedProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Sticky Bottom Bar for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-xl border-t border-brand-ink/5 p-4 z-40 flex items-center gap-4">
        <button 
          className="flex-grow bg-brand-ink text-white h-14 rounded-full font-bold uppercase tracking-widest text-[11px] flex items-center justify-center gap-3"
          onClick={() => {
            if(!selectedSize) window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <ShoppingBag className="w-4 h-4" />
          {selectedSize ? `Add to Bag — $${product.price}` : 'Select Size'}
        </button>
      </div>
    </div>
  );
}

function Accordion({ title, children }: { title: string, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="group">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left"
      >
        <span className="text-[11px] font-bold uppercase tracking-widest">{title}</span>
        <ChevronDown className={cn("w-4 h-4 transition-transform duration-500", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
