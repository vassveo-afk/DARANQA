export function Footer() {
  return (
    <footer className="bg-text-main text-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-right">
          
          <div>
            <h3 className="font-bold text-xl mb-4 text-accent">دار الأناقة</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              متجركم الموثوق لكل ما يخص ترتيب وأناقة غرف النوم فالمغرب. جودة، أناقة، وتوصيل حتى لباب الدار.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">معلومات تهمك</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>الدفع عند الاستلام</li>
              <li>التوصيل داخل المغرب</li>
              <li>خدمة الزبناء</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>Copyright © 2026. All rights reserved.</p>
          <div className="mt-4 md:mt-0 font-medium">صمم خصيصاً للمغرب 🇲🇦</div>
        </div>
      </div>
    </footer>
  );
}
