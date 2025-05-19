
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-helios-gold/20 shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gold-texture bg-cover rounded-full border-2 border-helios-gold"></div>
          <span className="text-2xl font-serif gold-gradient font-bold">Helios</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-helios-gold transition-colors">
            Home
          </Link>
          <Link to="/gallery" className="text-foreground hover:text-helios-gold transition-colors">
            Gallery
          </Link>
          <Link to="/contact" className="text-foreground hover:text-helios-gold transition-colors">
            Contact
          </Link>
          <Button asChild className="bg-helios-gold hover:bg-helios-gold-dark">
            <Link to="/signup">Sign Up</Link>
          </Button>
        </nav>
        
        <button 
          className="md:hidden flex items-center justify-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 px-4 border-t border-gray-100">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="px-2 py-1 text-foreground hover:text-helios-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/gallery" 
              className="px-2 py-1 text-foreground hover:text-helios-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              className="px-2 py-1 text-foreground hover:text-helios-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              asChild 
              className="bg-helios-gold hover:bg-helios-gold-dark w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/signup">Sign Up</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
