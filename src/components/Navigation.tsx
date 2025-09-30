import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">Hope Foundation</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">About Us</a>
            <a href="#programs" className="text-foreground hover:text-primary transition-smooth">Programs</a>
            <a href="#impact" className="text-foreground hover:text-primary transition-smooth">Impact</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">Contact</a>
          </div>
          
          <Button variant="cta" className="hidden md:inline-flex">
            Donate Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;