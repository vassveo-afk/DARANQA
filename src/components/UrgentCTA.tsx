import React from 'react';

export function UrgentCTA() {
  const scrollToOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
    if (window.ttq) window.ttq.track('ClickButton');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center bg-accent/10 rounded-[2.5rem] p-8 md:p-16 border border-accent/20">
        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
          جاهز تبدل شكل بيت النعاس ديالك؟
        </h2>
        <p className="text-lg text-text-muted mb-10 max-w-2xl mx-auto">
          اختار العرض ديالك ودير الطلب دابا، وغادي نتاصلوا بيك باش نأكدو معاك المعلومات.
        </p>
        <button 
          onClick={scrollToOrder}
          className="bg-primary hover:bg-primary-dark text-white font-bold text-xl py-4 px-12 rounded-2xl shadow-lg shadow-primary/30 transition-transform hover:-translate-y-1 inline-block"
        >
          اطلب دابا
        </button>
      </div>
    </section>
  );
}
