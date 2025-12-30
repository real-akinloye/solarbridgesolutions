import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-solar.jpg";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              About <span className="text-accent">Solar Bridge Solutions</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Your trusted partner in renewable energy solutions across Nigeria
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Leading Solar Energy Provider Since 2016
              </h2>
              <p className="text-lg text-muted-foreground">
                Established in 2016 and headquartered in Festac, Lagos, Solar Bridge Solutions has grown to become one of the most recognized and trusted solar energy brands in Nigeria.
              </p>
              <p className="text-lg text-muted-foreground">
                With a strong focus on sales and after-sales support, we have built a robust network of over 12 service centers across Nigeria—ensuring fast, efficient, and professional assistance for our customers nationwide.
              </p>
              <Button variant="hero" size="lg">
                Get Started
              </Button>
            </div>

            <div className="relative hover-scale">
              <img 
                src={aboutImage} 
                alt="Solar Bridge Solutions - Professional solar installation team" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                To provide affordable, reliable, and sustainable solar energy solutions that empower homes and businesses across Nigeria to achieve energy independence while contributing to a cleaner environment.
              </p>
            </div>
            <div className="space-y-4 animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                To become Nigeria's leading renewable energy company, transforming the nation's energy landscape through innovative solar solutions and exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Solar Bridge?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to excellence in every aspect of our service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Installation",
                description: "Professional installation by certified technicians ensuring optimal performance"
              },
              {
                title: "Quality Products",
                description: "Premium solar panels, inverters, and batteries with industry-leading warranties"
              },
              {
                title: "After-Sales Support",
                description: "12 service centers nationwide providing fast and reliable maintenance"
              },
              {
                title: "Custom Solutions",
                description: "Tailored solar systems designed to meet your specific energy needs"
              },
              {
                title: "Competitive Pricing",
                description: "Affordable solutions with flexible payment options to fit your budget"
              },
              {
                title: "Proven Track Record",
                description: "Years of experience serving thousands of satisfied customers across Nigeria"
              }
            ].map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border hover-scale">
                <CheckCircle2 className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
