import { Star } from 'lucide-react';

export function Reviews() {
  const reviews = [
    {
      name: "تقييم عميل",
      content: "تجربة ممتازة، المنتج جا كيفما كنت متوقع. الألوان زوينين وكيبدلو المنظر ديال الغرفة.",
    },
    {
      name: "تقييم عميل",
      content: "توصيل سريع والتعامل مزيان. الثوب عجبني صراحة.",
    },
    {
      name: "تقييم عميل",
      content: "خديت العرض ديال 2 قطع، صراحة يستاهلو الثمن. بيت النعاس ولى كيبان أحسن.",
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-main">شنو كايقولو الكليان ديالنا؟</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-text-muted mb-6 leading-relaxed italic">"{review.content}"</p>
              <div className="font-bold text-text-main flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm text-gray-500">
                  {review.name.charAt(0)}
                </div>
                <span>{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
