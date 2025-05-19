
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-helios-gold/20 bg-white">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gold-texture bg-cover rounded-full border-2 border-helios-gold"></div>
              <span className="text-xl font-serif gold-gradient font-bold">Helios</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Helios Student Society - Illuminating minds and fostering brilliance in our community.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-helios-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-muted-foreground hover:text-helios-gold transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-helios-gold transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-sm text-muted-foreground hover:text-helios-gold transition-colors">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Connect With Us</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Follow us on social media to stay updated with our latest events and activities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-helios-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-helios-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-helios-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Helios Student Society. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
