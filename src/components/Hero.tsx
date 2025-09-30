import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-community.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-subtle">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Community members working together and supporting each other"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
          Rebuilding Lives with 
          <span className="bg-gradient-warm bg-clip-text text-transparent"> Dignity & Hope</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-3xl mx-auto leading-relaxed">
          Supporting homeless youth, prisoners, and individuals struggling with addiction through 
          rehabilitation, therapy, and education programs.
        </p>
        
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          A world where every person has the chance to rebuild their life with dignity, education, and hope.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Get Involved Today
          </Button>
          <Button variant="warm" size="lg" className="text-lg px-8 py-6">
            Learn About Our Impact
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;