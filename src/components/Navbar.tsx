import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-transparent.png";

export const Navbar = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <img 
            src={logo} 
            alt="Solar Bridge Solution Logo" 
            className="h-16 md:h-20 lg:h-24 w-auto object-contain float hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 fade-in-up">
          <Link
            to="/"
            className={`transition-all duration-300 hover:scale-110 ${
              location.pathname === "/" ? "text-accent" : "text-primary-foreground hover:text-accent"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`transition-all duration-300 hover:scale-110 ${
              location.pathname === "/about" ? "text-accent" : "text-primary-foreground hover:text-accent"
            }`}
          >
            About
          </Link>
          <Link
            to="/products"
            className={`transition-all duration-300 hover:scale-110 ${
              location.pathname === "/products" ? "text-accent" : "text-primary-foreground hover:text-accent"
            }`}
          >
            Products
          </Link>
          <Link
            to="/services"
            className={`transition-all duration-300 hover:scale-110 ${
              location.pathname === "/services" ? "text-accent" : "text-primary-foreground hover:text-accent"
            }`}
          >
            Services
          </Link>
          <Link
            to="/find-installer"
            className={`transition-all duration-300 hover:scale-110 ${
              location.pathname === "/find-installer" ? "text-accent" : "text-primary-foreground hover:text-accent"
            }`}
          >
            Find Installer
          </Link>
          <Link
            to="/contact"
            className={`transition-all duration-300 hover:scale-110 ${
              location.pathname === "/contact" ? "text-accent" : "text-primary-foreground hover:text-accent"
            }`}
          >
            Contact
          </Link>
          <a
            href="https://api.whatsapp.com/send/?text=Hi%20Solar%20Bridge,%20I%20need%20a%20free%20quote&phone=2348171479561"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="sm" className="hover-scale glow">
              Get a Quote
            </Button>
          </a>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-primary-foreground">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              <Link to="/" className="text-foreground hover:text-accent transition-all duration-300 text-left hover-scale slide-in-left">
                Home
              </Link>
              <Link to="/about" className="text-foreground hover:text-accent transition-all duration-300 text-left hover-scale slide-in-left" style={{ animationDelay: '0.1s' }}>
                About
              </Link>
              <Link to="/products" className="text-foreground hover:text-accent transition-all duration-300 text-left hover-scale slide-in-left" style={{ animationDelay: '0.2s' }}>
                Products
              </Link>
              <Link to="/services" className="text-foreground hover:text-accent transition-all duration-300 text-left hover-scale slide-in-left" style={{ animationDelay: '0.3s' }}>
                Services
              </Link>
              <Link to="/find-installer" className="text-foreground hover:text-accent transition-all duration-300 text-left hover-scale slide-in-left" style={{ animationDelay: '0.4s' }}>
                Find Installer
              </Link>
              <Link to="/contact" className="text-foreground hover:text-accent transition-all duration-300 text-left hover-scale slide-in-left" style={{ animationDelay: '0.5s' }}>
                Contact
              </Link>
              <a
                href="https://api.whatsapp.com/send/?text=Hi%20Solar%20Bridge,%20I%20need%20a%20free%20quote&phone=2348171479561"
                target="_blank"
                rel="noopener noreferrer"
                className="slide-in-left"
                style={{ animationDelay: '0.6s' }}
              >
                <Button variant="hero" className="w-full hover-scale glow">
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