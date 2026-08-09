import React, { useEffect, useState } from 'react';

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past hero
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      // Hide if near the bottom to avoid covering the footer/order form
      const orderForm = document.getElementById('order');
      if (orderForm) {
        const rect = orderForm.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
    if (window.ttq) window.ttq.track('ClickButton');
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] md:hidden z-50 animate-in slide-in-from-bottom-full duration-300">
      <button 
        onClick={scrollToOrder}
        className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2"
      >
        <span>اطلب دابا</span>
        <span className="font-normal opacity-70 px-1">—</span>
        <span>ابتداءً من 279 DH</span>
      </button>
    </div>
  );
}
