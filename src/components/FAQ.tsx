import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'شنو كاين فهاد الطقم؟',
      a: 'عرض المنتجات والمكونات بشكل واضح حسب المعلومات المؤكدة للمنتج. ما تضيف حتى معلومة غير مؤكدة.'
    },
    {
      q: 'واش التوصيل مجاني؟',
      a: 'نعم، التوصيل مجاني حسب العرض الحالي.'
    },
    {
      q: 'كيفاش كنخلص؟',
      a: 'كتخلص عند الاستلام، وما كاين حتى أداء مسبق.'
    },
    {
      q: 'فين كتوصلو؟',
      a: 'التوصيل متوفر للمدن والمناطق داخل المغرب حسب مناطق التوصيل المتاحة.'
    },
    {
      q: 'واش نقدر نختار العرض؟',
      a: 'نعم، تقدر تختار بين 1 قطعة، 2 قطع، أو 3 قطع قبل تأكيد الطلب.'
    },
    {
      q: 'كيفاش نأكد الطلب؟',
      a: 'عمر الاسم، رقم الهاتف، المدينة والعنوان، واختار العرض، ومن بعد غادي نتاصلوا بيك لتأكيد الطلب.'
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-text-main text-center mb-10">أسئلة شائعة</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-2xl overflow-hidden transition-colors ${openIdx === idx ? 'border-primary bg-gray-50' : 'border-gray-200 bg-white'}`}
            >
              <button
                className="w-full px-6 py-5 text-right flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-bold text-text-main">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <div 
                className={`px-6 pb-5 text-text-muted overflow-hidden transition-all duration-300 ${openIdx === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 pb-0'}`}
              >
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
