import { Navbar } from "@/components/NavbarClean";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ServicesPreview } from "@/components/ServicesPreview";
import { Products } from "@/components/Products";
import { ProjectsPreview } from "@/components/ProjectsPreview";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ServicesPreview />
      <Products />
      <ProjectsPreview />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
