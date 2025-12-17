import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Mecánico trabajando en un auto"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Expertos en el cuidado <br />
          <span className="text-brand-accent">de tu vehículo</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Ofrecemos servicios de mantenimiento preventivo, correctivo y diagnósticos computarizados. Confianza y calidad garantizada en EH Mecánica Automotriz.
        </p>
        <div className="mt-10 max-w-sm sm:flex sm:max-w-none gap-4">
          <a
            href="#contact"
            className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-primary hover:bg-blue-600 md:py-4 md:text-lg md:px-10 transition-colors shadow-lg shadow-blue-900/50"
          >
            Agendar Cita
          </a>
          <a
            href="#ai-assistant"
            className="mt-3 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand-dark bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition-colors sm:mt-0"
          >
            Diagnóstico Virtual <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;