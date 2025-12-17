import React from 'react';
import { Car, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Car className="h-8 w-8 text-brand-accent" />
              <span className="font-bold text-xl tracking-tight">EH Mecánica</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm">
              Tu taller de confianza. Ofrecemos soluciones integrales para el mantenimiento y reparación de tu automóvil con tecnología de punta y personal calificado.
            </p>
          </div>
          
          <div className="col-span-1 md:text-right">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Síguenos</h3>
            <div className="flex space-x-6 md:justify-end">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-8">
               <p className="text-xs text-gray-500">
                  &copy; {new Date().getFullYear()} EH Mecánica Automotriz. Todos los derechos reservados.
               </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;