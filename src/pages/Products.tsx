import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import solarPanelImage from "@/assets/solar-panel.jpg";
import inverterImage from "@/assets/inverter.jpg";
import batteryImage from "@/assets/battery.jpg";

const Products = () => {
  const solarPanels = [
    {
      name: "Monocrystalline 450W",
      power: "450W",
      efficiency: "21.5%",
      warranty: "25 Years",
      image: solarPanelImage
    },
    {
      name: "Monocrystalline 550W",
      power: "550W",
      efficiency: "22.0%",
      warranty: "25 Years",
      image: solarPanelImage
    }
  ];

  const inverters = [
    {
      name: "Hybrid 5.5kVA",
      capacity: "5.5kVA",
      type: "Hybrid",
      warranty: "5 Years",
      image: inverterImage
    },
    {
      name: "Hybrid 10kVA",
      capacity: "10kVA",
      type: "Hybrid",
      warranty: "5 Years",
      image: inverterImage
    }
  ];

  const batteries = [
    {
      name: "Lithium 5.12kWh",
      capacity: "5.12kWh",
      type: "Lithium",
      warranty: "10 Years",
      image: batteryImage
    },
    {
      name: "Deep Cycle 200Ah",
      capacity: "200Ah",
      type: "Deep Cycle",
      warranty: "2 Years",
      image: batteryImage
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
              Our <span className="text-accent">Products</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Premium solar equipment for reliable, sustainable energy
            </p>
          </div>
        </div>
      </section>

      {/* Products Tabs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="panels" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="panels">Solar Panels</TabsTrigger>
              <TabsTrigger value="inverters">Inverters</TabsTrigger>
              <TabsTrigger value="batteries">Batteries</TabsTrigger>
            </TabsList>

            <TabsContent value="panels" className="animate-fade-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {solarPanels.map((product, index) => (
                  <Card key={index} className="overflow-hidden hover-scale">
                    <CardHeader className="p-0">
                      <div className="aspect-square overflow-hidden bg-secondary">
                        <img
                          src={product.image}
                          alt={`${product.name} solar panel`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="text-2xl mb-4">{product.name}</CardTitle>
                      <div className="space-y-2 text-muted-foreground">
                        <p><strong>Power:</strong> {product.power}</p>
                        <p><strong>Efficiency:</strong> {product.efficiency}</p>
                        <p><strong>Warranty:</strong> {product.warranty}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button variant="hero" className="w-full">Get Quote</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="inverters" className="animate-fade-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {inverters.map((product, index) => (
                  <Card key={index} className="overflow-hidden hover-scale">
                    <CardHeader className="p-0">
                      <div className="aspect-square overflow-hidden bg-secondary">
                        <img
                          src={product.image}
                          alt={`${product.name} inverter`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="text-2xl mb-4">{product.name}</CardTitle>
                      <div className="space-y-2 text-muted-foreground">
                        <p><strong>Capacity:</strong> {product.capacity}</p>
                        <p><strong>Type:</strong> {product.type}</p>
                        <p><strong>Warranty:</strong> {product.warranty}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button variant="hero" className="w-full">Get Quote</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="batteries" className="animate-fade-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {batteries.map((product, index) => (
                  <Card key={index} className="overflow-hidden hover-scale">
                    <CardHeader className="p-0">
                      <div className="aspect-square overflow-hidden bg-secondary">
                        <img
                          src={product.image}
                          alt={`${product.name} battery`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="text-2xl mb-4">{product.name}</CardTitle>
                      <div className="space-y-2 text-muted-foreground">
                        <p><strong>Capacity:</strong> {product.capacity}</p>
                        <p><strong>Type:</strong> {product.type}</p>
                        <p><strong>Warranty:</strong> {product.warranty}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button variant="hero" className="w-full">Get Quote</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
