import React from 'react';
import { Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-brand-stone pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <h2 className="text-3xl font-serif italic">Shoe Per Natural</h2>
            <p className="text-sm text-brand-stone/60 leading-relaxed max-w-xs">
              Crafting foundational footwear that respects the natural architecture of the human foot. Designed for lifespan, not lifecycle.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-brand-stone/40 mb-8">Shop</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="/shop" className="hover:translate-x-1 inline-block transition-transform">All Collections</a></li>
              <li><a href="/shop" className="hover:translate-x-1 inline-block transition-transform">New Arrivals</a></li>
              <li><a href="/shop" className="hover:translate-x-1 inline-block transition-transform">Best Sellers</a></li>
              <li><a href="/shop" className="hover:translate-x-1 inline-block transition-transform">Care Kits</a></li>
              <li><a href="/wishlist" className="hover:translate-x-1 inline-block transition-transform">Wishlist</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-brand-stone/40 mb-8">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="/about" className="hover:translate-x-1 inline-block transition-transform">Our Story</a></li>
              <li><a href="/sustainability" className="hover:translate-x-1 inline-block transition-transform">Sustainability</a></li>
              <li><a href="/technology" className="hover:translate-x-1 inline-block transition-transform">Technology</a></li>
              <li><a href="/contact" className="hover:translate-x-1 inline-block transition-transform">Contact</a></li>
              <li><a href="/faq" className="hover:translate-x-1 inline-block transition-transform">FAQs</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-brand-stone/40">The Natural Herald</h4>
            <p className="text-sm text-brand-stone/60">Subscribe to receive early access to new drops and sustainable insights.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-brand-stone/20 py-4 text-sm uppercase tracking-widest focus:border-brand-stone outline-none transition-colors"
              />
              <button className="absolute right-0 bottom-4 p-1 hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-stone/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-brand-stone/40 font-medium">
          <p>© 2026 Shoe Per Natural. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-brand-stone transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-stone transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-stone transition-colors">Accessibility</a>
          </div>
          <div className="flex space-x-4 opacity-50 grayscale">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-3" alt="PayPal" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3" alt="Visa" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-3" alt="Mastercard" />
          </div>
        </div>
      </div>
    </footer>
  );
}
