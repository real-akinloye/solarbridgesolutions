import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-solar.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Power Your Home or Business{" "}
            <span className="text-accent">with Reliable Solar Energy</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
            Affordable, sustainable solar solutions made for Nigeria
          </p>
          <a
            href="https://api.whatsapp.com/send/?text=Hi%20Felicity%20Solar,%20I%20need%20a%20free%20quote&phone=2348171479561"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
              Get a Free Quote
            </Button>
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
