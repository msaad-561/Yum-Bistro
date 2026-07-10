import type {Metadata} from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Providers } from '../components/Providers';
import { CartModal } from '../components/CartModal';
import { StickyCart } from '../components/StickyCart';

// font-display: swap is set by default in next/font — ensures text is
// visible during font load instead of invisible (FOIT).
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
});

const poppins = Poppins({
  weight: ['600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: 'Yum Bistro | Restaurant Menu & Online Order – Faisalabad',
    template: '%s | Yum Bistro',
  },
  description:
    "Order from Yum Bistro's full menu: starters, burgers, pizza, pasta, steaks, beverages & desserts. Fast delivery in Faisalabad. Order via WhatsApp or call us!",
  keywords: ['yum bistro', 'restaurant', 'faisalabad', 'food delivery', 'online order', 'burger', 'pizza', 'steak'],
  openGraph: {
    title: 'Yum Bistro – Delicious Food, Fast Delivery',
    description: 'Browse our full menu and order online via WhatsApp. Serving Faisalabad.',
    type: 'website',
    locale: 'en_PK',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        {/* Preconnect to Google Fonts CDN to reduce font load latency */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className="bg-white bg-[url('/site-bg.png')] bg-cover bg-fixed bg-center text-black font-sans antialiased"
        suppressHydrationWarning
      >
        <Providers>
          {children}
          <CartModal />
          <StickyCart />
        </Providers>
      </body>
    </html>
  );
}
