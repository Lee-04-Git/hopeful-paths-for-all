import { Heart, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8" />
              <span className="text-2xl font-bold">Hope Foundation</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Supporting homeless youth, prisoners, and individuals struggling with addiction 
              through comprehensive programs that restore dignity and create lasting change.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-smooth" />
              <Twitter className="h-6 w-6 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-smooth" />
              <Instagram className="h-6 w-6 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-smooth" />
              <Linkedin className="h-6 w-6 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-smooth" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">About Us</a></li>
              <li><a href="#programs" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Programs</a></li>
              <li><a href="#impact" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Impact</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Contact</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li><a href="#volunteer" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Volunteer</a></li>
              <li><a href="#donate" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Donate</a></li>
              <li><a href="#partner" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Partner With Us</a></li>
              <li><a href="#newsletter" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Newsletter</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Hope Foundation. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-smooth">
              Privacy Policy
            </a>
            <a href="#terms" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-smooth">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;