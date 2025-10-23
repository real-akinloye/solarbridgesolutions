import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import LogoSvg from "@/components/LogoSvg";
import Logo from "@/components/Logo";
import xIcon from "@/assets/x.svg";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 relative">
      <div className="container mx-auto px-4 pt-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="fade-in-up flex flex-col items-start gap-4">
            <div>
              <LogoSvg className="w-[220px] h-[100px]" />
            </div>
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
                href="https://x.com/solarbrigde"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover-scale"
                aria-label="X"
              >
                <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" role="img" aria-label="X logo">
                  <rect x="4" y="11" width="16" height="2" rx="1" transform="rotate(45 12 12)" fill="currentColor" />
                  <rect x="4" y="11" width="16" height="2" rx="1" transform="rotate(-45 12 12)" fill="currentColor" />
                </svg>
              </a>
            </div>
            
          </div>

          <div className="fade-in-up anim-delay-200">
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

          <div className="fade-in-up anim-delay-400">
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
