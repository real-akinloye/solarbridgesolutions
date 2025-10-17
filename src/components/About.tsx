import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-solar.jpg";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">About us</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                FELICITY SOLAR NIG LTD
              </h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Established in 2016 and headquartered in Festac, Lagos, Felicity Solar Nigeria has grown to become one of the most recognized and trusted solar energy brands in the country.
              </p>
              <p>
                With a strong focus on sales and after-sales support, we have built a robust network of over 12 service centers across Nigeria—ensuring fast, efficient, and professional assistance for our customers nationwide.
              </p>
              <p className="font-semibold text-foreground">
                Felicity Solar is a forward-thinking company committed to advancing clean energy solutions
              </p>
            </div>

            <Button variant="hero" size="lg">
              Read more
            </Button>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={aboutImage} 
                alt="About Felicity Solar - Professional solar panel installation" 
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
