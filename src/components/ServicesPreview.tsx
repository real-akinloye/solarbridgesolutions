import { Card, CardContent } from "@/components/ui/card";
import { Home, Building2, Factory, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Residential Solar",
    description: "Complete solar solutions for homes, reducing electricity bills and providing reliable power."
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    description: "Scalable solar systems for businesses, offices, and commercial properties."
  },
  {
    icon: Factory,
    title: "Industrial Solar",
    description: "High-capacity solar installations for factories and industrial facilities."
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Regular maintenance, repairs, and technical support for optimal performance."
  }
];

export const ServicesPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solar energy solutions tailored to meet your specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover-scale bg-card">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent mx-auto rounded-none flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button size="lg" variant="default">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
