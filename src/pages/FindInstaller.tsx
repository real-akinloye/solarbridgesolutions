import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const FindInstaller = () => {
  const locations = [
    {
      city: "Lagos",
      address: "Festac Town, Lagos",
      phone: "+234 817 147 9561",
      email: "lagos@solarbridge.ng"
    },
    {
      city: "Abuja",
      address: "Wuse 2, Abuja",
      phone: "+234 817 147 9562",
      email: "abuja@solarbridge.ng"
    },
    {
      city: "Port Harcourt",
      address: "Trans Amadi, Port Harcourt",
      phone: "+234 817 147 9563",
      email: "portharcourt@solarbridge.ng"
    },
    {
      city: "Ibadan",
      address: "Bodija, Ibadan",
      phone: "+234 817 147 9564",
      email: "ibadan@solarbridge.ng"
    },
    {
      city: "Kano",
      address: "Sabon Gari, Kano",
      phone: "+234 817 147 9565",
      email: "kano@solarbridge.ng"
    },
    {
      city: "Enugu",
      address: "Independence Layout, Enugu",
      phone: "+234 817 147 9566",
      email: "enugu@solarbridge.ng"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Find an <span className="text-accent">Installer</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Locate our service centers across Nigeria
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Service Centers
            </h2>
            <p className="text-xl text-muted-foreground">
              12+ locations nationwide for your convenience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <CardTitle className="text-2xl text-accent">{location.city}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{location.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    <a href={`tel:${location.phone}`} className="text-muted-foreground hover:text-accent transition-colors">
                      {location.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    <a href={`mailto:${location.email}`} className="text-muted-foreground hover:text-accent transition-colors">
                      {location.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Need Help Finding the Right Location?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact our customer service team and we'll connect you with the nearest installer
            </p>
            <a
              href="https://api.whatsapp.com/send/?text=Hi%20Solar%20Bridge,%20I%20need%20help%20finding%20an%20installer&phone=2348171479561"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent/90 transition-all hover-scale">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FindInstaller;
