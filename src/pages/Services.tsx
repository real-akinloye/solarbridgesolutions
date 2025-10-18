import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Building2, Home, Factory, CheckCircle } from "lucide-react";
import servicesVideo from "@/assets/services-video.mp4";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Solar",
      description: "Complete solar solutions for homes, from design to installation and maintenance",
      features: ["Custom system design", "Professional installation", "Energy monitoring", "25-year warranty"]
    },
    {
      icon: Building2,
      title: "Commercial Solar",
      description: "Large-scale solar systems for offices, malls, and commercial buildings",
      features: ["High-capacity systems", "ROI analysis", "Grid-tied options", "Maintenance packages"]
    },
    {
      icon: Factory,
      title: "Industrial Solar",
      description: "Heavy-duty solar installations for factories and industrial facilities",
      features: ["Custom engineering", "Load assessment", "Hybrid solutions", "24/7 support"]
    },
    {
      icon: Wrench,
      title: "Maintenance & Repair",
      description: "Expert servicing and repairs for all solar system components",
      features: ["Regular maintenance", "Emergency repairs", "Component replacement", "System upgrades"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Full Page Video Background */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={servicesVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary/40" />
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our <span className="text-accent">Services</span>
              </h1>
              <p className="text-xl text-white/90">
                Comprehensive solar solutions tailored to your needs
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover-scale">
                  <CardHeader>
                    <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

        {/* Process Section */}
        <section className="py-20 bg-secondary/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Installation Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple, transparent, and professional
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Free site assessment and energy audit" },
              { step: "02", title: "Design", description: "Custom system design and proposal" },
              { step: "03", title: "Installation", description: "Professional installation by certified team" },
              { step: "04", title: "Support", description: "Ongoing maintenance and monitoring" }
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-5xl font-bold text-accent mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Services;
