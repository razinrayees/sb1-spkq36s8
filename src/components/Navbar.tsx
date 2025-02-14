import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    if (path.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.getElementById(path.slice(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        scrollToSection(path.slice(1));
      }
    }
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className="fixed w-full bg-[#004f74]/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="transform transition-transform duration-300 group-hover:scale-110">
              <Logo />
            </div>
            <span className="text-white text-xl font-bold">Linked-ഇൻ</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/about"
              className="text-white/80 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link 
              to="/community"
              className="text-white/80 hover:text-white transition-colors"
            >
              Community
            </Link>
            <Link 
              to="/events"
              className="text-white/80 hover:text-white transition-colors"
            >
              Events
            </Link>
            <Link 
              to="/workshop"
              className="text-white/80 hover:text-white transition-colors"
            >
              Workshops
            </Link>
            <button 
              onClick={() => handleNavClick('#contact')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#004f74]/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/about"
              className="block w-full text-left px-3 py-2 text-white/80 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/community"
              className="block w-full text-left px-3 py-2 text-white/80 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Community
            </Link>
            <Link 
              to="/events"
              className="block w-full text-left px-3 py-2 text-white/80 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <Link 
              to="/workshop"
              className="block w-full text-left px-3 py-2 text-white/80 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Workshops
            </Link>
            <button 
              onClick={() => handleNavClick('#contact')}
              className="block w-full text-left px-3 py-2 text-white/80 hover:text-white"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;