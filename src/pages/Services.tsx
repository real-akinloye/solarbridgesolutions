import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Building2, Home, Factory, CheckCircle, Lightbulb, Users, Droplets, Shield, DollarSign, Award } from "lucide-react";
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

        {/* Solar Solutions Section */}
        <section className="py-20 bg-background/95 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Solar Solutions Include:
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* For Homes */}
              <Card className="hover-scale fade-in-up">
                <CardHeader className="bg-accent/10">
                  <CardTitle className="text-2xl text-center">For Homes</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Basic lighting and fan systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Full home power (TVs, fridges, ACs, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Battery backup for night use</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* For Businesses & Offices */}
              <Card className="hover-scale fade-in-up" style={{ animationDelay: '0.1s' }}>
                <CardHeader className="bg-accent/10">
                  <CardTitle className="text-2xl text-center">For Businesses & Offices</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Solar UPS for computers and printers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Power for shops, clinics, and schools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Solar-powered CCTV and security systems</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* For Communities */}
              <Card className="hover-scale fade-in-up" style={{ animationDelay: '0.2s' }}>
                <CardHeader className="bg-accent/10">
                  <CardTitle className="text-2xl text-center">For Communities</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Street lighting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Solar borehole (LED poles)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Solar water pumps for clean water</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Off-grid village electrification</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Offer Section */}
        <section className="py-20 bg-secondary/95 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="mb-12 fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our <span className="text-accent">Offer</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl">
                At SolarBridge, we don't just install solar, we deliver complete energy freedom for your business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover-scale fade-in-up">
                <CardContent className="pt-6">
                  <Lightbulb className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">Free Energy Audit:</h3>
                  <p className="text-muted-foreground">
                    We'll assess your power usage and show you how much you can save.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale fade-in-up" style={{ animationDelay: '0.1s' }}>
                <CardContent className="pt-6">
                  <Building2 className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">Custom System Design:</h3>
                  <p className="text-muted-foreground">
                    Solutions built specifically for your business needs—not one-size-fits-all.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale fade-in-up" style={{ animationDelay: '0.2s' }}>
                <CardContent className="pt-6">
                  <Award className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">Professional Installation:</h3>
                  <p className="text-muted-foreground">
                    Certified engineers ensure safety, durability, and maximum output.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale fade-in-up" style={{ animationDelay: '0.3s' }}>
                <CardContent className="pt-6">
                  <Wrench className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">After-Sales Support:</h3>
                  <p className="text-muted-foreground">
                    Ongoing monitoring, maintenance, and technical support.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale fade-in-up" style={{ animationDelay: '0.4s' }}>
                <CardContent className="pt-6">
                  <DollarSign className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">Flexible Financing:</h3>
                  <p className="text-muted-foreground">
                    Pay gradually with plans that make solar affordable.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale fade-in-up" style={{ animationDelay: '0.5s' }}>
                <CardContent className="pt-6">
                  <Shield className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">Warranty & Insurance:</h3>
                  <p className="text-muted-foreground">
                    25-year warranty on panels; 5–10 years on batteries.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-accent/10 rounded-lg fade-in-up" style={{ animationDelay: '0.6s' }}>
              <p className="text-lg text-center">
                With SolarBridge, you get more than solar panels, you get a partner committed to your growth and long-term savings.
              </p>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20 bg-background/95 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our <span className="text-accent">Package</span>
              </h2>
            </div>

            <div className="overflow-x-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="border border-border p-4 text-left">Package</th>
                    <th className="border border-border p-4 text-left">Suitable For</th>
                    <th className="border border-border p-4 text-left">System Size</th>
                    <th className="border border-border p-4 text-left">Cost (₦)</th>
                    <th className="border border-border p-4 text-left">5-Year Savings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-accent/5 transition-colors">
                    <td className="border border-border p-4 font-semibold">Small Business</td>
                    <td className="border border-border p-4">Boutiques, barbers, small offices</td>
                    <td className="border border-border p-4">3.5kVA / 5kWh</td>
                    <td className="border border-border p-4">₦3,000,000</td>
                    <td className="border border-border p-4">₦5M - ₦10M</td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-colors">
                    <td className="border border-border p-4 font-semibold">Medium Business</td>
                    <td className="border border-border p-4">Salons, supermarkets, restaurants</td>
                    <td className="border border-border p-4">5kVA / 10kWh</td>
                    <td className="border border-border p-4">₦5,500,000</td>
                    <td className="border border-border p-4">₦15M - ₦20M</td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-colors">
                    <td className="border border-border p-4 font-semibold">Large Business</td>
                    <td className="border border-border p-4">Hotels, schools, factories, big offices</td>
                    <td className="border border-border p-4">10kVA / 20kWh</td>
                    <td className="border border-border p-4">₦11,000,000</td>
                    <td className="border border-border p-4">₦25M - ₦35M</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-accent/10 rounded-lg text-center fade-in-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-lg font-semibold mb-2">
                In just 1-2 years, your solar system pays for itself.
              </p>
              <p className="text-muted-foreground">
                In 5 years, your savings are worth 2–3 times your initial investment.
              </p>
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
