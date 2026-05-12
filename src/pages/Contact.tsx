import React from 'react';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="text-brand-ink/40 text-[11px] font-bold uppercase tracking-widest mb-8 block">Inquiries</span>
          <h1 className="text-5xl md:text-8xl font-serif italic mb-8">Reach Out.</h1>
          <p className="text-xl text-brand-ink/60">Our agents are here to assist your transition to natural movement.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-brand-ink/40">Communication Channels</h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-brand-ink/60" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif italic mb-1">Live Concierge</h4>
                    <p className="text-sm text-brand-ink/60">Available Mon-Fri, 9am - 6pm EST</p>
                    <button className="text-[10px] font-bold uppercase tracking-widest underline underline-offset-4 mt-2">Open Chat</button>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand-ink/60" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif italic mb-1">Email Correspondence</h4>
                    <p className="text-sm text-brand-ink/60">herald@shoepernatural.com</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-ink/60" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif italic mb-1">The Artifact Lab</h4>
                    <p className="text-sm text-brand-ink/60 text-balance">742 Founder's Way, Suite 40, New York, NY 10013</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-12 shadow-sm border border-brand-ink/5">
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/40">Full Name</label>
                  <input type="text" className="w-full bg-brand-stone/30 border-b border-brand-ink/10 py-4 outline-none focus:border-brand-ink transition-colors" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/40">Email Address</label>
                  <input type="email" className="w-full bg-brand-stone/30 border-b border-brand-ink/10 py-4 outline-none focus:border-brand-ink transition-colors" />
                </div>
                <div className="sm:col-span-2 space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/40">Subject</label>
                  <select className="w-full bg-brand-stone/30 border-b border-brand-ink/10 py-4 outline-none focus:border-brand-ink transition-colors appearance-none">
                    <option>Product Inquiry</option>
                    <option>Order Assistance</option>
                    <option>Returns & Rituals</option>
                    <option>Partnership Proposal</option>
                  </select>
                </div>
                <div className="sm:col-span-2 space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/40">Your Message</label>
                  <textarea rows={5} className="w-full bg-brand-stone/30 border-b border-brand-ink/10 py-4 outline-none focus:border-brand-ink transition-colors resize-none" />
                </div>
                <div className="sm:col-span-2 pt-6">
                  <button className="luxury-button luxury-button-primary w-full">Transmit Inquiry</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
