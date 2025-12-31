import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
import logoPng from "@/assets/logo.png";

export const Navbar = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(true);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const isTop = window.scrollY <= 20;
        setVisible(isTop);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm transform transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="w-full mx-auto px-0 h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <img src={logoPng} alt="SolarBridge Solution" className="w-[180px] h-auto object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-8 fade-in-up">
          <Link to="/" className={`transition-all duration-300 hover:scale-110 ${location.pathname === "/" ? "text-accent" : "text-primary-foreground hover:text-accent"}`}>
            Home
          </Link>

          <Link to="/about" className={`transition-all duration-300 hover:scale-110 ${location.pathname === "/about" ? "text-accent" : "text-primary-foreground hover:text-accent"}`}>
            About
          </Link>

          <Link to="/projects-completed" className={`transition-all duration-300 hover:scale-110 ${location.pathname === "/projects-completed" ? "text-accent" : "text-primary-foreground hover:text-accent"}`}>
            Projects Completed
          </Link>

          <Link to="/products" className={`transition-all duration-300 hover:scale-110 ${location.pathname === "/products" ? "text-accent" : "text-primary-foreground hover:text-accent"}`}>
            Products
          </Link>

          <Link to="/services" className={`transition-all duration-300 hover:scale-110 ${location.pathname === "/services" ? "text-accent" : "text-primary-foreground hover:text-accent"}`}>
            Services
          </Link>

          <Link to="/find-installer" className={`transition-all duration-300 hover:scale-110 ${location.pathname === "/find-installer" ? "text-accent" : "text-primary-foreground hover:text-accent"}`}>
            Find Installer
          </Link>

          <Link to="/contact" className={`transition-all duration-300 hover:scale-110 ${location.pathname === "/contact" ? "text-accent" : "text-primary-foreground hover:text-accent"}`}>
            Contact
          </Link>

          <a href="https://api.whatsapp.com/send/?text=Hi%20Solar%20Bridge,%20I%20need%20a%20free%20quote&phone=2348146249855" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="sm" className="hover-scale glow rounded-lg">Get a Quote</Button>
          </a>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-primary-foreground">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              <a href="https://wa.me/2348146249855" target="_blank" rel="noopener noreferrer" className="slide-in-left">
                <Button variant="hero" className="w-full hover-scale glow rounded-lg mb-2">Get a Quote</Button>
              </a>

              <Link to="/" className="text-foreground hover:text-accent transition-all duration-300 text-left hover-scale slide-in-left">Home</Link>
              <Link to="/about" className="text-foreground hover:text-accent transition-all duration-300 text-left hover-scale slide-in-left anim-delay-100">About</Link>
              <Link to="/projects-completed" className="text-foreground hover:text-accent transition-all duration-300 text-left hover-scale slide-in-left anim-delay-200">Projects Completed</Link>
              <Link to="/products" className="text-foreground hover:text-accent transition-all duration-300 text-left hover-scale slide-in-left anim-delay-200">Products</Link>
              <Link to="/services" className="text-foreground hover:text-accent transition-all duration-300 text-left hover-scale slide-in-left anim-delay-300">Services</Link>
              <Link to="/find-installer" className="text-foreground hover:text-accent transition-all duration-300 text-left hover-scale slide-in-left anim-delay-400">Find Installer</Link>
              <Link to="/contact" className="text-foreground hover:text-accent transition-all duration-300 text-left hover-scale slide-in-left anim-delay-500">Contact</Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;
