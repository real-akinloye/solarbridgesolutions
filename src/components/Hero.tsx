import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video.mp4";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            <span className="inline-block fade-in-left">Power Your Home or Business{" "}</span>
            <span className="text-accent inline-block fade-in-right animate-pulse" style={{ animationDelay: '0.3s' }}>with Reliable Solar Energy</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 zoom-in" style={{ animationDelay: '0.5s' }}>
            Affordable, sustainable solar solutions made for Nigeria
          </p>
          <a
            href="https://api.whatsapp.com/send/?text=Hi%20Solar%20Bridge,%20I%20need%20a%20free%20quote&phone=2348171479561"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bounce-in"
            style={{ animationDelay: '0.4s' }}
          >
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto hover-scale glow">
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
