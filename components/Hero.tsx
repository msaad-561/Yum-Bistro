'use client';

import Image from 'next/image';
import { BANNER_IMAGES } from '../app/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  if (!BANNER_IMAGES || BANNER_IMAGES.length === 0) return null;

  return (
    <div className="relative w-full group pt-[73px]">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide hide-scrollbar w-full bg-white border-b border-gray-100"
      >
        {BANNER_IMAGES.map((img, idx) => (
          <div key={idx} className="w-full shrink-0 snap-center">
            <Image
              src={img}
              alt={`Banner ${idx + 1}`}
              width={0}
              height={0}
              sizes="100vw"
              quality={85}
              className="w-full h-auto block"
              // First banner is the LCP hero — load eagerly with high priority
              priority={idx === 0}
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {BANNER_IMAGES.length > 1 && (
        <>
          <button
            onClick={() => scroll('left')}
            aria-label="Previous banner"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Next banner"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight size={32} />
          </button>
        </>
      )}
    </div>
  );
}
