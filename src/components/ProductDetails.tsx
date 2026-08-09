import { Check } from 'lucide-react';
import { PRODUCT_IMAGES } from '../data';

export function ProductDetails() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-full md:w-1/2">
            <div className="rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 bg-gray-50">
              <img 
                src={PRODUCT_IMAGES[1]} 
                alt="طقم مفارش سرير Soft Estampado" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-text-main mb-6">طقم مفارش سرير Soft Estampado</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-lg mb-4 text-text-main">العروض المتوفرة:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between">
                    <span className="text-text-muted">1 قطعة</span>
                    <span className="font-bold text-primary">279 DH</span>
                  </li>
                  <li className="flex items-center justify-between border-t border-gray-200 pt-3">
                    <span className="text-text-muted">2 قطع</span>
                    <span className="font-bold text-primary">479 DH</span>
                  </li>
                  <li className="flex items-center justify-between border-t border-gray-200 pt-3">
                    <span className="text-text-muted">3 قطع</span>
                    <span className="font-bold text-primary">699 DH</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-accent/20 p-1 rounded-full mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="block font-bold text-text-main">التوصيل:</span>
                    <span className="text-text-muted">مجاني</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-accent/20 p-1 rounded-full mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="block font-bold text-text-main">طريقة الدفع:</span>
                    <span className="text-text-muted">الدفع عند الاستلام</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
