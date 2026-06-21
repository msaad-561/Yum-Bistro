'use client';

import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../lib/CartContext';

export function StickyCart() {
  const { totalItems, totalPrice, isCartOpen, setIsCartOpen } = useCart();

  if (totalItems === 0 || isCartOpen) return null;

  return (
    <div 
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-8 sm:w-96 z-40 bg-black text-white rounded-2xl shadow-2xl p-4 flex items-center justify-between cursor-pointer animate-in slide-in-from-bottom-10 fade-in duration-300" 
      onClick={() => setIsCartOpen(true)}
    >
      <div className="flex items-center space-x-4">
        <div className="relative">
          <ShoppingBag size={24} className="text-white" />
          <span className="absolute -top-2 -right-2 bg-white text-[#0B143A] text-[11px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
            {totalItems}
          </span>
        </div>
        <span className="font-extrabold text-lg">Rs. {totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex items-center space-x-2 font-bold text-sm bg-white/10 px-4 py-2 rounded-xl transition-colors hover:bg-white/20">
        <span>View Cart</span>
        <ArrowRight size={16} />
      </div>
    </div>
  );
}
