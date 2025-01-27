import React from "react";
import {
  Heart,
  Users,
  Clock,
  Ticket,
  Wallet,
  ShoppingBag,
  Truck,
  Package,
  CheckSquare,
} from "lucide-react";

const General = () => {
  return (
    <div className="bg-white min-h-screen w-full p-4">
      <div className="p-4 border-b">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
            <img
              src=""
              alt="Profile picture"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-lg text-black font-semibold">User name</h2>
        </div>
      </div>

      <div className="p-4 mt-6">
        {/* Status Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-orange-500" />
            </div>
            <span className="text-sm mt-2 text-gray-700">Pendientes de pago</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Truck className="w-6 h-6 text-orange-500" />
            </div>
            <span className="text-sm mt-2 text-gray-700">Pendientes de envío</span>
          </div>

          <div className="flex flex-col items-center relative">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center relative">
              <Package className="w-6 h-6 text-orange-500" />
              <span className="absolute -top-0.5 -right-2.5 bg-red-500 text-white text-xs rounded-full w-6 h-5 flex items-center justify-center">
                3
              </span>
            </div>
            <span className="text-sm mt-2 text-gray-700">Enviados</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <CheckSquare className="w-6 h-6 text-orange-500" />
            </div>
            <span className="text-sm mt-2 text-gray-700">Pendientes de valoración</span>
          </div>
        </div>

        {/* Order Details Section */}
        <div className="mt-10 border rounded-lg p-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h4 className="font-medium text-black">Estado del pedido</h4>
            <button className="text-gray-500 text-sm flex items-center mt-2 md:mt-0">
              Detalles del pedido
              <svg
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src="/api/placeholder/80/80"
                alt="Product"
                className="w-20 h-20 object-cover"
              />
              <div>
                <p className="text-sm text-gray-600">Nombre del pedido</p>
                <p className="text-sm text-gray-500 mt-1">Precio1</p>
              </div>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <p className="font-medium mb-2">Total: US $3.32</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
