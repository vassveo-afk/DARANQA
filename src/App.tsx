import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Lifestyle } from './components/Lifestyle';
import { ProductDetails } from './components/ProductDetails';
import { Offers } from './components/Offers';
import { UrgentCTA } from './components/UrgentCTA';
import { Reviews } from './components/Reviews';
import { Trust } from './components/Trust';
import { OrderForm } from './components/OrderForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

export default function App() {
  useEffect(() => {
    if (window.ttq) {
      window.ttq.track('ViewContent');
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Lifestyle />
        <ProductDetails />
        <Offers />
        <UrgentCTA />
        <Reviews />
        <Trust />
        <OrderForm />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
