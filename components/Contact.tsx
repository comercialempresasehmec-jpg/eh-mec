import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div id="contact" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Section */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
              Contáctanos
            </h2>
            <p className="text-lg text-gray-500 mb-8">
              Estamos listos para atender tu vehículo. Visítanos o agenda una cita mediante el formulario.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-brand-primary" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p className="font-medium text-gray-900">Dirección</p>
                  <p className="mt-1">Bogotá, Colombia</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-brand-primary" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p className="font-medium text-gray-900">Teléfono</p>
                  <p className="mt-1">+57 3044200372</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-brand-primary" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="mt-1">comercialempresasehmec@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-brand-primary" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p className="font-medium text-gray-900">Horario</p>
                  <p className="mt-1">Lun - Vie: 8:00 AM - 6:00 PM</p>
                  <p>Sáb: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
            
             {/* Map Placeholder */}
             <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden relative">
                 <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Mapa Ubicación"
                    className="w-full h-full object-cover opacity-60"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white/80 px-4 py-2 rounded text-sm font-bold text-gray-700">Mapa de Ubicación</span>
                 </div>
             </div>

          </div>

          {/* Form Section */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-inner">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">¡Mensaje Enviado!</h3>
                <p className="text-gray-500 mt-2">Nos pondremos en contacto contigo pronto para confirmar tu cita.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-brand-primary font-medium hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Agendar Servicio</h3>
                </div>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                    <div className="mt-1">
                      <input type="text" name="name" id="name" required className="py-3 px-4 block w-full shadow-sm focus:ring-brand-primary focus:border-brand-primary border-gray-300 rounded-md border" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
                    <div className="mt-1">
                      <input type="tel" name="phone" id="phone" required className="py-3 px-4 block w-full shadow-sm focus:ring-brand-primary focus:border-brand-primary border-gray-300 rounded-md border" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">Fecha Preferida</label>
                    <div className="mt-1">
                      <input type="date" name="date" id="date" className="py-3 px-4 block w-full shadow-sm focus:ring-brand-primary focus:border-brand-primary border-gray-300 rounded-md border" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="model" className="block text-sm font-medium text-gray-700">Marca y Modelo del Auto</label>
                    <div className="mt-1">
                      <input type="text" name="model" id="model" placeholder="Ej: Nissan Versa 2018" required className="py-3 px-4 block w-full shadow-sm focus:ring-brand-primary focus:border-brand-primary border-gray-300 rounded-md border" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Detalles del Servicio</label>
                    <div className="mt-1">
                      <textarea id="message" name="message" rows={4} className="py-3 px-4 block w-full shadow-sm focus:ring-brand-primary focus:border-brand-primary border border-gray-300 rounded-md" placeholder="Describe el problema o el servicio que necesitas..."></textarea>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors">
                      Solicitar Cita
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;