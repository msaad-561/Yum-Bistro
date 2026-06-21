import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-white/10 backdrop-blur-xl border-t border-white/20 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] pt-20 pb-16 font-sans">
      <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Logo */}
        <div className="mb-10">
          <Image
            src="/images/logo/Yum Birsto Posts.png"
            alt="Yum Bistro"
            width={0}
            height={0}
            sizes="250px"
            className="h-24 w-auto mx-auto"
          />
        </div>
        
        {/* Copyright */}
        <div className="text-gray-600 font-bold text-sm mb-6 drop-shadow-sm">
          © 2026 Yum Bistro Pakistan. All rights reserved.
        </div>
        
        {/* Social Link */}
        <div className="mb-12">
          <a href="https://www.instagram.com/yumbistropk/" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-bold text-sm hover:text-black transition-colors drop-shadow-sm">
            Instagram
          </a>
        </div>
        
        {/* Divider */}
        <div className="w-full max-w-2xl border-t border-black/10 mb-10"></div>
        
        {/* Powered By */}
        <div className="text-gray-600 font-bold text-xs tracking-[0.15em] uppercase flex items-center drop-shadow-sm">
          POWERED BY 
          <a href="https://www.instagram.com/alphabusinesses.cc" target="_blank" rel="noopener noreferrer" className="text-red-600 border-b border-red-600 pb-0.5 ml-2 hover:text-red-500 hover:border-red-500 transition-colors drop-shadow-sm">ALPHA BUSINESSES</a>
        </div>
      </div>
    </footer>
  );
}
