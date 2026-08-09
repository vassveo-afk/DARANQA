import { Sparkles, Sun, Maximize, Palette, Gift, Wallet } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: 'تصميم أنيق',
      description: 'نقوش راقية كتعطي لمسة جميلة لبيت النعاس.',
    },
    {
      icon: <Sun className="w-8 h-8 text-primary" />,
      title: 'مريح للاستعمال اليومي',
      description: 'مناسب للاستعمال اليومي فالدار.',
    },
    {
      icon: <Maximize className="w-8 h-8 text-primary" />,
      title: 'كيبدل شكل الغرفة',
      description: 'طريقة سهلة باش تعطي لبيت النعاس ديالك جو جديد.',
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: 'ألوان ونقوش راقية',
      description: 'تصميم ساهل ينسجم مع ديكور الغرفة.',
    },
    {
      icon: <Gift className="w-8 h-8 text-primary" />,
      title: 'اختيار مناسب للدار',
      description: 'مناسب للاستعمال الشخصي أو كهدية.',
    },
    {
      icon: <Wallet className="w-8 h-8 text-primary" />,
      title: 'ثمن مناسب',
      description: 'اختيارات متعددة باش تختار العرض اللي مناسب ليك.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main">
            علاش غادي يعجبك هاد الطقم؟
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="bg-accent/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">{benefit.title}</h3>
              <p className="text-text-muted leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
