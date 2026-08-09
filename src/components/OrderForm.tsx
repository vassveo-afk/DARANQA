import React, { useState } from 'react';
import { Truck, HandCoins, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

export function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    address: '',
    offer: '1 قطعة — 279 DH',
    size: '160/200',
    color: 'MAUVE',
    color2: 'MAUVE',
    color3: 'MAUVE'
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [phoneError, setPhoneError] = useState('');

  const validatePhone = (phone: string) => {
    const cleaned = phone.replace(/\s+/g, '');
    return /^(?:(?:\+|00)212|0)[67]\d{8}$/.test(cleaned);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validatePhone(formData.phone)) {
      setPhoneError('المرجو إدخال رقم هاتف مغربي صحيح (مثال: 0612345678)');
      return;
    }
    setPhoneError('');
    setStatus('loading');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      await fetch("https://script.google.com/macros/s/AKfycbyTGaiVmoHw6MRUkbaFuf9wLjYnNcSNEGhH_dVpqZvFgGDWs7doXOVE0a0vHRDNTHxq/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formBody.toString()
      });
      
      setStatus('success');
      
      const offerValue = formData.offer.includes('279') ? 279 : formData.offer.includes('479') ? 479 : 699;
      window.location.href = `/thank-you.html?value=${offerValue}`;
      
    } catch (error) {
      console.error('Order submission error:', error);
      setStatus('error');
    }
  };

  const handleReturn = () => {
    setStatus('idle');
    setFormData({
      name: '',
      phone: '',
      city: '',
      address: '',
      offer: '1 قطعة — 279 DH',
      size: '160/200',
      color: 'MAUVE',
      color2: 'MAUVE',
      color3: 'MAUVE'
    });
  };

  if (status === 'success') {
    return (
      <section className="py-16 lg:py-24 bg-gray-50/50" id="order">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-[2rem] p-8 md:p-16 text-center shadow-lg border border-gray-100">
            <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-bold text-text-main mb-4">شكراً ليك!</h2>
            <p className="text-xl text-text-muted mb-8 leading-relaxed">
              توصلنا بالطلب ديالك بنجاح.<br/>
              غادي نتاصلوا بيك قريباً باش نأكدو معاك المعلومات والتوصيل.
            </p>
            <button 
              onClick={handleReturn}
              className="bg-gray-100 hover:bg-gray-200 text-text-main font-bold py-3 px-8 rounded-xl transition-colors"
            >
              رجع للصفحة
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-gray-50/50" id="order">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden">
          
          <div className="bg-primary p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">دير طلبك دابا</h2>
            <p className="text-white/80 text-lg">عمر المعلومات ديالك وغادي نتاصلوا بيك باش نأكدو الطلب.</p>
          </div>
          
          <div className="p-8 md:p-12">
            
            {status === 'error' && (
              <div className="mb-8 p-4 bg-red-50 text-red-600 rounded-xl flex items-start gap-3 border border-red-100">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <p>وقع مشكل فإرسال الطلب. حاول مرة أخرى.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-text-main mb-2">الاسم الكامل *</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                  placeholder="الاسم ديالك"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-text-main mb-2">رقم الهاتف *</label>
                <input 
                  type="tel" 
                  id="phone"
                  required
                  dir="ltr"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({...formData, phone: e.target.value});
                    if (phoneError) setPhoneError('');
                  }}
                  className={`w-full px-4 py-4 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-right ${phoneError ? 'border-red-300 focus:ring-red-500' : 'border-gray-200'}`}
                  placeholder="06 XX XX XX XX"
                />
                {phoneError && <p className="text-red-500 text-sm mt-2">{phoneError}</p>}
              </div>
              
              <div>
                <label htmlFor="city" className="block text-sm font-bold text-text-main mb-2">المدينة *</label>
                <input 
                  type="text" 
                  id="city"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                  placeholder="المدينة فين ساكن"
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-bold text-text-main mb-2">العنوان الكامل *</label>
                <input 
                  type="text" 
                  id="address"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                  placeholder="عنوان التوصيل"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="size-select" className="block text-sm font-bold text-text-main mb-2">القياس *</label>
                  <div className="relative">
                    <select 
                      id="size-select"
                      required
                      value={formData.size}
                      onChange={(e) => setFormData({...formData, size: e.target.value})}
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all appearance-none pr-4 pl-10"
                    >
                      <option value="160/200">160/200</option>
                      <option value="140/200">140/200</option>
                      <option value="ستندار">ستندار</option>
                    </select>
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-text-main mb-2">
                    {formData.offer.includes('2 قطع') || formData.offer.includes('3 قطع') ? 'اللون الأول (للقطعة الأولى) *' : 'اللون *'}
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { name: 'MAUVE', src: 'https://i.ibb.co/vvQmDZ7H/Chat-GPT-Image-3-ao-t-2026-00-18-57.png', label: 'موف' },
                      { name: 'TAUPE', src: 'https://i.ibb.co/TqhxhBtx/Chat-GPT-Image-3-ao-t-2026-00-18-50.png', label: 'طوب' },
                      { name: 'IVOIRE', src: 'https://i.ibb.co/bMXWZ622/Chat-GPT-Image-2-ao-t-2026-23-05-13.png', label: 'إيفوار' }
                    ].map((colorOption) => (
                      <button
                        key={colorOption.name}
                        type="button"
                        onClick={() => setFormData({...formData, color: colorOption.name})}
                        className={`relative rounded-xl overflow-hidden border-2 transition-all ${
                          formData.color === colorOption.name ? 'border-primary shadow-md' : 'border-gray-200 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <div className="aspect-square w-full">
                          <img src={colorOption.src} alt={colorOption.label} className="w-full h-full object-cover" width={100} height={100} loading="lazy" decoding="async" />
                        </div>
                        <div className={`text-xs text-center py-1.5 font-bold ${formData.color === colorOption.name ? 'bg-primary text-white' : 'bg-gray-50 text-text-main'}`}>
                          {colorOption.label}
                        </div>
                        {formData.color === colorOption.name && (
                          <div className="absolute top-1.5 right-1.5 bg-white rounded-full">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {(formData.offer.includes('2 قطع') || formData.offer.includes('3 قطع')) && (
                <div>
                  <label className="block text-sm font-bold text-text-main mb-2">اللون الثاني (للقطعة الثانية) *</label>
                  <div className="grid grid-cols-3 gap-3 md:w-1/2 md:ml-auto">
                    {[
                      { name: 'MAUVE', src: 'https://i.ibb.co/vvQmDZ7H/Chat-GPT-Image-3-ao-t-2026-00-18-57.png', label: 'موف' },
                      { name: 'TAUPE', src: 'https://i.ibb.co/TqhxhBtx/Chat-GPT-Image-3-ao-t-2026-00-18-50.png', label: 'طوب' },
                      { name: 'IVOIRE', src: 'https://i.ibb.co/bMXWZ622/Chat-GPT-Image-2-ao-t-2026-23-05-13.png', label: 'إيفوار' }
                    ].map((colorOption) => (
                      <button
                        key={colorOption.name}
                        type="button"
                        onClick={() => setFormData({...formData, color2: colorOption.name})}
                        className={`relative rounded-xl overflow-hidden border-2 transition-all ${
                          formData.color2 === colorOption.name ? 'border-primary shadow-md' : 'border-gray-200 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <div className="aspect-square w-full">
                          <img src={colorOption.src} alt={colorOption.label} className="w-full h-full object-cover" width={100} height={100} loading="lazy" decoding="async" />
                        </div>
                        <div className={`text-xs text-center py-1.5 font-bold ${formData.color2 === colorOption.name ? 'bg-primary text-white' : 'bg-gray-50 text-text-main'}`}>
                          {colorOption.label}
                        </div>
                        {formData.color2 === colorOption.name && (
                          <div className="absolute top-1.5 right-1.5 bg-white rounded-full">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {formData.offer.includes('3 قطع') && (
                <div>
                  <label className="block text-sm font-bold text-text-main mb-2">اللون الثالث (للقطعة الثالثة) *</label>
                  <div className="grid grid-cols-3 gap-3 md:w-1/2 md:ml-auto">
                    {[
                      { name: 'MAUVE', src: 'https://i.ibb.co/vvQmDZ7H/Chat-GPT-Image-3-ao-t-2026-00-18-57.png', label: 'موف' },
                      { name: 'TAUPE', src: 'https://i.ibb.co/TqhxhBtx/Chat-GPT-Image-3-ao-t-2026-00-18-50.png', label: 'طوب' },
                      { name: 'IVOIRE', src: 'https://i.ibb.co/bMXWZ622/Chat-GPT-Image-2-ao-t-2026-23-05-13.png', label: 'إيفوار' }
                    ].map((colorOption) => (
                      <button
                        key={colorOption.name}
                        type="button"
                        onClick={() => setFormData({...formData, color3: colorOption.name})}
                        className={`relative rounded-xl overflow-hidden border-2 transition-all ${
                          formData.color3 === colorOption.name ? 'border-primary shadow-md' : 'border-gray-200 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <div className="aspect-square w-full">
                          <img src={colorOption.src} alt={colorOption.label} className="w-full h-full object-cover" width={100} height={100} loading="lazy" decoding="async" />
                        </div>
                        <div className={`text-xs text-center py-1.5 font-bold ${formData.color3 === colorOption.name ? 'bg-primary text-white' : 'bg-gray-50 text-text-main'}`}>
                          {colorOption.label}
                        </div>
                        {formData.color3 === colorOption.name && (
                          <div className="absolute top-1.5 right-1.5 bg-white rounded-full">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div>
                <label htmlFor="offer-select" className="block text-sm font-bold text-text-main mb-2">اختار العرض *</label>
                <div className="relative">
                  <select 
                    id="offer-select"
                    required
                    value={formData.offer}
                    onChange={(e) => setFormData({...formData, offer: e.target.value})}
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all appearance-none pr-4 pl-10"
                  >
                    <option value="1 قطعة — 279 DH">1 قطعة — 279 DH</option>
                    <option value="2 قطع — 479 DH">2 قطع — 479 DH (الأكثر طلباً)</option>
                    <option value="3 قطع — 699 DH">3 قطع — 699 DH (أفضل قيمة)</option>
                  </select>
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-primary hover:bg-primary-dark disabled:bg-primary/70 text-white font-bold text-xl py-5 px-6 rounded-xl transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      جاري الإرسال...
                    </>
                  ) : (
                    'تأكيد الطلب'
                  )}
                </button>
              </div>
              
              <div className="flex flex-row justify-center items-center gap-6 pt-6 border-t border-gray-100 text-sm font-bold text-text-muted">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-primary" />
                  <span>التوصيل مجاني</span>
                </div>
                <div className="flex items-center gap-2">
                  <HandCoins className="w-5 h-5 text-primary" />
                  <span>الدفع عند الاستلام</span>
                </div>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
