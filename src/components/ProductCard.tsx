import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Product } from '../types';
import { cn } from '../lib/utils';

interface ProductCardProps {
  product: Product;
  key?: React.Key;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Badge */}
      {(product.isNew || product.isBestSeller) && (
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest shadow-sm rounded-sm">New</span>
          )}
          {product.isBestSeller && (
            <span className="bg-brand-ink text-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest shadow-sm rounded-sm">Bestseller</span>
          )}
        </div>
      )}

      {/* Image Gallery Container */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-white">
        <a href={`/product/${product.id}`}>
          <img 
            src={isHovered ? product.images[1] : product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-1000 ease-out scale-100 group-hover:scale-110"
          />
        </a>

        {/* Quick Actions overlay */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-brand-ink hover:text-white transition-all shadow-xl">
            <Heart className="w-5 h-5" />
          </button>
          <button className="h-12 px-6 bg-brand-ink text-white rounded-full flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-xl">
            <ShoppingBag className="w-4 h-4" />
            <span className="text-[11px] font-bold uppercase tracking-widest">Add to Bag</span>
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="mt-6 space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="font-serif italic text-xl group-hover:underline transition-all decoration-1 underline-offset-4">
            <a href={`/product/${product.id}`}>{product.name}</a>
          </h3>
          <p className="font-medium tracking-tight text-lg">${product.price}</p>
        </div>
        
        <div className="flex items-center justify-between text-brand-ink/40">
          <p className="text-[11px] uppercase tracking-widest font-medium">{product.category}</p>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            <span className="text-[11px] font-bold">{product.rating}</span>
            <span className="text-[11px] opacity-60">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Variants Indicator */}
        <div className="flex gap-2 pt-2">
          {product.variants.map((v, i) => (
            <div 
              key={v.color} 
              className={cn(
                "w-3 h-3 rounded-full border border-brand-ink/10 cursor-pointer transition-transform hover:scale-125",
                i === 0 ? " ring-1 ring-brand-ink/40 ring-offset-2" : ""
              )}
              style={{ backgroundColor: v.color.toLowerCase() === 'bone' ? '#E5E4E2' : v.color.toLowerCase() === 'obsidian' ? '#1B1B1B' : '#C2B280' }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
