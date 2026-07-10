'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, User, Phone, MapPin, MessageSquare, ShoppingCart } from 'lucide-react';
import { useCart } from '../../lib/CartContext';

export default function CheckoutPage() {
  const { items, totalPrice, totalItems, setIsCartOpen } = useCart();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    instructions: ''
  });

  const totalBill = totalPrice;

  const handleWhatsAppOrder = () => {
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill in your Name, Phone Number, and Delivery Address before proceeding.");
      return;
    }

    // Construct WhatsApp message
    let message = `🍽️ YUM BISTRO | Order ━━━━━━━━━━━━━━━\n\n`;
    message += `👤 CUSTOMER DETAILS:\n`;
    message += `- Name: ${formData.name}\n`;
    message += `- Phone: ${formData.phone}\n`;
    message += `- Address: ${formData.address}\n\n`;
    
    if (formData.instructions) {
      message += `- Instructions: ${formData.instructions}\n\n`;
    }

    message += `━━━━━━━━━━━━━━━\n\n`;
    message += `🛍️ ORDER DETAILS:\n`;
    items.forEach(item => {
      const sizeStr = item.size ? ` (${item.size})` : '';
      message += `- ${item.name}${sizeStr} x[${item.quantity}] — PKR ${item.price * item.quantity}\n`;
      if (item.instructions) {
        message += `  Note: ${item.instructions}\n`;
      }
    });

    message += `\n━━━━━━━━━━━━━━━\n\n`;
    message += `✅ TOTAL: PKR ${totalBill.toFixed(0)}\n`;
    message += `\n━━━━━━━━━━━━━━━`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/923353131204?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans pb-20">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-200">
        <Link href="/">
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
        <div className="flex items-center space-x-4">
          <div className="bg-gray-100 text-xs font-bold px-4 py-2 rounded-full flex items-center space-x-2 text-gray-600">
            <MapPin size={12} className="text-red-600" />
            <span>FAISALABAD</span>
          </div>
          <button 
            className="p-2 border border-gray-200 rounded-full hover:bg-gray-100 transition-colors relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart size={18} className="text-red-600" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        <Link href="/" className="flex items-center space-x-2 text-gray-500 hover:text-black transition-colors text-sm font-bold tracking-widest uppercase mb-12">
          <ArrowLeft size={16} />
          <span>Back to Cart</span>
        </Link>

        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="font-heading font-extrabold text-5xl tracking-widest text-black mb-6 uppercase inline-block relative">
            CHECKOUT
            <div className="absolute -bottom-4 left-1/4 right-1/4 h-1 bg-red-600"></div>
          </h1>
          <p className="text-gray-500 text-sm tracking-[0.2em] uppercase font-bold mt-8">
            Input Details Before Checkout
          </p>
        </div>

        {/* Form Details */}
        <div className="mb-12">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-8">
            <h2 className="font-heading font-extrabold text-3xl tracking-wider text-black uppercase">INFO</h2>
            <span className="text-gray-500 text-xs font-bold tracking-widest uppercase">REQUIRED</span>
          </div>

          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-500 text-xs font-bold tracking-wider uppercase mb-2">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User size={18} className="text-red-600" />
                </div>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 text-black rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-red-600 transition-colors placeholder-gray-400"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-500 text-xs font-bold tracking-wider uppercase mb-2">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone size={18} className="text-red-600" />
                </div>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 text-black rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-red-600 transition-colors placeholder-gray-400"
                  placeholder="03XX XXXXXXX"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-500 text-xs font-bold tracking-wider uppercase mb-2">Delivery Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MapPin size={18} className="text-red-600" />
                </div>
                <input 
                  type="text" 
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 text-black rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-red-600 transition-colors placeholder-gray-400"
                  placeholder="Full street address, phase, city"
                />
              </div>
            </div>

            {/* Instructions */}
            <div>
              <label className="block text-gray-500 text-xs font-bold tracking-wider uppercase mb-2">Special Instructions (Optional)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MessageSquare size={18} className="text-red-600" />
                </div>
                <input 
                  type="text" 
                  value={formData.instructions}
                  onChange={(e) => setFormData({...formData, instructions: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 text-black rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-red-600 transition-colors placeholder-gray-400"
                  placeholder="Extra spicy, no salt, leave at gate, etc."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 mb-8">
          <div className="space-y-6 mb-8 border-b border-gray-200 pb-8">
            {items.map(item => (
              <div key={item.cartItemId} className="flex items-center space-x-4">
                <div className="w-16 h-16 relative rounded-xl overflow-hidden shrink-0 border border-gray-200">
                  <Image src={item.image} alt={item.name} fill className="object-cover" loading="lazy" sizes="64px" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-grow flex flex-col justify-center space-y-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-heading font-extrabold tracking-wider text-xl text-black uppercase">{item.name}</h3>
                    <span className="font-bold text-red-600 whitespace-nowrap ml-4">PKR {(item.price * item.quantity).toFixed(0)}</span>
                  </div>
                  <div className="text-xs text-gray-600 font-bold bg-gray-200 self-start px-2 py-1 rounded">
                    QTY: {item.quantity} UNITS
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4 mb-8 border-b border-gray-200 pb-8">
            <div className="flex justify-between text-sm font-bold tracking-wider text-gray-500">
              <span>ORDER AMOUNT</span>
              <span className="text-black">PKR {totalPrice.toFixed(0)}</span>
            </div>
            <div className="flex justify-between text-sm font-bold tracking-wider text-gray-500">
              <span>SHIPPING</span>
              <span className="text-red-600 font-extrabold text-[10px]">CALCULATED AT DISPATCH</span>
            </div>
          </div>

          <div className="flex items-end justify-between">
            <span className="font-heading font-extrabold text-3xl tracking-widest text-black">TOTAL BILL</span>
            <span className="font-heading font-extrabold text-5xl tracking-widest text-red-600">PKR {totalBill.toFixed(0)}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3 mb-12">
          <button 
            onClick={handleWhatsAppOrder}
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading font-bold text-base tracking-wider py-3.5 rounded-xl transition-colors flex items-center justify-center space-x-2 uppercase shadow-sm"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.011 0C5.385 0 0 5.385 0 12.011c0 2.115.553 4.148 1.583 5.952L.15 23.197l5.358-1.405A11.966 11.966 0 0 0 12.01 24c6.626 0 12.011-5.385 12.011-12.011S18.636 0 12.011 0zm0 22.023c-1.802 0-3.567-.482-5.115-1.401l-.367-.217-3.799.996 1.01-3.702-.238-.378a10.024 10.024 0 0 1-1.527-5.334c0-5.54 4.509-10.048 10.036-10.048 5.54 0 10.048 4.509 10.048 10.048 0 5.54-4.508 10.048-10.048 10.048zm5.542-7.531c-.304-.152-1.794-.886-2.072-.988-.278-.102-.482-.152-.684.152-.203.304-.786.988-.962 1.191-.177.203-.355.228-.659.076-1.464-.73-2.529-1.397-3.486-2.736-.254-.356.126-.33.722-1.523.076-.152.038-.28-.018-.432-.056-.152-.684-1.648-.938-2.256-.247-.594-.498-.514-.684-.524-.178-.009-.381-.01-.584-.01a1.118 1.118 0 0 0-.81.381c-.279.304-1.064 1.04-1.064 2.535 0 1.494 1.089 2.937 1.241 3.14.152.203 2.144 3.27 5.19 4.536 2.052.853 2.76.903 3.666.76.621-.098 1.794-.733 2.047-1.444.253-.711.253-1.318.177-1.444-.076-.127-.278-.203-.582-.355z"/>
            </svg>
            <span>Order via WhatsApp</span>
          </button>
          
          <a href="tel:03353131204" className="w-full bg-red-600 hover:bg-red-700 text-white font-heading font-bold text-base tracking-wider py-3.5 rounded-xl transition-colors flex items-center justify-center space-x-2 uppercase shadow-sm">
            <Phone size={20} className="fill-current" />
            <span>Call: 03353131204</span>
          </a>
        </div>

        <p className="text-center text-gray-500 text-[10px] tracking-widest uppercase font-bold leading-relaxed">
          DIRECT CONNECTION TO OUR TEAM. SECURE CHECKOUT.
        </p>

      </main>
    </div>
  );
}
