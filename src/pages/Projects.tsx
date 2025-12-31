import { Navbar } from "@/components/NavbarClean";
import { Footer } from "@/components/Footer";
import waBattery1 from "@/assets/WhatsApp Image 2025-11-01 at 8.42.57 AM (1).jpeg";
import waBattery3 from "@/assets/WhatsApp Image 2025-11-01 at 8.42.57 AM (3).jpeg";
import battery11 from "@/assets/battery11.jpg";
import proj1 from "@/assets/WhatsApp Image 2025-11-03 at 5.08.28 PM (1).jpeg";
import proj2 from "@/assets/WhatsApp Image 2025-11-03 at 5.08.28 PM (2).jpeg";
import proj3 from "@/assets/WhatsApp Image 2025-11-03 at 5.08.28 PM (3).jpeg";
import proj4 from "@/assets/WhatsApp Image 2025-11-03 at 5.08.28 PM.jpeg";
import proj5 from "@/assets/WhatsApp Image 2025-11-03 at 5.08.29 PM (2).jpeg";
import proj6 from "@/assets/WhatsApp Image 2025-11-03 at 5.08.29 PM (1).jpeg";
import proj7 from "@/assets/WhatsApp Image 2025-11-03 at 5.08.29 PM.jpeg";

const Projects = () => {
  const images = [
    waBattery1,
    waBattery3,
    battery11,
    proj1,
    proj2,
    proj3,
    proj4,
    proj5,
    proj6,
    proj7,
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-10 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Projects <span className="text-accent">Completed</span>
            </h1>
            <p className="text-primary-foreground/90">A snapshot of our recent installations.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-xl bg-secondary hover-scale">
                <img src={src} alt={`Completed project ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;


