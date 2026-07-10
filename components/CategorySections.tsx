'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ProductCard } from './ProductCard';
import { CategoryNav } from './CategoryNav';
import { MENU_CATEGORIES, MENU_ITEMS } from '../app/data';

type Category = (typeof MENU_CATEGORIES)[number];
type MenuItem = (typeof MENU_ITEMS)[number];

interface CategorySectionsProps {
  categories: Category[];
  items: MenuItem[];
}

export function CategorySections({ categories, items }: CategorySectionsProps) {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]?.id ?? '');
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const rootMargin = '-150px 0px -50% 0px';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin, threshold: 0.1 }
    );

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <CategoryNav activeCategory={activeCategory} />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {categories.map((category, catIdx) => {
            const categoryItems = items.filter((item) => item.categoryId === category.id);
            if (categoryItems.length === 0) return null;

            return (
              <section
                key={category.id}
                id={category.id}
                ref={(el) => {
                  sectionsRef.current[category.id] = el;
                }}
                className="mb-16 scroll-mt-[160px]"
              >
                <h2 className="font-peace-sans font-bold text-5xl text-black tracking-widest text-center mb-6 uppercase">
                  {category.title}
                </h2>

                {category.banner && (
                  <div className="w-full mb-8 rounded-2xl overflow-hidden shadow-sm">
                    <Image
                      src={category.banner}
                      alt={`${category.title} Banner`}
                      width={0}
                      height={0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1280px"
                      className="w-full h-auto block"
                      // First category banner is above-the-fold — mark as priority.
                      // The rest are lazy-loaded to avoid blocking the initial paint.
                      priority={catIdx === 0}
                      loading={catIdx === 0 ? 'eager' : 'lazy'}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                  {categoryItems.map((item) => (
                    <ProductCard key={item.id} {...item} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </>
  );
}
