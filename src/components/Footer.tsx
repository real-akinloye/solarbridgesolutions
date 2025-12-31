import { Facebook, Instagram, Mail, Phone, MapPin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logoPng from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 relative">
      {/* Logo: use same plain image as navbar and place it at the top of the footer content */}
      <div className="container mx-auto px-4 md:px-6">
        <Link to="/" className="flex items-center group mb-6">
          <img src={logoPng} alt="Solar Bridge Solutions" className="w-[200px] md:w-[220px] h-auto object-contain" />
        </Link>
      </div>
      <div className="container mx-auto px-4 md:px-6 pt-0">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="fade-in-up flex flex-col items-start gap-4">
            <p className="text-primary-foreground/80 mb-4">
              Leading provider of sustainable solar energy solutions in Nigeria.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/SolarBridgeSolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover-scale"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/SolarBridgeSolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover-scale"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/solarbrigde"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover-scale"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            
          </div>

          <div className="fade-in-up anim-delay-200">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-all duration-300 hover:translate-x-2 inline-block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-all duration-300 hover:translate-x-2 inline-block">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/projects-completed" className="text-primary-foreground/80 hover:text-accent transition-all duration-300 hover:translate-x-2 inline-block">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-primary-foreground/80 hover:text-accent transition-all duration-300 hover:translate-x-2 inline-block">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-all duration-300 hover:translate-x-2 inline-block">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/find-installer" className="text-primary-foreground/80 hover:text-accent transition-all duration-300 hover:translate-x-2 inline-block">
                    Find Installer
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-all duration-300 hover:translate-x-2 inline-block">
                    Contact
                  </Link>
                </li>
              </ul>
          </div>

          <div className="fade-in-up anim-delay-400">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 hover-scale">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">7, Jeminata Street, Alagba Estate, Lagos State</span>
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
                  href="mailto:support@solarbridgesolution.com" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                support@solarbridgesolution.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} Solar Bridge Solutions.
          </p>
          <p className="text-primary-foreground/60">
            All rights reserved and developed by{' '}
            <a
              href="https://x.com/SNR_AKINLOYE"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:underline"
            >
              Nuel
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
