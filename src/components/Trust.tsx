import { Truck, HandCoins, PhoneCall, HeadphonesIcon } from 'lucide-react';

export function Trust() {
  const features = [
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: 'التوصيل مجاني'
    },
    {
      icon: <HandCoins className="w-8 h-8 text-primary" />,
      title: 'الدفع عند الاستلام'
    },
    {
      icon: <PhoneCall className="w-8 h-8 text-primary" />,
      title: 'تأكيد الطلب عبر الهاتف'
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-primary" />,
      title: 'خدمة الزبناء'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-main mb-4">علاش تطلب من عندنا؟</h2>
          <p className="text-text-muted max-w-lg mx-auto">
            ما كاين حتى أداء مسبق. كتأكد الطلب ديالك وكتخلص ملي يوصلك.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl">
              <div className="bg-white w-16 h-16 rounded-full shadow-sm flex items-center justify-center mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="font-bold text-text-main">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
