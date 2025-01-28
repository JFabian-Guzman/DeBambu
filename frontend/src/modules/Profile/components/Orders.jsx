import React from "react";
import { Search, Copy, MessageCircle, ChevronRight } from "lucide-react";

const Orders = () => {
  return (
    <div className="h-full w-full bg-gray-50">
      <div className="h-full w-full mx-auto p-4 flex flex-col">

        <div className="flex items-center gap-6 overflow-x-auto pb-2 border-b border-gray-200 mb-4">
          <span className="text-red-500 border-b-2 border-red-500 pb-2 whitespace-nowrap min-w-fit">
            Ver todo
          </span>
          <span className="text-gray-600 whitespace-nowrap min-w-fit">
            A pagar (0)
          </span>
          <span className="text-gray-600 whitespace-nowrap min-w-fit">
            A enviar (0)
          </span>
          <span className="text-gray-600 whitespace-nowrap min-w-fit">
            Enviado (3)
          </span>
          <span className="text-gray-600 whitespace-nowrap min-w-fit">
            Procesado
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="N° de pedido, articulo"
              className="w-full h-10 border px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded text-black"
            />
            <button className="absolute right-0 top-0 h-full px-4 bg-orange-500 text-white rounded-r hover:bg-orange-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>

          <select className="h-10 border rounded px-4 py-2 bg-white text-gray-600 min-w-[200px] focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>Cualquier momento</option>
            <option>Últimos 3 meses</option>
            <option>Últimos 6 meses</option>
            <option>Último año</option>
          </select>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {[1, 2, 3, 4].map((order, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                <h3 className="font-medium text-black">Esperando entrega</h3>
                <div className="text-sm text-gray-600">
                  <div>Pedido efectuado el: 14 ene, 2025</div>
                  <div className="flex items-center gap-2">
                    <span>N° de pedido: 8196987604675426</span>
                    <button className="text-blue-500 hover:text-blue-600 transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors whitespace-nowrap">
                  Detalles del pedido
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <img
                  src="/api/placeholder/100/100"
                  alt="Product"
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm line-clamp-2">
                    New flower series building block toys rose/sunflower/tulip
                    Suitable for ...
                  </p>
                  <p className="text-gray-500 text-sm mt-1">Articulo</p>
                  <p className="text-gray-600 text-sm mt-1">Precio</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;