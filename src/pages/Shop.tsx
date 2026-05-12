import React, { useState } from 'react';
import { SlidersHorizontal, ChevronDown, LayoutGrid, List } from 'lucide-react';
import { products } from '../data';
import ProductCard from '../components/ProductCard';
import { motion, AnimatePresence } from 'motion/react';

export default function Shop() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('Featured');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Lifestyle', 'Performance', 'Lounge', 'Outdoor'];
  
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="text-brand-ink/40 text-[11px] font-bold uppercase tracking-widest mb-4 block">Collections</span>
            <h1 className="text-5xl md:text-7xl font-serif italic tracking-tighter">The Full Exhibit</h1>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-[11px] uppercase tracking-widest font-bold text-brand-ink/40">{filteredProducts.length} Artifacts</p>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 border-y border-brand-ink/5 gap-6">
          {/* Quick Category Filter */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto pb-4 sm:pb-0">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeCategory === cat 
                  ? "bg-brand-ink text-white" 
                  : "bg-white text-brand-ink/60 border border-brand-ink/5 hover:border-brand-ink/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-8 w-full sm:w-auto justify-between sm:justify-end">
            <button 
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest group"
            >
              <SlidersHorizontal className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              Filter
            </button>
            <div className="relative group cursor-pointer">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest">
                Sort: <span className="text-brand-ink/60">{sortBy}</span>
                <ChevronDown className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="container mx-auto px-6 py-32 text-center">
          <h3 className="text-2xl font-serif italic text-brand-ink/40 mb-8">No artifacts found in this category.</h3>
          <button 
            onClick={() => setActiveCategory('All')}
            className="luxury-button luxury-button-primary"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Pagination (Mock) */}
      <section className="container mx-auto px-6 mt-32 border-t border-brand-ink/5 pt-12 flex flex-col items-center">
        <p className="text-[10px] uppercase tracking-widest text-brand-ink/40 mb-8">Viewing {filteredProducts.length} of {filteredProducts.length}</p>
        <div className="w-64 h-1 bg-brand-ink/5 rounded-full overflow-hidden">
          <div className="w-full h-full bg-brand-ink" />
        </div>
      </section>
    </div>
  );
}
