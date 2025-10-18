import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/solar-installation.jpg";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">About us</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                SOLAR BRIDGE SOLUTIONS
              </h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                At Solar Bridge Solution Limited, we are more than just a solar energy company, we are energy explorers, forging new frontiers in sustainable power across Africa. Founded with a daring vision to transform how energy is accessed, consumed, and shared, Solar Bridge is on a bold mission to light up homes, businesses, and communities using the limitless power of the sun.
              </p>
              <p>
                Every project we embark on is an adventure into a cleaner, smarter future. From rooftop systems in remote villages to industrial grade installations in urban centers, we bridge the gap between today's energy challenges and tomorrow's solutions.
              </p>
              <p className="font-semibold text-foreground">
                <strong>Our Mission:</strong> To free Nigerian businesses from fuel dependency.
              </p>
              <p className="font-semibold text-foreground">
                <strong>Our Vision:</strong> A Nigeria where every business is powered by safe, sustainable energy.
              </p>
              <p className="font-semibold text-foreground">
                <strong>Our Core Values:</strong> Innovation • Reliability • Safety • Affordability • Sustainability
              </p>
            </div>

            <Button variant="hero" size="lg">
              Read more
            </Button>
          </div>

          <div className="relative hover-scale">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={aboutImage} 
                alt="Professional technician installing solar panels"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
