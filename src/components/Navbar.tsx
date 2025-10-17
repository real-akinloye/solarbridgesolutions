import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-xl">F</span>
          </div>
          <span className="text-xl font-bold text-foreground">Felicity Solar</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-foreground hover:text-accent transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-accent transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="text-foreground hover:text-accent transition-colors"
          >
            Products
          </button>
          <a
            href="https://api.whatsapp.com/send/?text=Hi%20Felicity%20Solar,%20I%20need%20a%20free%20quote&phone=2348171479561"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="sm">
              Get a Quote
            </Button>
          </a>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-accent transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-accent transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-foreground hover:text-accent transition-colors text-left"
              >
                Products
              </button>
              <a
                href="https://api.whatsapp.com/send/?text=Hi%20Felicity%20Solar,%20I%20need%20a%20free%20quote&phone=2348171479561"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" className="w-full">
                  Get a Quote
                </Button>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};
