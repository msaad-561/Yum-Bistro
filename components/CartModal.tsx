'use client';

import { X, Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../lib/CartContext';

export function CartModal() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();

  if (!isCartOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4 animate-in fade-in duration-200"
      onClick={() => setIsCartOpen(false)}
    >
      <div
        className="bg-white w-full sm:max-w-md h-[95vh] sm:h-auto sm:max-h-[85vh] rounded-t-3xl sm:rounded-3xl flex flex-col overflow-hidden relative animate-in slide-in-from-bottom duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between shrink-0 bg-white z-10">
          <h2 className="font-sans font-extrabold text-xl text-black">Your Cart</h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={clearCart}
              className="text-[#0B143A] font-bold text-sm hover:text-red-600 transition-colors"
            >
              Clear cart
            </button>
            <button
              onClick={() => setIsCartOpen(false)}
              aria-label="Close cart"
              className="bg-gray-100 p-1.5 rounded-full hover:bg-gray-200 transition-colors"
            >
              <X size={20} className="text-black" />
            </button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-grow overflow-y-auto p-5 pb-48 bg-white">
          {items.length === 0 ? (
            <div className="text-center text-gray-500 py-10">Your cart is empty</div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.cartItemId} className="flex flex-col space-y-3">
                  <div className="flex space-x-4">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-gray-50 border border-gray-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="64px"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-extrabold text-black text-sm">{item.name}</h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, -1)}
                        aria-label="Decrease quantity"
                        className="w-8 h-8 rounded-full bg-[#e23b49] text-white flex items-center justify-center hover:bg-[#c8313e] transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <div className="w-12 h-8 flex items-center justify-center border border-gray-200 rounded-lg font-bold text-sm">
                        {item.quantity}
                      </div>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, 1)}
                        aria-label="Increase quantity"
                        className="w-8 h-8 rounded-full bg-[#e23b49] text-white flex items-center justify-center hover:bg-[#c8313e] transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="font-extrabold text-black">
                        Rs. {(item.price * item.quantity).toFixed(2)}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        aria-label={`Remove ${item.name} from cart`}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-5 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
          <div className="space-y-2 mb-4 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>Rs. {totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery Charges</span>
              <span>Rs. 0.00</span>
            </div>
          </div>
          <div className="flex justify-between font-extrabold text-black text-lg mb-4">
            <span>Grand total</span>
            <span>Rs. {totalPrice.toFixed(2)}</span>
          </div>
          <Link
            href="/checkout"
            onClick={() => setIsCartOpen(false)}
            className="w-full bg-[#e23b49] hover:bg-[#c8313e] text-white font-bold py-3.5 rounded-xl transition-colors block text-center"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
