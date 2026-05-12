import React from 'react';
import { ShoppingBag, ArrowRight, Trash2, ShieldCheck, Truck } from 'lucide-react';
import { products } from '../data';
import { motion } from 'motion/react';

export default function Cart() {
  const cartItems = products.slice(0, 2).map(p => ({ ...p, quantity: 1, size: 10 }));

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-serif italic mb-16">Your Bag</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main List */}
          <div className="lg:col-span-8 space-y-12">
            {cartItems.map((item, i) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col sm:flex-row gap-8 pb-12 border-b border-brand-ink/5 group"
              >
                <div className="w-full sm:w-48 aspect-[4/5] bg-white rounded-2xl overflow-hidden relative">
                  <img src={item.images[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                </div>
                <div className="flex-grow flex flex-col justify-between py-2">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-serif italic">{item.name}</h3>
                      <p className="text-xl font-medium tracking-tight">${item.price}</p>
                    </div>
                    <div className="flex flex-wrap gap-x-8 gap-y-4 text-[11px] font-bold uppercase tracking-widest text-brand-ink/40">
                      <p>Color: <span className="text-brand-ink">Bone</span></p>
                      <p>Size: <span className="text-brand-ink">US {item.size}</span></p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-8">
                    <div className="flex items-center gap-4 border border-brand-ink/10 rounded-full px-4 py-2">
                      <button className="text-brand-ink/40 hover:text-brand-ink">-</button>
                      <span className="w-4 text-center font-bold">{item.quantity}</span>
                      <button className="text-brand-ink/40 hover:text-brand-ink">+</button>
                    </div>
                    <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-red-500/60 hover:text-red-500 group">
                      <Trash2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      Remove
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Recommendations */}
            <div className="py-12 bg-white rounded-3xl p-12 mt-12 border border-brand-ink/5">
              <h4 className="text-[11px] font-bold uppercase tracking-widest mb-8">Frequently Bought Together</h4>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex gap-4 items-center">
                  <div className="w-20 h-20 bg-brand-stone rounded-xl overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-widest mb-1">Organic Care Kit</h5>
                    <p className="text-xs text-brand-ink/40">$24</p>
                    <button className="text-[10px] font-bold uppercase tracking-widest underline underline-offset-4 mt-2">Add</button>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-20 h-20 bg-brand-stone rounded-xl overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1582967788606-a171c1070dd9?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-widest mb-1">Bamboo Socks</h5>
                    <p className="text-xs text-brand-ink/40">$18</p>
                    <button className="text-[10px] font-bold uppercase tracking-widest underline underline-offset-4 mt-2">Add</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 h-fit sticky top-32">
            <div className="glass-card p-10 space-y-8">
              <h3 className="text-[11px] font-bold uppercase tracking-widest border-b border-brand-ink/5 pb-6">Order Summary</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-brand-ink/40">Subtotal</span>
                  <span className="font-medium">$395.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-brand-ink/40">Carbon-Neutral Shipping</span>
                  <span className="text-green-600 font-bold uppercase tracking-widest text-[10px]">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-brand-ink/40">Estimated Tax</span>
                  <span className="font-medium">$31.60</span>
                </div>
                <div className="pt-6 border-t border-brand-ink/5 flex justify-between items-end">
                  <span className="text-[11px] font-bold uppercase tracking-widest">Total cost</span>
                  <span className="text-3xl font-serif italic tracking-tighter">$426.60</span>
                </div>
              </div>

              {/* Progress bar to free shipping */}
              <div className="space-y-4">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span>Shipping Progress</span>
                  <span className="text-green-600">Free Ship Unlocked</span>
                </div>
                <div className="h-1 bg-brand-ink/5 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-green-500" />
                </div>
              </div>

              <a href="/checkout" className="luxury-button luxury-button-primary w-full h-16 group">
                Proceed to Checkout
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex flex-col gap-4 text-center">
                <p className="text-[10px] uppercase tracking-widest text-brand-ink/40">Or checkout with</p>
                <div className="grid grid-cols-2 gap-4">
                  <button className="h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4" alt="PayPal" />
                  </button>
                  <button className="h-12 bg-black rounded-full flex items-center justify-center hover:scale-105 transition-transform border border-white/10">
                    <span className="text-white font-bold italic text-lg tracking-tighter">Apple Pay</span>
                  </button>
                </div>
              </div>

              {/* Trust markers */}
              <div className="pt-8 border-t border-brand-ink/5 space-y-6">
                <div className="flex items-center gap-4">
                  <ShieldCheck className="w-5 h-5 text-brand-ink/40" />
                  <p className="text-[10px] font-medium uppercase tracking-widest text-brand-ink/60">Secure SSL 256-bit Encryption</p>
                </div>
                <div className="flex items-center gap-4">
                  <Truck className="w-5 h-5 text-brand-ink/40" />
                  <p className="text-[10px] font-medium uppercase tracking-widest text-brand-ink/60">Delivered within 3-5 business days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
