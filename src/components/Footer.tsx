import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-main.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Solar Bridge Solution Logo" 
                className="h-14 w-auto object-contain"
              />
              <span className="text-xl font-bold">Solar Bridge</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Leading provider of sustainable solar energy solutions in Nigeria since 2016.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover-scale"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover-scale"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover-scale"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-accent transition-all duration-300 hover:translate-x-2 inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-all duration-300 hover:translate-x-2 inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-primary-foreground/80 hover:text-accent transition-all duration-300 hover:translate-x-2 inline-block">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-all duration-300 hover:translate-x-2 inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 hover-scale">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">7, Jeminata Street, Alagba, Agege, Lagos State</span>
              </li>
              <li className="flex items-center gap-3 hover-scale">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a 
                  href="tel:+2348146249855" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  +234-814-624-9855
                </a>
              </li>
              <li className="flex items-center gap-3 hover-scale">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a 
                  href="mailto:info@solarbridgesolution.com" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  info@solarbridgesolution.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} Solar Bridge Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
