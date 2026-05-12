import React from 'react';
import { ShieldCheck, ChevronLeft, Lock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Checkout() {
  return (
    <div className="min-h-screen bg-brand-stone pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <a href="/cart" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-brand-ink/60 hover:text-brand-ink group">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Bag
          </a>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-ink/40">
            <Lock className="w-3 h-3" />
            Secure Checkout
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form */}
          <div className="lg:col-span-7 space-y-12">
            <section>
              <h2 className="text-3xl font-serif italic mb-8">Shipping Identification</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input label="First Name" />
                <Input label="Last Name" />
                <div className="sm:col-span-2">
                  <Input label="Street Address" />
                </div>
                <Input label="Apt / Suite (Optional)" />
                <Input label="Postal Code" />
                <Input label="City" />
                <Input label="Country" value="United States" />
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-serif italic mb-8">Contact Method</h2>
              <div className="space-y-6">
                <Input label="Email Address" type="email" />
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="newsletter" className="w-4 h-4 rounded-sm border-brand-ink/10" defaultChecked />
                  <label htmlFor="newsletter" className="text-xs text-brand-ink/60 uppercase tracking-widest font-bold">Sign up for exclusive drops & sustainable insights</label>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-serif italic mb-8">Payment Protocol</h2>
              <div className="glass-card divide-y divide-brand-ink/5">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-5 h-5 rounded-full border-4 border-brand-ink" />
                      <span className="text-[11px] font-bold uppercase tracking-widest">Credit / Debit Card</span>
                    </div>
                    <div className="flex gap-2">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-2 opacity-50" alt="" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-2 opacity-50" alt="" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    <Input label="Card Number" placeholder="0000 0000 0000 0000" />
                    <div className="grid grid-cols-2 gap-6">
                      <Input label="Expiration" placeholder="MM/YY" />
                      <Input label="CVC" placeholder="000" />
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-white/20">
                  <div className="flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full border border-brand-ink/10" />
                    <span className="text-[11px] font-bold uppercase tracking-widest opacity-40">PayPal</span>
                  </div>
                </div>
              </div>
            </section>

            <button className="luxury-button luxury-button-primary w-full h-18 text-lg">
              Complete Artifact Acquisition
            </button>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-10 space-y-8 sticky top-32">
              <h3 className="text-[11px] font-bold uppercase tracking-widest border-b border-brand-ink/5 pb-6">Artifacts (2)</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-20 h-24 bg-brand-stone rounded-xl overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <h4 className="text-sm font-serif italic">Terraform v1</h4>
                      <p className="text-sm font-medium">$185</p>
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-brand-ink/40 mt-1">Bone / US 10</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-20 h-24 bg-brand-stone rounded-xl overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <h4 className="text-sm font-serif italic">AeroCloud Runner</h4>
                      <p className="text-sm font-medium">$210</p>
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-brand-ink/40 mt-1">Cloud / US 10</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-8 border-t border-brand-ink/5">
                <div className="flex justify-between text-sm">
                  <span className="text-brand-ink/40">Subtotal</span>
                  <span className="font-medium">$395.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-brand-ink/40">Shipping</span>
                  <span className="text-green-600 font-bold uppercase tracking-widest text-[10px]">Complimentary</span>
                </div>
                <div className="flex justify-between text-base pt-4">
                  <span className="font-bold uppercase tracking-widest text-xs">Total payable</span>
                  <span className="text-3xl font-serif italic tracking-tighter">$426.60</span>
                </div>
              </div>

              <div className="bg-brand-stone rounded-2xl p-6 flex items-start gap-4">
                <ShieldCheck className="w-5 h-5 text-brand-ink/40" />
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/60 leading-relaxed">
                  Your acquisition is protected by our global ritual guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input({ label, type = 'text', placeholder, value }: any) {
  return (
    <div className="space-y-3">
      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/40">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder}
        defaultValue={value}
        className="w-full bg-white border border-brand-ink/10 rounded-2xl h-16 px-6 outline-none focus:border-brand-ink transition-colors text-sm font-medium"
      />
    </div>
  );
}
