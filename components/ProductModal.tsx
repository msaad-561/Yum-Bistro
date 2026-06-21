'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, Minus, Plus } from 'lucide-react';
import { useCart } from '../lib/CartContext';

export function ProductModal({ product, onClose }: any) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const totalPrice = product.price * quantity;

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4 animate-in fade-in duration-200" onClick={onClose}>
      <div 
        className="bg-white w-full sm:max-w-md max-h-[90vh] sm:h-auto overflow-hidden rounded-t-3xl sm:rounded-3xl flex flex-col relative animate-in slide-in-from-bottom duration-300" 
        onClick={e => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative w-full aspect-video bg-gray-100 shrink-0">
          <Image src={product.image} alt={product.name} fill className="object-cover" referrerPolicy="no-referrer" />
          <button onClick={onClose} className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 transition-colors p-2 rounded-full text-white backdrop-blur-sm z-10">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto p-5 pb-28">
          <h2 className="font-sans font-extrabold text-2xl text-black mb-1">{product.name}</h2>
          <div className="font-sans font-bold text-lg text-black mb-3">Rs. {product.price.toFixed(2)}</div>
          <p className="text-gray-500 text-sm leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 sm:p-5 flex flex-col space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 rounded-lg bg-[#e23b49] text-white flex items-center justify-center hover:bg-[#c8313e] transition-colors"
            >
              <Minus size={20} />
            </button>
            <div className="w-20 h-10 flex items-center justify-center border border-gray-200 rounded-lg font-bold text-lg">
              {quantity}
            </div>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 rounded-lg bg-[#e23b49] text-white flex items-center justify-center hover:bg-[#c8313e] transition-colors"
            >
              <Plus size={20} />
            </button>
          </div>
          
          <button 
            onClick={handleAddToCart}
            className="w-full bg-[#e23b49] hover:bg-[#c8313e] text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-between px-6"
          >
            <span>Rs. {totalPrice.toFixed(2)}</span>
            <span>Add To Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
