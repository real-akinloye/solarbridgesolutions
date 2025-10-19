import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import solarPanelImage from "@/assets/solar-panel.jpg";
import inverterImage from "@/assets/inverter-new.jpg";
import batteryImage from "@/assets/battery.jpg";

const products = [
  {
    id: 1,
    title: "Solar Panels",
    description: "High-efficiency monocrystalline panels with 25-year warranty",
    image: solarPanelImage,
  },
  {
    id: 2,
    title: "Inverters",
    description: "Advanced hybrid inverters for seamless power conversion",
    image: inverterImage,
  },
  {
    id: 3,
    title: "Batteries",
    description: "Long-lasting lithium and deep-cycle battery storage systems",
    image: batteryImage,
  },
];

export const Products = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider">
            Solar Bridge Products
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What do we Offer to you?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Solar Panels. Batteries. Inverters. All in One Place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border hover-scale fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="p-0">
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img
                    src={product.image}
                    alt={`${product.title} - Professional solar equipment`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-2xl mb-2 text-foreground">{product.title}</CardTitle>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full hover-scale">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
