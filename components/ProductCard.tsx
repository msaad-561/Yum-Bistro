'use client';

import { useState, lazy, Suspense } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';

// Lazy-load the heavy ProductModal — it is never needed until the user clicks
// "Add To Cart", so there's no reason to include it in the initial JS bundle.
const ProductModal = lazy(() =>
  import('./ProductModal').then((mod) => ({ default: mod.ProductModal }))
);

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export function ProductCard({ id, name, description, price, image }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full shadow-sm border border-gray-100">
        <div className="relative aspect-square w-full sm:aspect-[4/3] bg-gray-50">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            // Product images are below-the-fold — lazy load to improve LCP
            loading="lazy"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            referrerPolicy="no-referrer"
          />
          <button
            aria-label={`Add ${name} to favourites`}
            className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors shadow-sm"
          >
            <Heart size={20} className="text-gray-700" />
          </button>
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-sans font-bold text-xl text-black mb-2">{name}</h3>
          <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed flex-grow font-sans">
            {description}
          </p>

          <div className="mt-auto flex flex-col">
            <div className="font-sans font-extrabold text-lg text-black mb-4">
              from Rs. {price.toFixed(2)}
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-[#e23b49] hover:bg-[#c8313e] text-white font-sans font-bold text-lg py-3 rounded-xl transition-colors"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      {/* Only render (and load) the modal after the user opens it */}
      {isModalOpen && (
        <Suspense fallback={null}>
          <ProductModal
            product={{ id, name, description, price, image }}
            onClose={() => setIsModalOpen(false)}
          />
        </Suspense>
      )}
    </>
  );
}
