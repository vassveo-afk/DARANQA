import { ShoppingBag } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-surface/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-6 h-6 text-primary" />
          <span className="font-bold text-xl text-text-main tracking-tight">دار الأناقة</span>
        </div>
        
        <div className="flex items-center gap-4 text-sm font-medium">
          <span className="hidden sm:inline-block text-primary">التوصيل مجاني</span>
          <a 
            href="#order"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full transition-colors"
          >
            اطلب دابا
          </a>
        </div>
      </div>
    </header>
  );
}
