import React from 'react';
import { Wrench, Activity, Zap, Droplets, Thermometer, Cog } from 'lucide-react';
import { ServiceItem } from '../types';

const servicesList: ServiceItem[] = [
  {
    id: '1',
    title: 'Afinación Mayor',
    description: 'Cambio de bujías, filtros de aire y gasolina, limpieza de inyectores y cuerpo de aceleración.',
    icon: 'activity',
  },
  {
    id: '2',
    title: 'Servicio de sincronización multimarca',
    description: 'Ajuste experto de distribución, bandas de tiempo y puesta a punto para motores de todas las marcas.',
    icon: 'cog',
  },
  {
    id: '3',
    title: 'Diagnóstico por Escáner',
    description: 'Detección precisa de fallas electrónicas con equipo de última generación.',
    icon: 'zap',
  },
  {
    id: '4',
    title: 'Servicio de sistema de gasolina, diésel y gas',
    description: 'Diagnóstico, limpieza y reparación de inyectores, bombas de combustible y sistemas de alimentación.',
    icon: 'droplets',
  },
  {
    id: '5',
    title: 'Sistema de Enfriamiento',
    description: 'Revisión de radiadores, bombas de agua, termostatos y cambio de anticongelante.',
    icon: 'thermometer',
  },
  {
    id: '6',
    title: 'Mecánica General',
    description: 'Reparación de motor, cajas de velocidades y ajustes complejos.',
    icon: 'wrench',
  },
];

const IconMap: Record<string, React.FC<any>> = {
  activity: Activity,
  zap: Zap,
  droplets: Droplets,
  thermometer: Thermometer,
  wrench: Wrench,
  cog: Cog,
};

const Services: React.FC = () => {
  return (
    <div id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-brand-primary font-semibold tracking-wide uppercase">Nuestros Servicios</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Soluciones completas para tu auto
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Utilizamos repuestos de alta calidad y contamos con personal calificado para garantizar el mejor rendimiento.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {servicesList.map((service) => {
              const Icon = IconMap[service.icon];
              return (
                <div key={service.id} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full hover:shadow-xl transition-shadow border border-gray-100">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center p-3 bg-brand-primary rounded-md shadow-lg">
                        {Icon && <Icon className="h-6 w-6 text-white" aria-hidden="true" />}
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{service.title}</h3>
                      <p className="mt-5 text-base text-gray-500">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;