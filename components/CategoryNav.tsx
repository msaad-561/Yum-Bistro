'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { MENU_CATEGORIES } from '../app/data';
import { cn } from '../lib/utils';

interface CategoryNavProps {
  activeCategory: string;
}

export function CategoryNav({ activeCategory }: CategoryNavProps) {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const activeItemRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (activeItemRef.current && scrollContainerRef.current) {
      activeItemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [activeCategory]);

  return (
    <nav 
      ref={scrollContainerRef}
      className="bg-white/80 backdrop-blur-md sticky top-[73px] z-40 w-full overflow-x-auto border-b border-gray-200 hide-scrollbar py-3"
    >
      <ul className="flex items-center gap-3 px-4 md:px-6 min-w-max lg:justify-center">
        {MENU_CATEGORIES.map((category) => (
          <li key={category.id} className="flex-shrink-0">
            <Link
              href={`#${category.id}`}
              ref={activeCategory === category.id ? activeItemRef : null}
              className={cn(
                "block py-2 px-4 font-sans font-bold text-sm uppercase tracking-wide rounded-md transition-colors border whitespace-nowrap",
                activeCategory === category.id 
                  ? "bg-black border-black text-white" 
                  : "bg-transparent border-transparent text-gray-600 hover:text-black"
              )}
            >
              {category.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
