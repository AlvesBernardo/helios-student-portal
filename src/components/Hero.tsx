
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background with gold texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gold-texture opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
      </div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
              Welcome to <span className="gold-gradient">Helios</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Illuminating minds and fostering brilliance in our student community.
              Join us to be part of something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button 
                asChild
                size="lg" 
                className="bg-helios-gold hover:bg-helios-gold-dark text-white font-medium"
              >
                <Link to="/signup">Become a Member</Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="border-helios-gold text-helios-gold hover:bg-helios-gold/5"
              >
                <Link to="/gallery">Explore Gallery</Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="w-64 h-64 mx-auto aspect-square rounded-full bg-gold-texture bg-cover border-4 border-white shadow-xl"></div>
            <div className="absolute inset-0 gold-shimmer rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
