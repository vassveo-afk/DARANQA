import { PRODUCT_IMAGES } from '../data';

export function Lifestyle() {
  return (
    <section className="py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-primary-dark rounded-[2.5rem] overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-16 flex flex-col justify-center text-white z-10 relative">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                خلي بيت النعاس ديالك ياخد نفس جديد
              </h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-md">
                بلمسة بسيطة، تقدر تبدل الجو كامل ديال الغرفة وتخليها كتبان أكثر ترتيب وأناقة.
              </p>
              
              <div className="flex">
                <a 
                  href="#order"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white text-primary-dark hover:bg-accent font-bold py-4 px-8 rounded-2xl transition-colors shadow-lg"
                >
                  استافد من العرض
                </a>
              </div>
            </div>
            
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img 
                src={PRODUCT_IMAGES[2]} 
                alt="غرفة نوم مغربية عصرية" 
                className="absolute inset-0 w-full h-full object-cover object-center scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
