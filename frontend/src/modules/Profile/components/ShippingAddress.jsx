import React, { useState } from 'react';
import { User, MapPin } from 'lucide-react';

const ShippingAddress = () => {
  // ToDo: this info should be passed as props
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      isDefault: true,
      name: "Nombre, Número de teléfono",
      address: "Sucursal Correos de Costa Rica, Desamparados, San Jose, Costa Rica, 10301"
    },
    {
      id: 2,
      isDefault: false,
      name: "Otro Nombre, Otro Teléfono",
      address: "Otra dirección, San José, Costa Rica, 10401"
    },
    {
      id: 3,
      isDefault: false,
      name: "Nombre, Número de teléfono",
      address: "Otra dirección, San José, Costa Rica, 10401"
    }
  ]);

  return (
    <div className="max-w-3xl mx-auto p-6 ml-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Dirección de envío</h2>

      <button className="bg-red-500 text-white px-4 py-2 rounded-lg mb-6 hover:bg-red-600">
        Añadir nueva dirección
      </button>

      <div className="flex-1 overflow-y-auto max-h-[calc(100vh-200px)] pr-8">
        {addresses.map((address) => (
          <div
            key={address.id}
            className={`mt-3 border ${address.isDefault ? 'border-red-200 bg-red-50' : 'border-gray-200 bg-white'} rounded-lg p-4`}
          >
            {address.isDefault && (
              <div className="flex justify-between items-start mb-2">
                <span className="text-red-500 text-sm">Dirección predeterminada</span>
              </div>
            )}

            <div className="flex gap-2 mb-2">
              <User className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-black">{address.name}</span>
            </div>

            <div className="flex gap-2 mb-2">
              <MapPin className="w-5 h-5 text-gray-600" />
              <div className="flex flex-col">
                <span className="font-medium text-black">Sucursal Correos de Costa Rica</span>
                <span className="text-black">{address.address.split(',')[0]}</span>
                <span className="text-gray-600">{address.address}</span>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <button
                className="text-blue-500 hover:text-blue-600"
              >
                Editar
              </button>
              <button
                className="text-blue-500 hover:text-blue-600"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShippingAddress;
