'use client';

import Link from 'next/link';
import { User, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import { useCart } from '../lib/CartContext';

export function Header() {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <header className="bg-white/70 backdrop-blur-lg py-4 px-6 fixed top-0 w-full z-50 flex items-center justify-between border-b border-gray-200">
      {/* Spacer for left side if menu icon was there, or logo directly */}
      <div className="flex items-center space-x-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/Yum Birsto Posts.png"
            alt="Yum Bistro"
            width={0}
            height={0}
            sizes="200px"
            className="h-14 w-auto"
            priority
          />
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors">
          <User size={18} className="text-black" />
        </button>
        <button 
          className="p-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors relative"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingBag size={18} className="text-black" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
