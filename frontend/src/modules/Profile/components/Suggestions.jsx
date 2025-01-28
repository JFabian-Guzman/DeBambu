import React, { useState } from "react";
import SuggestionModal from "./SuggestionsModal";

const SuggestionsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white mt-5">
      <p className="text-sm text-gray-800 mb-8 bg-gray-100 p-4 rounded-lg">
        Esta página es para recoger tus sugerencias para que siempre podamos mejorar DeBambú.
        Para recibir ayuda con cualquier problema reciente o actual relacionado con tu pedido, envío,
        proceso de reembolso, etc... Dirígete a{" "}
        <a
          href="#"
          className="text-blue-600 hover:text-blue-700 underline"
        >
          Centro de Ayuda
        </a>
        .
      </p>

      <div className="mb-8">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
          ¿Tienes sugerencias para nosotros?
        </h2>
        <p className="text-sm sm:text-base text-gray-700 mb-4">
          Envía aquí tus sugerencias o comentarios. Las leemos todas para poder mejorar constantemente nuestros servicios.
        </p>
        <button
          onClick={handleModalOpen}
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 sm:py-3 sm:px-6 rounded-full text-sm"
        >
          Enviar sugerencias
        </button>
      </div>

      <div>
        <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-4">
          Lista de sugerencias
        </h3>
        <p className="text-sm text-gray-600 italic">
          Aún no has enviado ninguna sugerencia. Nos gustaría conocerlas.
        </p>
      </div>

      {isModalOpen && <SuggestionModal onClose={handleModalClose} />}
    </div>
  );
};

export default SuggestionsPage;
