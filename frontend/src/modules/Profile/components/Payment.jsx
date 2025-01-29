import React from 'react';
import { PlusCircle, Shield, Check } from 'lucide-react';

const Payment = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 ml-4">
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Tarjetas</h2>

        <div className="bg-gray-100 rounded-lg mb-5">
          <button className="flex items-center justify-center gap-2 w-full text-gray-600 hover:text-gray-800">
            <PlusCircle className="w-5 h-5" />
            <span>Añadir tarjeta</span>
          </button>
        </div>

        <p className="text-gray-500 mt-4 text-sm">
          Aún no has guardado ninguna tarjeta.
        </p>
      </div>

      <div className="border-t pt-6">
        <div className="flex items-start gap-3 mb-4">
          <Shield className="w-5 h-5 text-gray-800 flex-shrink-0 mt-1" />
          <h3 className="text-lg font-semibold text-gray-800">
            DeBambú protege tu información de pago
          </h3>
        </div>

        <div className="space-y-3 mb-8">
          <div className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
            <p className="text-gray-600 text-sm">
              Seguimos el estándar de seguridad de datos de la industria de tarjetas de pago (PCI DSS) al entregar los datos de la tarjeta
            </p>
          </div>

          <div className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
            <p className="text-gray-600 text-sm">
              Toda la información permanece segura y sin compromisos
            </p>
          </div>

          <div className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
            <p className="text-gray-600 text-sm">
              Todos los datos están encriptados
            </p>
          </div>

          <div className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
            <p className="text-gray-600 text-sm">
              Los datos de su tarjeta nunca se manipularán indebidamente ni se venderán
            </p>
          </div>
        </div>

        {/* ToDo: change icons */}
        <div className="flex gap-6 items-center">
          {/* Visa */}
          <div className="h-8 flex items-center px-2 border rounded bg-white">
            <svg viewBox="0 0 48 16" className="h-4 w-12">
              <path fill="#1434CB" d="M17.014 3.567h-3.28L10.44 12.39l-.383-1.927-.455-2.35c-.152-.789-.714-1.014-1.384-1.04H3.417l-.062.296c1.61.35 3.006.915 3.891 1.514l3.303 9.059h3.536l6.13-14.376h-3.15z" />
            </svg>
          </div>

          {/* Mastercard */}
          <div className="h-8 flex items-center px-2 border rounded bg-white">
            <svg viewBox="0 0 36 24" className="h-6 w-8">
              <path fill="#FF5F00" d="M21.2 4H14.8v16h6.4V4z" />
              <path fill="#EB001B" d="M15.2 12c0-3.3 1.5-6.2 3.9-8.1-1.7-1.4-3.9-2.2-6.3-2.2C7.3 1.7 3 6 3 11.3c0 5.3 4.3 9.6 9.6 9.6 2.4 0 4.6-.8 6.3-2.2-2.2-1.9-3.7-4.8-3.7-8.1" />
              <path fill="#F79E1B" d="M33 11.3c0 5.3-4.3 9.6-9.6 9.6-2.4 0-4.6-.8-6.3-2.2 2.4-1.9 3.9-4.8 3.9-8.1s-1.5-6.2-3.9-8.1c1.7-1.4 3.9-2.2 6.3-2.2 5.3 0 9.6 4.3 9.6 9.6" />
            </svg>
          </div>

          {/* American Express */}
          <div className="h-8 flex items-center px-2 border rounded bg-white">
            <svg viewBox="0 0 36 24" className="h-6 w-8">
              <path fill="#2E77BC" d="M33 16.9V15h-2.9l-1.2-1.4L27.6 15H19v-1.3h8.2v-1.2H19v-1.3h8.8V10H19V8.7h8.8V7.5H19V6.2h8.8V5h-9.9v8.4c0 .7-.3 1.3-.8 1.8-.5.5-1.1.7-1.9.7h-2.4V5h-4l-2.8 6.3L3.2 5H0v12h2.9v-8.4L5.7 15h2.2l2.8-6.4V17H21c1.3 0 2.4-.4 3.3-1.2.6-.6 1-1.2 1.2-1.9l1.5 1.7h3.1l-2-2.3 2-2.2h-3l-1.5 1.7v-3.5h4.9v8.4l2.8-6.4 2.8 6.4h2.9z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;