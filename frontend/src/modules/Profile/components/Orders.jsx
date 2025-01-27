import React from "react";
import { Search, Copy, MessageCircle, ChevronRight } from "lucide-react";

const Orders = () => {
  return (
    <div className="max-w-full h-full flex flex-col bg-gray-50 p-4">
      <div className="flex items-center gap-6 border-b border-gray-200 pb-2 mb-4">
        <span className="text-red-500 border-b-2 border-red-500 pb-2 whitespace-nowrap">Ver todo</span>
        {/* ToDo: this numbers should be passed as prop info */}
        <span className="text-gray-600 whitespace-nowrap">A pagar (0)</span>
        <span className="text-gray-600 whitespace-nowrap">A enviar (0)</span>
        <span className="text-gray-600 whitespace-nowrap">Enviado (3)</span>
        <span className="text-gray-600 whitespace-nowrap">Procesado</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="N° de pedido, articulo"
            className="w-full border px-4 py-2 focus:outline-none rounded"
          />
          <button className="absolute right-0 top-0 h-full px-4 bg-orange-500 text-white">
            <Search className="w-5 h-5" />
          </button>
        </div>

        <select className="border rounded px-10 py-2 bg-white text-gray-600">
          <option>Cualquier momento</option>
          <option>Últimos 3 meses</option>
          <option>Últimos 6 meses</option>
          <option>Último año</option>
        </select>
      </div>

      {/* Contenedor de los pedidos con scroll vertical */}
      <div className="flex-grow overflow-y-auto max-h-[80vh] space-y-6">
        {/* Mapeamos los pedidos */}
        {[1, 2, 3, 4].map((order, index) => (
          <div key={index} className="bg-white rounded-lg p-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
              <h3 className="font-medium text-black">Esperando entrega</h3>
              <div className="text-sm text-gray-600">
                <div>Pedido efectuado el: 14 ene, 2025</div>
                <div className="flex items-center gap-2">
                  N° de pedido: 8196987604675426
                  <button className="text-blue-500 bg-white">Copiar</button>
                </div>
              </div>
              <button className="flex items-center text-gray-600 whitespace-nowrap">
                Detalles del pedido
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
              <img
                src="/api/placeholder/100/100"
                alt="Product"
                className="w-24 h-24 object-cover"
              />
              <div className="flex-1">
                <p className="text-sm">
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
  );
};

export default Orders;
