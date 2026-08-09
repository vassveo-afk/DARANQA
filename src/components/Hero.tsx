import React, { useState, useEffect } from 'react';
import { CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import { PRODUCT_IMAGES } from '../data';

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % PRODUCT_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + PRODUCT_IMAGES.length) % PRODUCT_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % PRODUCT_IMAGES.length);
  };

  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) {
      nextImage(); // Swipe left (in RTL context, could mean prev/next differently, let's just do next)
    }
    if (touchStart - touchEnd < -50) {
      prevImage(); // Swipe right
    }
    setTouchStart(null);
  };

  const scrollToOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
    if (window.ttq) window.ttq.track('ClickButton');
  };

  return (
    <section className="pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="order-2 lg:order-1 flex flex-col space-y-6 lg:pe-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-main leading-tight">
              بدّل شكل بيت النعاس ديالك فثواني
            </h1>
            
            <p className="text-lg sm:text-xl text-text-muted leading-relaxed">
              إلى كنتي باغي تبدل الجو ديال بيت النعاس ديالك بلا مصاريف كبيرة، هاد الطقم غادي يعطيك لمسة أنيقة ومرتبة من أول نظرة.
            </p>
            
            <div className="pt-2 pb-4">
              <div className="inline-block bg-accent/20 text-primary-dark font-bold px-4 py-1.5 rounded-full text-sm mb-4">
                عرض محدود
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-primary">279 DH</span>
              </div>
              <p className="text-sm text-text-muted">التوصيل مجاني والدفع عند الاستلام</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToOrder}
                className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white text-lg font-bold py-4 px-8 rounded-2xl shadow-lg shadow-primary/30 transition-all hover:-translate-y-1"
              >
                بغيت نطلب دابا
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 text-sm font-medium text-text-muted">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>التوصيل مجاني</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>الدفع عند الاستلام</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>تأكيد الطلب عبر الهاتف</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-accent/20 rounded-[2rem] transform rotate-3 scale-105 -z-10"></div>
            <div 
              className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white border border-gray-100 group"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-500 ease-out h-full"
                style={{ transform: `translateX(${currentImageIndex * 100}%)` }}
              >
                {PRODUCT_IMAGES.map((src, idx) => (
                  <img 
                    key={idx}
                    src={src} 
                    alt={`طقم مفارش سرير Soft Estampado - صورة ${idx + 1}`} 
                    className="w-full h-auto object-cover aspect-[4/3] lg:aspect-square shrink-0"
                    width={800}
                    height={800}
                    loading={idx === 0 ? "eager" : "lazy"}
                    fetchPriority={idx === 0 ? "high" : "auto"}
                    decoding={idx === 0 ? "sync" : "async"}
                  />
                ))}
              </div>
              
              {/* Controls */}
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary shadow-md opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary shadow-md opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {PRODUCT_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      currentImageIndex === idx ? 'bg-primary' : 'bg-white/60 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
