import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ServicesPreview } from "@/components/ServicesPreview";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { Products } from "@/components/Products";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ServicesPreview />
      <ServicesShowcase />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
