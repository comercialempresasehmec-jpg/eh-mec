import React from 'react';
import { Car, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-brand-dark text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Car className="h-8 w-8 text-brand-accent" />
              <span className="font-bold text-xl tracking-tight">EH Mecánica</span>
            </div>
          </div>
          
          {/* Desktop & Mobile CTA Button */}
          <div>
            <a 
              href="#contact"
              className="bg-brand-primary hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors"
            >
              <Phone size={16} /> 
              <span className="hidden sm:inline">Agendar Cita</span>
              <span className="sm:hidden">Agendar</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;