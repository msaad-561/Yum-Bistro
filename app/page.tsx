// Server Component — no 'use client' needed here.
// Interactive features (category tracking, cart) live in child Client Components.
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { CategorySections } from '../components/CategorySections';
import { MENU_CATEGORIES, MENU_ITEMS } from '../app/data';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      {/* CategorySections owns the IntersectionObserver + activeCategory state
          so we can keep this outer shell as a Server Component */}
      <CategorySections categories={MENU_CATEGORIES} items={MENU_ITEMS} />
      <Footer />
    </div>
  );
}
