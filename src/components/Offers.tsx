import React from 'react';
import { Truck } from 'lucide-react';

export function Offers() {
  const scrollToOrder = (e: React.MouseEvent, offerId: string) => {
    e.preventDefault();
    const select = document.getElementById('offer-select') as HTMLSelectElement;
    if (select) {
      select.value = offerId;
      // Dispatch change event so React picks it up if it's controlled (though we might use controlled state differently)
      select.dispatchEvent(new Event('change', { bubbles: true }));
    }
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
    if (window.ttq) window.ttq.track('ClickButton');
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50/50" id="offers">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
            اختار العرض اللي مناسب ليك
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Offer 1 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center relative mt-4 md:mt-8">
            <h3 className="text-2xl font-bold text-text-main mb-2">1 قطعة</h3>
            <div className="text-4xl font-extrabold text-primary mb-6">279 DH</div>
            
            <div className="w-full h-px bg-gray-100 mb-6"></div>
            
            <div className="flex items-center gap-2 text-text-muted mb-8 font-medium">
              <Truck className="w-5 h-5" />
              <span>التوصيل مجاني</span>
            </div>
            
            <button 
              onClick={(e) => scrollToOrder(e, '1')}
              className="mt-auto w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-6 rounded-xl transition-colors"
            >
              نطلب قطعة وحدة
            </button>
          </div>
          
          {/* Offer 2 - Best Seller */}
          <div className="bg-white rounded-3xl p-8 border-2 border-primary shadow-xl flex flex-col items-center text-center relative transform md:-translate-y-4 z-10">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white font-bold px-6 py-2 rounded-full text-sm shadow-md whitespace-nowrap">
              الأكثر طلباً
            </div>
            
            <h3 className="text-2xl font-bold text-text-main mb-2 mt-4">2 قطع</h3>
            <div className="text-4xl font-extrabold text-primary mb-2">479 DH</div>
            <div className="text-sm text-text-muted mb-6">الثمن لكل قطعة: 239.5 DH</div>
            
            <div className="w-full h-px bg-gray-100 mb-6"></div>
            
            <div className="flex items-center gap-2 text-text-main mb-8 font-bold">
              <Truck className="w-5 h-5 text-primary" />
              <span>التوصيل مجاني</span>
            </div>
            
            <button 
              onClick={(e) => scrollToOrder(e, '2')}
              className="mt-auto w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-lg shadow-primary/30"
            >
              نختار العرض الأكثر طلباً
            </button>
          </div>
          
          {/* Offer 3 - Best Value */}
          <div className="bg-white rounded-3xl p-8 border border-accent shadow-md flex flex-col items-center text-center relative mt-4 md:mt-8">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary-dark font-bold px-4 py-1 rounded-full text-xs whitespace-nowrap">
              أفضل قيمة
            </div>
            
            <h3 className="text-2xl font-bold text-text-main mb-2 mt-2">3 قطع</h3>
            <div className="text-4xl font-extrabold text-primary mb-2">699 DH</div>
            <div className="text-sm text-text-muted mb-6">الثمن لكل قطعة: 233 DH</div>
            
            <div className="w-full h-px bg-gray-100 mb-6"></div>
            
            <div className="flex items-center gap-2 text-text-muted mb-8 font-medium">
              <Truck className="w-5 h-5" />
              <span>التوصيل مجاني</span>
            </div>
            
            <button 
              onClick={(e) => scrollToOrder(e, '3')}
              className="mt-auto w-full border-2 border-accent text-primary-dark hover:bg-accent font-bold py-3 px-6 rounded-xl transition-colors"
            >
              نختار أفضل قيمة
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
