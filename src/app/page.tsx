import About from '@/components/home/About';
import Compliance from '@/components/home/Compliance';
import CtaBanner from '@/components/home/CtaBanner';
import Hero from '@/components/home/Hero';
import Industries from '@/components/home/Industries';
import Internship from '@/components/home/Internship';
import Services from '@/components/home/Services';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Internship />
      <WhyChooseUs />
      <Industries />
      <Compliance />
      <CtaBanner />
      <Footer />
    </main>
  );
}
